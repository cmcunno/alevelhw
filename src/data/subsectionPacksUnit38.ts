import { FlawedQuestion } from '../types';

export const SUBSECTION_PACKS_UNIT_38: FlawedQuestion[] = [
  // 3.8.1 Mutations & Stem Cells
  {
    id: 'pack-3-8-1',
    title: '3.8.1 Gene Expression: Gene Mutations, Stem Cells & Epigenetics',
    examBoard: 'AQA',
    specCode: '3.8.1',
    aqaUnit: '3.8',
    subject: 'AQA A-Level Biology (7402)',
    topic: '3.8.1 Gene Mutations (Frameshift, Totipotent/Pluripotent Stem Cells)',
    aoLevel: 'AO1 (3 marks) / AO2 (2 marks)',
    totalMarks: 5,
    questionText:
      'Explain why a base deletion mutation usually has a far more significant impact on the structure and function of the encoded polypeptide than a single base substitution mutation, and define the differences between totipotent and pluripotent stem cells. (5 marks)',
    contextNote:
      'AQA Chief Examiner focus: Deletion causes a frameshift altering all subsequent triplet codons, changing entire primary sequence from mutation point onwards, leading to altered H/ionic/disulfide bonds and tertiary structure (loss of active site/function). Substitution affects only one codon and may be silent due to genetic code degeneracy. Totipotent = can divide and differentiate into ANY body cell type PLUS extraembryonic/placental cells; Pluripotent = can differentiate into almost any body cell type but NOT placental cells.',
    flawedAnswer:
      'A deletion removes an entire chromosome so the cell cannot divide. A substitution swaps an amino acid with a sugar. Totipotent stem cells can only make one tissue type like skin, while pluripotent stem cells can turn into anything including a new placenta.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Base deletion causes a frameshift (reading frame shifts by one base), altering all subsequent triplet codons / base triplets from the point of mutation downstream.',
        indicativePhrases: ['base deletion causes frameshift', 'shifts reading frame', 'alters all subsequent codons / triplets'],
        rejectOrErrors: 'Reject: deletion removes an entire chromosome.',
      },
      {
        markCode: 'M2',
        criteria:
          'This alters the primary structure (amino acid sequence) of the polypeptide from that point onwards, changing the positioning of R-groups.',
        indicativePhrases: ['alters amino acid sequence / primary structure', 'changes different amino acids'],
        rejectOrErrors: 'Reject: changes only one amino acid.',
      },
      {
        markCode: 'M3',
        criteria:
          'Consequently, hydrogen bonds, ionic bonds and disulfide bridges form in different positions, altering the tertiary structure and shape of the protein (e.g. active site no longer complementary to substrate).',
        indicativePhrases: ['changes hydrogen / ionic / disulfide bonds', 'alters tertiary structure / folding', 'active site non-functional'],
        rejectOrErrors: 'Reject: denatures the protein (mutations do not denature proteins; they change coded structure).',
      },
      {
        markCode: 'M4',
        criteria:
          'In contrast, base substitution only alters one single triplet codon; due to the degenerate nature of the genetic code, the new triplet may code for the same amino acid (silent mutation) or change just one amino acid.',
        indicativePhrases: ['substitution alters only one codon', 'degenerate code means same amino acid', 'silent mutation / one amino acid altered'],
        rejectOrErrors: 'Reject: substitution swaps amino acid with a sugar.',
      },
      {
        markCode: 'M5',
        criteria:
          'Totipotent stem cells can differentiate into any type of body cell plus extraembryonic / placental tissues; pluripotent stem cells can differentiate into almost all specialized body cell types but cannot form placental / extraembryonic cells.',
        indicativePhrases: ['totipotent forms any cell + placenta / extraembryonic', 'pluripotent forms almost all body cells but NOT placenta'],
        rejectOrErrors: 'Reject: inverting totipotent and pluripotent definitions.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'A deletion removes an entire chromosome so the cell cannot divide',
        issueType: 'misconception',
        explanation:
          'A base deletion is a gene mutation involving the loss of a single nucleotide base pair within DNA, not the loss of an entire chromosome.',
        markLost: 1,
        suggestedCorrection:
          'A base deletion deletes a nucleotide, causing a frameshift that alters all downstream triplet codons.',
      },
      {
        phrase: 'A substitution swaps an amino acid with a sugar',
        issueType: 'misconception',
        explanation:
          'A base substitution swaps one nucleotide base for another in DNA (e.g. adenine for cytosine), which may alter one codon.',
        markLost: 1,
        suggestedCorrection:
          'Base substitution replaces one nucleotide base, only altering one codon (and may be silent due to degeneracy).',
      },
      {
        phrase: 'Totipotent stem cells can only make one tissue type like skin, while pluripotent stem cells can turn into anything including a new placenta',
        issueType: 'misconception',
        explanation:
          'Direct inversion: Totipotent stem cells can form all body cells PLUS placenta. Pluripotent stem cells can form almost all body cells, but NOT placental tissues. (Unipotent makes one tissue).',
        markLost: 2,
        suggestedCorrection:
          'Totipotent cells can divide into any cell type plus placental cells; pluripotent cells form almost any body cell but cannot form placental cells.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 5,
      summary:
        'Awarded 0/5 marks. Conflated gene mutations with chromosomal loss, described substitutions as biochemical swaps for sugars, and inverted the definitions of totipotent and pluripotent stem cells.',
    },
    exemplarRewrite:
      'A base deletion mutation results in a frameshift, shifting the three-base reading frame of the gene by one nucleotide. Because the genetic code is read in non-overlapping triplets, every single downstream triplet codon following the deletion is altered. This fundamentally alters the primary structure (sequence of amino acids) of the translated polypeptide. As a result, hydrogen, ionic, and disulfide bonds form in aberrant locations, severely distorting the tertiary 3D structure and rendering the protein non-functional (e.g. altering an enzyme active site so substrates cannot bind). In contrast, a base substitution mutation only affects a single triplet codon; because the genetic code is degenerate (multiple codons code for the same amino acid), the substitution may still code for the identical amino acid (a silent mutation) or change only one amino acid with minor conformational impact. Regarding stem cells: totipotent stem cells are present in early mammalian embryos and can differentiate into any body cell type as well as extraembryonic/placental tissues; pluripotent stem cells (e.g. from the blastocyst inner cell mass) can differentiate into almost all specialized somatic cell types, but cannot produce placental cells.',
    keyTerms: [
      'Base deletion (frameshift mutation)',
      'Alters downstream triplet codons',
      'Altered primary structure',
      'Changes hydrogen, ionic, disulfide bonds',
      'Loss of tertiary conformation / active site',
      'Base substitution (one codon, degenerate code)',
      'Totipotent stem cells (any cell + placenta)',
      'Pluripotent stem cells (almost all body cells, no placenta)',
    ],
    teacherNotes:
      'Crucial terminology: Do NOT allow students to write "the mutation denatures the protein". Denaturation is thermal or pH-driven unfolding; mutations alter the genetically coded primary structure and resulting tertiary fold.',
    recommendedColdCall:
      'Why would a deletion of 3 consecutive bases potentially have less impact than a deletion of 1 single base?',
  },

  // 3.8.2 Control of Gene Expression & Cancer (Epigenetics, siRNA, Oestrogen, Tumour Suppressors)
  {
    id: 'pack-3-8-2',
    title: '3.8.2 Epigenetics & Cancer: DNA Methylation, Histone Acetylation & Tumour Suppressor Genes',
    examBoard: 'AQA',
    specCode: '3.8.2',
    aqaUnit: '3.8',
    subject: 'AQA A-Level Biology (7402)',
    topic: '3.8.2 Epigenetics and Cancer (Methylation, Acetylation & Oncogenes)',
    aoLevel: 'AO1 (3 marks) / AO2 (2 marks)',
    totalMarks: 5,
    questionText:
      'Explain how increased DNA methylation and decreased histone acetylation inhibit transcription, and explain how hypermethylation of tumour suppressor genes can lead to the development of cancer. (5 marks)',
    contextNote:
      'AQA Chief Examiner focus: Increased methylation adds methyl groups to cytosine bases in CpG islands of promoters, preventing transcriptional factors/RNA polymerase from binding. Decreased acetylation removes acetyl groups from histones, increasing positive charge on histones, causing DNA (negatively charged) to bind more tightly, chromatin condenses/becomes inaccessible to RNA polymerase. Hypermethylation of tumour suppressor gene promoter switches gene off, stops synthesis of protein that slows cell cycle/triggers apoptosis, leading to unregulated rapid mitosis and formation of malignant tumours.',
    flawedAnswer:
      'Increased methylation adds acid to histones so the DNA melts. Decreased acetylation means histones become negative and repel DNA so transcription stops. In cancer, hypermethylation turns on oncogenes so cells stop dividing and die.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Increased DNA methylation attaches methyl groups (-CH3) to cytosine bases (in CpG islands) in the promoter region of a gene.',
        indicativePhrases: ['methyl groups added to cytosine / DNA', 'in promoter region', 'hypermethylation'],
        rejectOrErrors: 'Reject: methyl groups added to histones.',
      },
      {
        markCode: 'M2',
        criteria:
          'This prevents transcription factors and RNA polymerase from binding to the promoter DNA, inhibiting transcription.',
        indicativePhrases: ['prevents transcription factors binding', 'RNA polymerase cannot bind', 'inhibits transcription / no mRNA formed'],
        rejectOrErrors: 'Reject: DNA melts.',
      },
      {
        markCode: 'M3',
        criteria:
          'Decreased acetylation removes acetyl groups from histones, increasing the positive charge on histones so they attract the negatively charged phosphate backbone of DNA more strongly; chromatin condenses / becomes tightly packed (heterochromatin), making promoter inaccessible.',
        indicativePhrases: ['decreased acetylation / deacetylation', 'histones more positively charged', 'chromatin condenses / DNA binds tightly', 'promoter inaccessible'],
        rejectOrErrors: 'Reject: histones become negative and repel DNA.',
      },
      {
        markCode: 'M4',
        criteria:
          'Tumour suppressor genes produce proteins that slow down cell division / regulate the cell cycle and trigger apoptosis (programmed cell death) of damaged cells.',
        indicativePhrases: ['tumour suppressor genes slow cell division', 'regulate cell cycle', 'trigger apoptosis'],
        rejectOrErrors: 'Reject: tumour suppressor genes cause cancer directly.',
      },
      {
        markCode: 'M5',
        criteria:
          'Hypermethylation of tumour suppressor gene promoters silences / switches off transcription of the gene, so the protective protein is not synthesized; this leads to uncontrolled rapid cell division (mitosis) and tumour development.',
        indicativePhrases: ['hypermethylation silences tumour suppressor gene', 'no protective protein produced', 'uncontrolled cell division / mitosis', 'formation of tumour'],
        rejectOrErrors: 'Reject: hypermethylation turns on oncogenes.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Increased methylation adds acid to histones so the DNA melts',
        issueType: 'misconception',
        explanation:
          'DNA methylation adds methyl groups to cytosine bases on DNA promoters (not histones), blocking transcription factors without melting DNA.',
        markLost: 2,
        suggestedCorrection:
          'Increased methylation adds methyl groups to cytosine on DNA promoters, physically preventing transcription factor and RNA polymerase binding.',
      },
      {
        phrase: 'Decreased acetylation means histones become negative and repel DNA',
        issueType: 'misconception',
        explanation:
          'Completely inverted: Acetyl groups neutralise positive charges on histones. Deacetylation INCREASES positive charge on histones, causing them to tightly bind negatively charged DNA (condensing chromatin).',
        markLost: 1,
        suggestedCorrection:
          'Deacetylation increases positive charges on histones, tightly condensing chromatin and preventing RNA polymerase access.',
      },
      {
        phrase: 'hypermethylation turns on oncogenes so cells stop dividing and die',
        issueType: 'misconception',
        explanation:
          'Hypermethylation SILENCES genes (it switches off tumour suppressor genes). Oncogenes are activated by hypomethylation. Cancer is characterised by uncontrolled cell division, not cells stopping division.',
        markLost: 2,
        suggestedCorrection:
          'Hypermethylation silences tumour suppressor genes, preventing production of cell-cycle brake proteins, causing uncontrolled mitosis.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 5,
      summary:
        'Awarded 0/5 marks. Confounded methylation of DNA with histones, inverted histone charge interactions in deacetylation, and misstated cancer genetics by claiming hypermethylation activates oncogenes to stop cell division.',
    },
    exemplarRewrite:
      'Increased DNA methylation involves the enzymatic addition of methyl groups to cytosine bases within CpG sites of the promoter region of a gene. This alters the promoter topography and prevents transcription factors and RNA polymerase from binding, thereby silencing transcription and halting mRNA synthesis. In tandem, decreased acetylation of histones (deacetylation) removes acetyl groups, augmenting the positive charge on histone protein lysine residues. These positively charged histones bind much more tightly to the negatively charged phosphate groups of the DNA backbone, causing the chromatin to condense tightly into heterochromatin and making promoter sequences physically inaccessible to transcriptional machinery. In healthy tissue, tumour suppressor genes encode regulatory proteins that inhibit cell division, repair DNA damage, and stimulate apoptosis in abnormal cells. When the promoter regions of tumour suppressor genes undergo hypermethylation, transcription of these protective genes is switched off and the proteins are not produced. Without these regulatory brakes on the cell cycle, cells undergo uncontrolled rapid mitosis, accumulating genetic mutations and forming a malignant tumour.',
    keyTerms: [
      'DNA methylation (methyl groups on cytosine)',
      'Promoter region blocking',
      'Transcription factors & RNA polymerase inhibited',
      'Decreased histone acetylation (deacetylation)',
      'Positively charged histones bind DNA tightly',
      'Chromatin condensation (heterochromatin)',
      'Tumour suppressor genes',
      'Cell cycle regulation & apoptosis',
      'Hypermethylation silences gene',
      'Uncontrolled mitosis (tumour formation)',
    ],
    teacherNotes:
      'Chief Examiner mnemonic: "Methylation Mutes" (high methylation = gene off), "Acetylation Activates" (high acetylation = chromatin relaxes, gene on).',
    recommendedColdCall:
      'Explain how hypomethylation (too few methyl groups) of proto-oncogenes can also lead to cancer.',
  },

  // 3.8.3 Gene Technologies (PCR, Gel Electrophoresis, Recombinant Plasmids, CRISPR/Gene Probes)
  {
    id: 'pack-3-8-3',
    title: '3.8.3 Gene Technologies: PCR, DNA Primers, Plasmids & Marker Genes',
    examBoard: 'AQA',
    specCode: '3.8.3',
    aqaUnit: '3.8',
    subject: 'AQA A-Level Biology (7402)',
    topic: '3.8.3 Gene Technologies (PCR, Restriction Enzymes, Vectors & Markers)',
    aoLevel: 'AO1 (3 marks) / AO2 (2 marks)',
    totalMarks: 5,
    questionText:
      'Describe the three temperature stages of a Polymerase Chain Reaction (PCR) cycle and explain the role of DNA primers and Taq polymerase in the amplification of a target DNA fragment. (5 marks)',
    contextNote:
      'AQA Chief Examiner focus: Stage 1 (95°C): breaks hydrogen bonds between bases, separating double-stranded DNA into single strands; Stage 2 (55°C): annealing of DNA primers (short single-stranded sequences of nucleotides complementary to opposite ends of target sequence); Stage 3 (72°C): extension by Taq DNA polymerase adding complementary free DNA nucleotides, synthesizing new strands; Taq is thermostable (does not denature at 95°C).',
    flawedAnswer:
      'First stage is 100°C which boils the DNA to kill bacteria. Second stage is 20°C where primers join the middle of the DNA to cut it into pieces using restriction enzymes. Third stage is 37°C where human DNA polymerase copies the RNA because it works best at human body temperature.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Stage 1: Heated to approximately 95°C to break hydrogen bonds between complementary base pairs, separating DNA into two single strands.',
        indicativePhrases: ['heated to 95°C', 'breaks hydrogen bonds', 'separates double-stranded DNA into single strands'],
        rejectOrErrors: 'Reject: breaks phosphodiester bonds or boils DNA to kill bacteria.',
      },
      {
        markCode: 'M2',
        criteria:
          'Stage 2: Cooled to approximately 50-60°C (annealing) to allow DNA primers to bind / anneal to complementary bases at the ends of target DNA sequences.',
        indicativePhrases: ['cooled to 55°C', 'annealing of primers', 'primers bind to complementary sequences at ends of fragment'],
        rejectOrErrors: 'Reject: primers cut DNA into pieces.',
      },
      {
        markCode: 'M3',
        criteria:
          'DNA primers are short single-stranded sequences of DNA nucleotides that provide a starting point for DNA polymerase (indicate starting point for replication and prevent rejoining of strands).',
        indicativePhrases: ['primers are short single-stranded DNA', 'provide starting point for DNA polymerase', 'complementary to ends of target sequence'],
        rejectOrErrors: 'Reject: primers are enzymes.',
      },
      {
        markCode: 'M4',
        criteria:
          'Stage 3: Heated to approximately 72°C (optimum temperature for Taq DNA polymerase) to synthesize new complementary DNA strands by adding free DNA nucleotides via complementary base pairing.',
        indicativePhrases: ['heated to 72°C', 'Taq polymerase adds free DNA nucleotides', 'synthesizes complementary strands via phosphodiester bonds'],
        rejectOrErrors: 'Reject: Taq polymerase adds amino acids or copies RNA.',
      },
      {
        markCode: 'M5',
        criteria:
          'Taq polymerase is thermostable (derived from thermophilic bacteria) so it is not denatured by the high temperature (95°C) in repeated PCR cycles.',
        indicativePhrases: ['Taq is thermostable', 'does not denature at 95°C', 'heat-tolerant'],
        rejectOrErrors: 'Reject: human DNA polymerase is used.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: '100°C which boils the DNA to kill bacteria',
        issueType: 'misconception',
        explanation:
          'Heating to 95°C is to break hydrogen bonds between bases and separate double strands into single strands, not to kill bacteria.',
        markLost: 1,
        suggestedCorrection:
          'Heated to 95°C to break hydrogen bonds and separate DNA into single strands.',
      },
      {
        phrase: 'primers join the middle of the DNA to cut it into pieces using restriction enzymes',
        issueType: 'misconception',
        explanation:
          'Primers are short single-stranded DNA sequences that anneal to the ends of the target sequence to initiate DNA polymerase extension; they do not cut DNA.',
        markLost: 2,
        suggestedCorrection:
          'Cooled to 55°C so short single-stranded DNA primers anneal to complementary sequences at the ends of the target DNA.',
      },
      {
        phrase: 'human DNA polymerase copies the RNA because it works best at human body temperature',
        issueType: 'misconception',
        explanation:
          'Human DNA polymerase would denature at 95°C. PCR uses thermostable Taq polymerase operating at 72°C to polymerise free DNA nucleotides.',
        markLost: 2,
        suggestedCorrection:
          'Heated to 72°C where thermostable Taq DNA polymerase adds free DNA nucleotides; it does not denature during repeated cycles.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 5,
      summary:
        'Awarded 0/5 marks. Completely incorrect temperatures and rationales (killing bacteria, cutting DNA with primers, and using heat-labile human DNA polymerase).',
    },
    exemplarRewrite:
      'The Polymerase Chain Reaction (PCR) operates in a continuous thermal cycle consisting of three distinct temperature stages: Stage 1 (Denaturation): The reaction mixture is heated to 95°C to break the hydrogen bonds between complementary base pairs, separating the double-stranded DNA into two template single strands without rupturing the covalent phosphodiester backbone. Stage 2 (Annealing): The temperature is lowered to 55°C, allowing DNA primers to anneal (bind) via complementary base pairing to the 3\' ends of each single-stranded DNA fragment. These primers are short, single-stranded oligonucleotides that provide the essential starting point for DNA polymerase and prevent the template strands from re-annealing. Stage 3 (Extension): The mixture is heated to 72°C, the optimum temperature for Taq DNA polymerase. Taq polymerase attaches to the primers and adds free complementary DNA nucleotides (dATP, dCTP, dGTP, dTTP) to synthesize new complementary strands by forming phosphodiester bonds. Crucially, Taq polymerase is thermostable (isolated from the thermophilic bacterium Thermus aquaticus), ensuring it does not denature during the 95°C heating steps of repeated exponential cycles.',
    keyTerms: [
      'Denaturation (95°C - breaks hydrogen bonds)',
      'Annealing (55°C - primer binding)',
      'DNA primers (short single-stranded oligonucleotides)',
      'Extension (72°C - synthesis of strands)',
      'Free DNA nucleotides',
      'Taq DNA polymerase',
      'Thermostable (resists denaturation at 95°C)',
      'Phosphodiester bond formation',
    ],
    teacherNotes:
      'Make sure students define a primer properly: "short single-stranded sequence of DNA bases complementary to the ends of the fragment being amplified".',
    recommendedColdCall:
      'Why would human DNA polymerase be useless in a commercial PCR thermocycler?',
  },
];
