import { FlawedQuestion } from '../types';

export const SUBSECTION_PACKS_UNIT_31: FlawedQuestion[] = [
  // 3.1.1 Monomers and Polymers
  {
    id: 'pack-3-1-1',
    title: '3.1.1 Monomers & Polymers: Condensation and Hydrolysis',
    examBoard: 'AQA',
    specCode: '3.1.1',
    aqaUnit: '3.1',
    subject: 'AQA AS Biology (7401)',
    topic: '3.1.1 Monomers and Polymers',
    aoLevel: 'AO1 (2 marks) / AO2 (2 marks)',
    totalMarks: 4,
    questionText:
      'Describe the chemical differences between a condensation reaction and a hydrolysis reaction, and explain how polymers are formed from monosaccharide and amino acid monomers. (4 marks)',
    contextNote:
      'Key AQA examiner focus: exact bond formation, elimination versus consumption of a water molecule, and naming the specific bonds formed.',
    flawedAnswer:
      'A condensation reaction is when two molecules join together and make water, which hydrates the cell. Hydrolysis is when a polymer breaks down naturally by releasing water into the surroundings. When monosaccharides join they make peptide bonds to form starch, and when amino acids join they form ester bonds to make a polypeptide chain.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Condensation reaction joins two molecules together with the formation of a chemical bond and the elimination / release of a water molecule.',
        indicativePhrases: ['elimination of water', 'formation of a chemical bond', 'releases H2O'],
        rejectOrErrors: 'Reject: condensation produces water to hydrate the cell.',
      },
      {
        markCode: 'M2',
        criteria:
          'Hydrolysis reaction breaks a chemical bond between two molecules and involves the addition / use of a water molecule.',
        indicativePhrases: ['breaks a bond', 'uses / requires a water molecule', 'addition of water'],
        rejectOrErrors: 'Reject: hydrolysis releases water.',
      },
      {
        markCode: 'M3',
        criteria:
          'Monosaccharide monomers join by condensation reactions forming glycosidic bonds to produce polysaccharides (e.g. starch / glycogen / cellulose).',
        indicativePhrases: ['glycosidic bonds', 'monosaccharides form glycosidic bonds'],
        rejectOrErrors: 'Reject: monosaccharides form peptide or ester bonds.',
      },
      {
        markCode: 'M4',
        criteria:
          'Amino acid monomers join by condensation reactions forming peptide bonds between the amine group of one and carboxyl group of another to produce polypeptides.',
        indicativePhrases: ['peptide bonds', 'amino acids form peptide bonds'],
        rejectOrErrors: 'Reject: amino acids form ester bonds.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Hydrolysis is when a polymer breaks down naturally by releasing water',
        issueType: 'misconception',
        explanation: 'Hydrolysis USES / consumes a water molecule to break a chemical bond; it does not release water.',
        markLost: 1,
        suggestedCorrection: 'Hydrolysis requires the addition of a water molecule to break a chemical bond.',
      },
      {
        phrase: 'monosaccharides join they make peptide bonds',
        issueType: 'misconception',
        explanation: 'Monosaccharides are joined by GLYCOSIDIC bonds, never peptide bonds.',
        markLost: 1,
        suggestedCorrection: 'monosaccharides join by forming glycosidic bonds.',
      },
      {
        phrase: 'amino acids join they form ester bonds',
        issueType: 'misconception',
        explanation: 'Amino acids are joined by PEPTIDE bonds, not ester bonds (which are in lipids).',
        markLost: 1,
        suggestedCorrection: 'amino acids join by forming peptide bonds between amine and carboxyl groups.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 1,
      maxMarks: 4,
      summary:
        'Awarded 1/4 (M1 partial credit for condensation joining molecules and releasing water). Candidate reversed the water requirement of hydrolysis and inverted glycosidic, peptide, and ester bonds.',
    },
    exemplarRewrite:
      'A condensation reaction joins two molecules together to form a chemical bond, accompanied by the elimination of a water molecule. In contrast, a hydrolysis reaction breaks a chemical bond between two molecules through the addition and utilization of a water molecule. Monosaccharide monomers undergo condensation reactions to form glycosidic bonds, producing polysaccharides such as starch and glycogen. Similarly, amino acid monomers join by condensation reactions to form peptide bonds between the amine group (-NH2) of one amino acid and the carboxyl group (-COOH) of another, yielding polypeptides.',
    keyTerms: [
      'Elimination of water',
      'Use / addition of water',
      'Glycosidic bond',
      'Peptide bond',
      'Polypeptide',
      'Polysaccharide',
    ],
    teacherNotes:
      'Common AQA sin: writing that hydrolysis "produces water" or getting glycosidic and peptide bonds mixed up. Ensure students state elimination vs addition of water.',
    recommendedColdCall:
      'Cold-call: "Does hydrolysis create water or use water to cleave a bond?"',
  },

  // 3.1.2 Carbohydrates
  {
    id: 'pack-3-1-2',
    title: '3.1.2 Carbohydrates: Starch, Glycogen & Cellulose Structure',
    examBoard: 'AQA',
    specCode: '3.1.2',
    aqaUnit: '3.1',
    subject: 'AQA AS Biology (7401)',
    topic: '3.1.2 Carbohydrates',
    aoLevel: 'AO1 (2 marks) / AO2 (2 marks)',
    totalMarks: 4,
    questionText:
      'Compare the molecular structures of starch, glycogen, and cellulose, and explain how the structure of cellulose relates to its function in plant cell walls. (4 marks)',
    contextNote:
      'AQA Paper 1 essential: alpha-glucose vs beta-glucose, microfibrils, hydrogen bonding, and straight unbranched chains.',
    flawedAnswer:
      'Starch and glycogen are both made from beta-glucose and have coiled, branched structures that store energy inside animal cells. Cellulose is made of alpha-glucose monomers that twist into a tight helix. Hydrogen bonds form inside the cellulose molecule to make it soluble, so it can swell up and push against the plant cell wall to make it turgid.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Starch (amylose/amylopectin) and glycogen are polymers of alpha-glucose, whereas cellulose is a polymer of beta-glucose.',
        indicativePhrases: ['starch/glycogen are alpha-glucose', 'cellulose is beta-glucose'],
        rejectOrErrors: 'Reject: starch or glycogen made of beta-glucose.',
      },
      {
        markCode: 'M2',
        criteria:
          'Starch is helical / branched and glycogen is highly branched, whereas cellulose forms long, straight, unbranched chains.',
        indicativePhrases: ['cellulose is straight and unbranched', 'glycogen is highly branched'],
      },
      {
        markCode: 'M3',
        criteria:
          'Cellulose chains run parallel to each other and are linked by many hydrogen bonds to form microfibrils.',
        indicativePhrases: ['parallel chains', 'linked by hydrogen bonds', 'form microfibrils'],
        rejectOrErrors: 'Must state: chains linked by hydrogen bonds to form microfibrils.',
      },
      {
        markCode: 'M4',
        criteria:
          'Microfibrils provide high tensile strength / rigidity, preventing the plant cell from bursting under osmotic pressure / turgor.',
        indicativePhrases: ['high tensile strength', 'resists osmotic lysis / pressure', 'provides structural support'],
        rejectOrErrors: 'Reject: cellulose makes wall turgid or is soluble.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Starch and glycogen are both made from beta-glucose',
        issueType: 'misconception',
        explanation: 'Starch and glycogen are made of ALPHA-glucose; cellulose is made of BETA-glucose.',
        markLost: 1,
        suggestedCorrection: 'Starch and glycogen are polymers of alpha-glucose, while cellulose is formed from beta-glucose.',
      },
      {
        phrase: 'Cellulose is made of alpha-glucose monomers that twist into a tight helix',
        issueType: 'misconception',
        explanation: 'Cellulose consists of long, straight, UNBRANCHED chains of beta-glucose, never a helix.',
        markLost: 1,
        suggestedCorrection: 'Cellulose forms straight, unbranched chains of beta-glucose where alternate monomers are inverted 180 degrees.',
      },
      {
        phrase: 'Hydrogen bonds form inside the cellulose molecule to make it soluble',
        issueType: 'misconception',
        explanation: 'Hydrogen bonds cross-link adjacent parallel chains into insoluble, high-tensile microfibrils.',
        markLost: 1,
        suggestedCorrection: 'Many hydrogen bonds cross-link parallel cellulose chains to form strong microfibrils.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Inverted alpha and beta glucose, claimed cellulose is helical and soluble, and failed to identify microfibrils or tensile strength.',
    },
    exemplarRewrite:
      'Starch and glycogen are polymers composed of alpha-glucose units, with amylopectin and glycogen exhibiting branched structures that allow rapid enzymatic hydrolysis. In contrast, cellulose is a polymer of beta-glucose, where each consecutive beta-glucose monomer is inverted 180 degrees relative to its neighbour. This allows cellulose to form long, straight, unbranched chains. Multiple parallel cellulose chains are cross-linked by vast numbers of hydrogen bonds, grouping together into strong bundles called microfibrils. These microfibrils provide tremendous tensile strength and rigidity to the cell wall, allowing the plant cell to withstand internal osmotic hydrostatic pressure without bursting.',
    keyTerms: [
      'Alpha-glucose vs beta-glucose',
      'Straight, unbranched chains',
      'Parallel chains',
      'Hydrogen bonds',
      'Microfibrils',
      'Tensile strength',
      'Resists osmotic pressure',
    ],
    teacherNotes:
      'AQA examiners strictly enforce: cellulose = straight unbranched chains, linked by hydrogen bonds to form microfibrils providing tensile strength.',
    recommendedColdCall:
      'Cold-call: "Why must alternate beta-glucose monomers be rotated 180 degrees in a cellulose chain?"',
  },

  // 3.1.3 Lipids
  {
    id: 'pack-3-1-3',
    title: '3.1.3 Lipids: Triglycerides vs Phospholipids & Emulsion Test',
    examBoard: 'AQA',
    specCode: '3.1.3',
    aqaUnit: '3.1',
    subject: 'AQA AS Biology (7401)',
    topic: '3.1.3 Lipids',
    aoLevel: 'AO1 (2 marks) / AO2 (2 marks)',
    totalMarks: 4,
    questionText:
      'Describe the biochemical structure of a phospholipid compared to a triglyceride, and explain how the properties of phospholipids allow them to form cell surface membranes. (4 marks)',
    contextNote:
      'Examiner focus: 1 glycerol + 2 fatty acids + 1 phosphate vs 3 fatty acids, hydrophilic head, hydrophobic tails, and bilayer arrangement.',
    flawedAnswer:
      'A triglyceride is a polymer made of glycerol and three fatty acid monomers joined by peptide bonds. In a phospholipid, one fatty acid is replaced by a phosphate molecule. The phosphate is hydrophobic so it loves water, while the fatty acids are hydrophilic and hate water. This makes phospholipids dissolve completely in water to form a solid membrane barrier.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Triglycerides contain one glycerol molecule bonded to three fatty acids by three ester bonds via condensation reactions.',
        indicativePhrases: ['1 glycerol and 3 fatty acids', 'ester bonds'],
        rejectOrErrors: 'Reject: lipids are polymers. Reject: peptide bonds.',
      },
      {
        markCode: 'M2',
        criteria:
          'In phospholipids, one of the fatty acid chains is replaced by a phosphate group.',
        indicativePhrases: ['two fatty acids and one phosphate group', 'phosphate replaces one fatty acid'],
      },
      {
        markCode: 'M3',
        criteria:
          'Phospholipids have a hydrophilic (polar) phosphate head that interacts with water, and hydrophobic (non-polar) fatty acid tails that are repelled by water.',
        indicativePhrases: ['hydrophilic phosphate head', 'hydrophobic fatty acid tails'],
        rejectOrErrors: 'Reject if head and tail properties are reversed.',
      },
      {
        markCode: 'M4',
        criteria:
          'In aqueous environments, phospholipids arrange into a bilayer with hydrophilic heads facing outwards towards the aqueous cytoplasm/extracellular fluid, and hydrophobic tails pointing inwards away from water.',
        indicativePhrases: ['forms a bilayer', 'hydrophobic tails orient inwards', 'heads face aqueous solution'],
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'triglyceride is a polymer made of glycerol and three fatty acid monomers joined by peptide bonds',
        issueType: 'misconception',
        explanation: 'Lipids are macromolecules, NOT polymers (they do not consist of repeating monomers). They are joined by ESTER bonds, not peptide bonds.',
        markLost: 1,
        suggestedCorrection: 'triglycerides are macromolecules composed of one glycerol and three fatty acids joined by ester bonds.',
      },
      {
        phrase: 'phosphate is hydrophobic so it loves water, while the fatty acids are hydrophilic and hate water',
        issueType: 'misconception',
        explanation: 'Hydrophilic means water-loving (attracted to water); hydrophobic means water-repelling. The candidate completely inverted both definitions.',
        markLost: 1,
        suggestedCorrection: 'the polar phosphate head is hydrophilic, while the non-polar fatty acid tails are hydrophobic.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 1,
      maxMarks: 4,
      summary:
        'Awarded 1/4 (M2 for replacement of one fatty acid by phosphate). Lost marks for calling lipids polymers, writing peptide bonds, and inverting hydrophilic/hydrophobic terms.',
    },
    exemplarRewrite:
      'A triglyceride consists of one glycerol molecule linked to three fatty acid chains by three ester bonds formed through condensation reactions. In a phospholipid, one of the fatty acid chains is replaced by a polar phosphate group, resulting in one glycerol molecule, two fatty acid tails, and a phosphate head. The phosphate head is polar and hydrophilic, enabling it to interact with water molecules. In contrast, the non-polar fatty acid tails are hydrophobic and are repelled by water. In aqueous intracellular and extracellular environments, phospholipids naturally assemble into a bilayer where the hydrophilic heads face outwards toward the aqueous solutions and the hydrophobic tails shield themselves inwards, forming a selectively permeable barrier.',
    keyTerms: [
      'Glycerol and three fatty acids',
      'Ester bonds',
      'Phosphate group replaces fatty acid',
      'Hydrophilic phosphate head',
      'Hydrophobic fatty acid tails',
      'Phospholipid bilayer',
    ],
    teacherNotes:
      'Emphasise: Lipids are NEVER polymers on AQA exams. Check students do not confuse ester bonds with ether or peptide bonds.',
    recommendedColdCall:
      'Cold-call: "Why is a triglyceride described as a macromolecule rather than a polymer?"',
  },

  // 3.1.4 Proteins and Enzymes
  {
    id: 'pack-3-1-4',
    title: '3.1.4 Proteins & Enzymes: Induced Fit Model & Inhibitor Kinetics',
    examBoard: 'AQA',
    specCode: '3.1.4',
    aqaUnit: '3.1',
    subject: 'AQA AS Biology (7401)',
    topic: '3.1.4 Proteins and Enzymes',
    aoLevel: 'AO2 (3 marks) / AO1 (1 mark)',
    totalMarks: 4,
    questionText:
      'Explain the induced-fit model of enzyme action and contrast the mechanisms of competitive and non-competitive inhibition on the rate of an enzyme-controlled reaction. (4 marks)',
    contextNote:
      'AQA requirement: Induced fit (not lock and key), active site moulding, competitive binds to active site and overcome by substrate, non-competitive binds to allosteric site and lowers Vmax.',
    flawedAnswer:
      'According to the lock and key model, the active site is completely rigid and fits the substrate exactly like a key. Competitive inhibitors destroy the enzyme by heating it up until it dies. Non-competitive inhibitors bind to the active site permanently so no reaction can ever happen. You can overcome both types of inhibition by adding infinite substrate.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Induced-fit model: active site is not fully complementary initially; substrate binding induces a conformational change in the enzyme tertiary structure / active site shape to fit the substrate closely and put strain on substrate bonds.',
        indicativePhrases: ['active site changes shape', 'moulds around substrate', 'puts strain on bonds'],
        rejectOrErrors: 'Reject: rigid lock and key model.',
      },
      {
        markCode: 'M2',
        criteria:
          'Competitive inhibitor has a similar shape to the substrate, binds directly to the active site, and prevents substrate molecules from binding (fewer ES complexes formed).',
        indicativePhrases: ['similar shape to substrate', 'binds to active site', 'competes with substrate'],
        rejectOrErrors: 'Reject: competitive inhibitor binds to allosteric site.',
      },
      {
        markCode: 'M3',
        criteria:
          'Competitive inhibition can be overcome by increasing substrate concentration (increasing collision frequency to reach the original Vmax).',
        indicativePhrases: ['overcome by increasing substrate', 'reaches original Vmax'],
      },
      {
        markCode: 'M4',
        criteria:
          'Non-competitive inhibitor binds to an allosteric site (site other than the active site), altering the tertiary structure and changing the active site shape; cannot be overcome by adding substrate, permanently reducing Vmax.',
        indicativePhrases: ['binds to allosteric site', 'changes tertiary structure / active site shape', 'cannot be overcome / lowers Vmax'],
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'According to the lock and key model, the active site is completely rigid',
        issueType: 'misconception',
        explanation: 'AQA requires the INDUCED FIT model, where the active site subtly changes shape as the substrate binds.',
        markLost: 1,
        suggestedCorrection: 'According to the induced fit model, the enzyme active site alters its shape slightly as the substrate binds to mould tightly around it.',
      },
      {
        phrase: 'Competitive inhibitors destroy the enzyme by heating it up until it dies',
        issueType: 'misconception',
        explanation: 'BANNED word: enzymes never die. Competitive inhibitors do not heat enzymes; they temporarily block the active site.',
        markLost: 1,
        suggestedCorrection: 'Competitive inhibitors have a similar shape to the substrate and bind reversibly to the active site.',
      },
      {
        phrase: 'Non-competitive inhibitors bind to the active site permanently',
        issueType: 'misconception',
        explanation: 'Non-competitive inhibitors bind to an ALLOSTERIC site, not the active site.',
        markLost: 1,
        suggestedCorrection: 'Non-competitive inhibitors bind to an allosteric site away from the active site.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Used the rejected lock-and-key model, stated enzymes "die", and misattributed allosteric and active site binding mechanics.',
    },
    exemplarRewrite:
      'According to the induced-fit model of enzyme action, the active site of an enzyme is not entirely complementary to the substrate initially. Upon binding, interactions between the substrate and amino acid R-groups induce a subtle conformational change in the enzyme tertiary structure, moulding the active site tightly around the substrate and putting strain on specific chemical bonds to lower the activation energy. A competitive inhibitor possesses a shape similar to the substrate, binding directly to the active site and preventing substrate access; this can be overcome by increasing substrate concentration, which increases collision probability and achieves the same Vmax. A non-competitive inhibitor binds to an allosteric site, altering the enzyme tertiary structure and permanently changing the active site shape so it is no longer complementary; this cannot be overcome by adding substrate, reducing Vmax.',
    keyTerms: [
      'Induced-fit model',
      'Conformational change',
      'Active site moulds around substrate',
      'Competitive binds to active site',
      'Non-competitive binds to allosteric site',
      'Alters tertiary structure',
      'Vmax reduction',
    ],
    teacherNotes:
      'Check for BANNED phrases: "lock and key" and "enzymes are killed". Insist on "allosteric site" and "induced fit".',
    recommendedColdCall:
      'Cold-call: "Why does increasing substrate concentration have zero effect on the rate when a non-competitive inhibitor is present?"',
  },

  // 3.1.5 Nucleic Acids
  {
    id: 'pack-3-1-5',
    title: '3.1.5 Nucleic Acids: Semi-Conservative DNA Replication & Enzymes',
    examBoard: 'AQA',
    specCode: '3.1.5',
    aqaUnit: '3.1',
    subject: 'AQA AS Biology (7401)',
    topic: '3.1.5 Nucleic Acids (DNA & RNA)',
    aoLevel: 'AO1 (2 marks) / AO2 (2 marks)',
    totalMarks: 4,
    questionText:
      'Describe the process of semi-conservative DNA replication in eukaryotic cells, detailing the specific roles of DNA helicase and DNA polymerase. (4 marks)',
    contextNote:
      'AQA staple: helicase breaks H-bonds, template strands, free nucleotides align by complementary base pairing, DNA polymerase joins adjacent nucleotides via phosphodiester bonds.',
    flawedAnswer:
      'First, DNA polymerase breaks all the hydrogen bonds between the bases to unwind the double helix. Then free bases float into the cell and DNA helicase forms new hydrogen bonds between adenine and guanine. DNA polymerase then joins the two original strands back together to make an exact photocopy.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'DNA helicase breaks the hydrogen bonds between complementary base pairs, unwinding and separating the two polynucleotide strands.',
        indicativePhrases: ['DNA helicase breaks hydrogen bonds', 'unwinds double helix / separates strands'],
        rejectOrErrors: 'Reject: DNA polymerase breaks hydrogen bonds.',
      },
      {
        markCode: 'M2',
        criteria:
          'Both separated strands act as templates; free DNA nucleotides align and bind to exposed bases by complementary base pairing (A to T, C to G) via hydrogen bonds.',
        indicativePhrases: ['strands act as templates', 'free nucleotides align', 'complementary base pairing (A-T, C-G)'],
      },
      {
        markCode: 'M3',
        criteria:
          'DNA polymerase joins adjacent nucleotides together in condensation reactions, forming phosphodiester bonds between deoxyribose and phosphate groups.',
        indicativePhrases: ['DNA polymerase joins nucleotides', 'forms phosphodiester bonds', 'catalyzes condensation reactions'],
        rejectOrErrors: 'Reject: DNA polymerase forms hydrogen bonds.',
      },
      {
        markCode: 'M4',
        criteria:
          'Replication is semi-conservative: each newly formed double-stranded DNA molecule contains one original (conserved) template strand and one newly synthesised strand.',
        indicativePhrases: ['one original strand and one new strand', 'semi-conservative replication'],
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'DNA polymerase breaks all the hydrogen bonds',
        issueType: 'misconception',
        explanation: 'DNA HELICASE breaks hydrogen bonds between bases, not DNA polymerase.',
        markLost: 1,
        suggestedCorrection: 'DNA helicase breaks hydrogen bonds between complementary bases to unwind the double helix.',
      },
      {
        phrase: 'DNA helicase forms new hydrogen bonds between adenine and guanine',
        issueType: 'misconception',
        explanation: 'Hydrogen bonds form spontaneously between COMPLEMENTARY bases (A-T and C-G). Adenine does not pair with guanine.',
        markLost: 1,
        suggestedCorrection: 'Free DNA nucleotides align with complementary bases (A with T, C with G) and form hydrogen bonds spontaneously.',
      },
      {
        phrase: 'DNA polymerase joins the two original strands back together',
        issueType: 'misconception',
        explanation: 'DNA polymerase joins adjacent NEW nucleotides by forming phosphodiester bonds, synthesising a new complementary strand.',
        markLost: 1,
        suggestedCorrection: 'DNA polymerase forms phosphodiester bonds between adjacent nucleotides to construct the sugar-phosphate backbone.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Inverted the roles of DNA helicase and DNA polymerase, stated A pairs with G, and failed to understand semi-conservative replication.',
    },
    exemplarRewrite:
      'Semi-conservative replication begins when the enzyme DNA helicase breaks the hydrogen bonds between complementary base pairs, unwinding the double helix and separating the two polynucleotide strands. Both original strands serve as templates. Free DNA nucleotides in the nucleoplasm are attracted to the exposed bases and align by complementary base pairing, with adenine pairing with thymine via two hydrogen bonds and cytosine pairing with guanine via three hydrogen bonds. The enzyme DNA polymerase then catalyses condensation reactions that join adjacent nucleotides together, forming covalent phosphodiester bonds between the deoxyribose of one nucleotide and the phosphate group of the next to build the new sugar-phosphate backbone. Each resulting DNA molecule contains one original parental strand and one newly synthesised strand.',
    keyTerms: [
      'DNA helicase (breaks H-bonds)',
      'Template strands',
      'Complementary base pairing (A-T, C-G)',
      'DNA polymerase',
      'Phosphodiester bonds',
      'Semi-conservative (one original, one new)',
    ],
    teacherNotes:
      'Classic AQA exam error: students claiming DNA polymerase forms hydrogen bonds. Hydrogen bonds form spontaneously; DNA polymerase forms phosphodiester bonds.',
    recommendedColdCall:
      'Cold-call: "What exact chemical bond does DNA polymerase catalyse between adjacent nucleotides?"',
  },

  // 3.1.6 ATP and Water
  {
    id: 'pack-3-1-6',
    title: '3.1.6 ATP & Water: Hydrolysis, Phosphorylation & Physical Properties',
    examBoard: 'AQA',
    specCode: '3.1.6',
    aqaUnit: '3.1',
    subject: 'AQA AS Biology (7401)',
    topic: '3.1.6 ATP and Water',
    aoLevel: 'AO1 (2 marks) / AO2 (2 marks)',
    totalMarks: 4,
    questionText:
      'Explain the properties of ATP that make it a suitable immediate energy source in cells, and explain how the high latent heat of vaporisation and high specific heat capacity of water support living organisms. (4 marks)',
    contextNote:
      'AQA requirement: ATP releases energy in small manageable amounts, single-step hydrolysis, phosphorylates other compounds; water buffers temperature fluctuations and provides cooling effect.',
    flawedAnswer:
      'ATP is a great energy store because it holds onto huge amounts of energy for months inside the nucleus like glycogen. When broken down it makes thousands of glucose molecules. Water has a high specific heat capacity which means sweat evaporates easily to cool us down, and a high latent heat of vaporisation which keeps the temperature of lakes completely boiling hot.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'ATP releases energy in small, manageable amounts (so little energy is wasted as heat) compared to glucose.',
        indicativePhrases: ['small, manageable amounts of energy', 'releases energy in small quantities'],
        rejectOrErrors: 'Reject: ATP is a long-term energy store.',
      },
      {
        markCode: 'M2',
        criteria:
          'ATP hydrolysis is a single-step reaction that releases immediate energy, and the released inorganic phosphate (Pi) can phosphorylate other compounds to make them more reactive.',
        indicativePhrases: ['single-step reaction', 'immediate energy donor', 'phosphorylation makes compounds more reactive'],
      },
      {
        markCode: 'M3',
        criteria:
          'Water has a high specific heat capacity (due to many hydrogen bonds), buffering sudden changes in temperature in aquatic habitats and internal cellular environments.',
        indicativePhrases: ['buffers temperature changes', 'resists temperature fluctuations', 'aquatic habitats thermally stable'],
      },
      {
        markCode: 'M4',
        criteria:
          'Water has a high latent heat of vaporisation, providing a significant cooling effect through evaporation of sweat / transpiration with minimal loss of body water.',
        indicativePhrases: ['cooling effect through evaporation', 'removes heat energy when sweat evaporates'],
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'ATP is a great energy store because it holds onto huge amounts of energy for months',
        issueType: 'misconception',
        explanation: 'ATP is an IMMEDIATE energy donor, never a long-term store (glycogen and lipids store energy long-term). It releases small, manageable quantities of energy.',
        markLost: 1,
        suggestedCorrection: 'ATP is an immediate energy donor that releases energy in small, manageable amounts via single-step hydrolysis.',
      },
      {
        phrase: 'high specific heat capacity which means sweat evaporates easily to cool us down',
        issueType: 'misconception',
        explanation: 'Sweat cooling is due to HIGH LATENT HEAT OF VAPORISATION. Specific heat capacity buffers aquatic temperatures.',
        markLost: 1,
        suggestedCorrection: 'Evaporative cooling of sweat is due to waters high latent heat of vaporisation.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Claimed ATP is a long-term storage molecule, and inverted the biological roles of specific heat capacity and latent heat of vaporisation.',
    },
    exemplarRewrite:
      'ATP is well-suited as an immediate cellular energy source because its hydrolysis (catalysed by ATP hydrolase into ADP and inorganic phosphate) occurs in a single-step reaction, releasing energy instantly in small, manageable amounts that prevent thermal cell damage. Furthermore, the liberated inorganic phosphate can phosphorylate other molecules, lowering their activation energy and making them more reactive. Regarding water, its high specific heat capacity—caused by the extensive network of hydrogen bonds requiring substantial energy to break—enables it to buffer temperature fluctuations, creating a stable thermal environment within organisms and aquatic ecosystems. Additionally, waters high latent heat of vaporisation means that the evaporation of relatively small volumes of water (such as sweat in mammals or transpiration in plants) removes a large amount of heat energy, providing an effective cooling mechanism.',
    keyTerms: [
      'Immediate energy donor',
      'Small, manageable amounts',
      'Single-step hydrolysis',
      'Phosphorylation (Pi)',
      'High specific heat capacity (buffers temperature)',
      'High latent heat of vaporisation (cooling effect)',
    ],
    teacherNotes:
      'AQA warning: students constantly confuse high latent heat of vaporisation with high specific heat capacity. Latent heat = evaporation/cooling; specific heat = thermal buffering.',
    recommendedColdCall:
      'Cold-call: "Why is ATP classified as an immediate energy donor rather than an energy storage molecule?"',
  },
];
