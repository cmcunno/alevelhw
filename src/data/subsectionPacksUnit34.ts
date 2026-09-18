import { FlawedQuestion } from '../types';

export const SUBSECTION_PACKS_UNIT_34: FlawedQuestion[] = [
  // 3.4.1 DNA, Genes and Chromosomes
  {
    id: 'pack-3-4-1',
    title: '3.4.1 DNA, Genes & Chromosomes: Genetic Code Features & Exons/Introns',
    examBoard: 'AQA',
    specCode: '3.4.1',
    aqaUnit: '3.4',
    subject: 'AQA AS Biology (7401)',
    topic: '3.4.1 DNA, Genes and Chromosomes',
    aoLevel: 'AO1 (2 marks) / AO2 (2 marks)',
    totalMarks: 4,
    questionText:
      'Explain what is meant by the terms "degenerate", "non-overlapping", and "universal" when describing the genetic code, and explain the difference between exons and introns. (4 marks)',
    contextNote:
      'AQA Paper 2 definition staple. Degenerate = more than one triplet codes for an amino acid; non-overlapping = each base is read once in its triplet; universal = same triplet codes for same amino acid across all organisms; exons = coding sequences, introns = non-coding.',
    flawedAnswer:
      'Degenerate means that the genetic code decays and rots as an organism gets older. Non-overlapping means that individual genes cannot sit next to each other on the chromosome. Universal means that all living organisms have the exact same DNA sequence. Introns are the important parts that make proteins, while exons are junk DNA that gets thrown away.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Degenerate: More than one base triplet (codon) can code for the same amino acid (reducing impact of mutations).',
        indicativePhrases: ['more than one triplet codes for same amino acid', 'several codons code for one amino acid'],
        rejectOrErrors: 'Reject: one triplet codes for several amino acids.',
      },
      {
        markCode: 'M2',
        criteria:
          'Non-overlapping: Each base in the polynucleotide sequence is part of only one triplet and is read only once (no base is shared between codons).',
        indicativePhrases: ['each base read only once', 'bases not shared between codons'],
      },
      {
        markCode: 'M3',
        criteria:
          'Universal: The same base triplet codes for the same amino acid in almost all organisms (evidence for common ancestry).',
        indicativePhrases: ['same triplet codes for same amino acid in all organisms', 'same codon = same amino acid'],
        rejectOrErrors: 'Reject: all organisms have identical DNA sequences.',
      },
      {
        markCode: 'M4',
        criteria:
          'Exons are base sequences that code for amino acid sequences (polypeptides), whereas introns are non-coding base sequences within genes.',
        indicativePhrases: ['exons code for amino acids / polypeptides', 'introns are non-coding sequences'],
        rejectOrErrors: 'Reject if exons and introns are inverted.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Degenerate means that the genetic code decays and rots as an organism gets older',
        issueType: 'misconception',
        explanation: 'Degenerate means that MORE THAN ONE triplet can code for the SAME amino acid (e.g. 64 codons for 20 amino acids).',
        markLost: 1,
        suggestedCorrection: 'Degenerate means that multiple different codons can code for the same amino acid.',
      },
      {
        phrase: 'Universal means that all living organisms have the exact same DNA sequence',
        issueType: 'misconception',
        explanation: 'Universal means the SAME TRIPLET codes for the SAME AMINO ACID across all species, not that DNA is identical.',
        markLost: 1,
        suggestedCorrection: 'Universal means the same base triplet codes for the exact same amino acid in nearly all living organisms.',
      },
      {
        phrase: 'Introns are the important parts that make proteins, while exons are junk DNA',
        issueType: 'misconception',
        explanation: 'EXONS are coding sequences that make proteins. INTRONS are non-coding sequences spliced out.',
        markLost: 1,
        suggestedCorrection: 'Exons are coding sequences for polypeptides, while introns are non-coding sequences within a gene.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Fanciful colloquial definition of degenerate, incorrect definition of universal, and completely inverted exons and introns.',
    },
    exemplarRewrite:
      'The genetic code is described as degenerate because there are 64 possible triplet combinations (codons) but only 20 standard amino acids, meaning that more than one base triplet can code for the same amino acid. It is non-overlapping because each individual nucleotide base in the mRNA sequence belongs to only one triplet and is read only once in sequence from a fixed starting point, without any base sharing between adjacent codons. The code is universal because the same specific base triplet codes for the same amino acid across almost all living organisms, providing compelling biochemical evidence for a common evolutionary ancestor. Within a eukaryotic gene, exons are coding nucleotide sequences that code for the amino acid sequence of a polypeptide, whereas introns are non-coding intervening sequences that are transcribed into pre-mRNA but spliced out prior to translation.',
    keyTerms: [
      'Degenerate: multiple triplets code for same amino acid',
      'Non-overlapping: each base read once in its triplet',
      'Universal: same triplet codes for same amino acid in all species',
      'Exons: coding sequences for polypeptides',
      'Introns: non-coding sequences within genes',
    ],
    teacherNotes:
      'AQA Chief Examiner tip: Watch out for students who say "one triplet codes for multiple amino acids" — this is completely wrong. One triplet codes for ONE amino acid, but multiple triplets can code for the SAME amino acid.',
    recommendedColdCall:
      'Cold-call: "Does degenerate mean one codon codes for multiple amino acids, or multiple codons code for the same amino acid?"',
  },

  // 3.4.2 DNA and Protein Synthesis
  {
    id: 'pack-3-4-2',
    title: '3.4.2 Protein Synthesis: Transcription, Splicing & Translation',
    examBoard: 'AQA',
    specCode: '3.4.2',
    aqaUnit: '3.4',
    subject: 'AQA AS Biology (7401)',
    topic: '3.4.2 DNA and Protein Synthesis',
    aoLevel: 'AO1 (2 marks) / AO2 (2 marks)',
    totalMarks: 4,
    questionText:
      'Describe how transcription and pre-mRNA splicing produce mature mRNA in eukaryotic cells, and describe how translation assembles a polypeptide at a ribosome. (4 marks)',
    contextNote:
      'Core AQA Paper 2 essay/structured question. RNA polymerase, complementary base pairing with template strand (uracil replaces thymine), splicing removes introns, tRNA anticodons bind codons, peptide bonds between amino acids.',
    flawedAnswer:
      'In transcription, DNA helicase turns the DNA into RNA by swapping thymine for thiamine. The entire pre-mRNA molecule with all its introns and exons leaves the nucleus directly into the ribosome. In translation, tRNA molecules carry complete proteins to the ribosome and glue them together using hydrogen bonds.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'DNA helicase unwinds DNA and separates strands; RNA polymerase binds to promoter and joins free RNA nucleotides together by phosphodiester bonds complementary to the DNA template strand (uracil pairing with adenine).',
        indicativePhrases: ['RNA polymerase joins RNA nucleotides', 'phosphodiester bonds', 'uracil pairs with adenine'],
      },
      {
        markCode: 'M2',
        criteria:
          'In eukaryotic pre-mRNA, splicing removes non-coding introns and joins coding exons together to form mature mRNA, which exits the nucleus via nuclear pores.',
        indicativePhrases: ['splicing removes introns', 'exons joined together', 'mature mRNA exits via nuclear pores'],
        rejectOrErrors: 'Reject: splicing occurs in prokaryotes (prokaryotic DNA lacks introns).',
      },
      {
        markCode: 'M3',
        criteria:
          'At the ribosome, tRNA molecules with specific complementary anticodons bind to codons on the mRNA by complementary base pairing, each carrying a specific amino acid.',
        indicativePhrases: ['tRNA anticodon binds mRNA codon', 'complementary base pairing', 'tRNA carries specific amino acid'],
      },
      {
        markCode: 'M4',
        criteria:
          'Ribosome catalyses the formation of peptide bonds between adjacent amino acids using energy from ATP hydrolysis, forming a polypeptide chain until a stop codon is reached.',
        indicativePhrases: ['peptide bonds formed between amino acids', 'uses energy from ATP', 'stops at stop codon'],
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'DNA helicase turns the DNA into RNA by swapping thymine for thiamine',
        issueType: 'misconception',
        explanation: 'RNA POLYMERASE synthesises RNA using free RNA nucleotides. Uracil (not thiamine, a B vitamin) pairs with adenine in RNA.',
        markLost: 1,
        suggestedCorrection: 'RNA polymerase joins complementary RNA nucleotides (uracil pairing with adenine) to synthesise pre-mRNA.',
      },
      {
        phrase: 'pre-mRNA molecule with all its introns and exons leaves the nucleus directly',
        issueType: 'misconception',
        explanation: 'In eukaryotes, pre-mRNA is SPLICED in the nucleus to remove non-coding introns before mature mRNA leaves.',
        markLost: 1,
        suggestedCorrection: 'Pre-mRNA undergoes splicing to remove non-coding introns and join coding exons into mature mRNA.',
      },
      {
        phrase: 'tRNA molecules carry complete proteins to the ribosome and glue them together using hydrogen bonds',
        issueType: 'misconception',
        explanation: 'Each tRNA carries ONE AMINO ACID, not complete proteins. Amino acids are linked by PEPTIDE bonds, not hydrogen bonds.',
        markLost: 1,
        suggestedCorrection: 'tRNA molecules carry specific amino acids; the ribosome catalyses peptide bonds between adjacent amino acids.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Confused uracil with thiamine, omitted pre-mRNA splicing entirely, and claimed tRNA carries whole proteins joined by hydrogen bonds.',
    },
    exemplarRewrite:
      'During transcription, DNA helicase breaks hydrogen bonds to expose bases on the template strand. RNA polymerase binds to the promoter and moves along the template strand, matching complementary free RNA nucleotides (with uracil pairing with adenine, and cytosine with guanine) and catalysing the formation of phosphodiester bonds to synthesise pre-mRNA. In eukaryotic cells, this pre-mRNA undergoes splicing where spliceosomes excise non-coding introns and join coding exons together to form mature mRNA, which then leaves the nucleus through nuclear pores. In translation, the mature mRNA attaches to a ribosome. Specific tRNA molecules, each carrying an amino acid corresponding to its specific triplet anticodon, bind to complementary codons on the mRNA via hydrogen bonding. The ribosome moves along the mRNA, catalysing condensation reactions between adjacent amino acids to form peptide bonds using energy derived from ATP hydrolysis. This process continues until a stop codon is encountered, releasing the complete polypeptide.',
    keyTerms: [
      'RNA polymerase (phosphodiester bonds)',
      'Template strand (uracil pairs with adenine)',
      'Splicing: introns removed, exons joined',
      'Mature mRNA exits via nuclear pores',
      'tRNA anticodon binds mRNA codon',
      'Peptide bonds between amino acids (ATP-requiring)',
    ],
    teacherNotes:
      'AQA requirement: Make sure students know prokaryotes do NOT have splicing because prokaryotic genes do not contain introns.',
    recommendedColdCall:
      'Cold-call: "Why is pre-mRNA splicing absent in prokaryotic protein synthesis?"',
  },

  // 3.4.3 Genetic Diversity from Mutation and Meiosis
  {
    id: 'pack-3-4-3',
    title: '3.4.3 Meiosis & Mutation: Crossing Over & Independent Segregation',
    examBoard: 'AQA',
    specCode: '3.4.3',
    aqaUnit: '3.4',
    subject: 'AQA AS Biology (7401)',
    topic: '3.4.3 Genetic Diversity from Mutation and Meiosis',
    aoLevel: 'AO1 (2 marks) / AO2 (2 marks)',
    totalMarks: 4,
    questionText:
      'Explain how crossing over and independent segregation during meiosis generate genetic diversity in the resulting gametes. (4 marks)',
    contextNote:
      'AQA Paper 2 high-frequency question. Crossing over between non-sister chromatids of homologous chromosomes exchanges alleles; independent segregation is random alignment of homologous pairs at the equator in Meiosis I.',
    flawedAnswer:
      'Meiosis makes variation because the cell duplicates its chromosomes twice to make 4 identical gametes. In crossing over, sister chromatids line up and twist around each other, swapping identical genes so alleles mutate. Then in independent segregation, chromosomes randomly mutate into different alleles and separate into gametes by chance.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Crossing over occurs between homologous chromosomes / non-sister chromatids during Prophase I.',
        indicativePhrases: ['between homologous chromosomes', 'between non-sister chromatids', 'chiasmata form'],
        rejectOrErrors: 'Reject: crossing over between sister chromatids.',
      },
      {
        markCode: 'M2',
        criteria:
          'Alleles are exchanged between chromatids, creating new combinations of maternal and paternal alleles (recombinants).',
        indicativePhrases: ['exchange of alleles', 'new combinations of alleles / recombinant chromatids'],
        rejectOrErrors: 'Reject: swapping genes (alleles must be specified).',
      },
      {
        markCode: 'M3',
        criteria:
          'Independent segregation occurs when homologous pairs of chromosomes align randomly at the spindle equator in Meiosis I.',
        indicativePhrases: ['homologous pairs line up randomly at equator', 'random orientation of maternal and paternal chromosomes'],
      },
      {
        markCode: 'M4',
        criteria:
          'Produces different combinations of maternal and paternal chromosomes in the resulting daughter haploid cells / gametes.',
        indicativePhrases: ['different combinations of maternal and paternal chromosomes', 'gametes receive random mix of maternal/paternal chromosomes'],
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'sister chromatids line up and twist around each other, swapping identical genes',
        issueType: 'misconception',
        explanation: 'Crossing over occurs between NON-SISTER chromatids of homologous chromosomes. Sister chromatids are genetically identical. Also, ALLELES are swapped, not genes.',
        markLost: 1,
        suggestedCorrection: 'Crossing over occurs between non-sister chromatids of homologous chromosomes, exchanging alleles.',
      },
      {
        phrase: 'so alleles mutate',
        issueType: 'misconception',
        explanation: 'Crossing over recombines existing alleles; it does not mutate them.',
        markLost: 1,
        suggestedCorrection: 'producing new combinations of maternal and paternal alleles on recombinant chromatids.',
      },
      {
        phrase: 'chromosomes randomly mutate into different alleles and separate',
        issueType: 'misconception',
        explanation: 'Independent segregation is the random orientation and separation of maternal and paternal chromosomes, not mutation.',
        markLost: 1,
        suggestedCorrection: 'homologous pairs orient randomly at the equator, producing random mixtures of maternal and paternal chromosomes in gametes.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Used "sister chromatids" instead of non-sister, said "genes" instead of alleles, and falsely claimed meiosis causes spontaneous gene mutations.',
    },
    exemplarRewrite:
      'During Prophase I of meiosis, homologous chromosomes pair up to form bivalents. Crossing over occurs when non-sister chromatids twist around one another, break at points called chiasmata, and exchange equivalent sections of chromatids. This exchanges alleles between the homologous chromosomes, producing new combinations of maternal and paternal alleles on recombinant chromatids. Furthermore, during Metaphase I, independent segregation occurs as homologous pairs of chromosomes align randomly along the spindle equator. It is completely random whether the maternal or paternal chromosome of each pair faces either pole, producing novel combinations of maternal and paternal chromosomes in the resulting haploid gametes.',
    keyTerms: [
      'Homologous chromosomes',
      'Non-sister chromatids',
      'Exchange of alleles',
      'New combinations of alleles (recombinants)',
      'Independent segregation',
      'Random alignment of homologous pairs at equator',
      'Novel maternal/paternal chromosome combinations',
    ],
    teacherNotes:
      'Strict AQA keyword alerts: "Non-sister chromatids" and "alleles" are strictly required. Swapping "genes" or between "sister chromatids" gets 0 marks.',
    recommendedColdCall:
      'Cold-call: "Why does crossing over between sister chromatids fail to produce any genetic variation?"',
  },

  // 3.4.4 Genetic Diversity and Adaptation
  {
    id: 'pack-3-4-4',
    title: '3.4.4 Natural Selection & Adaptation: Directional vs Stabilising Selection',
    examBoard: 'AQA',
    specCode: '3.4.4',
    aqaUnit: '3.4',
    subject: 'AQA AS Biology (7401)',
    topic: '3.4.4 Genetic Diversity and Adaptation',
    aoLevel: 'AO2 (3 marks) / AO1 (1 mark)',
    totalMarks: 4,
    questionText:
      'Explain how natural selection leads to directional selection in a bacterial population exposed to an antibiotic, and contrast this with stabilising selection in human birth weights. (4 marks)',
    contextNote:
      'AQA criteria: Spontaneous mutation gives selective advantage; differential reproductive success; allele frequency increases; directional favours one extreme phenotype; stabilising favours modal/intermediate phenotype.',
    flawedAnswer:
      'When bacteria see an antibiotic, they decide to mutate their DNA to become immune so they can survive. The antibiotic teaches them how to build resistance genes. In human babies, stabilising selection means that all babies become gigantic because heavy babies have more cells so they are stronger.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'A random / spontaneous mutation produces an allele that confers resistance to the antibiotic in a bacterium.',
        indicativePhrases: ['random / spontaneous mutation', 'produces allele for resistance'],
        rejectOrErrors: 'Reject: antibiotic causes or induces the mutation.',
      },
      {
        markCode: 'M2',
        criteria:
          'In the presence of the antibiotic, bacteria with the resistance allele have a selective advantage, survive, and reproduce (differential reproductive success), passing on the resistance allele.',
        indicativePhrases: ['selective advantage', 'differential reproductive success / survive and pass on allele'],
      },
      {
        markCode: 'M3',
        criteria:
          'Directional selection: The frequency of the resistance allele increases over generations, shifting the mean phenotype towards the extreme resistance phenotype.',
        indicativePhrases: ['allele frequency increases', 'shifts mean phenotype towards extreme'],
      },
      {
        markCode: 'M4',
        criteria:
          'Stabilising selection (birth weights): Extreme phenotypes (very low or very high birth weights) have higher mortality; selection favours the intermediate / modal phenotype, reducing phenotypic variation.',
        indicativePhrases: ['favours intermediate / mean phenotype', 'extremes selected against / higher mortality', 'reduces phenotypic variation'],
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'they decide to mutate their DNA to become immune',
        issueType: 'misconception',
        explanation: 'Mutations are RANDOM and spontaneous; organisms cannot "decide" to mutate or adapt in response to environmental pressure.',
        markLost: 1,
        suggestedCorrection: 'A random, spontaneous mutation produces a resistance allele that confers a selective advantage.',
      },
      {
        phrase: 'antibiotic teaches them how to build resistance genes',
        issueType: 'misconception',
        explanation: 'Antibiotics act as a SELECTIVE AGENT that kills susceptible bacteria; they do not induce or create mutations.',
        markLost: 1,
        suggestedCorrection: 'The antibiotic acts as a selective agent, allowing resistant individuals to survive and reproduce.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Teleological reasoning (bacteria "deciding" to mutate), stated antibiotics teach resistance, and completely misunderstood stabilising selection.',
    },
    exemplarRewrite:
      'In a bacterial population, a random and spontaneous gene mutation may arise that confers resistance to an antibiotic (such as a gene encoding an enzyme that hydrolyses the drug). In the presence of the antibiotic, this resistance allele provides a selective advantage. While susceptible bacteria die, resistant individuals survive and reproduce by binary fission (differential reproductive success), passing the resistance allele to their offspring. Over successive generations, the frequency of the resistance allele increases. This represents directional selection, because environmental change exerts selective pressure favouring one phenotypic extreme and shifting the population mean. In contrast, stabilising selection occurs in stable environments, such as human birth weights: babies with very low birth weights (susceptible to hypothermia and infection) and very high birth weights (complications during birth) suffer higher mortality rates, meaning selective pressure acts against both phenotypic extremes and preserves the intermediate modal birth weight, narrowing phenotypic variation without shifting the mean.',
    keyTerms: [
      'Random / spontaneous mutation',
      'Selective advantage',
      'Differential reproductive success',
      'Resistance allele frequency increases',
      'Directional selection (shifts towards extreme)',
      'Stabilising selection (favours modal intermediate)',
      'Selection against extremes',
    ],
    teacherNotes:
      'Chief Examiner alert: Zero marks for any teleological language ("bacteria adapted in order to survive" or "the antibiotic caused the mutation"). Mutations are purely RANDOM.',
    recommendedColdCall:
      'Cold-call: "Does the antibiotic cause the resistance mutation, or does the mutation exist prior to antibiotic exposure?"',
  },

  // 3.4.5 Species, Taxonomy and Courtship Behaviour
  {
    id: 'pack-3-4-5',
    title: '3.4.5 Species & Taxonomy: Courtship Behaviour & Phylogenetic Hierarchy',
    examBoard: 'AQA',
    specCode: '3.4.5',
    aqaUnit: '3.4',
    subject: 'AQA AS Biology (7401)',
    topic: '3.4.5 Species, Taxonomy and Courtship Behaviour',
    aoLevel: 'AO1 (2 marks) / AO2 (2 marks)',
    totalMarks: 4,
    questionText:
      'Explain how species-specific courtship behaviour ensures successful mating and the production of fertile offspring, and describe the characteristics of a phylogenetic hierarchy. (4 marks)',
    contextNote:
      'AQA specification points: Courtship recognises own species, identifies mate capable of breeding, forms pair bond, synchronises mating; phylogenetic hierarchy groups into non-overlapping groups with smaller groups within larger groups based on evolutionary history.',
    flawedAnswer:
      'Courtship behaviour is when male animals fight to kill other species so they can eat them. A phylogenetic hierarchy is a system where organisms are put into overlapping boxes based on how similar their physical colours and sizes look today.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Courtship behaviour allows individuals to recognise members of their own species, preventing interbreeding and ensuring production of fertile offspring.',
        indicativePhrases: ['recognise members of same species', 'ensures fertile offspring / prevents hybridisation'],
      },
      {
        markCode: 'M2',
        criteria:
          'Courtship allows individuals to identify a mate that is sexually mature and physically capable of breeding, and synchronises mating / stimulates release of gametes.',
        indicativePhrases: ['identify mate capable of breeding / sexually mature', 'synchronises mating / gamete release', 'forms pair bond'],
      },
      {
        markCode: 'M3',
        criteria:
          'A phylogenetic classification system groups organisms based on their shared evolutionary history and evolutionary relationships (common ancestry).',
        indicativePhrases: ['based on evolutionary relationships', 'common ancestry / evolutionary history'],
      },
      {
        markCode: 'M4',
        criteria:
          'A hierarchy consists of smaller groups placed within larger groups, with no overlap between groups (discrete non-overlapping taxa).',
        indicativePhrases: ['smaller groups within larger groups', 'no overlap between groups'],
        rejectOrErrors: 'Must state: NO OVERLAP between groups.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Courtship behaviour is when male animals fight to kill other species so they can eat them',
        issueType: 'misconception',
        explanation: 'Courtship is SPECIES-SPECIFIC behaviour for reproductive partner recognition and mating synchronisation, not predation.',
        markLost: 1,
        suggestedCorrection: 'Courtship behaviour allows individuals to recognise members of their own species to produce fertile offspring.',
      },
      {
        phrase: 'overlapping boxes based on how similar their physical colours and sizes look today',
        issueType: 'misconception',
        explanation: 'Hierarchies have NO OVERLAP between groups, and phylogenetics is based on EVOLUTIONARY ORIGINS, not superficial appearances.',
        markLost: 1,
        suggestedCorrection: 'hierarchies feature smaller groups contained within larger groups with NO OVERLAP, based on shared evolutionary history.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Confused courtship with predation, and defined hierarchy as overlapping boxes based on superficial physical traits.',
    },
    exemplarRewrite:
      'Species-specific courtship behaviour is essential for reproductive success: it enables individuals to recognise members of their own species, preventing unproductive interspecific matings and ensuring that offspring produced are viable and fertile. It also allows an individual to identify a prospective mate that is sexually mature, fertile, and receptive, and synchronises the physiological release of gametes while facilitating the formation of a pair bond. In biological classification, a phylogenetic classification system organizes organisms according to their shared evolutionary origins and evolutionary relationships derived from common ancestors. This classification takes the form of a hierarchy: a structured system in which smaller groups are contained entirely within progressively larger, more inclusive groups (domain, kingdom, phylum, class, order, family, genus, species), with strictly no overlap between groups at any taxonomic level.',
    keyTerms: [
      'Recognise same species (fertile offspring)',
      'Identify sexually mature mate',
      'Synchronise mating / gamete release',
      'Phylogenetic: evolutionary relationships (common ancestry)',
      'Hierarchy: smaller groups within larger groups',
      'No overlap between groups (taxa)',
    ],
    teacherNotes:
      'AQA Chief Examiner strict requirement: For hierarchy, students MUST state two distinct components: "smaller groups within larger groups" AND "NO overlap between groups".',
    recommendedColdCall:
      'Cold-call: "What two exact criteria define a taxonomic hierarchy according to the AQA mark scheme?"',
  },

  // 3.4.6 Biodiversity within a Community
  {
    id: 'pack-3-4-6',
    title: '3.4.6 Biodiversity: Simpson\'s Index of Diversity & Agricultural Practices',
    examBoard: 'AQA',
    specCode: '3.4.6',
    aqaUnit: '3.4',
    subject: 'AQA AS Biology (7401)',
    topic: '3.4.6 Biodiversity within a Community',
    aoLevel: 'AO2 (3 marks) / AO1 (1 mark)',
    totalMarks: 4,
    questionText:
      'Explain why calculating an index of diversity (d = N(N-1) / Σ n(n-1)) provides a more useful measure of biodiversity than species richness alone, and explain how intensive agricultural practices reduce biodiversity. (4 marks)',
    contextNote:
      'AQA core: Species richness only measures number of species, ignores abundance/evenness; index of diversity accounts for population sizes of each species; monoculture, hedgerow removal, pesticides, fertilisers reduce biodiversity.',
    flawedAnswer:
      'Species richness counts how wealthy the organisms in the habitat are. The index of diversity is worse because it only works if there is exactly one species. Intensive farming increases biodiversity because farmers plant thousands of crops which gives all insects infinite food so millions of species appear.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Species richness only measures the number of different species in a community, but does not take into account the number of individuals of each species (population size / abundance / evenness).',
        indicativePhrases: ['species richness ignores number of individuals', 'does not measure abundance / evenness'],
      },
      {
        markCode: 'M2',
        criteria:
          'An index of diversity takes into account both the number of different species (species richness) AND the abundance / number of individuals of each species.',
        indicativePhrases: ['takes into account number of species and individuals of each species', 'measures species richness and abundance'],
      },
      {
        markCode: 'M3',
        criteria:
          'A community dominated by one or two species with high richness but very low numbers of other species has a low index of diversity (reduces the skew caused by dominant species).',
        indicativePhrases: ['not skewed by single dominant species', 'reflects if one species dominates'],
      },
      {
        markCode: 'M4',
        criteria:
          'Intensive agricultural practices (such as monoculture, hedgerow removal, and pesticide / herbicide use) reduce plant species diversity, reducing food sources and habitats / niches for animals, lowering overall biodiversity.',
        indicativePhrases: ['monoculture / hedgerow removal / pesticides', 'reduces variety of plant species / food sources / habitats'],
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Species richness counts how wealthy the organisms in the habitat are',
        issueType: 'misconception',
        explanation: 'Species richness is simply the NUMBER OF DIFFERENT SPECIES present in a defined community.',
        markLost: 1,
        suggestedCorrection: 'Species richness measures the total number of different species in a community.',
      },
      {
        phrase: 'Intensive farming increases biodiversity because farmers plant thousands of crops',
        issueType: 'misconception',
        explanation: 'Farming is MONOCULTURE (a single crop species) and uses pesticides/clears hedgerows, severely REDUCING biodiversity.',
        markLost: 1,
        suggestedCorrection: 'Intensive farming creates monocultures and removes hedgerows and weeds, drastically reducing niches, food variety, and biodiversity.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Humorous but entirely erroneous claim about organism "wealth", and false claim that intensive farming increases biodiversity.',
    },
    exemplarRewrite:
      'Species richness measures solely the total number of different species present within a community, ignoring the abundance or relative numbers of individuals within each species. In contrast, calculating an index of diversity (d = N(N-1) / Σ n(n-1)) provides a much more informative measure of biodiversity because it takes into account both the species richness AND the evenness (the relative population size of each species present). Consequently, a habitat dominated overwhelmingly by one species will register a low index of diversity even if other rare species are present, preventing distorted overestimations of community stability. Intensive agriculture drastically reduces biodiversity: practices such as planting single crop monocultures, clearing native woodlands, and removing ancient hedgerows drastically reduce plant species richness. Furthermore, the application of chemical pesticides and herbicides destroys non-crop plants and insect populations, eliminating diverse food sources, nesting sites, and ecological niches, which in turn causes animal diversity to plummet.',
    keyTerms: [
      'Species richness: number of different species only',
      'Index of diversity: accounts for species richness AND abundance (evenness)',
      'Not distorted by single dominant species',
      'Monoculture / hedgerow removal / pesticides',
      'Loss of diverse food sources, habitats, and niches',
    ],
    teacherNotes:
      'Chief Examiner alert: Distinguish species richness (pure count of species) from index of diversity (accounts for species number and relative abundance of each).',
    recommendedColdCall:
      'Cold-call: "Why would a field with 1,000 wheat plants and 2 weeds have high richness but a very low index of diversity?"',
  },

  // 3.4.7 Investigating Diversity
  {
    id: 'pack-3-4-7',
    title: '3.4.7 Investigating Diversity: Molecular Phylogeny, Sampling & Error Overlap',
    examBoard: 'AQA',
    specCode: '3.4.7',
    aqaUnit: '3.4',
    subject: 'AQA AS Biology (7401)',
    topic: '3.4.7 Investigating Diversity',
    aoLevel: 'AO3 (3 marks) / AO1 (1 mark)',
    totalMarks: 4,
    questionText:
      'Explain how comparing DNA base sequences provides evidence for evolutionary relationships between species, and explain how scientists ensure unbiased representative sampling and interpret overlapping standard deviation bars. (4 marks)',
    contextNote:
      'AQA Paper 2 practical/experimental question. Mutations accumulate over time; fewer differences in DNA sequence = more closely related / shared a more recent common ancestor; random sampling using grid coordinates; overlapping SD bars mean difference is not statistically significant (likely due to chance).',
    flawedAnswer:
      'If two animals have different DNA it means they are identical twins that evolved yesterday. Scientists collect samples by choosing the biggest and prettiest organisms they can find in the sun. If standard deviation bars overlap, it proves 100% that the two results are completely different and one evolved from the other.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Mutations accumulate over time in DNA base sequences; species with more similar DNA base sequences share a more recent common ancestor / are more closely related.',
        indicativePhrases: ['more similar DNA base sequences', 'more recent common ancestor', 'mutations accumulate over time'],
      },
      {
        markCode: 'M2',
        criteria:
          'Comparing mRNA base sequences or amino acid sequences of encoded proteins (e.g. cytochrome c / haemoglobin) can also be used to infer evolutionary divergence.',
        indicativePhrases: ['comparing mRNA sequences', 'comparing amino acid sequences of proteins'],
      },
      {
        markCode: 'M3',
        criteria:
          'Unbiased sampling: Generate a coordinate grid using tape measures, use a random number generator to select coordinates, and sample using quadrats to avoid investigator bias.',
        indicativePhrases: ['random coordinates from random number generator', 'avoid investigator bias'],
      },
      {
        markCode: 'M4',
        criteria:
          'Overlapping standard deviation bars show that the difference between the means is likely due to chance / is NOT statistically significant.',
        indicativePhrases: ['overlapping standard deviations', 'difference is not significant / likely due to chance'],
        rejectOrErrors: 'Reject: difference is significant if bars overlap.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'choosing the biggest and prettiest organisms they can find in the sun',
        issueType: 'misconception',
        explanation: 'Selecting organisms deliberately introduces INVESTIGATOR BIAS. Sampling must be RANDOM using coordinate grids and random number generators.',
        markLost: 1,
        suggestedCorrection: 'Scientists use a random number generator to pick coordinates on a grid to ensure unbiased sampling.',
      },
      {
        phrase: 'standard deviation bars overlap, it proves 100% that the two results are completely different',
        issueType: 'misconception',
        explanation: 'OVERLAPPING standard deviation bars indicate that any difference between the means is NOT STATISTICALLY SIGNIFICANT and likely due to chance.',
        markLost: 1,
        suggestedCorrection: 'Overlapping standard deviation bars indicate the difference between means is not statistically significant and likely caused by chance.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4. Bizarre claim about identical twins, subjective biased sampling technique, and diametrically inverted the statistical interpretation of standard deviation overlap.',
    },
    exemplarRewrite:
      'Comparing DNA base sequences allows scientists to determine phylogenetic relationships because random mutations accumulate in DNA over evolutionary time at a relatively constant rate. Consequently, species possessing fewer differences in their DNA base sequences share a more recent common ancestor and are more closely related than species with many base differences. This molecular analysis can be complemented by comparing the base sequences of mRNA or the amino acid sequences of conserved universal proteins such as cytochrome c. To ensure ecological samples are unbiased and representative of a community, researchers establish a grid using tape measures, generate coordinates using a pseudo-random number generator, and place quadrats at these exact locations to eliminate investigator bias, alongside taking a large sample size. When interpreting graph data, if the standard deviation bars of two means overlap, it indicates that the spread of data overlaps and the observed difference between the means is not statistically significant, meaning the difference is likely due to chance alone.',
    keyTerms: [
      'Mutations accumulate over time',
      'Fewer DNA differences = more recent common ancestor',
      'Comparing mRNA / amino acid sequences',
      'Random coordinates (random number generator)',
      'Eliminates investigator bias',
      'Overlapping SD bars: difference is NOT statistically significant (due to chance)',
    ],
    teacherNotes:
      'Strict AQA statistical rule: If standard deviations overlap, the difference between the means is NOT significant. Students must state "likely due to chance".',
    recommendedColdCall:
      'Cold-call: "If standard deviation error bars overlap on an AQA exam graph, what exact conclusion MUST you write about statistical significance?"',
  },
];
