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
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

const etomidateProducts = [
  {
    name: 'Etomidate Powder / Crystal',
    slug: 'etomidate-powder-crystal',
    category: 'etomidate',
    price: 120,
    countInStock: 50,
    featured: true,
    images: [],
    description: `Etomidate Powder/Crystal is a premium-grade research compound presented in its solid crystalline form, offering researchers the highest level of purity and stability for laboratory investigations. This form is particularly favored in scientific settings for its ease of accurate weighing, long shelf-life, and versatility in preparing custom solutions and formulations for experimental use.

Our Etomidate Powder/Crystal is manufactured under strict quality control protocols, achieving purity levels of ≥99.5% as verified by HPLC, NMR spectroscopy, and high-resolution mass spectrometry. Each batch is produced in controlled laboratory environments using pharmaceutical-grade synthesis techniques to ensure batch-to-batch consistency and reliability.

Chemical and Physical Profile:
• IUPAC Name: Ethyl 1-[(1R)-1-phenylethyl]-1H-imidazole-5-carboxylate
• Molecular Formula: C14H16N2O2
• Molecular Weight: 244.29 g/mol
• CAS Number: 33125-97-2
• Appearance: White to off-white crystalline powder
• Melting Point: 67–70°C
• Purity: ≥99.5% (HPLC verified)
• Crystal Habit: Fine prismatic crystals
• Bulk Density: 0.40–0.55 g/cm³
• Hygroscopicity: Low — suitable for standard laboratory storage

Solubility Data:
• Water: Practically insoluble (<0.3 mg/mL)
• Ethanol: Freely soluble (>100 mg/mL)
• DMSO: Freely soluble (>100 mg/mL)
• Methanol: Freely soluble (>100 mg/mL)
• Propylene Glycol: Soluble (20–40 mg/mL)
• Recommended Working Solution: Dissolve in ethanol or DMSO, then dilute with aqueous buffer for in vitro assays

Research Applications:
• GABA-A receptor pharmacology and allosteric modulation studies
• Anesthesia onset and offset mechanism investigations
• Comparative anesthetic compound studies (crystalline vs. formulated)
• Analytical reference standard for method validation
• Stability and degradation pathway research
• Structure-activity relationship (SAR) investigations for imidazole anesthetics
• Receptor binding affinity quantification by radioligand competition assays
• Thermodynamic characterization of protein-ligand interactions

Quality Assurance:
Each batch of Etomidate Powder/Crystal is accompanied by a full Certificate of Analysis including:
— HPLC chromatogram and purity percentage
— NMR spectra (1H and 13C) for structural confirmation
— High-resolution mass spectrometry exact mass
— Melting point range verification
— Residual solvent screening (ICH Q3C compliant)
— Heavy metal analysis
— Water content by Karl Fischer titration

Storage and Handling:
• Store at 2–8°C in original amber glass container
• Keep away from moisture, light, and heat
• Seal tightly after each use; nitrogen headspace recommended for long-term storage
• Shelf life: 24+ months under recommended conditions
• Use in a certified chemical fume hood with appropriate PPE
• Nitrile gloves, safety goggles, and laboratory coat required at all times

Packaging Options:
• 100 mg | 250 mg | 500 mg | 1 g | 5 g
• Packaged in amber glass vials with PTFE-lined caps
• Desiccant included in all orders
• Discreet, professional, tamper-evident outer packaging
• Worldwide shipping with full tracking

For bulk orders, custom purity grades, or analytical consultation, contact our scientific support team. Strictly for research use only. Not for human consumption.`
  },
  {
    name: 'Etomidate Liquid Solution',
    slug: 'etomidate-liquid-solution',
    category: 'etomidate',
    price: 135,
    countInStock: 40,
    featured: false,
    images: [],
    description: `Etomidate Liquid Solution is a precisely formulated, ready-to-use research preparation of etomidate dissolved in a pharmaceutical-grade carrier system. Designed for researchers who require a pre-dissolved, accurately concentrated solution, this liquid form eliminates the need for in-house dissolution and ensures homogeneous compound distribution for reproducible experimental results.

Our Etomidate Liquid Solution is prepared under aseptic conditions using validated manufacturing protocols. The active compound is dissolved at a defined concentration in a biocompatible solvent system (propylene glycol/ethanol vehicle), mirroring formulation strategies used in pharmacological and toxicological research settings. Each unit is quality-tested and released only upon meeting all analytical specifications.

Product Specifications:
• Active Compound: Etomidate (≥99.2% purity by HPLC)
• Concentration: 2 mg/mL (standard); custom concentrations available
• Formulation Vehicle: 35% propylene glycol, 65% purified water with pH adjustment to 6.0–7.0
• Appearance: Clear, colorless to slightly yellow solution
• pH Range: 5.5–7.5 (verified per batch)
• Osmolality: 300–400 mOsmol/kg
• Particulate Matter: Passes USP <788> visual inspection
• Endotoxin Content: <0.25 EU/mL (LAL test)
• Sterility: Not sterile (research use only)
• Fill Volume: 10 mL, 20 mL, or 50 mL per vial

Chemical Identity:
• IUPAC Name: Ethyl 1-[(1R)-1-phenylethyl]-1H-imidazole-5-carboxylate
• Molecular Formula: C14H16N2O2
• Molecular Weight: 244.29 g/mol
• CAS Registry Number: 33125-97-2
• Chemical Class: Imidazole ester hypnotic agent

Research Applications and Uses:

In Vitro Pharmacological Studies:
• Receptor binding assays requiring precise compound concentrations
• GABA-A receptor patch-clamp electrophysiology experiments
• Cell viability and cytotoxicity studies in neuronal cultures
• Enzyme inhibition assays (11β-hydroxylase, CYP450 panels)
• Metabolic stability studies in liver microsomes and hepatocytes
• Transport studies across simulated blood-brain barrier models

Pharmacokinetic Research:
• In vitro plasma protein binding displacement studies
• Blood-brain barrier permeability assessment
• Comparative bioavailability research
• Drug-drug interaction profiling
• Species difference in metabolic clearance

Analytical and Method Development:
• HPLC and LC-MS/MS method calibration and validation
• Stability studies: hydrolytic, thermal, photolytic, and oxidative
• Calibration curve preparation for quantitative bioanalysis
• Recovery testing in biological matrices (plasma, urine, brain tissue)
• Quality control sample preparation for laboratory accreditation

Formulation Science:
• Excipient compatibility research
• Comparative formulation performance studies
• Precipitation and solubility profiling in various media
• Physicochemical stability of ready-to-use solutions

Quality Control Data Per Batch:
• Assay by HPLC-UV: ≥99.2%
• Visual inspection: Clear, free from particles
• pH measurement: 5.5–7.5
• Concentration verification by UV-Vis and HPLC
• Osmolality measurement by freezing point depression
• Residual solvents screening
• Certificate of Analysis issued with each lot

Storage and Stability:
• Store at 2–8°C, protected from light
• Do not freeze — precipitation may occur upon thawing
• Stable for 12 months from manufacture date under recommended storage
• Once opened, use within 30 days; store at 2–8°C with cap tightly closed
• Avoid temperature excursions above 25°C

Handling and Safety:
• For laboratory research use only — not for human or veterinary administration
• Handle in a biological safety cabinet or chemical fume hood
• Wear nitrile gloves, safety goggles, and lab coat
• Review Safety Data Sheet (SDS) before use
• Dispose of unused solution per institutional chemical waste protocols

Packaging:
• 10 mL vial | 20 mL vial | 50 mL vial
• Type I borosilicate glass vials with bromobutyl rubber closures and aluminum crimp seals
• Labeled with lot number, concentration, storage conditions, and hazard symbols
• Secondary packaging includes insulated shipping container with ice packs for temperature maintenance
• Worldwide discreet shipping with tracking and insurance

Custom concentrations (0.5 mg/mL, 1 mg/mL, 5 mg/mL, 10 mg/mL) and custom volumes are available on request. Isotopically labeled versions (deuterated etomidate) available for metabolism studies. Contact our scientific support team for custom formulation inquiries. Strictly for research use only.`
  },
  {
    name: 'Etomidate Vape / K-Pods',
    slug: 'etomidate-vape-k-pods',
    category: 'etomidate',
    price: 160,
    countInStock: 30,
    featured: true,
    images: [],
    description: `Etomidate Vape / K-Pods represent an innovative and specialized research delivery format designed for inhalation pharmacokinetic studies and pulmonary absorption research. This product is developed exclusively for scientific investigations into aerosolized compound delivery, pulmonary bioavailability, and the pharmacokinetics of inhaled anesthetic agents. The K-Pod format provides a standardized, pre-filled, and consistent research preparation ideal for controlled inhalation experiments.

This cutting-edge research format is particularly valuable for researchers studying pulmonary drug delivery systems, comparative bioavailability between inhalation and intravenous routes, and the onset/offset dynamics of aerosolized anesthetic compounds. The precisely formulated vape solution ensures consistent aerosol particle size distribution and reproducible compound delivery per actuation or pod.

Product Overview and Specifications:

Active Ingredient:
• Compound: Etomidate (≥99.0% purity, HPLC verified)
• Loading per Pod/Cartridge: 10 mg / 20 mg (specify at order)
• Concentration in Vape Solution: 10–20 mg/mL in food-grade PG/VG carrier
• Vehicle Composition: Pharmaceutical-grade Propylene Glycol (PG) and Vegetable Glycerin (VG) blend (60:40 or 70:30 PG:VG ratios available)
• Flavor Additives: None — unflavored for research purity
• Nicotine Content: Zero — research compound only

Device Compatibility (K-Pod Format):
• Universal compatibility with standard 510-thread research vaporizers
• Pod volume: 1 mL (standard) or 2 mL (extended research run)
• Coil resistance: 1.0–1.4 Ω for consistent vapor production
• Mouthpiece: Medical-grade silicone, inert and non-reactive
• Pod material: PCTG (Polycyclohexylenedimethylene terephthalate glycol) — chemically resistant
• Wicking material: Organic cotton — no metallic contaminants
• Leak-proof design: Dual-sealed air channel for research transport integrity

Aerosol Characterization Data:
• Mass Median Aerodynamic Diameter (MMAD): 1.5–3.5 μm
• Geometric Standard Deviation (GSD): <2.5
• Fine Particle Fraction (FPF): >50% particles <5 μm
• Emitted Dose per Puff: 0.5–1.0 mg etomidate (at 1.8W device setting)
• Total Puffs per Pod: ~100–200 (1 mL pod at 3-second draw duration)
• Vapor Temperature: 150–200°C (within PG/VG safe vaporization range)

Research Applications:

Pulmonary Drug Delivery Studies:
• Inhaled bioavailability determination vs. intravenous administration
• Lung deposition studies using cascade impactor analysis
• Aerosol characterization with laser diffraction or next-generation impactors
• In vitro air-liquid interface (ALI) cellular absorption studies
• Pulmonary absorption kinetics modeling
• Comparative first-pass avoidance pharmacokinetics

Pharmacokinetic and Pharmacodynamic Research:
• Rapid onset vs. intravenous route comparison
• Tmax and Cmax profiling via inhaled delivery
• Volume of distribution studies via pulmonary route
• Context-sensitive half-time comparisons across administration routes
• Effect-site equilibration kinetics for inhaled anesthetics
• Population pharmacokinetic model development for inhalation delivery

Inhalation Toxicology Research:
• Safety profiling of aerosolized imidazole compounds
• Respiratory tract irritation and inflammation marker studies
• In vitro cytotoxicity with relevant lung cell lines (A549, Calu-3, BEAS-2B)
• Mucociliary clearance impact investigations
• Reactive oxygen species (ROS) generation in lung tissue models

Behavioral and Neuroscience Research:
• Rapid sedation onset characterization studies
• CNS distribution kinetics post-pulmonary absorption
• Comparative receptor occupancy via inhaled vs. IV route
• Translational inhalation anesthesia mechanism research
• Preclinical inhalation exposure model development

Analytical Method Development:
• Developing LC-MS/MS methods for detection of inhaled compounds in breath condensate
• Aerosol collection and quantification method validation
• Exhaled breath condensate (EBC) biomarker analysis
• Cascade impactor collection stage quantification methods
• Filter-based aerosol capture and extraction protocols

Quality Control and Testing:

Pod Quality Testing Per Batch:
• Active compound assay (HPLC-UV): ≥99.0%
• Aerosolization performance (Next Generation Impactor): dose uniformity ±15%
• Emitted dose content uniformity: RSD <10%
• Leakage testing: 0% leak rate under transport conditions
• Microbiological limits: Meets USP <61> and <62> guidelines for non-sterile preparations
• Heavy metals screening: All below limits
• Residual solvent analysis: PG and VG purity confirmed
• Certificate of Analysis issued with every batch

Carrier Purity (PG/VG):
• Propylene Glycol: USP/EP grade, ≥99.9%, free from diethylene glycol
• Vegetable Glycerin: USP/EP grade, ≥99.7%, non-GMO origin
• Both carriers certified free from acrolein, acetaldehyde, and formaldehyde at working concentrations

Storage and Stability:
• Store at room temperature (15–25°C), away from direct sunlight
• Do not refrigerate or freeze — condensation may affect pod performance
• Protect from excessive heat (do not store above 30°C)
• Shelf life: 18 months from manufacture date (sealed pod)
• Once opened/used: consume within research session; reseal with included silicone cap
• Keep upright to prevent leakage
• Do not disassemble pod — contact support for damaged units

Safe Handling and Research Precautions:
• Strictly for controlled laboratory inhalation research only
• Not for recreational use or human therapeutic administration
• Use only in well-ventilated inhalation research chambers or fume hoods equipped for aerosol containment
• Researchers should use appropriate respiratory protection during device handling and priming
• Exposure monitoring recommended for research personnel (air sampling during experiments)
• Refer to compound SDS for full hazard information
• Dispose of used pods per institutional chemical waste procedures
• Secondary containment recommended during storage and transport

Packaging and Shipping:
• Individually sealed pods in child-resistant, tamper-evident blister packaging
• Available in packs of: 2 pods | 5 pods | 10 pods | 20 pods
• Each pack includes:
  — Certificate of Analysis (lot-specific)
  — Aerosol characterization data sheet
  — SDS / Material Safety Data Sheet
  — Research use declaration card
• Insulated outer packaging with temperature indicator for shipping integrity
• Worldwide discreet, professional shipping with tracking

Compatible Research Vaporizers:
• Any 510-thread vaporizer operating at 1.5W–3.5W
• Pod-based devices with standard pod connection
• We recommend using a variable-wattage device for precise dose control per puff
• Research vaporizer units available as add-on purchase — contact support

Custom Options Available:
• Custom etomidate concentrations (5 mg/mL – 30 mg/mL)
• Custom PG/VG ratios for viscosity optimization
• Deuterium-labeled etomidate pods for metabolism tracing
• Radiolabeled options for lung deposition studies (contact for availability)
• Custom pod volumes and fill quantities for extended studies

For institutional orders, custom research formulations, or aerosol characterization data packages, please contact our scientific support team. All orders require end-user research certification. Strictly for scientific research purposes only. Not for human consumption or therapeutic use.`
  }
];

function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function seedEtomidate() {
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

    for (const productData of etomidateProducts) {
      const existingProduct = await Product.findOne({ slug: productData.slug });

      if (existingProduct) {
        console.log(`Skipping "${productData.name}" — already exists`);
        skipped++;
        continue;
      }

      const newProduct = new Product({
        ...productData,
        rating: 0,
        numReviews: 0
      });

      await newProduct.save();
      console.log(`Added: ${productData.name} (${productData.description.length} chars)`);
      added++;
    }

    console.log(`\nDone! Added: ${added} | Skipped: ${skipped}`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedEtomidate();
