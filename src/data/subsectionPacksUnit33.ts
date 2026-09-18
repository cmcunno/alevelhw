import { FlawedQuestion } from '../types';

export const SUBSECTION_PACKS_UNIT_33: FlawedQuestion[] = [
  // 3.3.1 Surface Area to Volume Ratio
  {
    id: 'pack-3-3-1',
    title: '3.3.1 Surface Area to Volume Ratio: Metabolic Rate & Heat Loss',
    examBoard: 'AQA',
    specCode: '3.3.1',
    aqaUnit: '3.3',
    subject: 'AQA AS Biology (7401)',
    topic: '3.3.1 Surface Area to Volume Ratio',
    aoLevel: 'AO2 (3 marks) / AO1 (1 mark)',
    totalMarks: 4,
    questionText:
      'Explain how the relationship between surface area to volume ratio (SA:V) and body size affects the metabolic rate per gram of body tissue in a small mammal (such as a mouse) compared to a large mammal (such as an elephant). (4 marks)',
    contextNote:
      'AQA Paper 1 calculation/explanation staple. Small mammal = larger SA:V, faster heat loss per gram, higher metabolic rate per gram to maintain core body temperature.',
    flawedAnswer:
      'An elephant is huge so it has a much higher surface area to volume ratio than a tiny mouse. Because the mouse is small, it has a tiny volume so it holds onto all its heat and never gets cold. The elephant loses heat constantly through its skin so it has to have a much higher metabolic rate per gram of tissue to stop itself from freezing to death.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Smaller mammals (mouse) have a larger / higher surface area to volume (SA:V) ratio than larger mammals (elephant).',
        indicativePhrases: ['mouse has larger SA:V ratio', 'smaller body size = larger SA:V'],
        rejectOrErrors: 'Reject: elephant has higher SA:V ratio.',
      },
      {
        markCode: 'M2',
        criteria:
          'A larger SA:V ratio means relatively more heat is lost per unit body mass / per gram to the cooler environment.',
        indicativePhrases: ['more heat lost per gram / per unit mass', 'faster rate of heat loss to surroundings'],
      },
      {
        markCode: 'M3',
        criteria:
          'Small mammals have a higher metabolic rate / higher rate of aerobic respiration per gram of body tissue to release heat energy to replace lost heat.',
        indicativePhrases: ['higher metabolic rate per gram', 'higher rate of respiration to generate heat'],
      },
      {
        markCode: 'M4',
        criteria:
          'This maintains a constant internal core body temperature (thermoregulation / homeothermy).',
        indicativePhrases: ['maintain constant body temperature', 'maintain core temperature'],
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'elephant is huge so it has a much higher surface area to volume ratio than a tiny mouse',
        issueType: 'misconception',
        explanation: 'As organisms increase in size, volume increases much faster than surface area. Small organisms have a MUCH HIGHER SA:V ratio.',
        markLost: 1,
        suggestedCorrection: 'A small mammal like a mouse has a significantly higher surface area to volume ratio than a large mammal.',
      },
      {
        phrase: 'elephant loses heat constantly through its skin so it has to have a much higher metabolic rate per gram of tissue',
        issueType: 'misconception',
        explanation: 'Because the mouse has a higher SA:V ratio, the mouse loses heat faster per gram and must have a much higher metabolic rate per gram.',
        markLost: 1,
        suggestedCorrection: 'The mouse loses heat more rapidly per gram of tissue, requiring a higher metabolic rate per gram to replace lost heat.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Completely inverted the SA:V relationship between small and large mammals, and assigned the higher mass-specific metabolic rate to the elephant.',
    },
    exemplarRewrite:
      'As body size decreases, volume decreases at a faster rate than surface area; therefore, a small mammal such as a mouse possesses a significantly larger surface area to volume ratio (SA:V) than a large mammal like an elephant. Because the mouse has a larger surface area relative to its body mass, it loses heat to its colder surroundings at a much higher rate per gram of body tissue. To compensate for this rapid rate of thermal dissipation and maintain a stable internal core body temperature of approximately 37°C, the mouse must maintain a much higher metabolic rate (and consequently a higher rate of aerobic respiration and oxygen consumption per gram of body tissue) than the elephant.',
    keyTerms: [
      'Higher SA:V ratio in smaller mammal',
      'Faster heat loss per unit body mass (per gram)',
      'Higher rate of aerobic respiration per gram',
      'Releases heat energy',
      'Maintains core body temperature',
    ],
    teacherNotes:
      'AQA Chief Examiner warning: Emphasise the phrase "PER GRAM" or "PER UNIT MASS". Total metabolic rate is higher in an elephant, but metabolic rate PER GRAM is much higher in a mouse.',
    recommendedColdCall:
      'Cold-call: "Does an elephant have a higher total oxygen consumption, or higher oxygen consumption per gram than a mouse?"',
  },

  // 3.3.2 Gas Exchange Systems
  {
    id: 'pack-3-3-2',
    title: '3.3.2 Gas Exchange: Counter-Current Exchange in Fish Gills',
    examBoard: 'AQA',
    specCode: '3.3.2',
    aqaUnit: '3.3',
    subject: 'AQA AS Biology (7401)',
    topic: '3.3.2 Gas Exchange Systems',
    aoLevel: 'AO2 (3 marks) / AO1 (1 mark)',
    totalMarks: 4,
    questionText:
      'Explain how the counter-current exchange mechanism in fish gill lamellae ensures efficient gas exchange compared to a parallel flow system. (4 marks)',
    contextNote:
      'AQA Paper 1 highest-frequency exchange question. Opposite directions, gradient maintained along entire length, parallel reaches equilibrium at 50%, counter-current achieves ~80% absorption.',
    flawedAnswer:
      'Counter-current flow means water and blood flow in the exact same direction along the gill lamella so they can mix together. In parallel flow, they crash into each other from opposite sides and stop flowing. Counter-current allows 100% of all oxygen in the ocean to diffuse into the blood because water has no pressure.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Water and blood flow in opposite directions across the secondary gill lamellae.',
        indicativePhrases: ['water and blood flow in opposite directions', 'counter-current = opposite directions'],
        rejectOrErrors: 'Reject: same direction.',
      },
      {
        markCode: 'M2',
        criteria:
          'Blood that is already partially saturated with oxygen constantly meets incoming water that has an even higher partial pressure of oxygen.',
        indicativePhrases: ['blood meets water with higher oxygen concentration', 'water always has higher pO2 than blood'],
      },
      {
        markCode: 'M3',
        criteria:
          'This maintains a concentration / diffusion gradient for oxygen across the entire length of the gill lamella / capillary bed.',
        indicativePhrases: ['concentration gradient maintained', 'across entire / whole length of lamella'],
        rejectOrErrors: 'Must state: across entire / whole length.',
      },
      {
        markCode: 'M4',
        criteria:
          'In parallel flow, equilibrium would be reached halfway along the lamella (~50% absorption); counter-current allows a higher percentage (~80%) of oxygen to diffuse into the blood.',
        indicativePhrases: ['parallel flow reaches equilibrium halfway', 'higher percentage of oxygen absorbed'],
        rejectOrErrors: 'Reject: 100% of oxygen is absorbed.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Counter-current flow means water and blood flow in the exact same direction',
        issueType: 'misconception',
        explanation: 'Counter-current means OPPOSITE directions. Parallel means same direction.',
        markLost: 1,
        suggestedCorrection: 'Water and blood flow in opposite directions across the secondary lamellae.',
      },
      {
        phrase: 'Counter-current allows 100% of all oxygen in the ocean to diffuse into the blood',
        issueType: 'poor_alignment',
        explanation: 'Diffusion ceases once equilibrium is reached; 100% transfer is impossible. Counter-current absorbs ~80%.',
        markLost: 1,
        suggestedCorrection: 'Counter-current flow maintains a diffusion gradient across the entire lamella, absorbing ~80% of oxygen.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Inverted counter-current and parallel definitions, and claimed impossible 100% oxygen uptake.',
    },
    exemplarRewrite:
      'In a counter-current exchange system, water and blood flow in opposite directions across the microscopic secondary gill lamellae. Because of this counter-current arrangement, blood that is already partially oxygenated continually meets fresh incoming water that has an even higher partial pressure of oxygen than the blood. This ensures that a steep diffusion gradient for oxygen is maintained across the entire length of the gill lamella and capillary bed. In contrast, if blood and water flowed in the same direction (parallel flow), a 50% concentration equilibrium would be reached halfway along the lamella, halting further net diffusion. Counter-current flow therefore enables approximately 80% of dissolved oxygen to diffuse into the blood.',
    keyTerms: [
      'Opposite directions',
      'Water has higher oxygen concentration than blood',
      'Diffusion gradient maintained',
      'Across entire length of lamella',
      'Parallel flow reaches equilibrium (~50%)',
      'Higher percentage of oxygen absorbed (~80%)',
    ],
    teacherNotes:
      'AQA Chief Examiner requirement: candidates MUST state that the gradient is maintained "across the ENTIRE length of the gill lamella". Leaving out "entire length" forfeits M3.',
    recommendedColdCall:
      'Cold-call: "Why is the word ENTIRE required by AQA when stating how counter-current maintains a diffusion gradient?"',
  },

  // 3.3.3 Digestion and Absorption
  {
    id: 'pack-3-3-3',
    title: '3.3.3 Digestion & Absorption: Lipid Emulsification, Micelles & Chylomicrons',
    examBoard: 'AQA',
    specCode: '3.3.3',
    aqaUnit: '3.3',
    subject: 'AQA AS Biology (7401)',
    topic: '3.3.3 Digestion and Absorption',
    aoLevel: 'AO2 (3 marks) / AO1 (1 mark)',
    totalMarks: 4,
    questionText:
      'Describe the role of bile salts and pancreatic lipase in lipid digestion, and explain how the products of lipid digestion are absorbed into the ileum epithelial cells and transported into the lymphatic system. (4 marks)',
    contextNote:
      'AQA Paper 1 criteria: Bile salts emulsify large droplets into micelles/droplets; lipase hydrolyses ester bonds; micelles carry monoglycerides & fatty acids to membrane; diffusion into cell; re-esterified in ER/Golgi into chylomicrons and exocytosis into lacteal.',
    flawedAnswer:
      'Bile salts contain strong digestive enzymes that chemically break down fat into tiny proteins. Pancreatic lipase then hydrolyses the peptide bonds to make glucose. Fatty acids then enter the cell by active transport and are packaged into blood cells that enter the aorta.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Bile salts emulsify large lipid droplets into smaller droplets, significantly increasing the surface area for pancreatic lipase action.',
        indicativePhrases: ['bile salts emulsify lipid droplets', 'increases surface area for lipase'],
        rejectOrErrors: 'Reject: bile salts contain enzymes or chemically digest lipids.',
      },
      {
        markCode: 'M2',
        criteria:
          'Lipase hydrolyses ester bonds in triglycerides to produce monoglycerides and fatty acids.',
        indicativePhrases: ['hydrolyses ester bonds', 'produces fatty acids and monoglycerides'],
        rejectOrErrors: 'Reject: lipase hydrolyses peptide bonds.',
      },
      {
        markCode: 'M3',
        criteria:
          'Micelles (composed of fatty acids, monoglycerides, and bile salts) transport and release fatty acids/monoglycerides at the epithelial cell surface, where they diffuse across the phospholipid bilayer by simple diffusion (due to being non-polar/lipid-soluble).',
        indicativePhrases: ['micelles transport fatty acids to epithelial surface', 'simple diffusion across membrane (lipid-soluble)'],
      },
      {
        markCode: 'M4',
        criteria:
          'Inside the epithelial cell, triglycerides are reformed in the endoplasmic reticulum and packaged with proteins/cholesterol in the Golgi apparatus into chylomicrons, which leave the cell by exocytosis into the lacteal / lymphatic system.',
        indicativePhrases: ['triglycerides reformed', 'packaged into chylomicrons in Golgi', 'exocytosis into lacteal'],
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Bile salts contain strong digestive enzymes that chemically break down fat',
        issueType: 'misconception',
        explanation: 'Bile salts contain NO enzymes. Emulsification is a PHYSICAL process increasing surface area, not chemical hydrolysis.',
        markLost: 1,
        suggestedCorrection: 'Bile salts emulsify large lipid droplets into smaller droplets to increase surface area for lipase.',
      },
      {
        phrase: 'Pancreatic lipase then hydrolyses the peptide bonds to make glucose',
        issueType: 'misconception',
        explanation: 'Lipase hydrolyses ESTER bonds in triglycerides, yielding fatty acids and monoglycerides, not glucose.',
        markLost: 1,
        suggestedCorrection: 'Lipase hydrolyses ester bonds in triglycerides to form monoglycerides and fatty acids.',
      },
      {
        phrase: 'Fatty acids then enter the cell by active transport and are packaged into blood cells',
        issueType: 'misconception',
        explanation: 'Fatty acids are non-polar and enter by SIMPLE DIFFUSION. They are packaged into CHYLOMICRONS and enter LACTEALS.',
        markLost: 1,
        suggestedCorrection: 'Fatty acids diffuse simply across the cell membrane, are re-synthesised into triglycerides, and packaged into chylomicrons for exocytosis into lacteals.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Claimed bile contains enzymes, lipase acts on peptide bonds, and fatty acids enter blood cells via active transport.',
    },
    exemplarRewrite:
      'Bile salts synthesized in the liver emulsify large lipid globules into microscopic droplets. This is a physical process that dramatically increases the total surface area available for the action of pancreatic lipase. Pancreatic lipase then hydrolyses the ester bonds within triglycerides, converting them into monoglycerides and free fatty acids. These hydrophobic digestion products associate with bile salts to form water-soluble spherical structures called micelles. Micelles transport the fatty acids and monoglycerides through the aqueous mucus to the brush border of the ileum epithelial cells. Being non-polar and lipid-soluble, the fatty acids and monoglycerides dissociate from the micelles and pass directly across the phospholipid bilayer by simple diffusion. Within the epithelial cells, the smooth endoplasmic reticulum re-synthesises them into triglycerides. In the Golgi apparatus, these triglycerides are packaged with cholesterol and lipoproteins to form chylomicrons, which are released from the basolateral membrane via exocytosis and enter the lacteals of the lymphatic system.',
    keyTerms: [
      'Bile salts emulsify (increase surface area)',
      'Hydrolyses ester bonds',
      'Monoglycerides and fatty acids',
      'Micelles deliver products to membrane',
      'Simple diffusion across phospholipid bilayer',
      'Chylomicrons packaged in Golgi',
      'Exocytosis into lacteal',
    ],
    teacherNotes:
      'Examiner warning: Bile salts do NOT digest or hydrolyse lipids; they only emulsify. Chylomicrons enter lacteals (lymphatics), not blood capillaries directly.',
    recommendedColdCall:
      'Cold-call: "Why do fatty acids and monoglycerides enter the epithelial cells by simple diffusion rather than active transport?"',
  },

  // 3.3.4 Mass Transport in Animals
  {
    id: 'pack-3-3-4',
    title: '3.3.4 Mass Transport in Animals: Cardiac Pressure Traces & Valves',
    examBoard: 'AQA',
    specCode: '3.3.4',
    aqaUnit: '3.3',
    subject: 'AQA AS Biology (7401)',
    topic: '3.3.4 Mass Transport in Animals (Heart & Circulation)',
    aoLevel: 'AO2 (3 marks) / AO1 (1 mark)',
    totalMarks: 4,
    questionText:
      'Explain how the changes in pressure in the left atrium, left ventricle, and aorta cause the atrioventricular (bicuspid) valve and semi-lunar (aortic) valve to open and close during the cardiac cycle. (4 marks)',
    contextNote:
      'Wiggers diagram analysis. Pressure gradients dictate passive valve opening and closing; valves prevent backflow of blood.',
    flawedAnswer:
      'During ventricular systole, the left ventricle relaxes so blood gets sucked in from the aorta. As pressure in the ventricle drops, the bicuspid valve opens to let blood squirt out. When the ventricle squeezes, the aortic semi-lunar valve closes tightly to keep the pressure high in the heart.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Ventricular systole causes the thick muscular ventricular wall to contract, raising pressure inside the left ventricle above atrial pressure.',
        indicativePhrases: ['ventricular contraction', 'ventricular pressure rises above atrial pressure'],
      },
      {
        markCode: 'M2',
        criteria:
          'Higher pressure in the ventricle forces the atrioventricular (bicuspid) valve shut, preventing backflow of blood into the left atrium.',
        indicativePhrases: ['atrioventricular valve closes', 'prevents backflow of blood into atrium'],
        rejectOrErrors: 'Reject: AV valve opens during ventricular systole.',
      },
      {
        markCode: 'M3',
        criteria:
          'Ventricular pressure continues to increase until it exceeds hydrostatic pressure in the aorta.',
        indicativePhrases: ['ventricular pressure exceeds aortic pressure', 'pressure in ventricle higher than aorta'],
      },
      {
        markCode: 'M4',
        criteria:
          'This forces the semi-lunar (aortic) valve open, allowing blood to be ejected under high pressure into the aorta.',
        indicativePhrases: ['semi-lunar valve opens', 'blood ejected into aorta'],
        rejectOrErrors: 'Reject: semi-lunar valve closes during ventricular systole.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'ventricle relaxes so blood gets sucked in from the aorta',
        issueType: 'misconception',
        explanation: 'Ventricular SYSTOLE means contraction, not relaxation. Blood is ejected into the aorta, never sucked back from it.',
        markLost: 1,
        suggestedCorrection: 'ventricle contracts, causing ventricular pressure to exceed atrial pressure.',
      },
      {
        phrase: 'bicuspid valve opens to let blood squirt out',
        issueType: 'misconception',
        explanation: 'Higher ventricular pressure forces the atrioventricular valve SHUT to prevent backflow into the atrium.',
        markLost: 1,
        suggestedCorrection: 'the atrioventricular valve closes to prevent backflow into the atrium.',
      },
      {
        phrase: 'aortic semi-lunar valve closes tightly',
        issueType: 'misconception',
        explanation: 'When ventricular pressure exceeds aortic pressure, the semi-lunar valve is pushed OPEN to allow blood flow into the aorta.',
        markLost: 1,
        suggestedCorrection: 'the semi-lunar valve opens as ventricular pressure exceeds aortic pressure.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Completely inverted the mechanical events of systole and diastole, and reversed the opening and closing of both sets of valves.',
    },
    exemplarRewrite:
      'During ventricular systole, the thick muscular myocardium of the left ventricle contracts, causing pressure inside the left ventricle to increase rapidly until it exceeds the pressure in the left atrium. This pressure gradient forces the atrioventricular (bicuspid) valve to snap shut, preventing the backflow of blood into the atrium. As contraction continues, ventricular pressure rises further until it surpasses the hydrostatic pressure in the aorta. This forces the semi-lunar (aortic) valve to open, permitting the rapid ejection of oxygenated blood under high pressure into the aorta. When the ventricle begins to relax in diastole, ventricular pressure falls below aortic pressure, causing the semi-lunar valve to close and prevent aortic backflow.',
    keyTerms: [
      'Ventricular contraction (systole)',
      'Ventricular pressure exceeds atrial pressure',
      'Atrioventricular valve closes (prevents backflow)',
      'Ventricular pressure exceeds aortic pressure',
      'Semi-lunar valve opens',
      'Blood ejected into aorta',
    ],
    teacherNotes:
      'Chief Examiner alert: Emphasise that valves do not actively pull or push; they are passive flaps operated entirely by pressure differences on either side.',
    recommendedColdCall:
      'Cold-call: "What prevents the atrioventricular valves from inverting into the atria when ventricular pressure surges?"',
  },

  // 3.3.5 Mass Transport in Plants
  {
    id: 'pack-3-3-5',
    title: '3.3.5 Mass Transport in Plants: Cohesion-Tension & Transpiration Stream',
    examBoard: 'AQA',
    specCode: '3.3.5',
    aqaUnit: '3.3',
    subject: 'AQA AS Biology (7401)',
    topic: '3.3.5 Mass Transport in Plants (Xylem & Phloem)',
    aoLevel: 'AO1 (2 marks) / AO2 (2 marks)',
    totalMarks: 4,
    questionText:
      'Explain how the cohesion-tension theory accounts for the movement of water from the roots to the leaves in the xylem vessels of a tall tree. (4 marks)',
    contextNote:
      'AQA core: Transpiration from stomata lowers mesophyll water potential; water pulled up xylem under negative pressure (tension); continuous column due to hydrogen bonding (cohesion); adhesion to xylem walls.',
    flawedAnswer:
      'The tree roots use active transport to pump water up the stem under huge positive pressure. Water molecules are pushed upwards from below by root suction. When water reaches the leaves, the xylem cells contract like muscles to pump the water out of the stomata.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Water evaporates / transpires from the surfaces of mesophyll cells in leaves and diffuses out through open stomata down a water potential gradient.',
        indicativePhrases: ['evaporation / transpiration from leaves', 'water diffuses out of stomata'],
      },
      {
        markCode: 'M2',
        criteria:
          'This lowers the water potential of mesophyll cells, drawing water from the xylem vessels by osmosis, creating tension / negative pressure in the xylem.',
        indicativePhrases: ['lowers water potential in mesophyll', 'creates tension / negative pressure in xylem'],
        rejectOrErrors: 'Reject: creates positive pressure.',
      },
      {
        markCode: 'M3',
        criteria:
          'Water molecules form hydrogen bonds with one another (cohesion), maintaining a continuous, unbroken column of water pulled up the xylem.',
        indicativePhrases: ['hydrogen bonds between water molecules (cohesion)', 'continuous / unbroken water column pulled up'],
      },
      {
        markCode: 'M4',
        criteria:
          'Water molecules also form hydrogen bonds with the hydrophilic cellulose/lignin walls of the xylem vessels (adhesion), supporting the water column against gravity.',
        indicativePhrases: ['adhesion of water to xylem walls', 'adhesion supports water column'],
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'tree roots use active transport to pump water up the stem under huge positive pressure',
        issueType: 'misconception',
        explanation: 'Water moves PASSIVELY by osmosis; it is never pumped by active transport. Water is PULLED under TENSION (negative pressure), not pushed.',
        markLost: 1,
        suggestedCorrection: 'Water is pulled up the xylem under negative pressure (tension) generated by transpiration from leaves.',
      },
      {
        phrase: 'xylem cells contract like muscles',
        issueType: 'misconception',
        explanation: 'Mature xylem vessels are DEAD, hollow tubes with no cytoplasm or contractile proteins.',
        markLost: 1,
        suggestedCorrection: 'Mature xylem vessels are dead, hollow tubes strengthened by lignin.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Claimed water is actively pumped by roots under positive pressure, and stated dead xylem vessels contract like muscle cells.',
    },
    exemplarRewrite:
      'Water evaporates from the damp surfaces of leaf mesophyll cells and diffuses out of the leaf through open stomata down a water potential gradient in the process of transpiration. This water loss lowers the water potential of the leaf mesophyll cells, causing water to move into them from the xylem vessels via osmosis. This removal of water creates a state of tension (negative hydrostatic pressure) at the top of the xylem column. Because water molecules are polar, they form numerous hydrogen bonds with each other, a property known as cohesion. This cohesion holds the water molecules together in a continuous, unbroken column stretching from roots to leaves. As tension is generated at the top, the entire continuous column of water is pulled upwards through the xylem under negative pressure. Furthermore, water molecules adhere to the hydrophilic cellulose and lignin within the xylem vessel walls (adhesion), preventing the column from breaking and helping support it against gravity.',
    keyTerms: [
      'Transpiration / evaporation from stomata',
      'Lowers water potential of mesophyll',
      'Creates tension (negative pressure) in xylem',
      'Cohesion: hydrogen bonds between water molecules',
      'Continuous, unbroken water column',
      'Adhesion to xylem walls',
    ],
    teacherNotes:
      'AQA Chief Examiner strict points: Tension means NEGATIVE pressure. Cohesion is water-to-water (H-bonds). Adhesion is water-to-xylem wall.',
    recommendedColdCall:
      'Cold-call: "What happens to the diameter of a tree trunk during peak midday sunlight, and how does this prove tension in the xylem?"',
  },
];
