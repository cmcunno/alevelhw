import {
  AqaSpecificationTopic,
  FlawedQuestion,
  InteractiveRevisionModule,
  StudentSubmission,
} from '../types';

export const AQA_7401_SPECIFICATION_MAP: AqaSpecificationTopic[] = [
  // UNIT 3.1: Biological Molecules
  {
    specCode: '3.1.1',
    unit: '3.1',
    title: 'Monomers and Polymers',
    keyConcepts: [
      'Monomers are the smaller units from which larger molecules are made (monosaccharides, amino acids, nucleotides)',
      'Polymers are molecules made from a large number of monomers joined together in a chain',
      'Condensation reaction joins two molecules together with the formation of a chemical bond and elimination of water',
      'Hydrolysis reaction breaks a chemical bond between two molecules and involves the use of a water molecule',
    ],
    chiefExaminerTraps: [
      'Students frequently fail to specify the EXACT bond formed (e.g. saying "bond forms" instead of "glycosidic bond")',
      'Writing that hydrolysis "produces water" instead of "uses water"',
      'Failing to mention the elimination of a water molecule during condensation',
    ],
  },
  {
    specCode: '3.1.2',
    unit: '3.1',
    title: 'Carbohydrates',
    keyConcepts: [
      'Monosaccharides: glucose (alpha and beta), galactose, fructose',
      'Disaccharides: maltose (alpha-glucose + alpha-glucose), sucrose (glucose + fructose), lactose (glucose + galactose)',
      'Polysaccharides: Starch (amylose and amylopectin in plants for insoluble energy storage)',
      'Glycogen (highly branched alpha-glucose polymer in animals and bacteria)',
      'Cellulose (straight, unbranched beta-glucose chains linked by hydrogen bonds into microfibrils providing tensile strength)',
      'Biochemical tests: Benedict test for reducing / non-reducing sugars; Iodine in potassium iodide for starch',
    ],
    chiefExaminerTraps: [
      'Stating that non-reducing sugars give a negative test because "they have no sugar"',
      'Failing to neutralise hydrochloric acid with sodium hydrogencarbonate before boiling with Benedict solution',
      'Confusing alpha-glucose (OH down on C1) and beta-glucose (OH up on C1) structure',
      'Describing cellulose as branched or coiled (it is strictly straight, unbranched chains forming microfibrils via H-bonds)',
    ],
  },
  {
    specCode: '3.1.3',
    unit: '3.1',
    title: 'Lipids',
    keyConcepts: [
      'Triglycerides: 1 glycerol + 3 fatty acids joined by 3 ester bonds via condensation reactions',
      'Saturated vs unsaturated fatty acids (presence of C=C double bonds in hydrocarbon chain causing kinks)',
      'Phospholipids: 1 glycerol + 2 fatty acids + 1 phosphate group; hydrophilic head and hydrophobic fatty acid tails',
      'Emulsion test: dissolve sample in ethanol, shake, add water, observe white milky emulsion',
    ],
    chiefExaminerTraps: [
      'Stating that lipids are "polymers" (triglycerides are macromolecules, not repeating polymers)',
      'Omitting the addition of water in the emulsion test (only shaking with ethanol is insufficient)',
      'Confusing ester bonds with ether or peptide bonds',
    ],
  },
  {
    specCode: '3.1.4',
    unit: '3.1',
    title: 'Proteins and Enzymes',
    keyConcepts: [
      'Amino acid general structure (NH2, COOH, H, and variable R group)',
      'Primary structure: specific sequence of amino acids in polypeptide chain joined by peptide bonds',
      'Secondary structure: folding into alpha-helix or beta-pleated sheet held by hydrogen bonds',
      'Tertiary structure: specific 3D folding held by ionic bonds, disulfide bridges, and hydrogen bonds between R groups',
      'Quaternary structure: two or more polypeptide chains joined together (e.g. haemoglobin with prosthetic haem group)',
      'Enzymes: biological catalysts lowering activation energy via the Induced Fit model',
      'Effect of temperature, pH, substrate concentration, enzyme concentration',
      'Competitive inhibitors (complementary to active site, block substrate binding, overcome by increasing substrate)',
      'Non-competitive inhibitors (bind to allosteric site, alter tertiary structure / active site shape, cannot be overcome)',
    ],
    chiefExaminerTraps: [
      'Writing that high temperature "kills" or "destroys" enzymes (BANNED: enzymes denature because tertiary structure changes)',
      'Claiming that competitive inhibitors "destroy" the active site',
      'Forgetting that non-competitive inhibitors lower Vmax regardless of substrate concentration',
      'Using the obsolete Lock-and-Key hypothesis instead of the AQA Induced Fit model',
    ],
  },
  {
    specCode: '3.1.5',
    unit: '3.1',
    title: 'Nucleic Acids (DNA, RNA, Replication)',
    keyConcepts: [
      'Nucleotide: deoxyribose / ribose pentose sugar, nitrogenous base (A, T/U, C, G), phosphate group',
      'Phosphodiester bonds formed between deoxyribose and phosphate via condensation reactions',
      'Semi-conservative replication: DNA helicase breaks hydrogen bonds between bases, DNA polymerase joins adjacent nucleotides via phosphodiester bonds',
      'Meselson and Stahl experimental evidence using 15N and 14N density gradient centrifugation',
    ],
    chiefExaminerTraps: [
      'Stating that DNA polymerase forms hydrogen bonds between bases (H-bonds form spontaneously; DNA polymerase catalyzes phosphodiester bonds between adjacent nucleotides)',
      'Confusing DNA polymerase with DNA helicase',
      'Failing to state that DNA replication is semi-conservative (each daughter molecule has 1 original strand and 1 new strand)',
    ],
  },
  {
    specCode: '3.1.6',
    unit: '3.1',
    title: 'ATP and Water',
    keyConcepts: [
      'ATP structure: ribose, adenine, 3 phosphate groups; ATP hydrolysis catalyzed by ATP hydrolase yields ADP + Pi + energy',
      'Phosphorylation makes other compounds more reactive; ATP resynthesized by ATP synthase in condensation reaction',
      'Water properties: metabolite in condensation/hydrolysis, solvent, high specific heat capacity (buffers temperature), high latent heat of vaporisation (cooling effect), strong cohesion / surface tension (transpiration stream)',
    ],
    chiefExaminerTraps: [
      'Describing ATP as "storing energy" long-term (it is an immediate energy donor, not a long-term store)',
      'Confusing high latent heat of vaporisation with high specific heat capacity',
    ],
  },

  // UNIT 3.2: Cells
  {
    specCode: '3.2.1',
    unit: '3.2',
    title: 'Cell Structure and Methods of Studying Cells',
    keyConcepts: [
      'Eukaryotic organelles: nucleus (nucleolus, nuclear envelope, pores), mitochondria (cristae, matrix), chloroplasts (thylakoids, grana, stroma), rough/smooth ER, Golgi apparatus & vesicles, lysosomes, 80S ribosomes',
      'Prokaryotic cell structure: circular DNA not associated with histones, plasmids, 70S ribosomes, murein cell wall, capsule, flagellum',
      'Viruses: acellular, non-living, capsid, attachment proteins, RNA/DNA core, reverse transcriptase in retroviruses',
      'Microscopy: optical vs transmission electron (TEM - highest resolution, thin dead specimen, 2D) vs scanning electron (SEM - 3D surface)',
      'Magnification = image size / real size; Resolution = minimum distance between two points that can be distinguished',
      'Cell fractionation: cold (reduce enzyme activity), isotonic (prevent osmotic bursting/lysis), buffered (prevent protein denaturation)',
      'Ultracentrifugation pellet sequence: Nuclei -> Chloroplasts -> Mitochondria -> Lysosomes -> Endoplasmic reticulum -> Ribosomes',
    ],
    chiefExaminerTraps: [
      'Stating that electron microscopes are better because they have "higher magnification" (they have higher RESOLUTION due to shorter wavelength of electrons)',
      'Forgetting the 3 conditions for cell fractionation (cold, isotonic, buffered) and why each is used',
      'Centrifuging at high speed first (must start at lowest speed to pellet heaviest organelle, the nuclei)',
    ],
  },
  {
    specCode: '3.2.2',
    unit: '3.2',
    title: 'All Cells Arise from Other Cells (Mitosis & Cell Cycle)',
    keyConcepts: [
      'Interphase (G1, S phase DNA replication, G2) followed by Mitosis (Prophase, Metaphase, Anaphase, Telophase) and Cytokinesis',
      'Prophase: chromosomes condense, nuclear envelope breaks down; Metaphase: chromosomes line up at equator, spindle fibers attach to centromeres',
      'Anaphase: centromeres divide, sister chromatids pulled to opposite poles by shortening spindle fibers; Telophase: nuclear envelopes reform',
      'Mitotic index = (number of cells in mitosis / total number of cells) * 100',
      'Binary fission in prokaryotes: replication of circular DNA and plasmids, division of cytoplasm',
      'Cancer treatments target cell cycle (e.g. inhibiting spindle formation in metaphase, blocking DNA replication in interphase)',
    ],
    chiefExaminerTraps: [
      'Confusing "chromatids" with "chromosomes" in Anaphase (once centromere splits, each chromatid is now a separate chromosome)',
      'Claiming that interphase is a "resting stage" (it is metabolically highly active with protein synthesis and DNA replication)',
    ],
  },
  {
    specCode: '3.2.3',
    unit: '3.2',
    title: 'Transport Across Cell Membranes',
    keyConcepts: [
      'Fluid mosaic model: phospholipid bilayer, cholesterol (reduces fluidity), glycoproteins, glycolipids, intrinsic/extrinsic proteins',
      'Simple diffusion: passive down concentration gradient through lipid bilayer (small non-polar molecules like O2, CO2)',
      'Facilitated diffusion: passive down concentration gradient through specific channel or carrier proteins (polar / charged molecules)',
      'Osmosis: diffusion of water from region of higher water potential to region of lower water potential across a selectively permeable membrane (pure water = 0 kPa)',
      'Active transport: movement of substances against concentration gradient requiring ATP hydrolysis and specific carrier proteins',
      'Co-transport in ileum epithelial cells: Na+ actively pumped out into capillary by Na+/K+ ATPase, creating steep Na+ concentration gradient; Na+ diffuses into cell through co-transporter protein bringing glucose/amino acids with it against their concentration gradient; glucose passes into blood by facilitated diffusion',
    ],
    chiefExaminerTraps: [
      'Writing "water concentration" instead of "water potential" (AQA strictly rejects water concentration)',
      'Claiming glucose enters epithelial cells by active transport directly without sodium co-transport',
      'Stating that active transport uses channel proteins (carrier proteins / pumps only)',
    ],
  },
  {
    specCode: '3.2.4',
    unit: '3.2',
    title: 'Cell Recognition and the Immune System',
    keyConcepts: [
      'Antigens are foreign proteins on cell surfaces that stimulate an immune response',
      'Phagocytosis: pathogen engulfed into phagosome, lysosome fuses to form phagolysosome, lysozymes hydrolyse pathogen, antigen presentation',
      'Cell-mediated response: helper T cells bind to complementary presented antigen, stimulate cytotoxic T cells (perforin) and B cells',
      'Humoral response: B cells undergo clonal selection and clonal expansion (mitosis), differentiate into plasma cells (secrete monoclonal antibodies) and memory B cells',
      'Antibody structure: variable region (specific antigen-binding site), constant region, heavy and light chains, disulfide bridges; agglutination',
      'Vaccines: dead or attenuated pathogen, stimulation of memory cells, secondary immune response faster and produces higher antibody titer',
      'Active immunity (individual produces own antibodies, long-term memory cells) vs Passive immunity (antibodies introduced from outside, no memory cells, short-term)',
      'ELISA test (direct and indirect): uses specific antibodies linked to enzyme, washing between stages to remove unbound antibodies, addition of substrate produces colour change',
      'HIV: retrovirus with RNA, reverse transcriptase, capsid, glycoprotein attachment proteins; infects and destroys helper T cells, leading to AIDS',
    ],
    chiefExaminerTraps: [
      'Omitting the wash step in ELISA (crucial to remove unbound antibodies to prevent false positive results)',
      'Stating that antibiotics kill viruses (antibiotics target bacterial cell walls/ribosomes; viruses have no murein wall or own metabolic machinery)',
      'Confusing antigens with antibodies',
      'Writing that memory cells "remember" instead of explaining that they rapidly divide by mitosis into plasma cells on re-infection',
    ],
  },

  // UNIT 3.3: Organisms Exchange Substances with their Environment
  {
    specCode: '3.3.1',
    unit: '3.3',
    title: 'Surface Area to Volume Ratio',
    keyConcepts: [
      'As an organism increases in size, its surface area to volume ratio decreases',
      'Small organisms have large SA:V ratio allowing diffusion across body surface',
      'Large organisms require specialized internal gas exchange surfaces and mass transport systems',
      'Relationship between SA:V ratio, heat loss, and metabolic rate in endotherms (smaller animals lose heat faster, require higher metabolic rate per gram)',
    ],
    chiefExaminerTraps: [
      'Confusing "large surface area" with "large surface area to volume ratio"',
      'Failing to link small body size to higher rate of heat loss and therefore higher metabolic rate to maintain body temperature',
    ],
  },
  {
    specCode: '3.3.2',
    unit: '3.3',
    title: 'Gas Exchange Systems',
    keyConcepts: [
      'Insects: spiracles lead to tracheae and tracheoles; fluid at ends of tracheoles; abdominal pumping forces mass flow; lactate in active muscle lowers water potential so fluid moves into muscle by osmosis, increasing gas diffusion area',
      'Fish: gill filaments with secondary lamellae; counter-current exchange mechanism ensures water and blood flow in opposite directions, maintaining a steep concentration gradient for oxygen across the entire length of the capillary bed',
      'Dicotyledonous leaves: stomata controlled by guard cells, spongy mesophyll with air spaces providing large surface area, short diffusion pathway',
      'Human gas exchange: trachea, bronchi, bronchioles, alveoli; inspiration (external intercostal muscles contract, ribs up and out, diaphragm contracts and flattens, thoracic volume increases, pressure decreases below atmospheric); expiration (passive at rest, internal intercostals contract during forced expiration)',
      'Pulmonary ventilation rate = tidal volume * breathing rate',
    ],
    chiefExaminerTraps: [
      'Claiming counter-current flow reaches 100% saturation or that parallel flow is "better"',
      'Confusing internal and external intercostal muscles during breathing movements',
      'Failing to state that counter-current maintains a concentration gradient ACROSS THE ENTIRE LENGTH of the lamella',
    ],
  },
  {
    specCode: '3.3.3',
    unit: '3.3',
    title: 'Digestion and Absorption',
    keyConcepts: [
      'Carbohydrate digestion: salivary and pancreatic amylase hydrolyse starch to maltose; membrane-bound disaccharidases (maltase, sucrase, lactase) hydrolyse disaccharides into monosaccharides',
      'Lipid digestion: bile salts emulsify lipid droplets into smaller droplets (increasing surface area for lipase); lipase hydrolyses ester bonds into fatty acids and monoglycerides; micelles carry products to epithelial membrane; lipid molecules diffuse directly across phospholipid bilayer; reformed into triglycerides in ER and packaged with proteins into chylomicrons in Golgi; leave by exocytosis into lacteals',
      'Protein digestion: endopeptidases hydrolyse internal peptide bonds; exopeptidases hydrolyse terminal peptide bonds; membrane-bound dipeptidases hydrolyse dipeptides into amino acids',
    ],
    chiefExaminerTraps: [
      'Stating that bile salts "digest" lipids (they EMULSIFY lipids, which is physical, not chemical hydrolysis)',
      'Forgetting that membrane-bound enzymes are embedded in the microvilli membrane, not floating in lumen',
      'Claiming micelles enter the epithelial cell (micelles break down outside; only fatty acids and monoglycerides diffuse across)',
    ],
  },
  {
    specCode: '3.3.4',
    unit: '3.3',
    title: 'Mass Transport in Animals (Haemoglobin & Heart)',
    keyConcepts: [
      'Haemoglobin quaternary structure: 4 polypeptide chains, 4 haem groups, each carrying 1 O2 molecule (total 4 O2)',
      'Oxygen dissociation curve: sigmoidal shape due to cooperative binding (binding of first O2 changes quaternary structure, exposing other haem groups)',
      'Bohr effect: high partial pressure of CO2 in respiring tissues lowers pH; haemoglobin changes shape and has lower affinity for oxygen, shifting curve to the right and unloading more oxygen for aerobic respiration',
      'Organisms in low oxygen environments (e.g. lugworm, fetus) have curve shifted to the left (higher affinity at lower pO2)',
      'High metabolic rate animals (e.g. mouse) have curve shifted to the right (lower affinity, unloads O2 more readily to tissues)',
      'Cardiac cycle: Atrial systole -> Ventricular systole -> Diastole; pressure changes dictate valve opening and closing (AV valves prevent backflow to atria; semi-lunar valves prevent backflow into ventricles)',
      'Cardiac output = stroke volume * heart rate',
      'Blood vessels: arteries (thick muscle and elastic layers to withstand and smooth high pressure pulses), arterioles (thicker muscle layer to constrict/dilate lumen and control blood flow), veins (wide lumen, valves prevent backflow), capillaries (single layer of squamous endothelial cells, short diffusion distance)',
      'Tissue fluid: high hydrostatic pressure at arterial end forces water and small solutes out of capillary; large plasma proteins remain, lowering oncotic/water potential; at venous end, low hydrostatic pressure and osmotic pull reabsorbs 90% of fluid; remaining 10% drained by lymphatic system',
    ],
    chiefExaminerTraps: [
      'Confusing the shift of the oxygen dissociation curve (Right = Lower affinity = Unloads more oxygen; Left = Higher affinity = Loads more oxygen)',
      'Confusing which heart valves open and close at which pressure intersections on the Wiggers diagram',
      'Stating that tissue fluid forms because of active transport (it is purely ultrafiltration due to hydrostatic pressure overcoming oncotic pressure)',
    ],
  },
  {
    specCode: '3.3.5',
    unit: '3.3',
    title: 'Mass Transport in Plants (Transpiration & Mass Flow)',
    keyConcepts: [
      'Xylem: dead, hollow, lignified vessels; Cohesion-Tension theory: water evaporates from mesophyll cells into air spaces and diffuses out through open stomata; creates tension / negative pressure at top of xylem; water molecules form continuous column due to cohesion (hydrogen bonds between water molecules); adhesion of water to xylem walls; trunk diameter decreases during daytime due to tension',
      'Phloem: living sieve tube elements with companion cells; Mass Flow hypothesis: sucrose actively loaded into sieve tube elements at source (leaf) by companion cells using H+ co-transport; lowers water potential in phloem; water enters by osmosis from xylem, creating high hydrostatic pressure; at sink (root/fruit), sucrose is unloaded and used/stored; increases water potential, water leaves phloem into xylem, creating low hydrostatic pressure; mass flow of sap from source to sink along hydrostatic pressure gradient',
      'Evidence: Ringing experiments (swelling above ring with sucrose), radioactive 14CO2 tracers (autoradiography), aphid stylets',
    ],
    chiefExaminerTraps: [
      'Writing that water is "pumped" or "pushed" up the xylem (it is PULLED under tension due to negative pressure)',
      'Confusing cohesion (water to water) with adhesion (water to xylem wall)',
      'Stating that phloem transports glucose (phloem transports SUCROSE and amino acids)',
    ],
  },

  // UNIT 3.4: Genetic Information, Variation and Relationships
  {
    specCode: '3.4.1',
    unit: '3.4',
    title: 'DNA, Genes and Chromosomes',
    keyConcepts: [
      'Gene: a base sequence of DNA that codes for the amino acid sequence of a polypeptide or a functional RNA',
      'Genetic code is degenerate (most amino acids coded for by more than one triplet), universal (same triplets code for same amino acids in almost all organisms), and non-overlapping (each base is part of only one triplet)',
      'Exons: coding base sequences; Introns: non-coding base sequences within genes',
      'Eukaryotic DNA: long, linear, associated with histone proteins, contains introns; Prokaryotic DNA: short, circular, not associated with histones, no introns',
    ],
    chiefExaminerTraps: [
      'Confusing degenerate with non-overlapping',
      'Stating that prokaryotes have introns (prokaryotic genes do not have introns; no splicing is required)',
    ],
  },
  {
    specCode: '3.4.2',
    unit: '3.4',
    title: 'DNA and Protein Synthesis',
    keyConcepts: [
      'Transcription: DNA helicase breaks H-bonds; RNA polymerase aligns free RNA nucleotides complementary to template strand (A-U, C-G) and forms phosphodiester bonds to synthesise pre-mRNA',
      'Splicing in eukaryotes: introns removed and exons joined together to form mature mRNA (no splicing in prokaryotes)',
      'Translation: mature mRNA leaves nucleus via nuclear pore and attaches to ribosome; tRNA with complementary anticodon brings specific amino acid; ribosome moves along mRNA; ATP provides energy for peptide bond formation between amino acids catalyzed by ribosomal enzyme; stops at stop codon',
    ],
    chiefExaminerTraps: [
      'Writing that RNA polymerase breaks hydrogen bonds (helicase breaks H-bonds; RNA polymerase joins RNA nucleotides via phosphodiester bonds)',
      'Claiming that prokaryotes splice their mRNA (prokaryotes have no introns, so transcription directly produces mature mRNA)',
      'Confusing codons (on mRNA) with anticodons (on tRNA) or triplets (on DNA)',
    ],
  },
  {
    specCode: '3.4.3',
    unit: '3.4',
    title: 'Genetic Diversity from Mutation and Meiosis',
    keyConcepts: [
      'Gene mutations: spontaneous alteration in DNA base sequence during DNA replication (substitution, deletion, addition)',
      'Base deletion causes frameshift mutation altering all subsequent triplets and amino acid sequence; substitution may be silent due to degenerate code',
      'Meiosis produces 4 genetically different haploid daughter cells from 1 diploid cell',
      'Two mechanisms of genetic variation in meiosis: Independent segregation of homologous chromosomes in Meiosis I; Crossing over between non-sister chromatids of homologous chromosomes in Prophase I forming chiasmata and recombinant alleles',
      'Chromosome non-disjunction: failure of homologous chromosomes or sister chromatids to separate properly during anaphase, leading to gametes with n+1 or n-1 chromosomes (e.g. Down syndrome / Trisomy 21)',
    ],
    chiefExaminerTraps: [
      'Confusing independent segregation (Meiosis I) with crossing over (Prophase I)',
      'Writing that crossing over occurs between sister chromatids (it must be between NON-SISTER chromatids of homologous chromosomes)',
      'Stating that mutations "occur because the organism needs them" (mutations are completely random and spontaneous)',
    ],
  },
  {
    specCode: '3.4.4',
    unit: '3.4',
    title: 'Genetic Diversity and Adaptation',
    keyConcepts: [
      'Natural selection: random mutation produces new allele; if advantageous in environment, individuals with allele more likely to survive and reproduce (differential reproductive success); pass on advantageous allele to offspring; allele frequency increases in population over generations',
      'Directional selection: selects for individuals at one extreme of phenotypic range (e.g. antibiotic resistance in bacteria); alters mean phenotype of population',
      'Stabilising selection: selects against both extremes, favoring intermediate phenotypes (e.g. human birth weight); preserves characteristics, reduces standard deviation, mean stays constant',
      'Types of adaptations: anatomical (structural), physiological (biochemical), behavioural',
    ],
    chiefExaminerTraps: [
      'Claiming antibiotics "cause" bacteria to mutate (antibiotics are the selective agent; mutation occurs spontaneously before exposure)',
      'Confusing directional selection with stabilising selection on phenotypic distribution graphs',
    ],
  },
  {
    specCode: '3.4.5',
    unit: '3.4',
    title: 'Species, Taxonomy and Courtship Behaviour',
    keyConcepts: [
      'Species: a group of similar organisms that can interbreed to produce fertile, viable offspring',
      'Courtship behaviour is species-specific: allows recognition of members of same species, synchronization of mating, identifies sexually mature mate, forms pair bond',
      'Phylogenetic hierarchy: smaller groups contained within larger non-overlapping groups based on evolutionary origins: Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species',
      'Binomial system: Genus species (e.g. Homo sapiens)',
    ],
    chiefExaminerTraps: [
      'Defining courtship behaviour simply as "attracting a mate" without stating it is SPECIES-SPECIFIC to ensure fertile offspring',
      'Confusing the hierarchical taxons or failing to state that phylogenetic groups are NON-OVERLAPPING',
    ],
  },
  {
    specCode: '3.4.6',
    unit: '3.4',
    title: 'Biodiversity within a Community',
    keyConcepts: [
      'Species richness: the number of different species in a community',
      'Index of diversity formula: d = N(N - 1) / sum of n(n - 1), where N = total number of organisms of all species, and n = total number of organisms of each species',
      'Index of diversity is superior to species richness because it accounts for both the number of species AND the relative abundance / population size of each species',
      'Impact of modern intensive agriculture: monoculture, removing hedgerows, pesticides, herbicides, draining wetlands; reduces plant species diversity, reducing food sources and habitats, lowering overall community index of diversity',
    ],
    chiefExaminerTraps: [
      'Conflating species richness with index of diversity',
      'Making calculation errors in the denominator (must sum [n*(n-1)] for each individual species separately before dividing into N*(N-1))',
    ],
  },
  {
    specCode: '3.4.7',
    unit: '3.4',
    title: 'Investigating Diversity',
    keyConcepts: [
      'Comparing genetic diversity: base sequence of DNA, base sequence of mRNA, amino acid sequence of proteins encoded by DNA',
      'Quantitative sampling: random sampling using grid and random number generator to avoid bias; large sample size to be representative and allow statistical testing',
      'Calculating mean and standard deviation; if standard deviation error bars overlap, the difference between the means is likely not statistically significant (chance cannot be ruled out)',
    ],
    chiefExaminerTraps: [
      'Selecting sample locations subjectively instead of using a coordinate grid and random numbers',
      'Stating that "error bars touch so there is no difference" (must state: overlapping standard deviation bars indicate the difference is NOT significant and could be due to chance)',
    ],
  },

  // UNIT 3.5: Energy Transfers in and Between Organisms (Year 13)
  {
    specCode: '3.5.1',
    unit: '3.5',
    title: 'Photosynthesis',
    keyConcepts: [
      'Light-dependent reaction: photoionisation of chlorophyll, electron transfer chain, chemiosmosis via ATP synthase, photolysis of water yielding protons, electrons, and O2, production of reduced NADP',
      'Light-independent reaction (Calvin cycle): RuBP and CO2 catalysed by rubisco form 2x GP; GP reduced to TP using ATP and reduced NADP; TP regenerates RuBP and forms hexose sugars',
    ],
    chiefExaminerTraps: [
      'Confusing photoionisation with photolysis of water',
      'Stating CO2 converts directly to glucose without GP and TP intermediates',
      'Claiming ATP produces energy rather than ATP hydrolysis provides energy for GP reduction',
    ],
  },
  {
    specCode: '3.5.2',
    unit: '3.5',
    title: 'Respiration',
    keyConcepts: [
      'Glycolysis in cytoplasm: phosphorylation of glucose into glucose phosphate using 2 ATP, splitting into 2x TP, oxidation to 2x pyruvate yielding 2 net ATP and 2 reduced NAD',
      'Link reaction and Krebs cycle in mitochondrial matrix: pyruvate oxidised to acetate + CO2, acetyl-CoA combines with 4C oxaloacetate to form 6C citrate, decarboxylation and dehydrogenation',
      'Oxidative phosphorylation on cristae: oxidation of reduced NAD/FAD, transfer of electrons down ETC pumps H+ into intermembrane space, proton electrochemical gradient, ATP synthase chemiosmosis, O2 as terminal electron acceptor forming H2O',
    ],
    chiefExaminerTraps: [
      'Stating protons are pumped into the matrix (they are pumped into the intermembrane space)',
      'Forgetting that oxygen is the terminal electron acceptor and without it the ETC stalls',
    ],
  },
  {
    specCode: '3.5.3',
    unit: '3.5',
    title: 'Energy and Ecosystems',
    keyConcepts: [
      'Gross Primary Production (GPP): total chemical energy store in plant biomass per area per time',
      'Net Primary Production (NPP): NPP = GPP - R, energy available for plant growth and consumers',
      'Net production of consumers: N = I - (F + R), where I = ingested energy, F = faeces/egestion, R = respiratory heat losses',
      'Trophic efficiency typically ~10% due to unconsumed parts, indigestible cellulose, and respiratory heat',
    ],
    chiefExaminerTraps: [
      'Confusing GPP with incident solar radiation',
      'Forgetting that energy is not destroyed but lost as metabolic heat during respiration',
    ],
  },
  {
    specCode: '3.5.4',
    unit: '3.5',
    title: 'Nutrient Cycles',
    keyConcepts: [
      'Nitrogen cycle: Saprobiontic decomposition (ammonification of proteins/DNA to NH4+), nitrifying bacteria (aerobic oxidation of NH4+ to NO2- then NO3-)',
      'Denitrifying bacteria convert nitrate to N2 gas in anaerobic waterlogged soil',
      'Nitrogen-fixing bacteria (free-living or mutualistic in root nodules of legumes) reduce N2 gas to ammonia',
      'Phosphorus cycle: weathering of sedimentary rocks releases phosphate ions (PO4 3-); mycorrhizae fungal hyphae increase root surface area for phosphate and water absorption',
    ],
    chiefExaminerTraps: [
      'Confusing nitrification (aerobic) with denitrification (anaerobic)',
      'Claiming saprobionts perform nitrogen fixation on atmospheric N2 gas',
    ],
  },

  // UNIT 3.6: Organisms Respond to Changes in Internal and External Environments (Year 13)
  {
    specCode: '3.6.1',
    unit: '3.6',
    title: 'Stimuli, Receptors and Response',
    keyConcepts: [
      'Pacinian corpuscle: mechanical pressure deforms lamellae, stretches sensory neurone membrane, stretch-mediated Na+ channels widen, Na+ influx depolarises membrane creating generator potential; reaching threshold initiates action potential',
      'Photoreceptors in retina: Rod cells (rhodopsin, retinal convergence, high visual sensitivity in low light, low visual acuity); Cone cells (iodopsin, 3 types RGB, 1:1 bipolar link, high visual acuity, low sensitivity)',
      'Control of heart rate: SAN, AVN, Bundle of His, Purkyne fibers; autonomic control via chemoreceptors and baroreceptors/pressure receptors in carotid arteries and aorta signaling medulla oblongata',
    ],
    chiefExaminerTraps: [
      'Failing to name "stretch-mediated sodium channels"',
      'Confusing high visual acuity (cones) with high sensitivity to light (rods and spatial summation)',
    ],
  },
  {
    specCode: '3.6.2',
    unit: '3.6',
    title: 'Nervous Coordination',
    keyConcepts: [
      'Resting potential (-70mV): Na+/K+ ATPase pump actively moves 3 Na+ out for 2 K+ in; higher membrane permeability to K+ leak channels allows K+ to diffuse out',
      'Action potential: stimulus exceeds threshold, voltage-gated Na+ channels open, Na+ influx depolarises membrane to +30mV; Na+ channels close, voltage-gated K+ channels open, K+ efflux repolarises membrane; hyperpolarisation (-80mV) and refractory period',
      'Myelination and saltatory conduction: action potentials jump from Node of Ranvier to Node of Ranvier',
      'Synaptic transmission: Ca2+ influx in presynaptic knob, acetylcholine vesicle exocytosis, diffusion across cleft, binding to cholinergic receptors on postsynaptic membrane opening Na+ channels; acetylcholinesterase hydrolyses ACh',
    ],
    chiefExaminerTraps: [
      'Believing repolarisation is caused by the Na+/K+ pump (it is caused by voltage-gated K+ channels opening)',
      'Omitting that saltatory conduction occurs only at Nodes of Ranvier where ion channels are concentrated',
    ],
  },
  {
    specCode: '3.6.3',
    unit: '3.6',
    title: 'Skeletal Muscle Contraction',
    keyConcepts: [
      'Myofibril structure: sarcomere, actin (thin) and myosin (thick) filaments, I band, A band, H zone, Z lines',
      'Sliding filament mechanism: Ca2+ released from sarcoplasmic reticulum binds to troponin, tropomyosin displaced exposing myosin-binding sites on actin',
      'Actomyosin cross-bridge formed, power stroke pulls actin, ADP and Pi released; ATP binds to myosin head breaking cross-bridge; ATP hydrolysis by ATPase recocks myosin head',
      'Phosphocreatine: provides rapid phosphate to phosphorylate ADP to ATP during anaerobic high-intensity contraction',
    ],
    chiefExaminerTraps: [
      'Stating calcium provides energy (calcium binds to troponin; ATP provides energy)',
      'Forgetting ATP has two distinct roles: detaching the cross-bridge and powering head recocking',
    ],
  },
  {
    specCode: '3.6.4',
    unit: '3.6',
    title: 'Homeostasis and Negative Feedback',
    keyConcepts: [
      'Principles of homeostasis: negative feedback restores physiological parameters to set-point',
      'Blood glucose regulation: Beta cells release insulin (glycogenesis, increased GLUT4 transport permeability, increased respiration of glucose); Alpha cells release glucagon (glycogenolysis, gluconeogenesis); Adrenaline second messenger model (cAMP activates protein kinase A cascade)',
      'Kidney osmoregulation: Osmoreceptors in hypothalamus detect fall in blood water potential, posterior pituitary secretes ADH, ADH binds to DCT and collecting duct receptors, causes aquaporin vesicles to fuse with membrane, increasing water reabsorption into blood',
    ],
    chiefExaminerTraps: [
      'Confusing glycogenolysis, glycogenesis, and gluconeogenesis',
      'Stating ADH makes the kidney produce more urine (ADH causes more water reabsorption, producing smaller volume of concentrated urine)',
    ],
  },

  // UNIT 3.7: Genetics, Populations, Evolution and Ecosystems (Year 13)
  {
    specCode: '3.7.1',
    unit: '3.7',
    title: 'Inheritance and Linkage',
    keyConcepts: [
      'Monohybrid and dihybrid crosses, codominance, multiple alleles (ABO blood groups), sex-linkage (genes on X chromosome)',
      'Autosomal linkage: genes on same autosome do not assort independently, producing high parental phenotypes and low recombinant phenotypes via crossing over in prophase I',
      'Epistasis: interaction of gene loci where one gene masks or suppresses the phenotypic expression of another gene (e.g. 9:3:4, 12:3:1 ratios)',
      'Chi-squared test (X2) to evaluate whether observed phenotypic frequencies differ significantly from expected Mendelian ratios',
    ],
    chiefExaminerTraps: [
      'Confusing autosomal linkage (same autosome) with sex-linkage (X chromosome)',
      'Failing to link low recombinant frequencies to crossing over between non-sister chromatids',
    ],
  },
  {
    specCode: '3.7.2',
    unit: '3.7',
    title: 'Populations and Hardy-Weinberg',
    keyConcepts: [
      'Gene pool and allele frequency; Hardy-Weinberg equations: p + q = 1 and p^2 + 2pq + q^2 = 1',
      'Assumptions: large population, no immigration/emigration (no gene flow), no mutations, random mating, no natural selection',
    ],
    chiefExaminerTraps: [
      'Squaring the frequency of the recessive phenotype instead of taking the square root of q^2',
      'Forgetting the 2pq term for heterozygotes',
    ],
  },
  {
    specCode: '3.7.3',
    unit: '3.7',
    title: 'Evolution and Speciation',
    keyConcepts: [
      'Allopatric speciation: geographical isolation prevents gene flow, random mutations, different selection pressures, differential reproductive success, allele frequencies diverge until cannot interbreed to produce fertile offspring',
      'Sympatric speciation: reproductive isolation within the same geographical area (behavioural, temporal, mechanical)',
      'Genetic drift: random changes in allele frequencies in small populations independent of selection',
    ],
    chiefExaminerTraps: [
      'Omitting the word "fertile" when defining the inability of diverged species to interbreed',
      'Claiming organisms mutate intentionally in response to environmental change',
    ],
  },

  // UNIT 3.8: The Control of Gene Expression (Year 13)
  {
    specCode: '3.8.1',
    unit: '3.8',
    title: 'Mutations and Stem Cells',
    keyConcepts: [
      'Gene mutations: deletion and addition cause frameshift altering all downstream codons; substitution can be silent due to degenerate code',
      'Stem cells: totipotent (any body cell + placenta), pluripotent (almost all body cells, no placenta), multipotent, unipotent',
      'Induced pluripotent stem cells (iPS cells): adult somatic cells reprogrammed using transcription factors',
    ],
    chiefExaminerTraps: [
      'Saying mutations "denature" the protein (mutations change primary structure)',
      'Inverting totipotent and pluripotent definitions',
    ],
  },
  {
    specCode: '3.8.2',
    unit: '3.8',
    title: 'Control of Gene Expression and Cancer',
    keyConcepts: [
      'Epigenetics: heritable changes in gene function without changes to base sequence; increased DNA methylation of CpG promoters silences transcription; decreased histone acetylation (deacetylation) condenses chromatin (heterochromatin) making promoter inaccessible',
      'RNA interference (RNAi): siRNA binds to RISC enzyme complex, pairs with complementary mRNA, enzyme cuts mRNA preventing translation',
      'Cancer genetics: proto-oncogenes mutate into oncogenes (stimulating rapid cell division); tumour suppressor genes hypermethylated/silenced, halting apoptosis and cycle regulation; increased oestrogen concentration promotes breast cancer',
    ],
    chiefExaminerTraps: [
      'Claiming DNA methylation adds methyl groups to histones (methylation is on cytosine DNA bases)',
      'Stating hypermethylation turns on oncogenes (hypermethylation SILENCES tumour suppressor genes)',
    ],
  },
  {
    specCode: '3.8.3',
    unit: '3.8',
    title: 'Gene Technologies',
    keyConcepts: [
      'Polymerase Chain Reaction (PCR): 95°C (breaks H-bonds, separates strands), 55°C (annealing of DNA primers), 72°C (Taq DNA polymerase synthesizes strands from free nucleotides); Taq is thermostable',
      'Recombinant DNA technology: reverse transcriptase makes cDNA from mRNA; restriction endonucleases cut DNA at palindromic recognition sequences producing sticky ends; DNA ligase joins sticky ends by phosphodiester bonds into plasmid vector',
      'Marker genes (antibiotic resistance, GFP fluorescence, enzyme action) identify transformed host cells',
      'DNA probes and gel electrophoresis: fluorescent/radioactive single-stranded probes identify target alleles / genetic screening',
    ],
    chiefExaminerTraps: [
      'Confusing reverse transcriptase (mRNA -> cDNA) with RNA polymerase (DNA -> mRNA)',
      'Stating 95°C stage in PCR boils DNA or kills bacteria (it separates DNA strands by breaking H-bonds)',
    ],
  },
];

