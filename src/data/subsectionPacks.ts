import { FlawedQuestion, AqaUnit, YearGroup } from '../types';
import { SUBSECTION_PACKS_UNIT_31 } from './subsectionPacksUnit31';
import { SUBSECTION_PACKS_UNIT_32 } from './subsectionPacksUnit32';
import { SUBSECTION_PACKS_UNIT_33 } from './subsectionPacksUnit33';
import { SUBSECTION_PACKS_UNIT_34 } from './subsectionPacksUnit34';
import { SUBSECTION_PACKS_UNIT_35 } from './subsectionPacksUnit35';
import { SUBSECTION_PACKS_UNIT_36 } from './subsectionPacksUnit36';
import { SUBSECTION_PACKS_UNIT_37 } from './subsectionPacksUnit37';
import { SUBSECTION_PACKS_UNIT_38 } from './subsectionPacksUnit38';

export const YEAR_12_SUBSECTION_PACKS: FlawedQuestion[] = [
  ...SUBSECTION_PACKS_UNIT_31,
  ...SUBSECTION_PACKS_UNIT_32,
  ...SUBSECTION_PACKS_UNIT_33,
  ...SUBSECTION_PACKS_UNIT_34,
];

export const YEAR_13_SUBSECTION_PACKS: FlawedQuestion[] = [
  ...SUBSECTION_PACKS_UNIT_35,
  ...SUBSECTION_PACKS_UNIT_36,
  ...SUBSECTION_PACKS_UNIT_37,
  ...SUBSECTION_PACKS_UNIT_38,
];

export const ALL_AQA_SUBSECTION_PACKS: FlawedQuestion[] = [
  ...YEAR_12_SUBSECTION_PACKS,
  ...YEAR_13_SUBSECTION_PACKS,
];

export interface SubsectionInfo {
  specCode: string;
  unit: AqaUnit;
  shortTitle: string;
  fullTitle: string;
  topicNumber: string;
  questionId: string;
}

