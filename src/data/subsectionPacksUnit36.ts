import { FlawedQuestion } from '../types';

export const SUBSECTION_PACKS_UNIT_36: FlawedQuestion[] = [
  // 3.6.1 Survival and Response (Pacinian & Phototropism)
  {
    id: 'pack-3-6-1',
    title: '3.6.1 Stimuli & Receptors: The Pacinian Corpuscle and Generator Potentials',
    examBoard: 'AQA',
    specCode: '3.6.1',
    aqaUnit: '3.6',
    subject: 'AQA A-Level Biology (7402)',
    topic: '3.6.1 Stimuli and Receptors (Pacinian & Rods/Cones)',
    aoLevel: 'AO1 (3 marks) / AO2 (1 mark)',
    totalMarks: 4,
    questionText:
      'Explain how mechanical pressure applied to a Pacinian corpuscle in the skin produces a generator potential and leads to an action potential in a sensory neurone. (4 marks)',
    contextNote:
      'AQA Chief Examiner focus: Lamellae deform under pressure, stretch-mediated sodium ion channels deform and widen, Na+ ions diffuse into axon producing depolarisation / generator potential, exceeding threshold triggers action potential.',
    flawedAnswer:
      'Pressure pushes the capsule which crushes the sensory neurone. This causes sodium-potassium pumps to pump sodium into the nerve cell by active transport. When sodium gets inside, an electric shock passes down the myelin sheath to the brain.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'In the resting state, stretch-mediated sodium ion channels in the sensory neurone membrane are too narrow to allow sodium ions (Na+) through (resting potential maintained).',
        indicativePhrases: ['stretch-mediated sodium channels', 'narrow in resting state', 'channels closed at rest'],
        rejectOrErrors: 'Reject: sodium-potassium pump causes the stimulus response.',
      },
      {
        markCode: 'M2',
        criteria:
          'Application of mechanical pressure deforms the concentric rings of lamellae and stretches / deforms the sensory neurone membrane.',
        indicativePhrases: ['pressure deforms lamellae', 'stretches sensory neurone membrane'],
        rejectOrErrors: 'Reject: crushing the nerve.',
      },
      {
        markCode: 'M3',
        criteria:
          'This causes stretch-mediated sodium ion channels to widen / open, allowing Na+ ions to rapidly diffuse into the axon down their electrochemical gradient.',
        indicativePhrases: ['stretch-mediated channels widen / open', 'Na+ diffuses into axon', 'down electrochemical gradient'],
        rejectOrErrors: 'Reject: sodium pumped actively in response to pressure.',
      },
      {
        markCode: 'M4',
        criteria:
          'The influx of Na+ depolarises the membrane, establishing a generator potential; if this exceeds the threshold level, an all-or-nothing action potential is initiated.',
        indicativePhrases: ['depolarisation produces generator potential', 'exceeds threshold level', 'triggers action potential'],
        rejectOrErrors: 'Reject: electric shock travelling down myelin.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'causes sodium-potassium pumps to pump sodium into the nerve cell by active transport',
        issueType: 'misconception',
        explanation:
          'Na+ enters passively by facilitated diffusion through stretch-mediated sodium ion channels, not active transport by pumps.',
        markLost: 1,
        suggestedCorrection:
          'Stretch-mediated Na+ channels widen and Na+ ions rapidly diffuse into the axon down their concentration gradient.',
      },
      {
        phrase: 'electric shock passes down the myelin sheath',
        issueType: 'misconception',
        explanation:
          'Nerve impulses are self-propagating action potentials (waves of depolarisation jumping between Nodes of Ranvier via saltatory conduction), not electric shocks conducting through myelin insulation.',
        markLost: 1,
        suggestedCorrection:
          'If the generator potential reaches threshold, an action potential is triggered along the sensory neurone.',
      },
      {
        phrase: 'pushes the capsule which crushes the sensory neurone',
        issueType: 'poor_alignment',
        explanation:
          'Fails to use precise physiological terminology: pressure deforms the concentric lamellae and stretches the neurone membrane.',
        markLost: 1,
        suggestedCorrection:
          'Pressure deforms the connective tissue lamellae and stretches the sensory axon membrane.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4 marks. Stated sodium is actively pumped into the cell during stimulation and described impulses as electric shocks passing through myelin.',
    },
    exemplarRewrite:
      'In the resting state, stretch-mediated sodium ion channels in the sensory axon membrane are too narrow to permit sodium ion transit. When mechanical pressure is applied, it deforms the concentric connective tissue lamellae and stretches the membrane of the sensory neurone ending. This stretching causes the stretch-mediated sodium ion channels to widen and open. Sodium ions (Na+) rapidly diffuse down their electrochemical gradient into the axon, causing depolarisation of the membrane. This produces a generator potential. If the generator potential reaches the threshold value, voltage-gated sodium channels open and an all-or-nothing action potential is triggered along the sensory neurone.',
    keyTerms: [
      'Stretch-mediated sodium ion channels',
      'Deformation of lamellae',
      'Membrane stretching',
      'Na+ influx by facilitated diffusion',
      'Depolarisation',
      'Generator potential',
      'Threshold level',
      'Action potential',
    ],
    teacherNotes:
      'Must ensure students explicitly name "stretch-mediated sodium ion channels". Simply saying "sodium channels" will lose M1/M3 in AQA mark schemes.',
    recommendedColdCall:
      'What happens to the generator potential and action potential frequency if the pressure applied to the Pacinian corpuscle is doubled?',
  },

  // 3.6.2 Nerve Impulses & Action Potentials
  {
    id: 'pack-3-6-2',
    title: '3.6.2 Nervous Coordination: Resting Potential, Action Potential & Saltatory Conduction',
    examBoard: 'AQA',
    specCode: '3.6.2',
    aqaUnit: '3.6',
    subject: 'AQA A-Level Biology (7402)',
    topic: '3.6.2 Nerve Impulses (Action Potentials & Synapses)',
    aoLevel: 'AO1 (3 marks) / AO2 (2 marks)',
    totalMarks: 5,
    questionText:
      'Explain how the resting potential is maintained in a myelinated neurone, and describe the events of depolarisation, repolarisation, and hyperpolarisation during an action potential. (5 marks)',
    contextNote:
      'AQA Chief Examiner focus: Na+/K+ ATPase pump (3 Na+ out for 2 K+ in using ATP), differential permeability of K+ leak channels at rest (-70mV), voltage-gated Na+ channels opening at threshold (+30mV depolarisation), Na+ channels closing and voltage-gated K+ opening (repolarisation), refractory period / hyperpolarisation (-80mV).',
    flawedAnswer:
      'Resting potential is maintained because potassium is pumped out and sodium stays inside so the inside is negative. For an action potential, sodium and potassium rush into the cell together, raising the voltage. Then the pump resets the axon back to normal in repolarisation.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Sodium-potassium pump actively transports 3 Na+ ions out of axon for every 2 K+ ions pumped in, using ATP hydrolysis.',
        indicativePhrases: ['3 Na+ out, 2 K+ in', 'active transport / Na-K ATPase', 'uses ATP'],
        rejectOrErrors: 'Reject: potassium pumped out and sodium pumped in.',
      },
      {
        markCode: 'M2',
        criteria:
          'Membrane is much more permeable to K+ than Na+ at rest (non-voltage gated K+ leak channels open), so K+ diffuses out faster than Na+ can diffuse back in, establishing a resting potential of approximately -70 mV (inside negative relative to outside).',
        indicativePhrases: ['membrane more permeable to K+', 'K+ diffuses / leaks out', 'resting potential -70mV'],
        rejectOrErrors: 'Reject: membrane completely impermeable to all ions.',
      },
      {
        markCode: 'M3',
        criteria:
          'Upon stimulation exceeding threshold, voltage-gated Na+ channels open and Na+ ions rapidly diffuse into axon down electrochemical gradient, causing depolarisation (+30 mV).',
        indicativePhrases: ['voltage-gated Na+ channels open', 'Na+ diffuses in', 'depolarisation to +30mV'],
        rejectOrErrors: 'Reject: K+ rushes in during depolarisation.',
      },
      {
        markCode: 'M4',
        criteria:
          'At +30 mV, voltage-gated Na+ channels close / inactivate, and voltage-gated K+ channels open, allowing K+ to rapidly diffuse out of axon down electrochemical gradient (repolarisation).',
        indicativePhrases: ['voltage-gated Na+ channels close', 'voltage-gated K+ channels open', 'K+ diffuses out', 'repolarisation'],
        rejectOrErrors: 'Reject: repolarisation is caused by the sodium-potassium pump.',
      },
      {
        markCode: 'M5',
        criteria:
          'Slow closing of voltage-gated K+ channels causes an overshoot where excess K+ diffuses out, causing hyperpolarisation (-80 mV); resting potential is then re-established during the refractory period.',
        indicativePhrases: ['K+ channels slow to close', 'hyperpolarisation', 'refractory period'],
        rejectOrErrors: 'Reject: hyperpolarisation is caused by sodium influx.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'potassium is pumped out and sodium stays inside so the inside is negative',
        issueType: 'misconception',
        explanation:
          'Completely backwards: the Na+/K+ pump transports 3 Na+ OUT and 2 K+ IN; K+ then diffuses out through leak channels.',
        markLost: 2,
        suggestedCorrection:
          'Na+/K+ pump transports 3 Na+ out for 2 K+ in; high K+ permeability allows K+ to diffuse out down concentration gradient.',
      },
      {
        phrase: 'sodium and potassium rush into the cell together',
        issueType: 'misconception',
        explanation:
          'Only voltage-gated Na+ channels open during depolarisation. K+ diffuses OUT later during repolarisation.',
        markLost: 1,
        suggestedCorrection:
          'Voltage-gated Na+ channels open and Na+ ions rapidly diffuse into the axon.',
      },
      {
        phrase: 'Then the pump resets the axon back to normal in repolarisation',
        issueType: 'misconception',
        explanation:
          'Common examiner trap: Repolarisation is caused by voltage-gated K+ channels opening (K+ diffusing OUT), NOT by the pump.',
        markLost: 1,
        suggestedCorrection:
          'Repolarisation occurs when voltage-gated Na+ channels close and voltage-gated K+ channels open, allowing K+ to diffuse out.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 5,
      summary:
        'Awarded 0/5 marks. Inverted the direction of the Na+/K+ pump, described Na+ and K+ entering together during depolarisation, and attributed repolarisation to the pump.',
    },
    exemplarRewrite:
      'The resting potential (-70 mV) is maintained by the sodium-potassium pump actively transporting 3 Na+ ions out of the axon for every 2 K+ ions pumped in, utilizing ATP. Because the axon membrane has open potassium leak channels and is far more permeable to K+ than Na+, K+ diffuses out down its concentration gradient faster than Na+ can diffuse in, rendering the inside negative relative to the outside. During an action potential exceeding threshold, voltage-gated Na+ channels open and Na+ ions rapidly diffuse into the axon down their electrochemical gradient, causing depolarisation up to +30 mV. At this peak, voltage-gated Na+ channels close and voltage-gated K+ channels open; K+ ions rapidly diffuse out of the axon down their gradient, repolarising the membrane. A slight delay in the closing of K+ channels leads to temporary hyperpolarisation (-80 mV) before the resting potential is restored.',
    keyTerms: [
      'Na+/K+ pump (3 Na+ out, 2 K+ in)',
      'Membrane permeability (K+ leak channels)',
      'Resting potential (-70 mV)',
      'Threshold level',
      'Voltage-gated Na+ channels (depolarisation to +30 mV)',
      'Voltage-gated K+ channels (repolarisation)',
      'Hyperpolarisation (-80 mV)',
      'Refractory period',
    ],
    teacherNotes:
      'Emphasise M4: A massive proportion of candidates wrongly believe repolarisation is caused by the Na+/K+ pump. Repolarisation is passive facilitated diffusion of K+ OUT via voltage-gated channels.',
    recommendedColdCall:
      'What is the purpose of the refractory period in terms of impulse direction and frequency?',
  },

  // 3.6.3 Muscle Contraction (Sliding Filament Theory)
  {
    id: 'pack-3-6-3',
    title: '3.6.3 Muscle Contraction: Sliding Filament Theory & The Role of Calcium and ATP',
    examBoard: 'AQA',
    specCode: '3.6.3',
    aqaUnit: '3.6',
    subject: 'AQA A-Level Biology (7402)',
    topic: '3.6.3 Muscle Contraction (Sliding Filament Theory & Phosphocreatine)',
    aoLevel: 'AO1 (3 marks) / AO2 (2 marks)',
    totalMarks: 5,
    questionText:
      'Describe the roles of calcium ions (Ca2+) and ATP in the contraction of a myofibril according to the sliding filament mechanism. (5 marks)',
    contextNote:
      'AQA Chief Examiner focus: Ca2+ released from sarcoplasmic reticulum upon depolarisation, Ca2+ binds to troponin causing tropomyosin to displace/move, exposing myosin-binding sites on actin, myosin heads bind forming actomyosin cross-bridges, power stroke (ADP release), ATP binds to myosin head causing detachment, ATP hydrolysis by ATPase recocks myosin head.',
    flawedAnswer:
      'Calcium ions give energy to the actin filaments to slide past myosin. Calcium binds to myosin heads directly so they become magnetic to actin. ATP is broken down to produce calcium, and when calcium runs out the muscle relaxes because myosin melts.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Action potential depolarises sarcolemma and travels down T-tubules into sarcoplasmic reticulum, stimulating release of calcium ions (Ca2+) into sarcoplasm by facilitated diffusion.',
        indicativePhrases: ['Ca2+ released from sarcoplasmic reticulum', 'into sarcoplasm', 'via T-tubules'],
        rejectOrErrors: 'Reject: calcium provides energy.',
      },
      {
        markCode: 'M2',
        criteria:
          'Calcium ions bind to troponin (on actin filament), causing tropomyosin to change shape / move and expose the myosin-binding sites on actin filaments.',
        indicativePhrases: ['Ca2+ binds to troponin', 'tropomyosin moves / displaced', 'uncovers myosin binding sites on actin'],
        rejectOrErrors: 'Reject: calcium binds directly to myosin.',
      },
      {
        markCode: 'M3',
        criteria:
          'Myosin heads bind to exposed binding sites on actin, forming actomyosin cross-bridges.',
        indicativePhrases: ['myosin heads bind to actin', 'actomyosin cross-bridges formed'],
        rejectOrErrors: 'Reject: actin binds to myosin tail.',
      },
      {
        markCode: 'M4',
        criteria:
          'Myosin head changes angle / flexes (power stroke), releasing ADP and inorganic phosphate (Pi) and pulling the actin filament along over the myosin.',
        indicativePhrases: ['myosin head flexes / pulls actin', 'power stroke', 'releases ADP and Pi'],
        rejectOrErrors: 'Reject: actin pulls myosin.',
      },
      {
        markCode: 'M5',
        criteria:
          'ATP binds to myosin head, causing it to detach from actin binding site; hydrolysis of ATP by ATP hydrolase (ATPase) on myosin head releases energy to recock the myosin head back to its original position.',
        indicativePhrases: ['ATP binds causing detachment', 'hydrolysis of ATP by ATPase', 'recocks myosin head'],
        rejectOrErrors: 'Reject: ATP broken down to make calcium.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Calcium ions give energy to the actin filaments',
        issueType: 'misconception',
        explanation:
          'Calcium ions do not provide energy; ATP provides energy. Calcium acts as a regulatory signal by binding to troponin to move tropomyosin.',
        markLost: 1,
        suggestedCorrection:
          'Calcium ions bind to troponin, moving tropomyosin and exposing myosin-binding sites on actin.',
      },
      {
        phrase: 'Calcium binds to myosin heads directly',
        issueType: 'misconception',
        explanation:
          'Calcium binds to troponin on the thin actin filament, not to myosin heads.',
        markLost: 1,
        suggestedCorrection:
          'Ca2+ binds to troponin, displacing tropomyosin from actin binding sites.',
      },
      {
        phrase: 'ATP is broken down to produce calcium, and when calcium runs out the muscle relaxes because myosin melts',
        issueType: 'misconception',
        explanation:
          'ATP is not converted to calcium; ATP binds to myosin heads to break cross-bridges, and ATP hydrolysis recocks heads. Relaxation occurs when Ca2+ is actively pumped back into the sarcoplasmic reticulum.',
        markLost: 2,
        suggestedCorrection:
          'ATP binds to myosin heads causing detachment, and ATP hydrolysis by ATPase recocks the heads. Ca2+ is actively pumped back into the sarcoplasmic reticulum for relaxation.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 5,
      summary:
        'Awarded 0/5 marks. Confounded the roles of calcium and ATP, stating calcium provides energy and ATP makes calcium, with no understanding of tropomyosin or cross-bridges.',
    },
    exemplarRewrite:
      'Depolarisation of the muscle fiber travels down T-tubules, stimulating the release of calcium ions (Ca2+) from the sarcoplasmic reticulum into the sarcoplasm. Calcium ions bind to troponin on the actin filaments, causing tropomyosin to shift position and uncover the myosin-binding sites on the actin molecules. Myosin heads bind to these exposed sites, forming actomyosin cross-bridges. The myosin heads then tilt/flex in a power stroke, releasing ADP and Pi and pulling the actin filament along over the myosin towards the center of the sarcomere. A new ATP molecule binds to each myosin head, causing it to detach from actin. ATP hydrolase associated with the myosin head hydrolyses ATP into ADP and Pi, releasing energy that recocks the myosin head to its original resting conformation ready for another cycle.',
    keyTerms: [
      'Sarcoplasmic reticulum (Ca2+ release)',
      'Troponin binding',
      'Tropomyosin displacement',
      'Exposed myosin-binding sites on actin',
      'Actomyosin cross-bridges',
      'Power stroke (myosin head flexes)',
      'ATP binding (cross-bridge detachment)',
      'ATP hydrolase (recocking myosin head)',
    ],
    teacherNotes:
      'Students frequently forget that ATP has TWO distinct roles in contraction: 1) binding to detach the myosin head from actin, and 2) hydrolysis providing energy to recock the head.',
    recommendedColdCall:
      'Why does rigor mortis (stiffening of muscles after death) occur in terms of ATP and actomyosin cross-bridges?',
  },

  // 3.6.4 Homeostasis & Blood Glucose Regulation
  {
    id: 'pack-3-6-4',
    title: '3.6.4 Homeostasis: Blood Glucose Regulation (Insulin, Glucagon, Adrenaline & Second Messenger)',
    examBoard: 'AQA',
    specCode: '3.6.4',
    aqaUnit: '3.6',
    subject: 'AQA A-Level Biology (7402)',
    topic: '3.6.4 Homeostasis (Blood Glucose & Osmoregulation in Kidney)',
    aoLevel: 'AO1 (3 marks) / AO2 (2 marks)',
    totalMarks: 5,
    questionText:
      'Explain how adrenaline and glucagon act via the second messenger model (adenylate cyclase and cAMP) to stimulate glycogenolysis in liver target cells when blood glucose concentration falls. (5 marks)',
    contextNote:
      'AQA Chief Examiner focus: Hormone (first messenger) binds to specific complementary transmembrane receptor, conformational change activates adenylate cyclase enzyme, converts ATP into cyclic AMP (cAMP, second messenger), cAMP binds to and activates protein kinase A enzymes, kinase activates enzymes that catalyse glycogenolysis (glycogen to glucose), glucose diffuses out through GLUT channel proteins by facilitated diffusion.',
    flawedAnswer:
      'Adrenaline enters the liver cell nucleus through the phospholipid bilayer because it is a lipid. Inside the cell, adrenaline acts as a second messenger that cuts glycogen into glucose molecules using amylase. Glucagon then releases insulin to balance the blood.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Adrenaline / glucagon (first messenger) binds to specific complementary transmembrane receptor proteins on liver cell surface membrane.',
        indicativePhrases: ['binds to specific receptor on liver cell membrane', 'first messenger', 'complementary receptor shape'],
        rejectOrErrors: 'Reject: adrenaline passes through bilayer into nucleus.',
      },
      {
        markCode: 'M2',
        criteria:
          'Hormone-receptor binding causes receptor to change shape, activating the enzyme adenylate / adenylyl cyclase inside the membrane.',
        indicativePhrases: ['activates adenylate cyclase', 'conformational change activates enzyme'],
        rejectOrErrors: 'Reject: activates protein kinase directly.',
      },
      {
        markCode: 'M3',
        criteria:
          'Activated adenylate cyclase converts ATP into cyclic AMP (cAMP), which acts as the second messenger.',
        indicativePhrases: ['converts ATP to cyclic AMP / cAMP', 'cAMP is second messenger'],
        rejectOrErrors: 'Reject: adrenaline is second messenger.',
      },
      {
        markCode: 'M4',
        criteria:
          'cAMP binds to and activates protein kinase enzymes (protein kinase A), initiating an enzyme phosphorylation cascade.',
        indicativePhrases: ['cAMP activates protein kinase A', 'enzyme cascade / phosphorylation'],
        rejectOrErrors: 'Reject: cAMP breaks down glycogen directly.',
      },
      {
        markCode: 'M5',
        criteria:
          'Active protein kinase activates glycogen phosphorylase, which catalyses glycogenolysis (hydrolysis of glycogen into glucose); glucose exits cell into blood via facilitated diffusion (GLUT transporter proteins).',
        indicativePhrases: ['glycogenolysis (glycogen to glucose)', 'glucose leaves by facilitated diffusion / GLUT'],
        rejectOrErrors: 'Reject: amylase breaks down glycogen in liver.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Adrenaline enters the liver cell nucleus through the phospholipid bilayer because it is a lipid',
        issueType: 'misconception',
        explanation:
          'Adrenaline and glucagon are peptide/amine hormones and water-soluble; they CANNOT cross the bilayer. They bind to cell-surface transmembrane receptors.',
        markLost: 1,
        suggestedCorrection:
          'Adrenaline binds to specific complementary transmembrane receptors on the liver cell surface membrane.',
      },
      {
        phrase: 'adrenaline acts as a second messenger that cuts glycogen into glucose molecules using amylase',
        issueType: 'misconception',
        explanation:
          'Adrenaline is the FIRST messenger. Cyclic AMP (cAMP) is the second messenger, which activates protein kinase enzymes to catalyse glycogenolysis (not amylase).',
        markLost: 2,
        suggestedCorrection:
          'Adrenaline activates adenylate cyclase to produce cAMP (second messenger), which activates protein kinase to trigger glycogenolysis.',
      },
      {
        phrase: 'Glucagon then releases insulin to balance the blood',
        issueType: 'poor_alignment',
        explanation:
          'Insulin is released by beta cells when glucose is HIGH, not by glucagon when glucose falls.',
        markLost: 1,
        suggestedCorrection:
          'Glucose produced exits via facilitated diffusion to elevate blood glucose back to normal set point.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 5,
      summary:
        'Awarded 0/5 marks. Incorrectly described adrenaline entering the nucleus, misassigned the second messenger, confused glycogenolysis with salivary amylase digestion, and misstated insulin action.',
    },
    exemplarRewrite:
      'Adrenaline and glucagon act as first messengers by binding to specific complementary transmembrane receptors on the cell-surface membrane of liver cells (hepatocytes). This binding causes a conformational change in the receptor protein, which activates the enzyme adenylate cyclase located on the inner surface of the membrane. Activated adenylate cyclase converts ATP into cyclic AMP (cAMP), which functions as the second messenger inside the cytoplasm. The cAMP molecules bind to allosteric sites on protein kinase A enzymes, activating them and initiating a phosphorylation enzyme cascade. The active protein kinase enzymes subsequently activate glycogen phosphorylase, which catalyses glycogenolysis (the hydrolysis of glycogen into glucose). Finally, the accumulated glucose exits the liver cell down its concentration gradient into the bloodstream via facilitated diffusion through GLUT transport proteins, restoring normal blood glucose levels.',
    keyTerms: [
      'First messenger (Adrenaline / Glucagon)',
      'Transmembrane cell-surface receptor',
      'Adenylate cyclase activation',
      'ATP converted to cyclic AMP (cAMP)',
      'Second messenger model',
      'Protein kinase A activation',
      'Enzyme cascade',
      'Glycogenolysis (glycogen to glucose)',
      'Facilitated diffusion of glucose (GLUT)',
    ],
    teacherNotes:
      'Ensure students know the distinct terms: Glycogenolysis (glycogen -> glucose), Glycogenesis (glucose -> glycogen), and Gluconeogenesis (glycerol/amino acids -> glucose).',
    recommendedColdCall:
      'What is the advantage of an enzyme cascade triggered by a single hormone molecule in the second messenger model?',
  },
];