export const INITIAL_FLAWED_QUESTIONS: FlawedQuestion[] = [
  // QUESTION 1: UNIT 3.1 - ENZYMES & INHIBITION (3.1.4.2)
  {
    id: 'aqa-3-1-enzymes',
    title: 'Enzyme Kinetics: Competitive vs Non-Competitive Inhibition',
    examBoard: 'AQA',
    specCode: '3.1.4.2',
    aqaUnit: '3.1',
    subject: 'AQA AS Biology (7401)',
    topic: '3.1 Biological Molecules: Enzymes & Inhibition',
    aoLevel: 'AO2 (3 marks) / AO3 (1 mark)',
    totalMarks: 4,
    questionText:
      'A scientist investigated the effect of two different enzyme inhibitors, Substance A and Substance B, on the rate of reaction of alkaline phosphatase at increasing substrate concentrations. Substance A alters the active site shape, whereas Substance B has a molecular shape similar to the substrate. Explain how each inhibitor affects the maximum rate of reaction (Vmax) and how increasing substrate concentration influences each type of inhibition. (4 marks)',
    contextNote:
      'AQA Paper 1 classic AO2/AO3 question. Look out for students writing "inhibitor kills enzyme", confusing competitive and non-competitive inhibitor binding sites, or failing to mention collision frequency and Vmax.',
    flawedAnswer:
      'Substance A is a competitive inhibitor because it destroys the active site of the enzyme so the substrate cannot fit into it, which kills the reaction completely. Substance B is a non-competitive inhibitor that bonds to the enzyme permanently, stopping it from working. If you add more substrate concentration, you can easily overcome both inhibitors because there are more substrate molecules around to bump into the enzyme and push the inhibitor away.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Substance B is a competitive inhibitor that has a complementary shape to the active site and competes with substrate for binding to the active site.',
        indicativePhrases: [
          'Substance B is competitive',
          'binds to active site',
          'competes with substrate',
        ],
        rejectOrErrors: 'Reject: Substance B binds to allosteric site. Reject: bonds permanently.',
      },
      {
        markCode: 'M2',
        criteria:
          'Increasing substrate concentration increases the probability of substrate colliding with active site, overcoming competitive inhibition (Substance B reaches the same Vmax).',
        indicativePhrases: [
          'overcome by increasing substrate concentration',
          'same Vmax reached',
          'substrate outcompetes inhibitor',
        ],
      },
      {
        markCode: 'M3',
        criteria:
          'Substance A is a non-competitive inhibitor that binds to an allosteric site (site other than active site), altering the tertiary structure and shape of the active site.',
        indicativePhrases: [
          'Substance A is non-competitive',
          'binds to allosteric site',
          'alters tertiary structure / changes active site shape',
        ],
        rejectOrErrors: 'Reject: destroys / kills the active site. Reject: binds to active site.',
      },
      {
        markCode: 'M4',
        criteria:
          'Fewer enzyme-substrate complexes can form; increasing substrate concentration cannot overcome non-competitive inhibition, so Vmax is permanently reduced.',
        indicativePhrases: [
          'substrate cannot overcome Substance A',
          'lowers Vmax / maximum rate',
          'fewer ES complexes formed',
        ],
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Substance A is a competitive inhibitor because it destroys the active site',
        issueType: 'misconception',
        explanation:
          'Substance A alters the shape of the active site by binding to an allosteric site, meaning it is NON-COMPETITIVE. Enzymes are never "destroyed" or "killed".',
        markLost: 1,
        suggestedCorrection:
          'Substance A is a non-competitive inhibitor that binds to an allosteric site, altering the tertiary structure and active site shape.',
      },
      {
        phrase: 'kills the reaction completely',
        issueType: 'misconception',
        explanation: 'Enzymes and reactions are not living organisms; they cannot be killed.',
        markLost: 1,
        suggestedCorrection: 'reducing the rate of reaction by preventing complementary ES complexes from forming.',
      },
      {
        phrase: 'Substance B is a non-competitive inhibitor that bonds to the enzyme permanently',
        issueType: 'misconception',
        explanation:
          'Substance B has a similar shape to the substrate, meaning it is a COMPETITIVE inhibitor that binds reversibly to the active site.',
        markLost: 1,
        suggestedCorrection:
          'Substance B is a competitive inhibitor that binds reversibly to the active site.',
      },
      {
        phrase: 'If you add more substrate concentration, you can easily overcome both inhibitors',
        issueType: 'poor_alignment',
        explanation:
          'Increasing substrate concentration ONLY overcomes competitive inhibition (Substance B). It has NO effect on non-competitive inhibition (Substance A) because active sites remain altered.',
        markLost: 1,
        suggestedCorrection:
          'Increasing substrate concentration overcomes Substance B because substrate outcompetes it, but cannot overcome Substance A so Vmax is reduced.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4 marks. The student inverted both inhibitor identities, claimed enzymes are "killed", and mistakenly stated that substrate overcomes non-competitive inhibition.',
    },
    exemplarRewrite:
      'Substance B is a competitive inhibitor because it has a complementary shape to the active site and competes directly with the substrate for binding. Increasing substrate concentration increases the collision frequency between substrate and active sites, outcompeting Substance B so the original maximum rate of reaction (Vmax) can still be achieved. Conversely, Substance A is a non-competitive inhibitor that binds to an allosteric site on the enzyme. This alters the tertiary structure of the enzyme, changing the shape of the active site so it is no longer complementary to the substrate. Fewer functional enzyme-substrate complexes can form, and increasing substrate concentration cannot overcome this inhibition, permanently reducing Vmax.',
    keyTerms: [
      'Competitive inhibitor',
      'Non-competitive inhibitor',
      'Allosteric site',
      'Active site',
      'Tertiary structure',
      'Enzyme-substrate complexes',
      'Vmax',
      'Collision frequency',
    ],
    teacherNotes:
      'Common AQA examiner trap: students often confuse competitive and non-competitive definitions, and fail to explicitly reference Vmax and allosteric binding sites.',
    recommendedColdCall:
      'Cold-call question: "Why does adding more substrate have zero effect on the maximum rate when a non-competitive inhibitor is present?"',
  },

  // QUESTION 2: UNIT 3.2 - CELL FRACTIONATION & ULTRACENTRIFUGATION (3.2.1.2)
  {
    id: 'aqa-3-2-fractionation',
    title: 'Cell Fractionation & Differential Ultracentrifugation',
    examBoard: 'AQA',
    specCode: '3.2.1.2',
    aqaUnit: '3.2',
    subject: 'AQA AS Biology (7401)',
    topic: '3.2 Cells: Cell Fractionation & Ultracentrifugation',
    aoLevel: 'AO2 (3 marks) / AO1 (1 mark)',
    totalMarks: 4,
    questionText:
      'A student homogenized pancreatic tissue to isolate pure mitochondria for an investigation into cellular respiration. Describe and explain the three conditions required for the homogenization solution, and outline the sequence of differential centrifugation speeds needed to isolate the mitochondria in the pellet. (4 marks)',
    contextNote:
      'Core practical / AO1-AO2 staple. Look out for students saying cold prevents enzymes "dying", saying isotonic stops "water moving", or spinning at highest speed first.',
    flawedAnswer:
      'The tissue must be placed in a solution that is ice-cold to stop all the digestive enzymes from dying. It needs to be an isotonic liquid so no water molecules move anywhere. The liquid must also have a buffer so the pH does not change and ruin the organelles. Then you centrifuge the homogenate at the highest speed first so the heavy mitochondria get pulled to the bottom of the tube in the first pellet, which you then scoop out.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Ice-cold to reduce / slow down enzyme activity that could break down or digest organelles.',
        indicativePhrases: ['reduce enzyme activity', 'slow autolysis / self-digestion'],
        rejectOrErrors: 'Reject: enzymes die / killed. Reject: stops all enzymes completely.',
      },
      {
        markCode: 'M2',
        criteria:
          'Isotonic to prevent osmotic lysis / bursting or shrinking / crenation of organelles (maintains equal water potential).',
        indicativePhrases: ['same water potential', 'prevents bursting / lysis or shrivelling by osmosis'],
        rejectOrErrors: 'Reject: prevents water moving at all (net movement is zero).',
      },
      {
        markCode: 'M3',
        criteria:
          'Buffered to maintain a constant pH to prevent denaturation of membrane and organelle proteins/enzymes.',
        indicativePhrases: ['maintain constant pH', 'prevent denaturation of proteins'],
      },
      {
        markCode: 'M4',
        criteria:
          'Centrifuge at low speed to pellet heavy nuclei first; remove supernatant and centrifuge at higher speed to pellet mitochondria.',
        indicativePhrases: [
          'low speed first for nuclei',
          'pour off supernatant',
          'higher speed for mitochondria pellet',
        ],
        rejectOrErrors: 'Reject: high speed first. Mitochondria are not in the first pellet.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'ice-cold to stop all the digestive enzymes from dying',
        issueType: 'misconception',
        explanation: 'Enzymes cannot die; cold temperatures reduce kinetic energy and lower enzyme activity to prevent autolysis.',
        markLost: 1,
        suggestedCorrection: 'ice-cold to reduce kinetic energy and enzyme activity, preventing self-digestion of organelles.',
      },
      {
        phrase: 'isotonic liquid so no water molecules move anywhere',
        issueType: 'misconception',
        explanation: 'Water molecules still move randomly in both directions; isotonic means equal water potential, so there is NO NET osmotic movement.',
        markLost: 1,
        suggestedCorrection: 'isotonic to maintain equal water potential, preventing organelles from bursting or shrivelling due to net osmotic water movement.',
      },
      {
        phrase: 'centrifuge the homogenate at the highest speed first so the heavy mitochondria get pulled to the bottom in the first pellet',
        issueType: 'poor_alignment',
        explanation: 'Centrifuging at high speed first pellets everything together. You must spin at low speed first to pellet nuclei, then spin supernatant at higher speed for mitochondria.',
        markLost: 1,
        suggestedCorrection: 'centrifuge at low speed first to remove dense nuclei, then spin the supernatant at a higher speed to pellet mitochondria.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 1,
      maxMarks: 4,
      summary:
        'Awarded 1/4 marks (M3 only for buffer maintaining pH). Lost marks for "enzymes dying", saying "no water moves", and inverting the centrifugation speed sequence.',
    },
    exemplarRewrite:
      'The homogenate must be ice-cold to reduce kinetic energy and slow the activity of autolytic enzymes that would otherwise hydrolyse organelle structures. The solution must be isotonic to the tissue to ensure an equal water potential, preventing any net osmotic movement of water that could cause organelles to burst or shrink. A buffer is essential to maintain a constant pH, preventing the denaturation of organelle membrane proteins and enzymes. To isolate mitochondria, the filtered homogenate is first spun at a low speed to pellet the heaviest, densest organelles (the nuclei). The supernatant is then poured off and centrifuged at a higher speed, causing the second densest organelles (mitochondria) to collect as a pellet at the bottom of the tube.',
    keyTerms: [
      'Ice-cold (reduce enzyme activity)',
      'Isotonic (prevent osmotic lysis)',
      'Buffer (maintain pH)',
      'Supernatant',
      'Pellet',
      'Differential centrifugation',
      'Nuclei before mitochondria',
    ],
    teacherNotes:
      'Highlight to students: AQA frequently penalises "enzymes die" and "water stops moving". Insist on the phrase "no net osmotic movement" and the correct pellet order: Nuclei -> Mitochondria -> Lysosomes -> Ribosomes.',
    recommendedColdCall:
      'Cold-call question: "Why would centrifuging at maximum speed on the first run ruin our attempt to isolate pure mitochondria?"',
  },

  // QUESTION 3: UNIT 3.2 - CO-TRANSPORT IN ILEUM (3.2.3)
  {
    id: 'aqa-3-2-cotransport',
    title: 'Co-transport of Glucose and Sodium in the Ileum',
    examBoard: 'AQA',
    specCode: '3.2.3',
    aqaUnit: '3.2',
    subject: 'AQA AS Biology (7401)',
    topic: '3.2 Cells: Transport Across Membranes & Co-Transport',
    aoLevel: 'AO2 (4 marks)',
    totalMarks: 4,
    questionText:
      'Explain how the transport of sodium ions is involved in the absorption of glucose by epithelial cells of the ileum into the blood. (4 marks)',
    contextNote:
      'Classic 4-mark AQA question appearing almost every other exam series. Students frequently confuse active transport of sodium into blood with glucose transport, or omit the sodium concentration gradient.',
    flawedAnswer:
      'Sodium ions are actively transported into the epithelial cell from the lumen using ATP. This pushes glucose into the epithelial cell against its concentration gradient by active transport through a carrier protein. Once inside the epithelial cell, sodium ions diffuse into the blood by osmosis, while glucose is pumped directly into the blood capillary by active transport.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Sodium ions are actively transported out of epithelial cells into the blood / capillary by the sodium-potassium pump (requiring ATP).',
        indicativePhrases: [
          'sodium ions pumped out of epithelial cell into blood',
          'sodium-potassium pump / active transport using ATP',
        ],
        rejectOrErrors: 'Reject: sodium pumped INTO cell from lumen.',
      },
      {
        markCode: 'M2',
        criteria:
          'This maintains a lower concentration of sodium ions inside the epithelial cell than in the lumen (maintains a concentration gradient).',
        indicativePhrases: [
          'maintains sodium concentration gradient',
          'lower concentration of Na+ inside cell than lumen',
        ],
      },
      {
        markCode: 'M3',
        criteria:
          'Sodium ions enter the epithelial cell from the lumen by facilitated diffusion via a co-transporter protein, bringing glucose with them against its concentration gradient.',
        indicativePhrases: [
          'Na+ enters by facilitated diffusion',
          'co-transporter / symport protein',
          'brings glucose against concentration gradient',
        ],
      },
      {
        markCode: 'M4',
        criteria:
          'Glucose moves out of the epithelial cell into the capillary / blood by facilitated diffusion (down its concentration gradient).',
        indicativePhrases: [
          'glucose enters blood by facilitated diffusion',
          'glucose moves down concentration gradient',
        ],
        rejectOrErrors: 'Reject: glucose moves into blood by active transport.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Sodium ions are actively transported into the epithelial cell from the lumen',
        issueType: 'misconception',
        explanation: 'Sodium is actively pumped OUT of the cell into the blood via the Na+/K+ pump, NOT into the cell from the lumen.',
        markLost: 1,
        suggestedCorrection: 'Sodium ions are actively transported OUT of the epithelial cell into the blood capillary.',
      },
      {
        phrase: 'sodium ions diffuse into the blood by osmosis',
        issueType: 'misconception',
        explanation: 'Osmosis is the diffusion of WATER molecules only. Ions cannot move by osmosis.',
        markLost: 1,
        suggestedCorrection: 'Sodium ions are actively transported into the blood by the sodium-potassium pump.',
      },
      {
        phrase: 'glucose is pumped directly into the blood capillary by active transport',
        issueType: 'poor_alignment',
        explanation: 'Glucose concentration builds up inside the cell, so it exits into the blood down its concentration gradient by FACILITATED DIFFUSION.',
        markLost: 1,
        suggestedCorrection: 'glucose exits the epithelial cell into the blood capillary by facilitated diffusion.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4 marks. The student reversed the direction of sodium active transport, stated sodium moves by "osmosis", and claimed glucose enters the blood via active transport.',
    },
    exemplarRewrite:
      'Sodium ions are actively transported out of the epithelial cells into the blood capillaries by the sodium-potassium pump, which hydrolyses ATP. This maintains a steep concentration gradient where the concentration of sodium ions is significantly lower inside the epithelial cell than in the lumen of the ileum. As a result, sodium ions diffuse from the lumen into the epithelial cell down their concentration gradient through a sodium-glucose co-transporter protein. As sodium enters, it transports glucose molecules with it into the cell against the glucose concentration gradient. Finally, the high concentration of glucose built up inside the epithelial cell allows glucose to pass into the blood capillary down its concentration gradient by facilitated diffusion through a carrier protein.',
    keyTerms: [
      'Sodium-potassium pump',
      'ATP hydrolysis',
      'Concentration gradient',
      'Co-transporter protein',
      'Facilitated diffusion',
      'Lumen into epithelial cell',
      'Epithelial cell into blood',
    ],
    teacherNotes:
      'Purple-pen check: students must write that Na+ is pumped OUT to blood, Na+ enters from lumen by facilitated diffusion carrying glucose, and glucose leaves into blood by facilitated diffusion.',
    recommendedColdCall:
      'Cold-call question: "Why does the active transport of sodium out of the cell enable glucose to enter against its concentration gradient without directly hydrolysing ATP at the co-transporter?"',
  },

  // QUESTION 4: UNIT 3.3 - FISH COUNTER-CURRENT EXCHANGE (3.3.2)
  {
    id: 'aqa-3-3-fish-gills',
    title: 'Gas Exchange in Fish: Counter-Current Exchange Mechanism',
    examBoard: 'AQA',
    specCode: '3.3.2',
    aqaUnit: '3.3',
    subject: 'AQA AS Biology (7401)',
    topic: '3.3 Organisms Exchange Substances: Fish Gill Lamellae',
    aoLevel: 'AO2 (3 marks) / AO1 (1 mark)',
    totalMarks: 4,
    questionText:
      'Explain the advantage to a bony fish of the counter-current exchange system across its secondary gill lamellae compared to a parallel flow system. (4 marks)',
    contextNote:
      'AQA Paper 1 hallmark question. Key error: students state counter-current reaches 100% saturation, or fail to state that the concentration gradient is maintained across the ENTIRE length of the gill lamella.',
    flawedAnswer:
      'Counter-current flow means that water and blood flow in the same direction over the gills. This allows oxygen to diffuse very fast because both liquids are moving together. In parallel flow, the liquids go in opposite directions and hit each other, stopping diffusion. With counter-current flow, 100% of all oxygen in the water gets transferred into the fish blood.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'In counter-current flow, water and blood flow in opposite directions across the secondary gill lamellae.',
        indicativePhrases: ['water and blood flow in opposite directions'],
        rejectOrErrors: 'Reject: flow in same direction.',
      },
      {
        markCode: 'M2',
        criteria:
          'Water with a relatively high oxygen concentration always meets blood with a lower oxygen concentration (blood always has lower pO2 than adjacent water).',
        indicativePhrases: [
          'blood always meets water with higher oxygen concentration',
          'water always has higher pO2 than adjacent blood',
        ],
      },
      {
        markCode: 'M3',
        criteria:
          'A concentration / diffusion gradient for oxygen is maintained across the ENTIRE length of the gill lamella / capillary bed.',
        indicativePhrases: [
          'concentration gradient maintained across entire length',
          'gradient maintained along whole capillary bed',
        ],
        rejectOrErrors: 'Must state: across entire / whole length.',
      },
      {
        markCode: 'M4',
        criteria:
          'In parallel flow, equilibrium would be reached halfway across the lamella (approx 50%), whereas counter-current allows a higher percentage (approx 80%) of oxygen to be absorbed into the blood.',
        indicativePhrases: [
          'in parallel flow equilibrium is reached',
          'diffusion would stop halfway in parallel',
          'greater / higher percentage of oxygen absorbed',
        ],
        rejectOrErrors: 'Reject: 100% of oxygen is absorbed.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Counter-current flow means that water and blood flow in the same direction',
        issueType: 'misconception',
        explanation: 'Counter-current literally means flowing in OPPOSITE directions. Parallel flow is flowing in the same direction.',
        markLost: 1,
        suggestedCorrection: 'Counter-current flow means water and blood flow in opposite directions across the gill lamellae.',
      },
      {
        phrase: 'In parallel flow, the liquids go in opposite directions and hit each other',
        issueType: 'misconception',
        explanation: 'In parallel flow, liquids flow in the SAME direction, reaching equilibrium at ~50% saturation so diffusion ceases.',
        markLost: 1,
        suggestedCorrection: 'In parallel flow, water and blood flow in the same direction, quickly reaching equilibrium halfway along.',
      },
      {
        phrase: '100% of all oxygen in the water gets transferred into the fish blood',
        issueType: 'poor_alignment',
        explanation: 'Diffusion requires a concentration gradient; 100% transfer is physically impossible. Counter-current achieves ~80% absorption compared to ~50% in parallel.',
        markLost: 1,
        suggestedCorrection: 'maintaining a gradient so approximately 80% of dissolved oxygen diffuses into the blood.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4 marks. The candidate inverted the definitions of counter-current and parallel flow, and claimed physically impossible 100% oxygen absorption.',
    },
    exemplarRewrite:
      'In a counter-current exchange system, water and blood flow in opposite directions across the secondary gill lamellae. Because of this arrangement, blood that is already partially oxygenated continually meets incoming water that has a higher partial pressure of oxygen than the blood. This ensures that a diffusion gradient for oxygen is maintained across the entire length of the gill lamella and capillary bed. In contrast, if flow were parallel (same direction), a 50% concentration equilibrium would be reached halfway along the lamella, preventing further net diffusion. Counter-current flow therefore enables approximately 80% of the dissolved oxygen to diffuse into the blood.',
    keyTerms: [
      'Opposite directions',
      'Diffusion gradient maintained',
      'Entire length of lamella',
      'Equilibrium reached in parallel flow',
      'Higher percentage of oxygen absorbed (~80%)',
    ],
    teacherNotes:
      'AQA Senior Examiner report note: Candidates frequently miss M3 because they write "maintains a concentration gradient" without specifying "across the ENTIRE length of the gill lamella".',
    recommendedColdCall:
      'Cold-call question: "Why is the word ENTIRE required by AQA examiners when describing the concentration gradient in fish gills?"',
  },

  // QUESTION 5: UNIT 3.3 - CARDIAC CYCLE & PRESSURE (3.3.4)
  {
    id: 'aqa-3-3-cardiac-cycle',
    title: 'The Cardiac Cycle: Ventricular Systole & Pressure Changes',
    examBoard: 'AQA',
    specCode: '3.3.4.1',
    aqaUnit: '3.3',
    subject: 'AQA AS Biology (7401)',
    topic: '3.3 Organisms Exchange Substances: Cardiac Cycle & Heart Valves',
    aoLevel: 'AO2 (3 marks) / AO1 (1 mark)',
    totalMarks: 4,
    questionText:
      'Explain how the changes in pressure in the left atrium, left ventricle, and aorta cause the atrioventricular (bicuspid) valve and the semi-lunar (aortic) valve to open and close during ventricular systole. (4 marks)',
    contextNote:
      'Wiggers pressure graph analysis. Students frequently write that valves "suck" blood, confuse which pressure must exceed which, or mix up AV and semi-lunar valve positions.',
    flawedAnswer:
      'During ventricular systole, the left ventricle relaxes so blood gets sucked in. As pressure in the left ventricle drops, the bicuspid atrioventricular valve opens to let blood flow into the ventricle. When the ventricle is full, it squeezes and the aortic semi-lunar valve closes to keep the pressure high in the ventricle. The bicuspid valve also stays open so blood can push up into the aorta.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Ventricular systole causes the thick muscular wall of the left ventricle to contract, causing ventricular pressure to rise above atrial pressure.',
        indicativePhrases: [
          'ventricle contracts',
          'pressure in ventricle rises above atrial pressure',
        ],
      },
      {
        markCode: 'M2',
        criteria:
          'Higher pressure in the ventricle forces the atrioventricular (bicuspid) valve shut, preventing backflow of blood into the left atrium.',
        indicativePhrases: [
          'atrioventricular / bicuspid valve closes',
          'prevents backflow of blood into atrium',
        ],
        rejectOrErrors: 'Reject: AV valve opens during ventricular systole.',
      },
      {
        markCode: 'M3',
        criteria:
          'Ventricular pressure continues to rise until it exceeds the pressure in the aorta.',
        indicativePhrases: [
          'ventricular pressure exceeds / becomes higher than aortic pressure',
        ],
      },
      {
        markCode: 'M4',
        criteria:
          'This forces the semi-lunar (aortic) valve open, allowing blood to be ejected under high pressure into the aorta.',
        indicativePhrases: [
          'semi-lunar / aortic valve opens',
          'blood ejected / pumped into aorta',
        ],
        rejectOrErrors: 'Reject: semi-lunar valve closes during systole.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'left ventricle relaxes so blood gets sucked in',
        issueType: 'misconception',
        explanation: 'Ventricular SYSTOLE means contraction, not relaxation (diastole). Valves open and close due to pressure differences, not suction.',
        markLost: 1,
        suggestedCorrection: 'left ventricle contracts, rapidly increasing ventricular pressure.',
      },
      {
        phrase: 'bicuspid atrioventricular valve opens to let blood flow into the ventricle',
        issueType: 'misconception',
        explanation: 'When ventricular pressure exceeds atrial pressure, the bicuspid valve is forced SHUT to prevent backflow.',
        markLost: 1,
        suggestedCorrection: 'the atrioventricular valve is pushed closed to prevent backflow into the atrium.',
      },
      {
        phrase: 'the aortic semi-lunar valve closes to keep the pressure high',
        issueType: 'misconception',
        explanation: 'When ventricular pressure exceeds aortic pressure, the semi-lunar valve OPENS to allow blood into the aorta.',
        markLost: 1,
        suggestedCorrection: 'the semi-lunar valve opens when ventricular pressure exceeds aortic pressure.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4 marks. The candidate described ventricular relaxation instead of systole, and completely inverted the opening and closing of both heart valves.',
    },
    exemplarRewrite:
      'During ventricular systole, the thick muscular wall of the left ventricle contracts, causing ventricular pressure to increase rapidly until it exceeds the pressure in the left atrium. This pressure difference forces the atrioventricular (bicuspid) valve to close, preventing the backflow of blood into the left atrium. As the ventricle continues to contract, ventricular pressure rises further until it exceeds the hydrostatic pressure in the aorta. This pushes the semi-lunar (aortic) valve open, allowing oxygenated blood to be ejected under high pressure into the aorta.',
    keyTerms: [
      'Ventricular contraction',
      'Ventricular pressure exceeds atrial pressure',
      'Atrioventricular valve closes (prevents backflow)',
      'Ventricular pressure exceeds aortic pressure',
      'Semi-lunar valve opens',
    ],
    teacherNotes:
      'AQA Chief Examiner tip: Emphasise to students that valves do not open or close voluntarily; they are passive flaps forced open or shut purely by pressure gradients across them.',
    recommendedColdCall:
      'Cold-call question: "At what exact pressure intersection on a cardiac cycle graph does the atrioventricular valve snap shut?"',
  },

  // QUESTION 6: UNIT 3.4 - MEIOSIS & GENETIC DIVERSITY (3.4.3)
  {
    id: 'aqa-3-4-meiosis',
    title: 'Meiosis: Mechanisms of Generating Genetic Variation',
    examBoard: 'AQA',
    specCode: '3.4.3',
    aqaUnit: '3.4',
    subject: 'AQA AS Biology (7401)',
    topic: '3.4 Genetic Information: Meiosis & Genetic Diversity',
    aoLevel: 'AO1 (2 marks) / AO2 (2 marks)',
    totalMarks: 4,
    questionText:
      'Explain how crossing over and independent segregation during meiosis produce genetic variation in the resulting gametes. (4 marks)',
    contextNote:
      'High-frequency AQA Paper 2 question. Students often say crossing over happens between sister chromatids, or confuse independent segregation with independent assortment.',
    flawedAnswer:
      'Meiosis makes variation because the cell duplicates its chromosomes twice to make 4 identical gametes. In crossing over, sister chromatids line up and twist around each other, swapping identical genes so alleles mutate. Then in independent segregation, chromosomes randomly mutate into different alleles and separate into gametes by chance.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Crossing over occurs between homologous chromosomes / non-sister chromatids during Prophase I.',
        indicativePhrases: [
          'between homologous chromosomes',
          'between non-sister chromatids',
          'chiasma / chiasmata formed',
        ],
        rejectOrErrors: 'Reject: crossing over between sister chromatids.',
      },
      {
        markCode: 'M2',
        criteria:
          'Alleles are exchanged / swapped between chromatids, creating new combinations of maternal and paternal alleles (recombinants).',
        indicativePhrases: [
          'exchange of alleles',
          'new combination of alleles / recombinant chromatids',
        ],
        rejectOrErrors: 'Reject: swapping genes (alleles must be specified).',
      },
      {
        markCode: 'M3',
        criteria:
          'Independent segregation occurs when homologous pairs of chromosomes line up at the equator of the spindle in random orientations during Meiosis I.',
        indicativePhrases: [
          'homologous pairs line up randomly at equator',
          'random orientation of maternal and paternal chromosomes',
        ],
      },
      {
        markCode: 'M4',
        criteria:
          'Produces different combinations of maternal and paternal chromosomes in the resulting daughter haploid cells / gametes.',
        indicativePhrases: [
          'different combinations of maternal and paternal chromosomes',
          'gametes receive random mix of maternal/paternal chromosomes',
        ],
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'In crossing over, sister chromatids line up and twist around each other, swapping identical genes',
        issueType: 'misconception',
        explanation: 'Crossing over occurs between NON-SISTER chromatids of homologous chromosomes. Sister chromatids are genetically identical, so swapping between them yields zero variation. Also, ALLELES are swapped, not genes.',
        markLost: 1,
        suggestedCorrection: 'Crossing over occurs between non-sister chromatids of homologous chromosomes, exchanging alleles.',
      },
      {
        phrase: 'so alleles mutate',
        issueType: 'misconception',
        explanation: 'Crossing over does not mutate alleles; it recombines existing alleles into new combinations.',
        markLost: 1,
        suggestedCorrection: 'producing new combinations of maternal and paternal alleles on recombinant chromatids.',
      },
      {
        phrase: 'independent segregation, chromosomes randomly mutate into different alleles',
        issueType: 'misconception',
        explanation: 'Independent segregation is the random alignment and separation of maternal and paternal homologous chromosomes, not mutation.',
        markLost: 1,
        suggestedCorrection: 'homologous chromosome pairs align randomly at the equator, producing novel combinations of maternal and paternal chromosomes in gametes.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4 marks. The candidate wrote "sister chromatids" instead of non-sister, said "genes" instead of alleles, and falsely attributed variation to spontaneous mutations rather than chromosome shuffling.',
    },
    exemplarRewrite:
      'During Prophase I of meiosis, homologous chromosomes pair up to form bivalents. Crossing over occurs when non-sister chromatids twist around one another, break at points called chiasmata, and exchange equivalent sections of chromatids. This exchanges alleles between the homologous chromosomes, producing new combinations of maternal and paternal alleles on recombinant chromatids. Furthermore, during Metaphase I, independent segregation occurs as homologous pairs of chromosomes align randomly at the cell equator. It is completely random whether the maternal or paternal chromosome of each pair faces either pole of the spindle, producing different combinations of maternal and paternal chromosomes in each resulting haploid gamete.',
    keyTerms: [
      'Homologous chromosomes',
      'Non-sister chromatids',
      'Exchange of alleles',
      'New combinations of alleles (recombinant)',
      'Independent segregation',
      'Random alignment at equator',
      'Maternal and paternal chromosome combinations',
    ],
    teacherNotes:
      'Strict AQA keyword alert: "Non-sister chromatids" and "alleles" are required. Writing "sister chromatids" or "swapping genes" receives 0 marks on AQA mark schemes.',
    recommendedColdCall:
      'Cold-call question: "Why does crossing over between sister chromatids produce zero genetic variation?"',
  },
];

