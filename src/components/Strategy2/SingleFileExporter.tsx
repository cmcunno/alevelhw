import React, { useState } from 'react';
import {
  Download,
  Copy,
  Check,
  Code2,
  ExternalLink,
  Sparkles,
  Cpu,
  FileCode
} from 'lucide-react';
import { InteractiveRevisionModule } from '../../types';

interface SingleFileExporterProps {
  currentModule: InteractiveRevisionModule;
}

export const SingleFileExporter: React.FC<SingleFileExporterProps> = ({ currentModule }) => {
  const [copied, setCopied] = useState<boolean>(false);

  // Generates a clean, standalone, zero-dependency HTML file
  const generateStandaloneHtml = (): string => {
    const serializedData = JSON.stringify(currentModule);

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${currentModule.title} - Self-Marking Revision App</title>
  <style>
    :root {
      --bg: #0b0f19;
      --card: #131b2e;
      --card-border: #1e293b;
      --accent: #0d9488;
      --accent-light: #2dd4bf;
      --text: #f1f5f9;
      --text-muted: #94a3b8;
      --success: #10b981;
      --success-bg: rgba(16, 185, 129, 0.15);
      --error: #f43f5e;
      --error-bg: rgba(244, 63, 94, 0.15);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    body { background: var(--bg); color: var(--text); padding: 24px; min-height: 100vh; display: flex; flex-direction: column; align-items: center; }
    .container { max-width: 900px; width: 100%; margin: 0 auto; }
    header { background: var(--card); border: 1px solid var(--card-border); border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
    .badge { display: inline-block; padding: 4px 10px; background: rgba(13, 148, 136, 0.2); color: var(--accent-light); border-radius: 999px; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; }
    h1 { font-size: 22px; font-weight: 800; color: #fff; margin-bottom: 8px; }
    p.inst { font-size: 14px; color: var(--text-muted); line-height: 1.5; }
    .score-box { float: right; background: #060911; border: 1px solid var(--card-border); padding: 8px 16px; border-radius: 12px; font-family: monospace; font-size: 16px; color: var(--accent-light); font-weight: bold; }
    .app-card { background: var(--card); border: 1px solid var(--card-border); border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }
    .diag-hint { background: var(--error-bg); border-left: 4px solid var(--error); padding: 12px 16px; border-radius: 8px; margin-top: 14px; font-size: 13px; color: #fda4af; }
    .success-hint { background: var(--success-bg); border-left: 4px solid var(--success); padding: 12px 16px; border-radius: 8px; margin-top: 14px; font-size: 13px; color: #6ee7b7; }
    button.btn { background: var(--accent); color: white; border: none; padding: 10px 18px; border-radius: 10px; font-weight: 600; cursor: pointer; transition: 0.2s; font-size: 13px; }
    button.btn:hover { background: #0f766e; }
    button.btn-sec { background: #1e293b; color: #cbd5e1; border: none; padding: 8px 14px; border-radius: 8px; font-size: 12px; cursor: pointer; }
    button.btn-sec:hover { background: #334155; }
    /* Sorting styles */
    .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 16px; }
    .col-box { background: #0b1120; border: 2px dashed #1e293b; border-radius: 12px; padding: 16px; min-height: 260px; }
    .col-box h3 { font-size: 15px; margin-bottom: 12px; color: #e2e8f0; }
    .item-card { background: #1a243a; border: 1px solid #334155; border-radius: 10px; padding: 12px; margin-bottom: 10px; font-size: 13px; line-height: 1.4; transition: 0.2s; }
    .item-card.correct { border-color: var(--success); background: rgba(16,185,129,0.1); }
    .item-card.wrong { border-color: var(--error); background: rgba(244,63,94,0.1); }
    .footer-note { text-align: center; font-size: 12px; color: #64748b; margin-top: 24px; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="score-box" id="score-display">Score: 0 / ?</div>
      <span class="badge">${currentModule.examBoard} Interactive Self-Marking Module</span>
      <h1>${currentModule.title}</h1>
      <p class="inst">${currentModule.instructions}</p>
    </header>

    <div class="app-card" id="app-root">
      <!-- Interactive Engine Rendered Here by Client JavaScript -->
      <div style="text-align: center; padding: 40px; color: #94a3b8;">Loading standalone revision module...</div>
    </div>

    <div class="footer-note">
      Single-File Offline Revision App • No login required • Diagnostic Feedback Loop Engine
    </div>
  </div>

  <script>
    const moduleData = ${serializedData};

    function renderModule() {
      const root = document.getElementById('app-root');
      if (moduleData.type === 'categorization') {
        renderCategorization(root);
      } else if (moduleData.type === 'diagram') {
        renderDiagram(root);
      } else if (moduleData.type === 'keyword_matcher') {
        renderKeywordMatcher(root);
      }
    }

    // Client-side categorization engine
    function renderCategorization(root) {
      let state = {};
      
      function update() {
        let correct = 0;
        moduleData.items.forEach(it => {
          if (state[it.id] === it.correctCategory) correct++;
        });
        document.getElementById('score-display').innerText = 'Score: ' + correct + ' / ' + moduleData.items.length;

        let html = '<div class="cols">';
        moduleData.categories.forEach(cat => {
          html += '<div class="col-box"><h3>' + cat + '</h3>';
          const inCat = moduleData.items.filter(it => state[it.id] === cat);
          inCat.forEach(it => {
            const isOk = it.correctCategory === cat;
            html += '<div class="item-card ' + (isOk ? 'correct' : 'wrong') + '">';
            html += '<div>' + it.text + '</div>';
            if (!isOk) {
              html += '<div class="diag-hint"><strong>Diagnostic Hint:</strong> ' + it.diagnosticHint + '</div>';
            }
            html += '</div>';
          });
          html += '</div>';
        });
        html += '</div>';

        // Unassigned bank
        const unassigned = moduleData.items.filter(it => !state[it.id]);
        if (unassigned.length > 0) {
          html += '<div style="margin-top:24px;"><h4>Unassigned Statements (' + unassigned.length + ' remaining):</h4><div style="display:grid; gap:10px; margin-top:10px;">';
          unassigned.forEach(it => {
            html += '<div class="item-card">' + it.text + '<div style="margin-top:8px; display:flex; gap:8px;">';
            moduleData.categories.forEach(cat => {
              html += '<button class="btn-sec" onclick="assignItem(\\'' + it.id + '\\', \\'' + cat + '\\')">→ ' + cat + '</button>';
            });
            html += '</div></div>';
          });
          html += '</div></div>';
        }
        root.innerHTML = html;
      }

      window.assignItem = function(id, cat) {
        state[id] = cat;
        update();
      };

      update();
    }

    function renderDiagram(root) {
      root.innerHTML = '<div style="padding:20px; line-height:1.6;"><h3>Interactive Diagram</h3><p>Open this module in your browser to test nodes with instant diagnostic guidance.</p></div>';
    }

    function renderKeywordMatcher(root) {
      root.innerHTML = '<div style="padding:20px; line-height:1.6;"><h3>Precision Keyword Matcher</h3><p>Review keywords and test precision exam terminology.</p></div>';
    }

    window.onload = renderModule;
  </script>
</body>
</html>`;
  };

  const handleDownload = () => {
    const html = generateStandaloneHtml();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentModule.id}-revision-app.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = () => {
    const html = generateStandaloneHtml();
    navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-teal-500/20 text-teal-400">
              <FileCode className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-white text-base">
              Single-File Web App Generator (.html)
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Export a lightweight, zero-dependency interactive HTML file. Students double-click to open in any web browser with <strong>no login needed</strong>.
          </p>
        </div>

        <div className="flex items-center space-x-2.5">
          <button
            onClick={handleCopyCode}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center transition"
            title="Copy standalone HTML code to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-1.5 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-1.5" />
                <span>Copy HTML</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center transition shadow-lg shadow-teal-600/20"
            title="Download standalone HTML file to your computer"
          >
            <Download className="w-4 h-4 mr-1.5" />
            <span>Download .html App</span>
          </button>
        </div>
      </div>
    </div>
  );
};
