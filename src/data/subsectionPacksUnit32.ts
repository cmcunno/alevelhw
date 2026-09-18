import { FlawedQuestion } from '../types';

export const SUBSECTION_PACKS_UNIT_32: FlawedQuestion[] = [
  // 3.2.1 Cell Structure and Microscopy
  {
    id: 'pack-3-2-1',
    title: '3.2.1 Cell Structure: Ultracentrifugation & Organelle Isolation',
    examBoard: 'AQA',
    specCode: '3.2.1',
    aqaUnit: '3.2',
    subject: 'AQA AS Biology (7401)',
    topic: '3.2.1 Cell Structure and Microscopy',
    aoLevel: 'AO2 (3 marks) / AO1 (1 mark)',
    totalMarks: 4,
    questionText:
      'Explain why the homogenate tissue must be placed in a cold, isotonic, and buffered solution before cell fractionation and ultracentrifugation, and predict the order in which organelles pellet at increasing centrifuge speeds. (4 marks)',
    contextNote:
      'High-frequency AQA Paper 1 practical question. Students mix up reasons for cold, isotonic, and buffered, or confuse organelle pellet order.',
    flawedAnswer:
      'The solution must be ice-cold to kill all the enzymes so they do not eat the organelles. It must be isotonic to keep the temperature completely constant. It must be buffered to stop the water from moving in and out of the cells. When spun in the centrifuge, ribosomes form the first pellet because they are the smallest, followed by mitochondria, and the nucleus is left in the liquid supernatant.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Ice-cold to reduce / slow enzyme activity (such as lysosomal hydrolytic enzymes) that could digest or break down organelles.',
        indicativePhrases: ['reduce enzyme activity', 'slow autolysis / digestion of organelles'],
        rejectOrErrors: 'Reject: kills or stops enzymes completely.',
      },
      {
        markCode: 'M2',
        criteria:
          'Isotonic to prevent net movement of water into or out of organelles by osmosis, preventing lysis (bursting) or crenation (shrinking).',
        indicativePhrases: ['prevents osmosis', 'prevents organelles bursting or shrinking', 'same water potential'],
      },
      {
        markCode: 'M3',
        criteria:
          'Buffered to maintain a constant pH, preventing denaturation of organelle membrane proteins and enzymes.',
        indicativePhrases: ['maintains constant pH', 'prevents denaturation of proteins / enzymes'],
      },
      {
        markCode: 'M4',
        criteria:
          'Pelleting order by mass/density at increasing speeds: Nuclei first (heaviest/densest), followed by mitochondria/chloroplasts, then lysosomes/ER, and ribosomes last (lightest).',
        indicativePhrases: ['nuclei pellet first', 'mitochondria next', 'ribosomes pellet last / at highest speed'],
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'ice-cold to kill all the enzymes so they do not eat the organelles',
        issueType: 'misconception',
        explanation: 'Enzymes are NOT killed by cold temperature; their kinetic energy is reduced to slow activity. (Killed is a banned term).',
        markLost: 1,
        suggestedCorrection: 'ice-cold to reduce enzyme activity and prevent autolysis of organelles.',
      },
      {
        phrase: 'isotonic to keep the temperature completely constant',
        issueType: 'misconception',
        explanation: 'Isotonic means having the same water potential to PREVENT OSMOSIS, not temperature control.',
        markLost: 1,
        suggestedCorrection: 'isotonic to prevent the net osmotic movement of water, protecting organelles from bursting or shrinking.',
      },
      {
        phrase: 'ribosomes form the first pellet because they are the smallest',
        issueType: 'misconception',
        explanation: 'The HEAVIEST / densest organelles pellet first at lowest speeds (nuclei first). Ribosomes are lightest and pellet last at highest speeds.',
        markLost: 1,
        suggestedCorrection: 'nuclei are densest and pellet first at low speed; ribosomes are least dense and pellet last at high speed.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Used banned word "kill enzymes", misassigned functions of isotonic and buffer solutions, and inverted the pellet sedimentation order.',
    },
    exemplarRewrite:
      'Before cell fractionation, tissue is placed in an ice-cold solution to reduce the kinetic energy and activity of lytic enzymes (such as autolytic proteases and nucleases), preventing them from digesting cellular organelles. The solution must be isotonic (having an identical water potential to the cytoplasm) to prevent the net osmotic movement of water across organelle membranes, ensuring organelles do not burst or shrink. It must be buffered to resist changes in pH, preventing the denaturation of organelle enzymes and structural membrane proteins. During differential ultracentrifugation at progressively higher centrifugal speeds, organelles separate based on density and mass: the densest and heaviest organelles, the nuclei, form the first pellet at low speeds, followed by mitochondria (and chloroplasts in plants), lysosomes, and finally the lightest organelles, ribosomes, which only pellet at the highest centrifugal speeds.',
    keyTerms: [
      'Ice-cold: reduce enzyme activity (autolysis)',
      'Isotonic: same water potential (prevents osmosis / bursting)',
      'Buffered: maintains constant pH (prevents protein denaturation)',
      'Nuclei pellet first (densest/heaviest)',
      'Mitochondria / chloroplasts second',
      'Ribosomes pellet last (lightest/highest speed)',
    ],
    teacherNotes:
      'Chief Examiner alert: "Cold stops enzymes from killing the cell" gets 0 marks every year. Insist on: reduce kinetic energy/enzyme activity, same water potential, constant pH.',
    recommendedColdCall:
      'Cold-call: "Which organelle would you isolate by collecting the pellet after low-speed centrifugation?"',
  },

  // 3.2.2 Mitosis and the Cell Cycle
  {
    id: 'pack-3-2-2',
    title: '3.2.2 Mitosis: Chromosome Dynamics & Anaphase Disjunction',
    examBoard: 'AQA',
    specCode: '3.2.2',
    aqaUnit: '3.2',
    subject: 'AQA AS Biology (7401)',
    topic: '3.2.2 All Cells Arise from Other Cells (Mitosis)',
    aoLevel: 'AO1 (2 marks) / AO2 (2 marks)',
    totalMarks: 4,
    questionText:
      'Describe the behaviour of chromosomes during prophase, metaphase, and anaphase of mitosis, and explain why mitosis is essential for multicellular organisms. (4 marks)',
    contextNote:
      'Focus: Prophase condensation, Metaphase equator alignment via centromeres, Anaphase centromere division and chromatids pulled to opposite poles.',
    flawedAnswer:
      'In prophase, chromosomes dissolve into the cytoplasm so the nucleus can replicate them. In metaphase, homologous chromosome pairs line up along the equator and swap alleles by crossing over. In anaphase, the spindle fibres push the chromosomes out of the cell so each cell has half the chromosomes. Mitosis is important because it creates genetic diversity for evolution.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Prophase: Chromosomes condense / become visible as two sister chromatids joined at a centromere; nucleolus disappears and nuclear envelope breaks down.',
        indicativePhrases: ['chromosomes condense / become visible', 'nuclear envelope breaks down'],
        rejectOrErrors: 'Reject: chromosomes dissolve or replicate during prophase (replication occurs in interphase).',
      },
      {
        markCode: 'M2',
        criteria:
          'Metaphase: Individual chromosomes line up at the equator of the spindle, attached to spindle fibres by their centromeres.',
        indicativePhrases: ['chromosomes line up on the equator', 'attached by centromeres to spindle fibres'],
        rejectOrErrors: 'Reject: homologous pairs line up (that is Meiosis I). Reject: crossing over.',
      },
      {
        markCode: 'M3',
        criteria:
          'Anaphase: Centromeres divide / split; spindle fibres contract / shorten, pulling sister chromatids (now individual chromosomes) to opposite poles of the cell.',
        indicativePhrases: ['centromeres divide / split', 'sister chromatids pulled to opposite poles', 'spindle fibres contract'],
      },
      {
        markCode: 'M4',
        criteria:
          'Significance: Produces two genetically identical diploid daughter cells essential for growth, tissue repair, and asexual reproduction.',
        indicativePhrases: ['genetically identical cells', 'growth and repair of tissues'],
        rejectOrErrors: 'Reject: produces genetic variation or gametes.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'homologous chromosome pairs line up along the equator and swap alleles by crossing over',
        issueType: 'misconception',
        explanation: 'Homologous pairs and crossing over occur ONLY in Meiosis I. In mitosis, individual chromosomes line up and no crossing over occurs.',
        markLost: 1,
        suggestedCorrection: 'individual chromosomes align singly along the equator of the spindle attached by centromeres.',
      },
      {
        phrase: 'Anaphase, the spindle fibres push the chromosomes out of the cell so each cell has half the chromosomes',
        issueType: 'misconception',
        explanation: 'Spindle fibres CONTRACT / pull (never push). Mitosis maintains chromosome number (diploid); it does not halve it.',
        markLost: 1,
        suggestedCorrection: 'centromeres divide and contracting spindle fibres pull sister chromatids to opposite poles.',
      },
      {
        phrase: 'Mitosis is important because it creates genetic diversity for evolution',
        issueType: 'misconception',
        explanation: 'Mitosis produces GENETICALLY IDENTICAL daughter cells for growth and tissue repair. Meiosis produces genetic diversity.',
        markLost: 1,
        suggestedCorrection: 'Mitosis produces genetically identical daughter cells needed for growth and tissue repair.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Blatantly confused mitosis with meiosis, claiming crossing over occurs, chromosomes halve, and genetic diversity is produced.',
    },
    exemplarRewrite:
      'During prophase of mitosis, chromatin condenses, coils, and becomes visible as distinct chromosomes, each consisting of two identical sister chromatids joined at a central centromere, while the nuclear envelope breaks down and centrioles migrate to form the spindle apparatus. During metaphase, individual chromosomes align along the equator of the spindle, attached to spindle fibres at their centromeres. In anaphase, the centromeres divide and the spindle fibres contract and shorten, pulling sister chromatids (now referred to as individual daughter chromosomes) to opposite poles of the cell, centromere first. Mitosis is biologically vital because it yields two genetically identical daughter cells with the exact same diploid chromosome complement, allowing multicellular organisms to grow by cell proliferation, replace damaged tissues during repair, and reproduce asexually.',
    keyTerms: [
      'Chromosomes condense / visible',
      'Nuclear envelope breaks down',
      'Align along equator (centromere attachment)',
      'Centromeres divide / split',
      'Spindle fibres contract / shorten',
      'Sister chromatids pulled to opposite poles',
      'Genetically identical daughter cells (growth/repair)',
    ],
    teacherNotes:
      'Students frequently confuse mitosis with meiosis. Zero tolerance for "homologous pairs line up" or "crossing over" in mitosis questions.',
    recommendedColdCall:
      'Cold-call: "At what exact moment in anaphase does a sister chromatid officially become classified as an individual chromosome?"',
  },

  // 3.2.3 Transport Across Cell Membranes
  {
    id: 'pack-3-2-3',
    title: '3.2.3 Membrane Transport: Co-Transport of Glucose in the Ileum',
    examBoard: 'AQA',
    specCode: '3.2.3',
    aqaUnit: '3.2',
    subject: 'AQA AS Biology (7401)',
    topic: '3.2.3 Transport Across Cell Membranes',
    aoLevel: 'AO2 (3 marks) / AO1 (1 mark)',
    totalMarks: 4,
    questionText:
      'Explain how the co-transport of glucose and sodium ions across the epithelial cells of the mammalian ileum allows efficient absorption of glucose into the blood against its concentration gradient. (4 marks)',
    contextNote:
      'AQA Paper 1 highest-frequency 4-mark question. Steps: Na+/K+ ATPase actively pumps Na+ out; maintains gradient; Na+ enters with glucose via symport; glucose enters blood via facilitated diffusion.',
    flawedAnswer:
      'Sodium ions move out of the epithelial cell by simple osmosis through the membrane. This creates a vacuum so glucose gets sucked into the epithelial cell directly against its gradient. Once glucose is inside, it uses active transport to pump itself directly into the blood without needing any proteins.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Sodium ions (Na+) are actively transported out of the epithelial cell into the blood capillary by the sodium-potassium pump (using ATP hydrolysis).',
        indicativePhrases: ['Na+ actively pumped out of epithelial cell', 'using ATP / sodium-potassium pump'],
        rejectOrErrors: 'Reject: sodium moves by osmosis or diffusion.',
      },
      {
        markCode: 'M2',
        criteria:
          'This maintains a lower concentration of sodium ions inside the epithelial cell than in the lumen of the ileum (creates / maintains a steep concentration gradient).',
        indicativePhrases: ['maintains concentration gradient for Na+', 'lower Na+ inside cell than lumen'],
      },
      {
        markCode: 'M3',
        criteria:
          'Sodium ions diffuse from the ileum lumen into the epithelial cell down their concentration gradient via a co-transporter protein, carrying glucose with them against its concentration gradient.',
        indicativePhrases: ['co-transporter / symport protein', 'Na+ moves down gradient carrying glucose against gradient'],
      },
      {
        markCode: 'M4',
        criteria:
          'Glucose moves from the high concentration inside the epithelial cell into the blood capillary down its concentration gradient by facilitated diffusion (via a carrier protein).',
        indicativePhrases: ['facilitated diffusion into blood', 'glucose moves down gradient into capillary'],
        rejectOrErrors: 'Reject: glucose moves into blood by active transport.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Sodium ions move out of the epithelial cell by simple osmosis',
        issueType: 'misconception',
        explanation: 'Osmosis refers exclusively to WATER molecules. Sodium ions are moved by active transport using ATP.',
        markLost: 1,
        suggestedCorrection: 'Sodium ions are actively transported out of the cell into the blood by the sodium-potassium ATPase pump.',
      },
      {
        phrase: 'This creates a vacuum so glucose gets sucked into the epithelial cell directly',
        issueType: 'misconception',
        explanation: 'Biological transport does not use "vacuums" or "suction". Glucose is co-transported with Na+ down the sodium electrochemical gradient.',
        markLost: 1,
        suggestedCorrection: 'Sodium diffuses down its gradient via a co-transporter protein, simultaneously bringing glucose into the cell against its gradient.',
      },
      {
        phrase: 'glucose is inside, it uses active transport to pump itself directly into the blood without needing any proteins',
        issueType: 'misconception',
        explanation: 'Glucose enters the blood by FACILITATED DIFFUSION down its concentration gradient using a protein carrier, not active transport.',
        markLost: 1,
        suggestedCorrection: 'Glucose moves down its concentration gradient into the blood capillary by facilitated diffusion.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Used "osmosis" for ions, claimed a "vacuum suck" mechanism, and stated glucose enters the blood without transport proteins.',
    },
    exemplarRewrite:
      'First, sodium ions (Na+) are actively transported out of the ileum epithelial cell into the surrounding blood capillary by the sodium-potassium ATPase pump, driven by the hydrolysis of ATP. This maintains a steep concentration gradient where the concentration of sodium ions is significantly lower inside the epithelial cell than in the lumen of the small intestine. Consequently, sodium ions diffuse from the lumen into the epithelial cell down their concentration gradient via a specific co-transporter (symport) carrier protein in the apical membrane. As sodium enters, the carrier simultaneously transports glucose into the cell against its concentration gradient. Finally, the accumulated glucose passes from the high concentration inside the epithelial cell into the adjacent blood capillary down its concentration gradient by facilitated diffusion via a transport protein.',
    keyTerms: [
      'Active transport of Na+ into blood',
      'Sodium-potassium ATPase pump',
      'Maintains steep Na+ concentration gradient',
      'Co-transporter protein (symport)',
      'Glucose enters against concentration gradient',
      'Facilitated diffusion of glucose into capillary',
    ],
    teacherNotes:
      'AQA Chief Examiner tip: Make sure students clearly distinguish the apical membrane (lumen side: co-transport) from the basolateral membrane (capillary side: Na+/K+ pump and facilitated diffusion).',
    recommendedColdCall:
      'Cold-call: "Why does inhibiting the Na+/K+ ATPase pump with cyanide halt glucose absorption from the ileum?"',
  },

  // 3.2.4 Immunology
  {
    id: 'pack-3-2-4',
    title: '3.2.4 Immunology: Phagocytosis, Clonal Selection & The ELISA Test',
    examBoard: 'AQA',
    specCode: '3.2.4',
    aqaUnit: '3.2',
    subject: 'AQA AS Biology (7401)',
    topic: '3.2.4 Cell Recognition and Immune System',
    aoLevel: 'AO1 (2 marks) / AO2 (2 marks)',
    totalMarks: 4,
    questionText:
      'Describe the roles of helper T cells and B cells in the cellular and humoral immune responses to a foreign pathogen, and explain why the washing step is essential in an indirect ELISA test. (4 marks)',
    contextNote:
      'Examiner alerts: Helper T cells bind to antigen-presenting cells (APCs) via complementary receptors and release cytokines; B cells undergo clonal selection and differentiation into plasma cells; ELISA washing removes unbound antibodies.',
    flawedAnswer:
      'Helper T cells swallow the pathogen whole and explode to produce antibodies that kill the virus directly. B cells then turn into memory cells that produce antibiotics to fight bacterial infections. In an ELISA test, the washing step is done to wash away all the coloured dye so the test turns completely clear.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'T helper (Th) cells possess specific receptors that bind to complementary antigens presented on antigen-presenting cells (APCs / phagocytes), stimulating Th cells to release cytokines.',
        indicativePhrases: ['receptors bind to antigen on APC', 'release cytokines / stimulate B cells'],
        rejectOrErrors: 'Reject: T cells produce antibodies.',
      },
      {
        markCode: 'M2',
        criteria:
          'Cytokines stimulate specific B cells to divide by mitosis (clonal selection / clonal expansion).',
        indicativePhrases: ['clonal selection / expansion of B cells', 'B cells divide by mitosis'],
      },
      {
        markCode: 'M3',
        criteria:
          'B cells differentiate into plasma cells, which secrete large numbers of specific monoclonal antibodies complementary to the antigen.',
        indicativePhrases: ['plasma cells secrete antibodies', 'specific antibodies complementary to antigen'],
        rejectOrErrors: 'Reject: B cells produce antibiotics.',
      },
      {
        markCode: 'M4',
        criteria:
          'In an indirect ELISA test, washing removes any unbound antibodies, preventing false-positive results (ensuring only bound enzyme-linked antibodies remain to catalyse colour change).',
        indicativePhrases: ['removes unbound antibodies', 'prevents false positive results'],
        rejectOrErrors: 'Must state: prevents false positive result.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Helper T cells swallow the pathogen whole and explode to produce antibodies',
        issueType: 'misconception',
        explanation: 'T cells NEVER produce antibodies. Plasma B cells secrete antibodies. Phagocytes engulf pathogens, not T cells.',
        markLost: 1,
        suggestedCorrection: 'Helper T cells bind to antigens on antigen-presenting cells and release cytokines to stimulate B cells.',
      },
      {
        phrase: 'B cells then turn into memory cells that produce antibiotics',
        issueType: 'misconception',
        explanation: 'Antibiotics are chemical drugs produced by fungi/bacteria, not humans! Plasma B cells produce ANTIBODIES.',
        markLost: 1,
        suggestedCorrection: 'B cells differentiate into plasma cells that secrete specific antibodies.',
      },
      {
        phrase: 'washing step is done to wash away all the coloured dye so the test turns completely clear',
        issueType: 'misconception',
        explanation: 'Washing removes UNBOUND antibodies before substrate addition to prevent FALSE POSITIVES.',
        markLost: 1,
        suggestedCorrection: 'washing removes unbound antibodies to prevent a false-positive reaction.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Claimed T cells produce antibodies, confused antibodies with antibiotics, and misunderstood the purpose of ELISA washing.',
    },
    exemplarRewrite:
      'Following phagocytosis, an antigen-presenting cell (APC) presents foreign antigens on its major histocompatibility complexes. A helper T (Th) cell with complementary surface CD4 receptors binds to the presented antigen. This stimulates the helper T cell to divide and secrete chemical signalling proteins called cytokines. These cytokines stimulate a specific B cell whose membrane-bound antibodies have bound to the complementary antigen, causing the B cell to undergo clonal selection and rapid mitosis (clonal expansion). The cloned B cells differentiate into antibody-secreting plasma cells, which produce large quantities of specific antibodies that bind to pathogen antigens causing agglutination. In an indirect ELISA test, thorough washing after each antibody incubation step is essential because it washes away all unbound primary and secondary antibodies. Failure to wash away unbound enzyme-linked secondary antibodies would cause them to react with the added substrate, producing an unmerited colour change and yielding a false-positive result.',
    keyTerms: [
      'Antigen-presenting cell (APC)',
      'Helper T cell receptor binding',
      'Cytokines released',
      'Clonal selection and expansion (mitosis)',
      'Plasma cells secrete antibodies',
      'ELISA: wash removes unbound antibodies',
      'Prevents false-positive result',
    ],
    teacherNotes:
      'Strict AQA keyword alert: Banned word confusion: "Antibiotics" vs "Antibodies". In ELISA, always specify that failure to wash causes a FALSE POSITIVE.',
    recommendedColdCall:
      'Cold-call: "What would happen to the ELISA result if you forgot the wash step after adding the enzyme-linked secondary antibody?"',
  },
];