export const INITIAL_INTERACTIVE_MODULES: InteractiveRevisionModule[] = [
  // MODULE 1: CATEGORIZATION (UNIT 3.1)
  {
    id: 'aqa-cat-lipids',
    type: 'categorization',
    title: 'AQA 3.1.3: Triglycerides vs Phospholipids',
    topic: '3.1 Biological Molecules: Lipids',
    specCode: '3.1.3',
    aqaUnit: '3.1',
    examBoard: 'AQA',
    instructions:
      'Sort each structural feature, property, and biochemical function into either Triglycerides or Phospholipids. Instant diagnostic hints will guide you on misconceptions.',
    categories: ['Triglyceride', 'Phospholipid'],
    items: [
      {
        id: 'c1',
        text: 'Contains exactly three fatty acids bonded to one glycerol molecule by ester bonds.',
        correctCategory: 'Triglyceride',
        diagnosticHint:
          'Triglycerides have 3 fatty acids; phospholipids replace one fatty acid with a phosphate group.',
      },
      {
        id: 'c2',
        text: 'Forms a bilayer in aqueous solutions due to a hydrophilic phosphate head and hydrophobic hydrocarbon tails.',
        correctCategory: 'Phospholipid',
        diagnosticHint:
          'Only phospholipids have a charged phosphate group that interacts with water molecules, forming cell membranes.',
      },
      {
        id: 'c3',
        text: 'Primary function is long-term energy storage and metabolic water release upon oxidation.',
        correctCategory: 'Triglyceride',
        diagnosticHint:
          'Triglycerides contain high ratio of energy-storing C-H bonds, yielding twice as much energy per gram as carbohydrates.',
      },
      {
        id: 'c4',
        text: 'Synthesized via condensation reactions forming exactly three ester bonds and releasing three water molecules.',
        correctCategory: 'Triglyceride',
        diagnosticHint:
          'Triglycerides form 3 ester bonds; phospholipids form 2 ester bonds with fatty acids and a phosphate ester bond.',
      },
      {
        id: 'c5',
        text: 'Can combine with carbohydrates in the Golgi apparatus to form glycolipids for cell recognition.',
        correctCategory: 'Phospholipid',
        diagnosticHint:
          'Phospholipids in membrane bilayers can be modified into glycolipids for cell-to-cell adhesion and antigens.',
      },
      {
        id: 'c6',
        text: 'Completely non-polar and hydrophobic throughout its entire molecular structure (insoluble in water).',
        correctCategory: 'Triglyceride',
        diagnosticHint:
          'Triglycerides are entirely non-polar with no charged regions, which prevents them from affecting the cell water potential.',
      },
    ],
  },

  // MODULE 2: CATEGORIZATION (UNIT 3.2)
  {
    id: 'aqa-cat-cells',
    type: 'categorization',
    title: 'AQA 3.2.1: Prokaryotic vs Eukaryotic Cell Structures',
    topic: '3.2 Cells: Cell Structure & Organelles',
    specCode: '3.2.1',
    aqaUnit: '3.2',
    examBoard: 'AQA',
    instructions:
      'Classify each organelle, nucleic acid arrangement, and structural characteristic into Prokaryotic or Eukaryotic cells according to AQA 7401 specification.',
    categories: ['Prokaryotic Cell', 'Eukaryotic Cell'],
    items: [
      {
        id: 'cp1',
        text: 'DNA is linear and associated with histone proteins to form chromatin inside a membrane-bound nucleus.',
        correctCategory: 'Eukaryotic Cell',
        diagnosticHint:
          'Eukaryotes have linear DNA with histones; prokaryotes possess circular naked DNA without histones.',
      },
      {
        id: 'cp2',
        text: 'Cell wall made of the polymer murein (peptidoglycan), not cellulose or chitin.',
        correctCategory: 'Prokaryotic Cell',
        diagnosticHint:
          'Prokaryotes (bacteria) have murein walls; plants have cellulose walls and fungi have chitin walls.',
      },
      {
        id: 'cp3',
        text: 'Possesses smaller 70S ribosomes in cytoplasm; lacks membrane-bound organelles such as mitochondria and Golgi.',
        correctCategory: 'Prokaryotic Cell',
        diagnosticHint:
          'Prokaryotes contain 70S ribosomes only; eukaryotic cytoplasm contains larger 80S ribosomes.',
      },
      {
        id: 'cp4',
        text: 'Divides by binary fission, replicating its circular DNA and plasmids before division of cytoplasm.',
        correctCategory: 'Prokaryotic Cell',
        diagnosticHint:
          'Prokaryotes divide by binary fission; eukaryotes divide by mitosis or meiosis with spindle fibers.',
      },
      {
        id: 'cp5',
        text: 'Membrane-bound organelles such as lysosomes, endoplasmic reticulum, and 80S ribosomes.',
        correctCategory: 'Eukaryotic Cell',
        diagnosticHint:
          'Only eukaryotes have compartmentalised membrane-bound organelles.',
      },
      {
        id: 'cp6',
        text: 'May contain one or more small circular loops of DNA called plasmids that can be transferred between cells.',
        correctCategory: 'Prokaryotic Cell',
        diagnosticHint:
          'Plasmids are small circular DNA loops carrying antibiotic resistance genes in bacteria.',
      },
    ],
  },

  // MODULE 3: INTERACTIVE DIAGRAM (UNIT 3.2 - CO-TRANSPORT IN ILEUM)
  {
    id: 'aqa-diag-cotransport',
    type: 'diagram',
    title: 'AQA 3.2.3: Co-Transport & Absorption in the Ileum Epithelium',
    topic: '3.2 Cells: Transport Across Cell Membranes',
    specCode: '3.2.3',
    aqaUnit: '3.2',
    examBoard: 'AQA',
    diagramKind: 'co_transport_ileum',
    instructions:
      'Inspect each numbered node on the ileum epithelial cell membrane diagram. Select the accurate specification molecular mechanism and protein function.',
    hotspots: [
      {
        id: 'ct-h1',
        label: 'Sodium-Potassium ATPase Pump',
        x: 82,
        y: 65,
        options: [
          'Active transport of Na+ out of cell into blood capillary (ATP hydrolyzed)',
          'Facilitated diffusion of Na+ into blood capillary',
          'Osmosis of water and Na+ into capillary',
        ],
        correct: 'Active transport of Na+ out of cell into blood capillary (ATP hydrolyzed)',
        diagnosticHint:
          'Incorrect: The Na+/K+ pump uses active transport powered by ATP hydrolysis to actively pump 3 Na+ ions out into the capillary, maintaining a low internal Na+ concentration.',
      },
      {
        id: 'ct-h2',
        label: 'Luminal Sodium-Glucose Co-transporter',
        x: 22,
        y: 40,
        options: [
          'Facilitated diffusion of Na+ down gradient bringing glucose against gradient',
          'Direct active transport of glucose using ATP hydrolysis',
          'Simple diffusion of glucose through phospholipid bilayer',
        ],
        correct: 'Facilitated diffusion of Na+ down gradient bringing glucose against gradient',
        diagnosticHint:
          'Incorrect: The symport / co-transporter couples the facilitated diffusion of Na+ down its concentration gradient with the uptake of glucose against its gradient.',
      },
      {
        id: 'ct-h3',
        label: 'Basolateral Glucose Carrier Protein',
        x: 82,
        y: 30,
        options: [
          'Facilitated diffusion of glucose down its concentration gradient into blood',
          'Active transport of glucose into blood using ATP',
          'Exocytosis of glucose in Golgi vesicles',
        ],
        correct: 'Facilitated diffusion of glucose down its concentration gradient into blood',
        diagnosticHint:
          'Incorrect: Because glucose concentration builds up inside the cell, glucose leaves down its concentration gradient into the blood by facilitated diffusion.',
      },
      {
        id: 'ct-h4',
        label: 'Microvilli on Apical Membrane',
        x: 22,
        y: 15,
        options: [
          'Folded membrane providing large surface area for carrier/co-transporter proteins',
          'Cilia to propel food along the gut lumen',
          'Thick mucus layer preventing all diffusion',
        ],
        correct: 'Folded membrane providing large surface area for carrier/co-transporter proteins',
        diagnosticHint:
          'Incorrect: Microvilli are finger-like projections of the epithelial cell membrane that drastically increase the surface area for transport proteins.',
      },
    ],
  },

  // MODULE 4: INTERACTIVE DIAGRAM (UNIT 3.3 - CARDIAC CYCLE WIGGERS TRACE)
  {
    id: 'aqa-diag-cardiac',
    type: 'diagram',
    title: 'AQA 3.3.4.1: The Cardiac Cycle: Ventricular & Aortic Pressure Trace',
    topic: '3.3 Organisms Exchange: Cardiac Cycle & Pressure Changes',
    specCode: '3.3.4.1',
    aqaUnit: '3.3',
    examBoard: 'AQA',
    diagramKind: 'cardiac_cycle',
    instructions:
      'Identify the heart valve events and chamber states across the pressure trace of the left ventricle, left atrium, and aorta.',
    hotspots: [
      {
        id: 'cc-h1',
        label: 'Atrioventricular (Bicuspid) Valve Closes',
        x: 28,
        y: 65,
        options: [
          'Left ventricular pressure rises above left atrial pressure (AV valve shuts)',
          'Aortic valve opens due to atrial contraction',
          'Ventricle begins diastole and fills with blood',
        ],
        correct: 'Left ventricular pressure rises above left atrial pressure (AV valve shuts)',
        diagnosticHint:
          'Incorrect: The moment ventricular pressure exceeds atrial pressure, blood pushes the flaps of the AV valve shut to prevent backflow into the atrium.',
      },
      {
        id: 'cc-h2',
        label: 'Semi-lunar (Aortic) Valve Opens',
        x: 42,
        y: 35,
        options: [
          'Left ventricular pressure exceeds aortic pressure (blood ejected into aorta)',
          'AV valve reopens to fill the ventricle',
          'Atrium contracts to pump blood into aorta',
        ],
        correct: 'Left ventricular pressure exceeds aortic pressure (blood ejected into aorta)',
        diagnosticHint:
          'Incorrect: When ventricular pressure rises above aortic pressure (~80 mmHg / 10.6 kPa), the aortic semi-lunar valve is forced open.',
      },
      {
        id: 'cc-h3',
        label: 'Semi-lunar (Aortic) Valve Closes',
        x: 65,
        y: 28,
        options: [
          'Ventricular pressure falls below aortic pressure (elastic recoil of aorta)',
          'Ventricle contracts at maximum force',
          'Atrioventricular valve opens to eject blood',
        ],
        correct: 'Ventricular pressure falls below aortic pressure (elastic recoil of aorta)',
        diagnosticHint:
          'Incorrect: As the ventricle relaxes in diastole, ventricular pressure drops below aortic pressure. Blood pushes back against semi-lunar valve cusps, closing them.',
      },
      {
        id: 'cc-h4',
        label: 'Atrioventricular Valve Opens',
        x: 78,
        y: 72,
        options: [
          'Ventricular pressure falls below atrial pressure (ventricle fills passively)',
          'Aortic valve opens to fill the atrium',
          'Semi-lunar valve re-opens during diastole',
        ],
        correct: 'Ventricular pressure falls below atrial pressure (ventricle fills passively)',
        diagnosticHint:
          'Incorrect: When ventricular pressure falls below atrial pressure during diastole, blood in the atrium pushes the AV valve open, passively filling the ventricle.',
      },
    ],
  },

  // MODULE 5: KEYWORD MATCHER (UNIT 3.1 - INDUCED FIT & ENZYMES)
  {
    id: 'aqa-kw-enzymes',
    type: 'keyword_matcher',
    title: 'AQA 3.1.4.2: Induced Fit Model & Enzyme Denaturation',
    topic: '3.1 Biological Molecules: Enzymes',
    specCode: '3.1.4.2',
    aqaUnit: '3.1',
    examBoard: 'AQA',
    instructions:
      'Match the required AQA specification keywords into the exam description of enzyme action and thermal denaturation.',
    passageParts: [
      'According to the ',
      ', the active site of an enzyme is not initially an exact rigid fit to the substrate. As the substrate binds, the enzyme ',
      ' changes slightly. This puts strain on the chemical bonds within the substrate, lowering the ',
      ' required for the reaction. If the temperature is raised significantly above the optimum, increased kinetic energy causes the atoms to vibrate violently, breaking ',
      ' and hydrogen bonds. As a result, the specific ',
      ' is altered. The enzyme is said to be ',
      ' because the active site is no longer complementary, preventing the formation of ',
      '.',
    ],
    gapIds: ['kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6', 'kw-7'],
    gaps: {
      'kw-1': {
        id: 'kw-1',
        correctTerm: 'induced fit model',
        clue: 'Modern theory replacing lock and key',
        diagnosticHint:
          'Incorrect: AQA exclusively requires the "induced fit model" (not the obsolete lock-and-key hypothesis).',
      },
      'kw-2': {
        id: 'kw-2',
        correctTerm: 'tertiary structure',
        clue: 'Overall 3D conformational shape of protein',
        diagnosticHint:
          'Incorrect: Substrate binding induces a subtle conformational shift in the tertiary structure of the active site.',
      },
      'kw-3': {
        id: 'kw-3',
        correctTerm: 'activation energy',
        clue: 'Minimum energy needed to initiate reaction',
        diagnosticHint:
          'Incorrect: Enzymes speed up metabolic reactions by lowering the activation energy.',
      },
      'kw-4': {
        id: 'kw-4',
        correctTerm: 'ionic bonds',
        clue: 'Bonds between oppositely charged R groups',
        diagnosticHint:
          'Incorrect: Thermal denaturation breaks hydrogen bonds and ionic bonds between variable R-groups.',
      },
      'kw-5': {
        id: 'kw-5',
        correctTerm: 'active site shape',
        clue: 'Region of enzyme that binds substrate',
        diagnosticHint:
          'Incorrect: Denaturation changes the specific 3D shape of the active site.',
      },
      'kw-6': {
        id: 'kw-6',
        correctTerm: 'denatured',
        clue: 'Loss of functional 3D conformation (NOT killed)',
        diagnosticHint:
          'Incorrect: BANNED word alert: Never write "killed" or "destroyed" for enzymes. The term is "denatured".',
      },
      'kw-7': {
        id: 'kw-7',
        correctTerm: 'enzyme-substrate complexes',
        clue: 'Temporary bound intermediate molecule',
        diagnosticHint:
          'Incorrect: Without a complementary active site, the enzyme can no longer form enzyme-substrate complexes (ES complexes).',
      },
    },
    termBank: [
      'induced fit model',
      'tertiary structure',
      'activation energy',
      'ionic bonds',
      'active site shape',
      'denatured',
      'enzyme-substrate complexes',
      'lock and key',
      'peptide bonds',
      'killed',
    ],
  },

  // MODULE 6: KEYWORD MATCHER (UNIT 3.3 - HAEMOGLOBIN & BOHR EFFECT)
  {
    id: 'aqa-kw-haemoglobin',
    type: 'keyword_matcher',
    title: 'AQA 3.3.4.1: Haemoglobin Affinity & The Bohr Effect',
    topic: '3.3 Organisms Exchange: Haemoglobin & Mass Transport',
    specCode: '3.3.4.1',
    aqaUnit: '3.3',
    examBoard: 'AQA',
    instructions:
      'Fill in the blanks with precise AQA examiner terms explaining the oxyhaemoglobin dissociation curve and the Bohr effect in respiring muscle.',
    passageParts: [
      'Haemoglobin is a quaternary protein containing four haem groups that binds oxygen cooperatively. In actively respiring tissues, high rates of aerobic respiration produce large quantities of ',
      '. This dissolves to form carbonic acid, which lowers the pH of the blood. The lower pH causes haemoglobin to undergo a slight change in its ',
      ', resulting in a ',
      ' affinity for oxygen. Consequently, the oxygen dissociation curve shifts to the ',
      ', meaning haemoglobin ',
      ' oxygen more readily to tissues to supply aerobic respiration. This phenomenon is known as the ',
      '.',
    ],
    gapIds: ['hb-1', 'hb-2', 'hb-3', 'hb-4', 'hb-5', 'hb-6'],
    gaps: {
      'hb-1': {
        id: 'hb-1',
        correctTerm: 'carbon dioxide',
        clue: 'Gas produced in Krebs cycle & link reaction',
        diagnosticHint:
          'Incorrect: Respiring tissues produce carbon dioxide (CO2), which decreases the blood pH.',
      },
      'hb-2': {
        id: 'hb-2',
        correctTerm: 'quaternary structure',
        clue: 'Arrangement of multiple polypeptide subunits',
        diagnosticHint:
          'Incorrect: Protons (H+) bind to haemoglobin and alter its quaternary / tertiary structure.',
      },
      'hb-3': {
        id: 'hb-3',
        correctTerm: 'lower',
        clue: 'Decreased attraction for ligand',
        diagnosticHint:
          'Incorrect: The Bohr shift decreases (lowers) haemoglobin affinity for oxygen at respiring tissues.',
      },
      'hb-4': {
        id: 'hb-4',
        correctTerm: 'right',
        clue: 'Direction curve moves when affinity drops',
        diagnosticHint:
          'Incorrect: A lower affinity shifts the curve to the RIGHT (Bohr shift to the right).',
      },
      'hb-5': {
        id: 'hb-5',
        correctTerm: 'unloads',
        clue: 'Releases oxygen into tissue fluid',
        diagnosticHint:
          'Incorrect: Haemoglobin unloads / dissociates oxygen more readily to respiring muscle cells.',
      },
      'hb-6': {
        id: 'hb-6',
        correctTerm: 'Bohr effect',
        clue: 'Named physiological effect',
        diagnosticHint:
          'Incorrect: The shift in oxygen affinity caused by carbon dioxide and pH is the Bohr effect.',
      },
    },
    termBank: [
      'carbon dioxide',
      'quaternary structure',
      'lower',
      'right',
      'unloads',
      'Bohr effect',
      'higher',
      'left',
      'loads',
      'lactic acid',
    ],
  },
];

