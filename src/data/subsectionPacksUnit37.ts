import { FlawedQuestion } from '../types';

export const SUBSECTION_PACKS_UNIT_37: FlawedQuestion[] = [
  // 3.7.1 Inheritance (Monohybrid, Dihybrid, Codominance, Sex-linkage, Epistasis)
  {
    id: 'pack-3-7-1',
    title: '3.7.1 Genetics: Dihybrid Crosses, Autosomal Linkage and Epistasis',
    examBoard: 'AQA',
    specCode: '3.7.1',
    aqaUnit: '3.7',
    subject: 'AQA A-Level Biology (7402)',
    topic: '3.7.1 Inheritance (Autosomal Linkage & Epistasis)',
    aoLevel: 'AO2 (3 marks) / AO3 (1 mark)',
    totalMarks: 4,
    questionText:
      'Explain what is meant by autosomal linkage, and explain why the phenotypic ratios produced in a dihybrid cross between two individuals heterozygous for two linked genes differ from the expected Mendelian 9:3:3:1 ratio. (4 marks)',
    contextNote:
      'AQA Chief Examiner focus: Genes located on the same autosome (non-sex chromosome), inherited together because they do not assort independently during meiosis, crossing over in chiasmata produces recombinant gametes in lower frequencies, resulting in higher proportion of parental phenotypes.',
    flawedAnswer:
      'Autosomal linkage means the genes are on the X and Y sex chromosomes so boys get the disease more often. In a dihybrid cross, the ratio changes because one gene dominates over the other gene through epistasis, meaning the alleles mutate during fertilization.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Autosomal linkage means that two or more genes are located on the same autosome (any chromosome that is not a sex chromosome).',
        indicativePhrases: ['two genes on the same autosome', 'same non-sex chromosome'],
        rejectOrErrors: 'Reject: genes on sex chromosomes (that is sex-linkage).',
      },
      {
        markCode: 'M2',
        criteria:
          'Linked genes do not undergo independent assortment during meiosis (they stay together on the same chromatid and are inherited together into gametes).',
        indicativePhrases: ['no independent assortment', 'inherited together as a unit', 'linked loci'],
        rejectOrErrors: 'Reject: alleles mutate during fertilization.',
      },
      {
        markCode: 'M3',
        criteria:
          'Crossing over between homologous chromosomes at chiasmata during prophase I of meiosis can separate alleles, producing recombinant chromatids/gametes.',
        indicativePhrases: ['crossing over during meiosis I', 'chiasmata separates alleles', 'produces recombinant phenotypes'],
        rejectOrErrors: 'Reject: crossing over occurs during mitosis.',
      },
      {
        markCode: 'M4',
        criteria:
          'Recombinant gametes are produced in much lower frequencies than parental gametes (depending on distance between loci), producing a large excess of parental phenotypes and very few recombinant phenotypes (not 9:3:3:1).',
        indicativePhrases: ['excess of parental phenotypes', 'recombinants in lower frequency', 'ratio skewed towards parentals'],
        rejectOrErrors: 'Reject: 9:3:3:1 is produced when genes are linked.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'Autosomal linkage means the genes are on the X and Y sex chromosomes so boys get the disease more often',
        issueType: 'misconception',
        explanation:
          'Fatal confusion between sex-linkage (genes on X/Y sex chromosomes) and autosomal linkage (genes on the same non-sex chromosome / autosome).',
        markLost: 2,
        suggestedCorrection:
          'Autosomal linkage refers to genes located on the same autosome (non-sex chromosome).',
      },
      {
        phrase: 'one gene dominates over the other gene through epistasis, meaning the alleles mutate during fertilization',
        issueType: 'misconception',
        explanation:
          'Confused autosomal linkage with epistasis, and claimed alleles mutate during fertilization instead of recognising crossing over during meiosis.',
        markLost: 2,
        suggestedCorrection:
          'Linked genes do not assort independently, yielding higher parental combinations; crossing over during meiosis generates recombinants in low numbers.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4 marks. Mixed up autosomal linkage with sex-linkage, and attributed deviation from 9:3:3:1 to fertilization mutations rather than lack of independent assortment and crossing over.',
    },
    exemplarRewrite:
      'Autosomal linkage refers to two or more gene loci situated on the same autosome (any chromosome that is not a sex chromosome). Because linked genes reside on the same linear DNA molecule, they do not undergo independent assortment during metaphase I of meiosis and tend to be transmitted together into gametes as a single unit. Consequently, the classic Mendelian 9:3:3:1 ratio (which relies upon independent assortment of unlinked genes on different chromosomes) is not observed. The only way alleles from linked genes are uncoupled is via crossing over between non-sister chromatids of homologous chromosomes at chiasmata during prophase I of meiosis. Because crossing over between closely linked loci is relatively infrequent, recombinant gametes are generated in significantly lower frequencies, producing an offspring population dominated by parental phenotypes with a minor proportion of recombinant phenotypes.',
    keyTerms: [
      'Autosomal linkage (same autosome / non-sex chromosome)',
      'Lack of independent assortment',
      'Inherited together as a unit',
      'Crossing over at chiasmata (Prophase I)',
      'Recombinant gametes in low frequency',
      'Excess of parental phenotypes',
      'Distance between gene loci',
    ],
    teacherNotes:
      'Chief examiner report notes: candidates frequently write that linked genes "are on the X chromosome". Stress autosome = chromosome 1 to 22 in humans.',
    recommendedColdCall:
      'If two genes are very close together on the same chromosome, will there be more or fewer recombinant offspring than if they were far apart?',
  },

  // 3.7.2 Populations & Hardy-Weinberg Principle
  {
    id: 'pack-3-7-2',
    title: '3.7.2 Populations: Hardy-Weinberg Principle & Allele Frequency Calculations',
    examBoard: 'AQA',
    specCode: '3.7.2',
    aqaUnit: '3.7',
    subject: 'AQA A-Level Biology (7402)',
    topic: '3.7.2 Populations (Hardy-Weinberg Equation & Assumptions)',
    aoLevel: 'AO1 (2 marks) / AO2 (2 marks)',
    totalMarks: 4,
    questionText:
      'State the two Hardy-Weinberg equations, identify what each mathematical term represents, and state two assumptions that must be met for the Hardy-Weinberg principle to predict unchanging allele frequencies in a population. (4 marks)',
    contextNote:
      'AQA Chief Examiner focus: p + q = 1 (allele frequencies) and p^2 + 2pq + q^2 = 1 (genotype frequencies), definitions of p, q, p^2, 2pq, q^2, and assumptions: large population, no immigration/emigration (no gene flow), no mutations, random mating, no selection.',
    flawedAnswer:
      'The formula is p + q = 100% and p^2 + q^2 = 1. p is the number of males and q is the number of females. The assumptions are that the population is very small so animals can find each other easily, and that natural selection is killing off the weak alleles.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'States equations: p + q = 1 (where p = frequency of dominant allele and q = frequency of recessive allele).',
        indicativePhrases: ['p + q = 1', 'p = dominant allele frequency', 'q = recessive allele frequency'],
        rejectOrErrors: 'Reject: p is males and q is females.',
      },
      {
        markCode: 'M2',
        criteria:
          'States equation: p^2 + 2pq + q^2 = 1, where p^2 = frequency of homozygous dominant genotype, 2pq = frequency of heterozygous genotype, and q^2 = frequency of homozygous recessive genotype.',
        indicativePhrases: ['p^2 + 2pq + q^2 = 1', 'p^2 = homozygous dominant', '2pq = heterozygous', 'q^2 = homozygous recessive'],
        rejectOrErrors: 'Reject: omitting 2pq term.',
      },
      {
        markCode: 'M3',
        criteria:
          'Assumption 1: Large population size (no genetic drift).',
        indicativePhrases: ['large population', 'infinitely large population', 'no genetic drift'],
        rejectOrErrors: 'Reject: small population.',
      },
      {
        markCode: 'M4',
        criteria:
          'Assumption 2: Any one from: No migration / no gene flow (isolated population); No mutations (no new alleles formed); Random mating (no mate selection); No selection / all genotypes equally fertile.',
        indicativePhrases: ['no immigration / emigration', 'random mating', 'no mutation', 'no natural selection'],
        rejectOrErrors: 'Reject: natural selection must occur.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'p is the number of males and q is the number of females',
        issueType: 'misconception',
        explanation:
          'p and q are allele frequencies (dominant and recessive alleles), not male and female counts.',
        markLost: 1,
        suggestedCorrection:
          'p is the frequency of the dominant allele and q is the frequency of the recessive allele.',
      },
      {
        phrase: 'p^2 + q^2 = 1',
        issueType: 'missing_keyword',
        explanation:
          'Omitted the crucial heterozygous term 2pq. The equation is p^2 + 2pq + q^2 = 1.',
        markLost: 1,
        suggestedCorrection:
          'p^2 + 2pq + q^2 = 1, where 2pq represents the frequency of heterozygotes.',
      },
      {
        phrase: 'population is very small so animals can find each other easily, and that natural selection is killing off the weak alleles',
        issueType: 'misconception',
        explanation:
          'Direct violation of Hardy-Weinberg assumptions: the population must be LARGE to prevent genetic drift, and there must be NO natural selection.',
        markLost: 2,
        suggestedCorrection:
          'Assumptions require a large population size and no natural selection (along with random mating and no migration).',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 4,
      summary:
        'Awarded 0/4 marks. Omitted the 2pq term, misinterpreted p and q as gender counts, and stated the exact opposite of the core assumptions (small population and active natural selection).',
    },
    exemplarRewrite:
      'The two Hardy-Weinberg equations are: 1) p + q = 1, where p represents the frequency of the dominant allele and q represents the frequency of the recessive allele in the gene pool; 2) p^2 + 2pq + q^2 = 1, where p^2 represents the proportion of homozygous dominant individuals, 2pq represents the proportion of heterozygous individuals, and q^2 represents the proportion of homozygous recessive individuals. For this principle to hold and predict constant allele frequencies across generations, the population must satisfy two fundamental assumptions: first, the population size must be sufficiently large to eliminate random fluctuations in allele frequencies (genetic drift); and second, there must be no migration (immigration or emigration), no mutations introducing novel alleles, random mating among individuals, and no natural selection operating against any genotype.',
    keyTerms: [
      'p + q = 1 (allele frequencies)',
      'p^2 + 2pq + q^2 = 1 (genotype frequencies)',
      'p = dominant allele frequency',
      'q = recessive allele frequency',
      '2pq = heterozygous genotype frequency',
      'Large population size (no genetic drift)',
      'Random mating',
      'No migration (no gene flow)',
      'No mutations or natural selection',
    ],
    teacherNotes:
      'Top calculation error: Students given the percentage of recessive phenotypes often square the number instead of taking the square root of q^2 to find q.',
    recommendedColdCall:
      'In a population where 16% of individuals express cystic fibrosis (recessive), what is the frequency of the dominant allele and the percentage of carriers?',
  },

  // 3.7.3 Speciation & Evolution
  {
    id: 'pack-3-7-3',
    title: '3.7.3 Evolution & Speciation: Allopatric vs Sympatric Speciation',
    examBoard: 'AQA',
    specCode: '3.7.3',
    aqaUnit: '3.7',
    subject: 'AQA A-Level Biology (7402)',
    topic: '3.7.3 Speciation (Allopatric & Sympatric Mechanisms)',
    aoLevel: 'AO1 (3 marks) / AO2 (2 marks)',
    totalMarks: 5,
    questionText:
      'Describe how allopatric speciation and sympatric speciation can lead to the evolution of new species from a common ancestral population. (5 marks)',
    contextNote:
      'AQA Chief Examiner focus: Allopatric = geographic isolation (river, mountain), Sympatric = reproductive isolation in the same geographic area (temporal, behavioural, mechanical). In both: genetic variation via mutation, different selection pressures, differential reproductive success, change in allele frequency over many generations, inability to interbreed to produce fertile offspring.',
    flawedAnswer:
      'Allopatric speciation is when animals want to change species because the weather is too cold, so they mutate new genes on purpose. Sympatric speciation is when species fight and the winners become a new species. Eventually they have different blood types so they cannot mate.',
    officialMarkScheme: [
      {
        markCode: 'M1',
        criteria:
          'Allopatric speciation involves geographical isolation / physical separation of populations (e.g. by river, mountain range, continental drift) preventing gene flow.',
        indicativePhrases: ['geographical isolation', 'physical barrier prevents gene flow', 'separate geographical areas'],
        rejectOrErrors: 'Reject: animals choosing to change species.',
      },
      {
        markCode: 'M2',
        criteria:
          'Sympatric speciation occurs within the same geographical area due to reproductive isolation (e.g. behavioural changes in mating calls, temporal differences in breeding seasons, or polyploidy/mechanical isolation).',
        indicativePhrases: ['same geographical area', 'reproductive isolation', 'behavioural / temporal isolation'],
        rejectOrErrors: 'Reject: sympatric involves fighting.',
      },
      {
        markCode: 'M3',
        criteria:
          'Random mutations introduce genetic variation into isolated populations.',
        indicativePhrases: ['random mutations', 'genetic variation', 'new alleles arise randomly'],
        rejectOrErrors: 'Reject: purposeful mutations or Lamarckian inheritance.',
      },
      {
        markCode: 'M4',
        criteria:
          'Isolated populations experience different selection pressures / environmental conditions; individuals with advantageous alleles have higher differential reproductive success / survival (natural selection).',
        indicativePhrases: ['different selection pressures', 'advantageous alleles passed on', 'differential reproductive success'],
        rejectOrErrors: 'Reject: survival of the strongest without allele transmission.',
      },
      {
        markCode: 'M5',
        criteria:
          'Allele frequencies change over many generations; gene pools diverge until populations can no longer interbreed to produce fertile offspring (new species formed).',
        indicativePhrases: ['change in allele frequency', 'divergence of gene pools', 'cannot interbreed to produce fertile offspring'],
        rejectOrErrors: 'Reject: cannot interbreed to produce sterile offspring.',
      },
    ],
    flawedAnnotations: [
      {
        phrase: 'animals want to change species because the weather is too cold, so they mutate new genes on purpose',
        issueType: 'misconception',
        explanation:
          'Lamarckian fallacy: organisms do not mutate on purpose or choose to evolve. Mutations occur randomly.',
        markLost: 2,
        suggestedCorrection:
          'Random mutations occur; geographical isolation separates gene pools and environmental selection pressures favor advantageous alleles.',
      },
      {
        phrase: 'Sympatric speciation is when species fight and the winners become a new species',
        issueType: 'misconception',
        explanation:
          'Sympatric speciation is reproductive isolation (e.g. behavioural or temporal) within the same geographical location without physical barriers.',
        markLost: 1,
        suggestedCorrection:
          'Sympatric speciation occurs in the same area due to reproductive barriers (behavioural, seasonal, or anatomical).',
      },
      {
        phrase: 'they have different blood types so they cannot mate',
        issueType: 'poor_alignment',
        explanation:
          'AQA biological definition of a species: populations cannot interbreed to produce fertile offspring.',
        markLost: 1,
        suggestedCorrection:
          'Accumulation of genetic differences prevents populations from interbreeding to produce fertile offspring.',
      },
    ],
    examinerVerdict: {
      marksAwarded: 0,
      maxMarks: 5,
      summary:
        'Awarded 0/5 marks. Completely teleological response claiming purposeful mutation, combat-based speciation, and blood type incompatibility instead of reproductive isolation.',
    },
    exemplarRewrite:
      'Allopatric speciation begins when a geographical barrier (such as a river or mountain range) physically separates a population, completely preventing gene flow between the sub-groups. In contrast, sympatric speciation occurs within the same geographical area where reproductive isolation develops through behavioural divergence (e.g. altered courtship rituals), temporal isolation (different breeding seasons), or anatomical differences. In both forms of speciation, random mutations arise independently, establishing distinct genetic variations in each isolated gene pool. Because the isolated populations experience different environmental selection pressures, individuals possessing advantageous alleles exhibit differential reproductive success, surviving and passing their beneficial alleles on to offspring. Over many generations, directional natural selection causes the allele frequencies of the gene pools to diverge significantly. Eventually, the populations accumulate sufficient morphological and physiological differences that they can no longer interbreed to produce fertile offspring, confirming the evolution of distinct species.',
    keyTerms: [
      'Allopatric (geographical isolation prevents gene flow)',
      'Sympatric (reproductive isolation in same area)',
      'Behavioural / temporal isolation',
      'Random mutation (genetic variation)',
      'Different selection pressures',
      'Differential reproductive success',
      'Divergence in allele frequencies',
      'Cannot interbreed to produce fertile offspring',
    ],
    teacherNotes:
      'The gold-standard AQA conclusion mark for any speciation question is: "can no longer interbreed to produce FERTILE offspring". Omitting "fertile" loses the mark.',
    recommendedColdCall:
      'Give a specific example of temporal isolation and explain why it prevents gene flow.',
  },
];
