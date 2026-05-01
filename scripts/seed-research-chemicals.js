const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  images: [{ type: String }],
  description: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  countInStock: { type: Number, required: true, default: 0 },
  rating: { type: Number, required: true, default: 0 },
  numReviews: { type: Number, required: true, default: 0 },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

const researchChemicalProducts = [
  {
    name: 'Etomidate Powder',
    description: `Etomidate Powder represents a highly specialized research chemical belonging to the imidazole-derived hypnotic agent class, widely utilized in scientific investigations focusing on anesthesia mechanisms, GABA-A receptor pharmacology, and neurophysiological research. This compound has garnered significant attention in the research community due to its unique pharmacological profile characterized by rapid onset, short duration of action, and minimal cardiovascular effects compared to other anesthetic agents.

Our Etomidate Powder is manufactured to the highest standards of chemical purity, exceeding 99.2% as verified by comprehensive analytical testing including high-performance liquid chromatography (HPLC), nuclear magnetic resonance (NMR) spectroscopy, and mass spectrometry. Each production batch undergoes rigorous quality control procedures to ensure consistent molecular structure, purity, and absence of contaminants.

Comprehensive Chemical Profile and Identification:

Molecular Structure and Properties:
• IUPAC Name: Ethyl 1-[(1R)-1-phenylethyl]-1H-imidazole-5-carboxylate
• Molecular Formula: C14H16N2O2
• Exact Molecular Weight: 244.29 g/mol
• CAS Registry Number: 33125-97-2
• Chemical Class: Imidazole carboxylic acid ester
• Stereochemistry: Chiral compound with single stereocenter at the α-carbon
• Supplied Form: Racemic mixture (R- and S-enantiomers)
• Physical Appearance: Fine white to off-white crystalline powder
• Melting Point: 67-70°C
• pKa Values: Imidazole nitrogen approximately pKa 6.5

Solubility Characteristics:
• Water: Practically insoluble (0.1-0.3 mg/mL at 25°C)
• Ethanol: Freely soluble (>100 mg/mL)
• Methanol: Freely soluble (>100 mg/mL)
• Dimethyl Sulfoxide (DMSO): Freely soluble (>100 mg/mL)
• Propylene Glycol: Soluble (20-40 mg/mL)
• Lipid Emulsions: Compatible for research formulations
• pH-Dependent Solubility: Enhanced solubility in acidic solutions

Stability and Storage Parameters:
• Storage Temperature: 2-8°C (refrigerated) recommended
• Long-term Stability: -20°C for extended storage periods
• Light Sensitivity: Protect from direct sunlight and UV radiation
• Humidity Considerations: Store in desiccated environment
• Chemical Stability: Stable under recommended conditions for 24+ months
• Degradation Pathways: Hydrolysis of ester bond under alkaline conditions
• Incompatibility: Avoid strong acids, bases, and oxidizing agents

Extensive Research Applications and Scientific Investigations:

GABA-A Receptor Pharmacology Studies:
Etomidate serves as an exceptional research tool for investigating:
• Positive allosteric modulation of GABA-A receptors
• Subtype-selective interactions (α1, α2, α3, α5 subunit-containing receptors)
• Structure-activity relationships at the GABA binding site
• Competitive and non-competitive binding mechanisms
• Receptor desensitization and trafficking dynamics
• Electrophysiological effects on chloride channel conductance
• Synaptic and extrasynaptic receptor population differences

Anesthesia and Sedation Mechanism Research:
• Neurophysiological correlates of anesthetic state induction
• Electroencephalogram (EEG) pattern analysis during research administration
• Cerebral blood flow and metabolic rate investigations
• Consciousness and arousal state modulation studies
• Rapid onset and offset kinetics characterization
• Context-sensitive half-time determinations
• Depth of anesthesia monitoring method development

Cardiovascular and Hemodynamic Investigations:
• Minimal myocardial depression mechanism research
• Systemic vascular resistance effects quantification
• Heart rate variability studies during administration
• Hemodynamic stability comparison studies
• Baroreceptor reflex function preservation
• Cardiac output and contractility investigations
• Coronary blood flow and myocardial oxygen consumption

Endocrine and Metabolic Research:
• Adrenocortical suppression mechanism studies
• 11β-hydroxylase enzyme inhibition investigations
• Cortisol synthesis pathway interruption research
• Stress response modulation during critical illness simulation
• Metabolic clearance and elimination pathway characterization
• Protein binding and free fraction determinations
• Hepatic metabolism and cytochrome P450 interactions

Neuroprotection and Neuroscience Applications:
• Cerebral ischemia model investigations
• Excitotoxicity protection mechanism research
• Neuronal viability preservation studies
• Traumatic brain injury model applications
• Seizure threshold modification research
• Neuroinflammatory response modulation
• Cognitive function recovery investigations

Pharmacokinetic and Pharmacodynamic Modeling:
• Compartmental pharmacokinetic model development
• Effect-site concentration modeling
• Context-sensitive decrement time calculations
• Target-controlled infusion algorithm development
• Population pharmacokinetic parameter estimation
• Biophase distribution and equilibration studies
• Drug-drug interaction potential assessments

Quality Control and Analytical Verification:

Comprehensive Testing Protocols:
Each batch undergoes extensive analytical characterization:

Chromatographic Analysis:
• HPLC assay with UV detection at 240 nm
• Impurity profiling with PDA detection
• Chiral HPLC for enantiomeric composition
• Related substances quantification
• Residual solvent screening by GC-MS
• Stability-indicating method validation

Spectroscopic Characterization:
• Proton NMR (400 MHz or higher) for structural confirmation
• Carbon-13 NMR with DEPT multiplicity editing
• 2D NMR (COSY, HSQC, HMBC) for connectivity verification
• High-resolution mass spectrometry for exact mass
• Infrared spectroscopy for functional group identification
• UV-Vis spectroscopy for chromophore assessment

Physical Property Determination:
• Melting point range by capillary method
• Optical rotation measurement (when enantiomers available)
• Particle size distribution analysis
• Bulk and tapped density measurements
• Flow properties and compressibility assessment
• Hygroscopicity evaluation at various humidity levels
• Thermal stability by DSC and TGA

Documentation and Regulatory Compliance:

Certificate of Analysis Includes:
• Batch number and manufacturing date
• Retest and expiration dating
• Complete analytical results with specifications
• Representative chromatograms and spectra
• Reference standard traceability documentation
• Quality assurance approval signatures
• Storage condition recommendations
• Handling precautions and safety information

Material Safety Data Sheet (SDS) Content:
• Global Harmonized System (GHS) hazard classification
• Safety, health, and environmental hazard statements
• Precautionary measures for safe handling
• First-aid measures by exposure route
• Firefighting measures and suitable extinguishing media
• Accidental release measures and containment procedures
• Handling and storage best practices
• Exposure controls and personal protective equipment
• Physical and chemical properties detailed table
• Stability and reactivity information
• Toxicological information summary
• Ecological information and environmental considerations
• Disposal considerations for waste management
• Transport information and shipping regulations
• Regulatory status and legal classification

Safety, Handling, and Storage Protocols:

Personal Protective Equipment Requirements:
• Respiratory protection: NIOSH-approved respirator for powder handling
• Eye protection: Chemical safety goggles with side shields
• Hand protection: Nitrile or neoprene chemical-resistant gloves
• Body protection: Laboratory coat made of flame-resistant material
• Foot protection: Closed-toe shoes with slip-resistant soles
• Face protection: Face shield when risk of splash exists

Engineering Controls:
• Chemical fume hood with adequate face velocity (80-120 linear feet per minute)
• HEPA filtration on exhaust systems for powder containment
• Secondary containment for primary containers
• Emergency safety shower and eyewash station accessibility
• Spill containment materials readily available
• Fire suppression equipment appropriate for chemical fires

Storage and Inventory Management:
• Primary container: Amber glass with PTFE-lined cap
• Secondary containment: Sealed plastic container with spill tray
• Temperature control: 2-8°C refrigerated storage preferred
• Humidity control: Desiccant inclusion, <60% relative humidity
• Light protection: Amber containers stored in dark cabinet
• Atmosphere: Inert gas (nitrogen) headspace for sensitive storage
• Organization: Segregated from incompatible chemicals
• Inventory: First-in-first-out rotation with regular reconciliation

Research Ethics and Legal Compliance:
• Strictly for legitimate scientific research purposes only
• Not approved for human consumption or therapeutic use
• Compliance with all applicable controlled substance regulations
• End-user certification and institutional verification required
• Active cooperation with regulatory and enforcement agencies
• Documentation of legitimate research purpose mandatory
• Secure storage appropriate for research chemical inventory
• Violation of research-use agreement results in account termination

Professional Customer Support and Services:

Technical Consultation Available:
• Direct access to PhD-level pharmacologists and medicinal chemists
• Research protocol consultation and experimental design assistance
• Analytical method development and troubleshooting support
• Literature review and reference provision
• Data interpretation and spectral analysis guidance
• Custom synthesis consultation for analog compounds
• Stability study design and execution support

Ordering and Logistics Excellence:
• Online ordering with real-time inventory visibility
• Same-day processing for orders received before 2:00 PM
• Temperature-controlled shipping with data logger documentation
• International shipping expertise with customs documentation
• Discreet, professional, tamper-evident packaging
• Comprehensive shipping insurance options
• Order tracking with proactive notification systems
• Return and replacement policy for quality issues

Institutional and Commercial Programs:
• Net payment terms for qualified research organizations
• Volume discount structures (5%, 10%, 15%, 20%+) based on annual spend
• Annual contract pricing with price protection guarantees
• Scheduled delivery programs for recurring requirements
• Vendor-managed inventory (VMI) arrangements for high-volume users
• Dedicated account management for major institutional customers
• Technical training sessions and seminars available

Etomidate Powder represents an essential research chemical for investigators studying anesthesia mechanisms, GABA receptor pharmacology, and neurophysiological processes. Its unique pharmacological profile makes it invaluable for advancing scientific understanding in these critical areas of biomedical research.

For comprehensive information regarding research applications, analytical specifications, or to discuss custom requirements, please contact our scientific support department.`,
    price: 150,
    countInStock: 40,
    category: 'research chemicals',
    featured: true,
    images: []
  },
  {
    name: '2FDCK',
    description: `2FDCK (2-Fluorodeschloroketamine, also known as 2-FDCK) represents a fascinating research chemical within the arylcyclohexylamine class, closely related to the well-studied dissociative anesthetic ketamine. This fluorinated analog has emerged as a critical tool for researchers investigating structure-activity relationships, receptor pharmacology, and the mechanistic underpinnings of dissociative anesthetic agents. The strategic substitution of chlorine with fluorine at the 2-position of the phenyl ring creates subtle yet significant alterations in pharmacological properties, metabolic handling, and receptor interactions.

Our 2FDCK is synthesized to exacting standards with purity exceeding 99.0% as confirmed by comprehensive analytical testing. Each batch undergoes rigorous quality control procedures including chromatographic analysis, spectroscopic characterization, and physical property verification to ensure product integrity and consistency for demanding research applications.

Detailed Chemical Profile and Molecular Characteristics:

Nomenclature and Chemical Identity:
• IUPAC Name: 2-(2-Fluorophenyl)-2-methylamino-cyclohexanone
• Common Synonyms: 2-FDCK, 2-Fluorodeschloroketamine, 2-Fluoroketamine
• Molecular Formula: C13H16FNO
• Exact Molecular Weight: 221.27 g/mol
• CAS Registry Number: Available with Certificate of Analysis
• Chemical Class: Arylcyclohexylamine (fluorinated ketamine analog)
• Structural Relationship: 2-fluoro analog of deschloroketamine (DCK)

Stereochemical Considerations:
• Chiral Center: Single stereocenter at the 2-position of cyclohexanone ring
• Stereoisomers: Racemic mixture (R- and S-enantiomers)
• Enantiomeric Purity (when separated): >99% ee for individual enantiomers
• Stereochemical Stability: Configuration stable under normal storage conditions
• Optical Activity: [α]D = 0° for racemate; specific rotation available for enantiomers
• Chiral Separation: Achievable by chiral HPLC or SFC methods

Physical and Chemical Properties:
• Appearance: Fine white to off-white crystalline powder
• Crystal Form: Crystalline solid, polymorph screening available
• Melting Point: 175-185°C (varies by polymorph and enantiomeric composition)
• pKa Values: Amino group approximately 7.5-8.5 (estimated)
• Partition Coefficient (LogP): Moderate lipophilicity, estimated 2.5-3.5
• pH-Dependent Properties: Salt formation possible with acid addition

Comprehensive Solubility Profile:
• Water: Moderately soluble (5-15 mg/mL at 25°C)
• 0.1N HCl: Soluble (salt formation enhances solubility)
• pH 7.4 Phosphate Buffer: Limited solubility, may require co-solvent
• Methanol: Freely soluble (>50 mg/mL)
• Ethanol: Freely soluble (>50 mg/mL)
• Acetonitrile: Freely soluble (>50 mg/mL)
• Acetone: Soluble (20-40 mg/mL)
• Dichloromethane: Soluble (15-30 mg/mL)
• Dimethyl Sulfoxide (DMSO): Freely soluble (>100 mg/mL)
• Recommended Stock Solution: 10-50 mM in DMSO or methanol

Stability and Storage Requirements:
• Recommended Storage: -20°C for long-term stability
• Short-term Storage: 2-8°C acceptable for routine access
• Stability Duration: >24 months at -20°C, 12-18 months at 2-8°C
• Light Sensitivity: Protect from direct light, UV radiation
• Humidity: Store desiccated, <60% relative humidity
• Chemical Stability: Stable as solid; solution stability varies by solvent
• Incompatibility: Avoid strong oxidizing agents and acids
• Degradation Pathways: Photodegradation, oxidative metabolism

Extensive Research Applications and Scientific Investigations:

NMDA Receptor Pharmacology Studies:
2FDCK serves as an essential research tool for investigating:
• N-Methyl-D-aspartate (NMDA) receptor antagonism
• Non-competitive channel blocker mechanism research
• Use-dependent and use-independent blocking characteristics
• Receptor subtype selectivity (NR1/NR2A-D combinations)
• Structure-activity relationship (SAR) within arylcyclohexylamines
• Binding kinetics: association and dissociation rate constants
• Channel pore binding site characterization
• Allosteric modulation potential

Dissociative Anesthetic Mechanism Research:
• Neurophysiological correlates of dissociative states
• Thalamocortical circuit disruption investigations
• Functional connectivity alteration studies
• Consciousness and anesthesia depth research
• Rapid antidepressant mechanism exploration
• Synaptic plasticity and neuroplasticity studies
• Default mode network modulation investigations
• Psychedelic and dissociative effect modeling

Pharmacokinetic and Metabolic Research:
• Comparative metabolism with ketamine and analogs
• CYP450 enzyme-mediated N-demethylation pathways
• Fluorine effect on metabolic stability
• Hydroxylation and conjugation reactions
• Species differences in metabolic handling
• In vitro-in vivo extrapolation (IVIVE) modeling
• Plasma protein binding characteristics
• Blood-brain barrier permeability studies

Neuropharmacology and Neuroscience Applications:
• Glutamatergic neurotransmission modulation
• Dopaminergic system interactions
• Monoamine transporter effects
• Sigma receptor binding investigations
• Opioid receptor cross-interactions
• Cholinergic system modulation studies
• Neuroinflammatory response research
• Neuroprotection and excitotoxicity studies

Behavioral Pharmacology and Systems Research:
• Locomotor activity and stereotypy studies
• Analgesic and antinociceptive effect modeling
• Discriminative stimulus properties research
• Self-administration and reinforcement studies
• Cognitive function and memory research
• Anxiety and fear conditioning investigations
• Social behavior and interaction studies
• Circadian rhythm and sleep research

Forensic and Clinical Toxicology:
• Forensic case confirmation standard
• Postmortem toxicology reference material
• Workplace drug testing method development
• Driving under the influence analysis
• Cross-reactivity with ketamine immunoassays
• Metabolite identification and characterization
• Stability in biological matrices
• Quantitative method validation

Analytical Chemistry Applications:
• LC-MS/MS method development with unique transitions
• High-resolution accurate mass spectrometry
• 19F NMR spectroscopy for definitive identification
• Retention time marker for arylcyclohexylamines
• Chiral separation method development
• Isomeric differentiation from ketamine analogs
• Derivatization strategies for enhanced detection
• Reference standard for quantitative calibration

Quality Control and Analytical Verification:

Comprehensive Testing Suite:
Each production batch undergoes rigorous analytical characterization:

Chromatographic Methods:
• HPLC assay with UV detection (220 nm, 254 nm)
• Purity assessment by area percent normalization
• Impurity profiling with diode array detection
• Chiral HPLC for enantiomeric composition
• Residual solvent screening by headspace GC-MS
• Stability-indicating method validation

Spectroscopic Characterization:
• Proton NMR (600 MHz or higher field strength)
• Carbon-13 NMR with DEPT/APT multiplicity editing
• 19F NMR for fluorine environment characterization
• 2D NMR (COSY, HSQC, HMBC, NOESY) for connectivity
• High-resolution mass spectrometry (HRMS)
• Tandem mass spectrometry (MS/MS) fragmentation
• Infrared spectroscopy (FTIR with ATR)
• UV-Vis spectroscopy for chromophore analysis

Physical and Materials Testing:
• Melting point determination (capillary method)
• Optical rotation (when enantiomers separated)
• Particle size distribution analysis
• Bulk and tapped density measurements
• Hygroscopicity evaluation
• Thermal analysis by DSC and TGA
• X-ray powder diffraction (XRPD) for polymorphism
• Karl Fischer titration for water content

Documentation and Regulatory Compliance:

Certificate of Analysis Components:
• Batch identification number and manufacturing date
• Retest and recommended expiration dating
• Complete analytical results with numerical specifications
• Representative chromatograms, spectra, and data traces
• Statistical analysis of replicate testing
• Reference standard traceability documentation
• Quality assurance approval with signature and date
• Storage condition and handling recommendations

Safety Data Sheet (SDS) Information:
• GHS hazard classification and pictograms
• Hazard and precautionary statements
• Safety, health, and environmental hazards
• First-aid measures specific to exposure routes
• Firefighting measures and suitable extinguishing media
• Accidental release measures and containment
• Handling and storage best practices
• Exposure controls and personal protective equipment
• Detailed physical and chemical properties
• Stability, reactivity, and incompatibility information
• Toxicological summary and exposure effects
• Ecological information and environmental fate
• Disposal considerations and waste management
• Transport regulations and shipping classification
• Regulatory information and restrictions

Safety, Handling, and Storage Protocols:

Personal Protective Equipment:
• Respiratory: NIOSH-approved N100 or P100 respirator for powder
• Eye: Chemical splash goggles meeting ANSI Z87.1 standards
• Hand: Nitrile or neoprene chemical-resistant gloves (double-gloving recommended)
• Body: Laboratory coat, disposable coveralls for extensive handling
• Foot: Closed-toe chemical-resistant safety shoes
• Face: Face shield for risk of splash or aerosol

Engineering Controls and Facility Requirements:
• Chemical fume hood with documented face velocity
• HEPA filtration on exhaust systems
• Secondary containment for spill prevention
• Emergency safety shower and eyewash station
• Spill kits with appropriate absorbents
• Fire suppression equipment rated for chemical fires
• Secure storage appropriate for research chemicals

Storage Conditions and Shelf Life:
• Temperature: -20°C for long-term, 2-8°C for routine
• Duration: >24 months at -20°C, 12-18 months refrigerated
• Humidity: <60% RH, desiccated environment
• Light: Protect from UV and visible light
• Container: Amber glass with PTFE-lined cap
• Atmosphere: Inert gas headspace for sensitive storage
• Segregation: Store away from incompatible materials
• Inventory: FIFO rotation with regular reconciliation

Research Ethics and Legal Compliance:
• Strictly for bona fide scientific research purposes
• Not for human consumption or therapeutic application
• End-user certification and institutional verification required
• Compliance with applicable chemical control regulations
• Active cooperation with regulatory and law enforcement agencies
• Documentation of legitimate research purpose mandatory
• Secure storage and access control required
• Violation of research-use agreement results in termination

Professional Support and Customer Services:

Scientific Consultation:
• PhD-level support from pharmacologists and medicinal chemists
• Research protocol design and optimization assistance
• Analytical method development and troubleshooting
• Literature review and reference provision
• Spectral data interpretation assistance
• Custom synthesis consultation for analogs
• Stability study design and execution support

Ordering and Logistics:
• Real-time online ordering with inventory visibility
• Same-day processing for orders before cutoff time
• Temperature-controlled shipping with documentation
• International shipping with customs expertise
• Professional, discreet, tamper-evident packaging
• Comprehensive insurance and tracking
• Return/replacement policy for quality issues

Institutional Programs:
• Net payment terms for qualified organizations
• Volume discount tiers based on annual purchases
• Annual contract pricing with guarantees
• Scheduled delivery programs
• Vendor-managed inventory options
• Dedicated account management
• Technical training and educational seminars

2FDCK represents an invaluable research chemical for investigators studying NMDA receptor pharmacology, dissociative anesthetic mechanisms, and neuropharmacological processes. Its unique fluorinated structure provides distinct research properties that complement and expand upon the knowledge base established with related compounds.

For detailed information on research applications, analytical specifications, or custom requirements, please contact our scientific support team.`,
    price: 110,
    countInStock: 55,
    category: 'research chemicals',
    featured: false,
    images: []
  },
  {
    name: 'Amphetamine Powder',
    description: `Amphetamine Powder represents a fundamental research chemical within the phenethylamine class, serving as the prototypical compound for understanding psychostimulant pharmacology, monoamine neurotransmission, and the mechanisms underlying attention, arousal, and reward processing. As the parent compound of a vast family of substituted phenethylamines, amphetamine provides the essential reference point for structure-activity relationship studies and pharmacological investigations across neuroscience, medicinal chemistry, and behavioral research disciplines.

Our Amphetamine Powder is manufactured to exceptional purity standards exceeding 99.0%, verified through comprehensive analytical testing including chromatographic analysis, spectroscopic characterization, and rigorous quality control procedures. Each production batch is fully documented with detailed analytical data to support the most demanding research applications.

Comprehensive Chemical Profile and Molecular Identity:

Nomenclature and Classification:
• IUPAC Name: (2S)-1-phenylpropan-2-amine (for d-amphetamine); racemic mixture for dl-amphetamine
• Common Names: Amphetamine, dl-Amphetamine, Racemic Amphetamine
• Molecular Formula: C9H13N
• Exact Molecular Weight: 135.21 g/mol (free base)
• CAS Registry Number: 300-62-9 (sulfate), 51-63-8 (phosphate), 60-13-9 (d-form)
• Chemical Class: Substituted phenethylamine, phenylisopropylamine
• Salt Forms: Typically supplied as sulfate or phosphate salt for stability

Stereochemical Properties:
• Chiral Center: Single stereocenter at the α-carbon (benzylic position)
• Enantiomers: Dextroamphetamine (S-enantiomer, more CNS active)
• Levoamphetamine (R-enantiomer, more peripheral effects)
• Supplied Form: Racemic mixture (50:50 R:S) or individual enantiomers
• Enantiomeric Purity: >99% ee when enantiomers separated
• Optical Rotation: [α]D = 0° for racemate; +7.5° for S-enantiomer (c=1, H2O)
• Stereochemical Stability: Configuration stable under normal conditions

Physical and Chemical Characteristics:
• Free Base Appearance: Colorless to pale yellow oil (liquid at room temperature)
• Salt Form Appearance: Fine white crystalline powder (sulfate or phosphate)
• Melting Point (Sulfate): >300°C (decomposes)
• Melting Point (Phosphate): >300°C (decomposes)
• Boiling Point (Free Base): 203-205°C at 760 mmHg
• pKa Value: Approximately 9.9 (conjugate acid)
• Partition Coefficient (LogP): 1.8-2.0 (moderate lipophilicity)
• pH-Dependent Properties: Basic compound, salt formation with acids

Detailed Solubility Profile:
• Water (Free Base): Slightly soluble (1-2 mg/mL)
• Water (Sulfate Salt): Soluble (50-100 mg/mL)
• Water (Phosphate Salt): Soluble (40-80 mg/mL)
• 0.1N HCl: Highly soluble (salt formation)
• Methanol: Soluble (free base and salts)
• Ethanol: Soluble (free base and salts)
• Chloroform: Soluble (free base)
• Acetone: Moderately soluble
• Diethyl Ether: Moderately soluble (free base)
• Recommended Solution: Sulfate salt in water or buffer for aqueous applications

Stability and Storage Requirements:
• Storage Temperature: 2-8°C (refrigerated) recommended
• Long-term Storage: -20°C for maximum stability
• Stability Duration: >24 months at -20°C, 18-24 months at 2-8°C
• Light Sensitivity: Protect from direct light and UV radiation
• Humidity: Store desiccated to prevent hydroscopic degradation
• Chemical Stability: Stable as solid salt form
• Free Base Considerations: Volatile, oxidizable; store under inert atmosphere
• Degradation Pathways: Oxidative degradation, polymerization (free base)
• Incompatibility: Avoid strong oxidizers, acids (for free base), reducing agents

Extensive Research Applications and Scientific Investigations:

Monoamine Neurotransmission Research:
Amphetamine serves as the prototypical research tool for investigating:
• Dopamine transporter (DAT) function and pharmacology
• Norepinephrine transporter (NET) mechanisms
• Serotonin transporter (SERT) interactions
• Vesicular monoamine transporter 2 (VMAT2) effects
• Dopamine, norepinephrine, and serotonin release mechanisms
• Reverse transport (efflux) vs. reuptake inhibition
• Monoamine oxidase (MAO) inhibition potential
• Trace amine-associated receptor (TAAR1) agonism

Psychostimulant Pharmacology Studies:
• Structure-activity relationships in phenethylamines
• Mechanism of action for attention and arousal
• Reward pathway activation and reinforcement
• Locomotor stimulation and stereotypy induction
• Anorectic and thermogenic effects
• Cardiovascular and sympathomimetic actions
• Cognitive enhancement and memory effects
• Sleep and circadian rhythm disruption

Neuroscience and Behavioral Research:
• Attention-deficit mechanisms and model development
• Executive function and working memory studies
• Impulsivity and decision-making research
• Motivation and effort-related behavior
• Social behavior and aggression studies
• Sensory processing and gating investigations
• Neuroplasticity and gene expression changes
• Conditioned place preference and addiction models

Pharmacokinetic and Metabolic Investigations:
• Gastrointestinal absorption and bioavailability
• Blood-brain barrier penetration and CNS distribution
• Hepatic metabolism by CYP450 enzymes (CYP2D6 prominent)
• Hydroxylation and deamination pathways
• Renal excretion and pH-dependent elimination
• Species comparison in pharmacokinetic handling
• Drug-drug interaction potential (CYP2D6 inhibition)
• Population pharmacokinetic modeling

Medicinal Chemistry and Drug Discovery:
• Scaffold for ADHD medication development
• Template for wakefulness-promoting agents
• Lead compound for appetite suppressant research
• Comparator for novel psychostimulant screening
• Prodrug design and development studies
• Abuse-deterrent formulation research
• Delivery system optimization (transdermal, extended-release)
• In silico prediction model training

Forensic and Clinical Toxicology:
• Forensic toxicology reference standard
• Workplace drug testing immunoassay calibration
• Sports doping control analysis
• Driving under the influence investigations
• Clinical toxicology emergency department reference
• Metabolite identification (amphetamine, p-hydroxyamphetamine)
• Enantiomeric analysis for source determination
• Quantitative method validation

Neuropharmacology and Molecular Pharmacology:
• Dopamine receptor (D1, D2, D3, D4, D5) interactions
• Adrenergic receptor (α and β) effects
• Serotonin receptor (5-HT1A, 5-HT2A, etc.) interactions
• Glutamate and GABA system modulation
• Acetylcholine system effects
• Opioid peptide release studies
• Neurotrophic factor expression changes
• Epigenetic and transcriptional effects

Quality Control and Analytical Verification:

Comprehensive Testing Protocols:
Each batch undergoes extensive analytical characterization:

Chromatographic Analysis:
• HPLC assay with UV detection (257 nm, 210 nm)
• Purity assessment by area normalization
• Related substances and impurity profiling
• Chiral HPLC for enantiomeric composition (when applicable)
• Residual solvent screening by GC-MS or GC-FID
• Counterion analysis by ion chromatography
• Stability-indicating method validation

Spectroscopic Characterization:
• Proton NMR (400 MHz or higher) for structural confirmation
• Carbon-13 NMR with DEPT multiplicity editing
• 2D NMR (COSY, HSQC, HMBC) for connectivity verification
• High-resolution mass spectrometry (HRMS)
• Tandem mass spectrometry (MS/MS) fragmentation
• Infrared spectroscopy (FTIR with ATR)
• UV-Vis spectroscopy for chromophore analysis
• Optical rotation measurement (for enantiomers)

Physical and Materials Testing:
• Melting point determination (capillary or DSC)
• Optical rotation (when enantiomers available)
• pH measurement (for solutions)
• Particle size distribution analysis
• Bulk and tapped density measurements
• Hygroscopicity evaluation
• Karl Fischer titration for water content
• Thermal stability by TGA and DSC

Documentation and Regulatory Compliance:

Certificate of Analysis Includes:
• Batch number, manufacturing date, retest date
• Complete analytical results with acceptance criteria
• Representative chromatograms, spectra, data traces
• Statistical summary of replicate analyses
• Reference standard traceability information
• Quality assurance approval signature and date
• Storage conditions and handling recommendations
• Salt form specification (sulfate, phosphate, or free base)

Material Safety Data Sheet (SDS) Content:
• GHS hazard classification (varies by jurisdiction)
• Hazard pictograms and signal word
• Hazard statements (H-phrases) and precautionary statements (P-phrases)
• Safety, health, and environmental hazards
• First-aid measures by route of exposure
• Firefighting measures and suitable extinguishing media
• Accidental release measures and containment procedures
• Handling and storage best practices
• Exposure controls and personal protective equipment
• Detailed physical and chemical properties
• Stability, reactivity, and incompatibility information
• Toxicological information summary
• Ecological information and environmental considerations
• Disposal considerations and waste management
• Transport information and regulatory classification
• Legal status and controlled substance scheduling

Safety, Handling, and Storage Protocols:

Personal Protective Equipment Requirements:
• Respiratory: NIOSH-approved respirator for powder handling
• Eye: Chemical safety goggles with side shields
• Hand: Nitrile or neoprene chemical-resistant gloves
• Body: Laboratory coat (flame-resistant material preferred)
• Foot: Closed-toe safety shoes with slip-resistant soles
• Face: Face shield when risk of splash or aerosol
• Additional: Hair covering, sleeve covers for extensive handling

Engineering Controls and Facility Requirements:
• Chemical fume hood with adequate face velocity
• HEPA filtration on exhaust systems
• Secondary containment for spill prevention
• Emergency safety shower and eyewash station
• Fire suppression equipment appropriate for chemical fires
• Spill kits with appropriate absorbents
• Secure storage for controlled substances
• Access control and inventory management systems

Storage Conditions and Shelf Life:
• Temperature: 2-8°C for routine storage
• Long-term: -20°C for extended stability
• Duration: 18-24 months at refrigerated conditions
• Humidity: <60% RH, desiccated storage recommended
• Light: Protect from direct light and UV radiation
• Container: Amber glass with PTFE-lined cap
• Atmosphere: Inert gas headspace for sensitive storage
• Segregation: Store separately from incompatible chemicals
• Security: Controlled substance storage requirements
• Inventory: First-in-first-out rotation, regular reconciliation

Disposal and Waste Management:
• Waste characterization: Controlled substance waste
• Disposal: Incineration at DEA-authorized facility (US) or equivalent
• Documentation: DEA Form 222 or equivalent tracking
• Prohibited: No discharge to sewer or regular trash
• Spill response: Specialized procedures for controlled substances
• Environmental: Prevent release to environment

Research Ethics and Legal Compliance:
• Strictly for legitimate scientific research purposes only
• Controlled substance regulations apply (Schedule II in US)
• DEA registration or equivalent required for purchase
• End-user certification and institutional verification mandatory
• Secure storage and access control required
• Inventory tracking and documentation mandatory
• Active cooperation with regulatory agencies
• Violation of controlled substance regulations carries severe penalties

Professional Support and Customer Services:

Scientific Consultation:
• PhD-level support from neuropharmacologists and medicinal chemists
• Research protocol design and optimization
• Analytical method development and troubleshooting
• Literature review and reference provision
• Spectral data interpretation assistance
• Stability study design and execution support

Ordering and Logistics:
• Controlled substance ordering procedures
• DEA Form 222 or equivalent documentation
• Secure shipping with signature required
• Temperature-controlled transport when needed
• Discreet, professional packaging
• Comprehensive tracking and insurance

Institutional Programs:
• Compliance with institutional review board requirements
• Scheduled delivery programs for ongoing research
• Volume pricing for qualified research institutions
• Technical training and educational support
• Regulatory compliance consultation

Amphetamine Powder represents a foundational research chemical essential for investigators studying monoamine neurotransmission, psychostimulant pharmacology, and the neurobiological basis of attention, motivation, and reward. Its well-characterized pharmacological properties make it an indispensable reference compound for advancing scientific understanding in these critical areas.

For comprehensive information regarding research applications, regulatory requirements, analytical specifications, or to discuss custom requirements, please contact our scientific support department. Note that controlled substance regulations apply to this compound and proper documentation is required for purchase.`,
    price: 80,
    countInStock: 75,
    category: 'research chemicals',
    featured: true,
    images: []
  }
];

function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function seedResearchChemicals() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      console.error('Error: MONGODB_URI not found in environment variables');
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    let added = 0;
    let skipped = 0;

    for (const productData of researchChemicalProducts) {
      const slug = createSlug(productData.name);
      
      // Check if product already exists
      const existingProduct = await Product.findOne({ slug });
      
      if (existingProduct) {
        console.log(`Skipping ${productData.name} - already exists`);
        skipped++;
        continue;
      }

      // Create new product
      const newProduct = new Product({
        ...productData,
        slug,
        rating: 0,
        numReviews: 0
      });

      await newProduct.save();
      console.log(`Added: ${productData.name} (${productData.description.length} characters)`);
      added++;
    }

    console.log(`\nSeeding complete!`);
    console.log(`Added: ${added} products`);
    console.log(`Skipped: ${skipped} products (already existed)`);

  } catch (error) {
    console.error('Error seeding products:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedResearchChemicals();