export const INITIAL_STUDENT_SUBMISSIONS: StudentSubmission[] = [
  {
    id: 'sub-1',
    studentName: 'Callum Wright',
    questionId: 'aqa-3-1-enzymes',
    awardedMarks: 1,
    annotatedNotes:
      '[Misconception]: "kills the enzyme completely" - enzymes are denatured; [Misconception]: "Substance A is competitive" - it alters the active site from allosteric site so it is non-competitive.',
    studentRewrite:
      'Substance B is a competitive inhibitor because its molecular shape is similar to the substrate, allowing it to compete for binding to the active site. Increasing substrate concentration overcomes this inhibition, as substrate outcompetes the inhibitor so the same Vmax can be reached. Substance A is a non-competitive inhibitor that binds to an allosteric site, altering the tertiary structure and shape of the active site so fewer enzyme-substrate complexes can form. Increasing substrate concentration cannot overcome Substance A, resulting in a permanently lower Vmax.',
    submittedAt: '09:42',
    isFlaggedForProjection: true,
  },
  {
    id: 'sub-2',
    studentName: 'Aisha Begum',
    questionId: 'aqa-3-2-cotransport',
    awardedMarks: 0,
    annotatedNotes:
      '[Misconception]: "sodium diffuses by osmosis" - osmosis only applies to water; [Missing Keyword]: forgot to state Na+/K+ pump hydrolyses ATP; [Poor Mark Alignment]: glucose exits to blood by facilitated diffusion, not active transport.',
    studentRewrite:
      'Sodium ions are actively transported out of the epithelial cell into the blood capillary by the sodium-potassium ATPase pump. This maintains a steep concentration gradient with a lower sodium concentration inside the epithelial cell than in the ileum lumen. Sodium ions then diffuse from the lumen into the epithelial cell by facilitated diffusion via a co-transporter protein, carrying glucose molecules with them against their concentration gradient. Finally, glucose passes from the high concentration inside the cell into the blood capillary down its concentration gradient by facilitated diffusion.',
    submittedAt: '09:51',
    isFlaggedForProjection: true,
  },
  {
    id: 'sub-3',
    studentName: 'Oliver Smith',
    questionId: 'aqa-3-3-fish-gills',
    awardedMarks: 0,
    annotatedNotes:
      '[Misconception]: "counter-current means same direction" - they flow in opposite directions; [Misconception]: "100% of oxygen transferred" - physically impossible; [Missing Keyword]: missing "across the entire length of the lamella".',
    studentRewrite:
      'In counter-current flow, water and blood flow across the secondary gill lamellae in opposite directions. This maintains a concentration gradient for oxygen between the water and blood across the entire length of the capillary bed. In parallel flow, equilibrium would be reached halfway along the lamella, but counter-current flow allows approximately 80% of the dissolved oxygen to diffuse into the blood.',
    submittedAt: '10:04',
    isFlaggedForProjection: false,
  },
];
