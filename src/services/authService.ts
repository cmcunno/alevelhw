/**
 * Teacher Portal Authentication Service
 * Uses Web Crypto API (SHA-256) to verify the department passcode without
 * storing cleartext passwords in the client bundle.
 */

// SHA-256 hash of the department passcode "pyrexpyrex"
export const TEACHER_PASSCODE_HASH = 'dbf1f8031e08cf6164cb5b88d337fadb632f0528e19f529cffd61bee216e03f5';

const AUTH_STORAGE_KEY = 'aqa_biology_teacher_auth_session';

/**
 * Computes the SHA-256 hex digest of a string using the native Web Crypto API
 */
export async function hashPasscode(input: string): Promise<string> {
  const normalized = input.trim().toLowerCase();
  const encoder = new TextEncoder();
  const data = encoder.encode(normalized);
  
  if (window.crypto && window.crypto.subtle) {
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  
  // Basic fallback if crypto.subtle is unavailable in legacy test environments
  return normalized;
}

/**
 * Validates the entered passcode against the cryptographic hash
 */
export async function verifyPasscode(input: string): Promise<boolean> {
  if (!input) return false;
  try {
    const computedHash = await hashPasscode(input);
    return computedHash === TEACHER_PASSCODE_HASH;
  } catch (err) {
    console.error('Error verifying teacher passcode:', err);
    return false;
  }
}

/**
 * Checks if the current browser session has active teacher authorization
 */
export function isTeacherAuthenticated(): boolean {
  try {
    // 1. Check persistent localStorage
    const localAuth = localStorage.getItem(AUTH_STORAGE_KEY);
    if (localAuth) {
      const parsed = JSON.parse(localAuth);
      if (parsed?.hash === TEACHER_PASSCODE_HASH) {
        return true;
      }
    }

    // 2. Check tab-only sessionStorage
    const sessionAuth = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (sessionAuth) {
      const parsed = JSON.parse(sessionAuth);
      if (parsed?.hash === TEACHER_PASSCODE_HASH) {
        return true;
      }
    }
  } catch (e) {
    // In case storage is disabled or corrupted
  }

  return false;
}

/**
 * Stores authorization status in browser storage
 */
export function setTeacherAuthenticated(rememberOnDevice: boolean): void {
  const payload = JSON.stringify({
    authenticated: true,
    hash: TEACHER_PASSCODE_HASH,
    timestamp: Date.now(),
  });

  try {
    sessionStorage.setItem(AUTH_STORAGE_KEY, payload);
    if (rememberOnDevice) {
      localStorage.setItem(AUTH_STORAGE_KEY, payload);
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  } catch (e) {
    console.warn('Storage unavailable:', e);
  }
}

/**
 * Logs out and clears all stored teacher authorization
 */
export function clearTeacherAuthentication(): void {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (e) {
    console.warn('Error clearing teacher storage:', e);
  }
}

/**
 * Checks URL query parameters for direct bookmark authentication (e.g. ?auth=pyrexpyrex)
 * If found and valid, grants authorization and cleans the URL to prevent credential leaking.
 */
export async function checkUrlAuthParam(): Promise<boolean> {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const candidate = urlParams.get('auth') || urlParams.get('key') || urlParams.get('passcode');
    if (candidate) {
      const isValid = await verifyPasscode(candidate);
      if (isValid) {
        setTeacherAuthenticated(true);
        // Clean URL parameter without reloading page
        urlParams.delete('auth');
        urlParams.delete('key');
        urlParams.delete('passcode');
        const newSearch = urlParams.toString();
        const newUrl = window.location.pathname + (newSearch ? `?${newSearch}` : '') + window.location.hash;
        window.history.replaceState({}, '', newUrl);
        return true;
      }
    }
  } catch (e) {
    // Ignore URL parsing errors
  }
  return false;
}