export const AQA_SUBSECTIONS_METADATA: SubsectionInfo[] = [
  // Unit 3.1
  {
    specCode: '3.1.1',
    unit: '3.1',
    shortTitle: 'Monomers & Polymers',
    fullTitle: '3.1.1 Monomers and Polymers (Condensation & Hydrolysis)',
    topicNumber: '3.1.1',
    questionId: 'pack-3-1-1',
  },
  {
    specCode: '3.1.2',
    unit: '3.1',
    shortTitle: 'Carbohydrates',
    fullTitle: '3.1.2 Carbohydrates (Starch, Glycogen & Cellulose)',
    topicNumber: '3.1.2',
    questionId: 'pack-3-1-2',
  },
  {
    specCode: '3.1.3',
    unit: '3.1',
    shortTitle: 'Lipids',
    fullTitle: '3.1.3 Lipids (Triglycerides & Phospholipids)',
    topicNumber: '3.1.3',
    questionId: 'pack-3-1-3',
  },
  {
    specCode: '3.1.4',
    unit: '3.1',
    shortTitle: 'Proteins & Enzymes',
    fullTitle: '3.1.4 Proteins and Enzymes (Induced Fit & Inhibitors)',
    topicNumber: '3.1.4',
    questionId: 'pack-3-1-4',
  },
  {
    specCode: '3.1.5',
    unit: '3.1',
    shortTitle: 'Nucleic Acids',
    fullTitle: '3.1.5 Nucleic Acids (DNA Replication & Enzymes)',
    topicNumber: '3.1.5',
    questionId: 'pack-3-1-5',
  },
  {
    specCode: '3.1.6',
    unit: '3.1',
    shortTitle: 'ATP & Water',
    fullTitle: '3.1.6 ATP & Water (Hydrolysis & Physical Properties)',
    topicNumber: '3.1.6',
    questionId: 'pack-3-1-6',
  },

  // Unit 3.2
  {
    specCode: '3.2.1',
    unit: '3.2',
    shortTitle: 'Cell Structure',
    fullTitle: '3.2.1 Cell Structure & Ultracentrifugation',
    topicNumber: '3.2.1',
    questionId: 'pack-3-2-1',
  },
  {
    specCode: '3.2.2',
    unit: '3.2',
    shortTitle: 'Mitosis & Cell Cycle',
    fullTitle: '3.2.2 Mitosis and the Cell Cycle',
    topicNumber: '3.2.2',
    questionId: 'pack-3-2-2',
  },
  {
    specCode: '3.2.3',
    unit: '3.2',
    shortTitle: 'Transport Across Membranes',
    fullTitle: '3.2.3 Transport Across Cell Membranes (Co-transport & Osmosis)',
    topicNumber: '3.2.3',
    questionId: 'pack-3-2-3',
  },
  {
    specCode: '3.2.4',
    unit: '3.2',
    shortTitle: 'Immunology & ELISA',
    fullTitle: '3.2.4 Cell Recognition and Immune System (ELISA & Phagocytosis)',
    topicNumber: '3.2.4',
    questionId: 'pack-3-2-4',
  },

  // Unit 3.3
  {
    specCode: '3.3.1',
    unit: '3.3',
    shortTitle: 'Surface Area to Volume',
    fullTitle: '3.3.1 Surface Area to Volume Ratio & Metabolic Rate',
    topicNumber: '3.3.1',
    questionId: 'pack-3-3-1',
  },
  {
    specCode: '3.3.2',
    unit: '3.3',
    shortTitle: 'Gas Exchange Systems',
    fullTitle: '3.3.2 Gas Exchange Systems (Counter-Current Fish Gills)',
    topicNumber: '3.3.2',
    questionId: 'pack-3-3-2',
  },
  {
    specCode: '3.3.3',
    unit: '3.3',
    shortTitle: 'Digestion & Absorption',
    fullTitle: '3.3.3 Digestion & Absorption (Lipid Micelles & Chylomicrons)',
    topicNumber: '3.3.3',
    questionId: 'pack-3-3-3',
  },
  {
    specCode: '3.3.4',
    unit: '3.3',
    shortTitle: 'Mass Transport in Animals',
    fullTitle: '3.3.4 Mass Transport in Animals (Cardiac Cycle & Pressure)',
    topicNumber: '3.3.4',
    questionId: 'pack-3-3-4',
  },
  {
    specCode: '3.3.5',
    unit: '3.3',
    shortTitle: 'Mass Transport in Plants',
    fullTitle: '3.3.5 Mass Transport in Plants (Cohesion-Tension & Transpiration)',
    topicNumber: '3.3.5',
    questionId: 'pack-3-3-5',
  },

  // Unit 3.4
  {
    specCode: '3.4.1',
    unit: '3.4',
    shortTitle: 'DNA, Genes & Chromosomes',
    fullTitle: '3.4.1 DNA, Genes and Chromosomes (Degenerate Code & Introns)',
    topicNumber: '3.4.1',
    questionId: 'pack-3-4-1',
  },
  {
    specCode: '3.4.2',
    unit: '3.4',
    shortTitle: 'DNA & Protein Synthesis',
    fullTitle: '3.4.2 DNA & Protein Synthesis (Transcription & Splicing)',
    topicNumber: '3.4.2',
    questionId: 'pack-3-4-2',
  },
  {
    specCode: '3.4.3',
    unit: '3.4',
    shortTitle: 'Meiosis & Mutation',
    fullTitle: '3.4.3 Genetic Diversity from Mutation & Meiosis',
    topicNumber: '3.4.3',
    questionId: 'pack-3-4-3',
  },
  {
    specCode: '3.4.4',
    unit: '3.4',
    shortTitle: 'Natural Selection',
    fullTitle: '3.4.4 Genetic Diversity and Adaptation (Natural Selection)',
    topicNumber: '3.4.4',
    questionId: 'pack-3-4-4',
  },
  {
    specCode: '3.4.5',
    unit: '3.4',
    shortTitle: 'Taxonomy & Courtship',
    fullTitle: '3.4.5 Species, Taxonomy and Courtship Behaviour',
    topicNumber: '3.4.5',
    questionId: 'pack-3-4-5',
  },
  {
    specCode: '3.4.6',
    unit: '3.4',
    shortTitle: 'Biodiversity in Communities',
    fullTitle: '3.4.6 Biodiversity within a Community (Simpson\'s Index)',
    topicNumber: '3.4.6',
    questionId: 'pack-3-4-6',
  },
  {
    specCode: '3.4.7',
    unit: '3.4',
    shortTitle: 'Investigating Diversity',
    fullTitle: '3.4.7 Investigating Diversity (Molecular Phylogeny & SD Overlap)',
    topicNumber: '3.4.7',
    questionId: 'pack-3-4-7',
  },

  // Unit 3.5 (Year 13: Energy Transfers)
  {
    specCode: '3.5.1',
    unit: '3.5',
    shortTitle: 'Photosynthesis',
    fullTitle: '3.5.1 Photosynthesis (Light-Dependent Reaction & Calvin Cycle)',
    topicNumber: '3.5.1',
    questionId: 'pack-3-5-1',
  },
  {
    specCode: '3.5.2',
    unit: '3.5',
    shortTitle: 'Respiration',
    fullTitle: '3.5.2 Respiration (Glycolysis, Krebs & Oxidative Phosphorylation)',
    topicNumber: '3.5.2',
    questionId: 'pack-3-5-2',
  },
  {
    specCode: '3.5.3',
    unit: '3.5',
    shortTitle: 'Energy & Ecosystems',
    fullTitle: '3.5.3 Energy and Ecosystems (GPP, NPP & Trophic Efficiency)',
    topicNumber: '3.5.3',
    questionId: 'pack-3-5-3',
  },
  {
    specCode: '3.5.4',
    unit: '3.5',
    shortTitle: 'Nutrient Cycles',
    fullTitle: '3.5.4 Nutrient Cycles (Nitrogen Cycle & Mycorrhizae)',
    topicNumber: '3.5.4',
    questionId: 'pack-3-5-4',
  },

  // Unit 3.6 (Year 13: Response to Stimuli & Coordination)
  {
    specCode: '3.6.1',
    unit: '3.6',
    shortTitle: 'Stimuli & Receptors',
    fullTitle: '3.6.1 Stimuli and Receptors (Pacinian Corpuscle & Eye)',
    topicNumber: '3.6.1',
    questionId: 'pack-3-6-1',
  },
  {
    specCode: '3.6.2',
    unit: '3.6',
    shortTitle: 'Nervous Coordination',
    fullTitle: '3.6.2 Nervous Coordination (Action Potentials & Synaptic Transmission)',
    topicNumber: '3.6.2',
    questionId: 'pack-3-6-2',
  },
  {
    specCode: '3.6.3',
    unit: '3.6',
    shortTitle: 'Muscle Contraction',
    fullTitle: '3.6.3 Skeletal Muscle (Sliding Filament Theory, Ca2+ & ATP)',
    topicNumber: '3.6.3',
    questionId: 'pack-3-6-3',
  },
  {
    specCode: '3.6.4',
    unit: '3.6',
    shortTitle: 'Homeostasis & Kidney',
    fullTitle: '3.6.4 Homeostasis (Blood Glucose, Second Messenger & Kidney Osmoregulation)',
    topicNumber: '3.6.4',
    questionId: 'pack-3-6-4',
  },

  // Unit 3.7 (Year 13: Genetics, Populations & Evolution)
  {
    specCode: '3.7.1',
    unit: '3.7',
    shortTitle: 'Inheritance & Linkage',
    fullTitle: '3.7.1 Inheritance (Monohybrid, Dihybrid, Autosomal Linkage & Epistasis)',
    topicNumber: '3.7.1',
    questionId: 'pack-3-7-1',
  },
  {
    specCode: '3.7.2',
    unit: '3.7',
    shortTitle: 'Hardy-Weinberg',
    fullTitle: '3.7.2 Populations & Hardy-Weinberg Principle',
    topicNumber: '3.7.2',
    questionId: 'pack-3-7-2',
  },
  {
    specCode: '3.7.3',
    unit: '3.7',
    shortTitle: 'Speciation & Evolution',
    fullTitle: '3.7.3 Evolution and Speciation (Allopatric & Sympatric)',
    topicNumber: '3.7.3',
    questionId: 'pack-3-7-3',
  },

  // Unit 3.8 (Year 13: Control of Gene Expression)
  {
    specCode: '3.8.1',
    unit: '3.8',
    shortTitle: 'Mutations & Stem Cells',
    fullTitle: '3.8.1 Gene Mutations (Frameshift) and Stem Cells (Totipotent & Pluripotent)',
    topicNumber: '3.8.1',
    questionId: 'pack-3-8-1',
  },
  {
    specCode: '3.8.2',
    unit: '3.8',
    shortTitle: 'Epigenetics & Cancer',
    fullTitle: '3.8.2 Control of Gene Expression (Methylation, Acetylation & Tumour Suppressors)',
    topicNumber: '3.8.2',
    questionId: 'pack-3-8-2',
  },
  {
    specCode: '3.8.3',
    unit: '3.8',
    shortTitle: 'Gene Technologies',
    fullTitle: '3.8.3 Gene Technologies (PCR, Primers, Gel Electrophoresis & Plasmids)',
    topicNumber: '3.8.3',
    questionId: 'pack-3-8-3',
  },
];
