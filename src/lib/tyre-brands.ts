export type SpecRow = {
  label: string;
  value: string;
};

export type TyreProduct = {
  slug: string;
  name: string;
  hero: boolean;
  category: string;
  patternCode?: string;
  tagline: string;
  description: string;
  highlights: string[];
  specs: SpecRow[];
  typicalSizes: string[];
  bestFor: string;
  imageFile: string;
};

export type TyreBrand = {
  slug: string;
  name: string;
  rank: number;
  tagline: string;
  saPresence: string;
  about: string[];
  facts: SpecRow[];
  products: TyreProduct[];
};

export const TYRE_BRANDS: TyreBrand[] = [
  {
    slug: "bridgestone",
    name: "Bridgestone",
    rank: 1,
    tagline: "South Africa's volume leader for passenger, bakkie and SUV tyres.",
    saPresence:
      "Local manufacturer with a major plant in Brits, North West, plus a large dealer and OEM footprint across South Africa.",
    about: [
      "Bridgestone is usually cited as South Africa's passenger and light-vehicle tyre leader, with strong original-equipment and replacement presence. The brand is a local manufacturer, not only an importer.",
      "For Alberton drivers that mix highway, suburban and weekend gravel, Bridgestone covers touring, eco, performance and all-terrain in one range. The Dueler A/T002 is now built locally at the Brits factory.",
      "We fit current Bridgestone lines at Alberton Tyre Clinic. Lead with the Turanza T005 for everyday premium cars — it is still one of SA's best-selling premium passenger tyres.",
    ],
    facts: [
      { label: "Local plant", value: "Brits, North West" },
      { label: "Best known for", value: "Turanza touring, Dueler bakkie/SUV, Potenza performance" },
      { label: "SA role", value: "Major local manufacturer + OEM supplier" },
      { label: "Shop hero", value: "Turanza T005" },
    ],
    products: [
      {
        slug: "turanza-t005",
        name: "Turanza T005",
        hero: true,
        category: "Premium touring",
        tagline: "Best-selling premium passenger tyre for wet grip and daily comfort.",
        description:
          "The T005 is Bridgestone's proven premium touring tyre for drivers who want confidence on wet and dry tar. Independent TÜV SÜD testing highlighted class-leading wet lateral grip and wet braking. NanoPro-Tech silica compounding and dense centre siping help drain water while keeping wear and rolling resistance in check. Selected sizes carry EU A/A wet-grip and rolling-resistance grades.",
        highlights: [
          "TÜV SÜD-certified wet grip and wet braking",
          "NanoPro-Tech high-silica compound",
          "Quiet touring comfort for hatchbacks, sedans and crossovers",
        ],
        specs: [
          { label: "Type", value: "Summer / all-year SA touring" },
          { label: "Tread", value: "Asymmetric, dense centre sipes" },
          { label: "Compound", value: "NanoPro-Tech silica" },
          { label: "Typical rims", value: "15\"–18\" (size dependent)" },
          { label: "EU label (selected sizes)", value: "A wet grip / B rolling resistance; some A/A" },
        ],
        typicalSizes: ["205/55R16", "215/55R17", "225/45R17", "225/50R17"],
        bestFor: "Golf / A3 / 3 Series class cars and family sedans that need a premium daily tyre.",
        imageFile: "turanza-t005.jpg",
      },
      {
        slug: "turanza-6",
        name: "Turanza 6",
        hero: false,
        category: "Touring flagship",
        tagline: "Current Turanza flagship with ENLITEN tech — successor generation to the T005.",
        description:
          "Turanza 6 is Bridgestone's current touring flagship, widely listed in South Africa as the next generation after the T005. ENLITEN construction aims for wet control, longer mileage and lower rolling resistance. Bridgestone cites 3D washboard sipes, a high-performing wet compound and more than 22% mileage improvement versus the previous test-winning Turanza. It is also aimed at hybrid and EV drivers.",
        highlights: [
          "ENLITEN lightweight, efficient construction",
          "3D washboard sipes for wet control and even wear",
          "Designed for ICE, hybrid and EV passenger cars and on-road SUVs",
        ],
        specs: [
          { label: "Type", value: "Premium touring (ENLITEN)" },
          { label: "Tread", value: "Multi-pitch blocks with 3D washboard sipes" },
          { label: "Focus", value: "Wet control, mileage, fuel/EV efficiency" },
          { label: "Typical rims", value: "16\"–19\" (size dependent)" },
          { label: "SA listing", value: "Current flagship, widely stocked" },
        ],
        typicalSizes: ["205/55R16", "225/45R17", "225/55R17", "235/55R18"],
        bestFor: "Newer passenger cars and on-road SUVs wanting the latest Turanza, including hybrids and EVs.",
        imageFile: "turanza-6.jpg",
      },
      {
        slug: "ecopia-ep150",
        name: "Ecopia EP150",
        hero: false,
        category: "Eco / volume OE",
        tagline: "High-volume hatch and sedan tyre for fuel-efficient everyday kilometres.",
        description:
          "Ecopia EP150 is Bridgestone's volume eco-touring tyre for smaller passenger cars. It is common as both original equipment and replacement on South African hatches and sedans. The brief is low rolling resistance, respectable wet safety and affordable replacement — the workhorse of the Bridgestone passenger range rather than a performance tyre.",
        highlights: [
          "Low rolling-resistance Ecopia construction",
          "High listing volume in smaller passenger sizes",
          "Typical OE/replacement fitment on hatches and compact sedans",
        ],
        specs: [
          { label: "Type", value: "Eco touring / volume passenger" },
          { label: "Focus", value: "Fuel efficiency and everyday wear" },
          { label: "Typical rims", value: "14\"–16\"" },
          { label: "Position", value: "Value-premium daily tyre" },
        ],
        typicalSizes: ["175/65R14", "185/65R15", "195/65R15", "205/55R16"],
        bestFor: "Polo, Yaris, Corolla and similar high-volume hatch/sedan sizes.",
        imageFile: "ecopia-ep150.jpg",
      },
      {
        slug: "dueler-at002",
        name: "Dueler A/T002",
        hero: false,
        category: "All-terrain bakkie / SUV",
        tagline: "Current Dueler all-terrain — now locally built in Brits for SA bakkies and SUVs.",
        description:
          "The Dueler A/T002 is Bridgestone's current all-terrain line, launched in Europe in 2023 and now produced at the Brits factory. Hexagonal centre blocks and Z-shaped sipes add biting edges for mud and wet tar. Bridgestone cites a high-silica wet compound and about 40% mileage improvement versus the A/T001. Sizes cover Jimny-class 15-inch fitments through to Land Cruiser 18-inch sizes, including Hilux, Ranger, D-Max and Fortuner/Everest patterns. The broader Dueler H/T family remains the on-road SUV/bakkie option.",
        highlights: [
          "Locally manufactured at Bridgestone Brits",
          "Hexagonal blocks + Z-sipes for tar and light off-road",
          "High-silica wet grip; ~40% mileage gain vs A/T001 (internal, 265/65R17)",
        ],
        specs: [
          { label: "Type", value: "All-terrain (on-road biased A/T)" },
          { label: "Tread", value: "Hexagonal blocks, Z-shaped sipes" },
          { label: "Compound", value: "High-silica wet-grip mix" },
          { label: "Rim range", value: "15\"–18\" (15 sizes at SA launch)" },
          { label: "Made in", value: "Brits, South Africa" },
        ],
        typicalSizes: ["205/70R15", "265/65R17", "265/60R18", "285/60R18"],
        bestFor: "Hilux, Ranger, D-Max, Fortuner, Everest, Jimny and Land Cruiser drivers who need tar + gravel.",
        imageFile: "dueler-at002.jpg",
      },
      {
        slug: "potenza-sport",
        name: "Potenza Sport",
        hero: false,
        category: "Ultra high performance",
        tagline: "Current Potenza performance line for fast road cars — still actively sold in SA.",
        description:
          "Potenza Sport is Bridgestone's current ultra-high-performance passenger tyre, succeeding older Potenza S001/S005 patterns. An asymmetric tread, reinforced body and wide shoulder blocks target dry cornering stability and short wet braking. It is used as original equipment by performance brands including Audi and BMW. Choose this when the car is sporty and the driver wants sharper response than a Turanza touring tyre.",
        highlights: [
          "Asymmetric UHP tread for dry and wet grip",
          "High-speed stability and precise steering response",
          "OE on selected performance Audi and BMW models",
        ],
        specs: [
          { label: "Type", value: "Ultra high performance summer" },
          { label: "Tread", value: "Asymmetric, wide outer shoulder" },
          { label: "Focus", value: "Dry handling, wet braking, high-speed stability" },
          { label: "Typical rims", value: "17\"–20\" (size dependent)" },
        ],
        typicalSizes: ["225/45R17", "225/40R18", "245/40R18", "245/35R19"],
        bestFor: "Hot hatches, performance sedans and sporty coupes.",
        imageFile: "potenza-sport.jpg",
      },
    ],
  },
  {
    slug: "continental",
    name: "Continental",
    rank: 2,
    tagline: "German engineering with a strong South African plant and BestDrive fitment network.",
    saPresence:
      "Continental manufactures in South Africa and is heavily listed through BestDrive and independent fitment centres. PremiumContact remains the default OE-style tyre on Golf / A3 / 3 Series class cars.",
    about: [
      "Continental is one of the four local manufacturing heavyweights in South Africa, with a deep original-equipment history on European cars that dominate Alberton parkways.",
      "The PremiumContact family is the brand's retail and OE workhorse. PremiumContact 6 is still widely fitted; PremiumContact 7 has been on sale in SA since 2023 as the current flagship. UltraContact is the high-mileage story, EcoContact the fuel-saver, and CrossContact the SUV replacement line.",
      "At Alberton Tyre Clinic we lead Continental quotes with PremiumContact 6 for the cars that already wear it as OE, and step drivers up to PremiumContact 7 when they want the latest flagship.",
    ],
    facts: [
      { label: "SA role", value: "Local manufacturer + OEM / BestDrive network" },
      { label: "Best known for", value: "PremiumContact wet safety, UltraContact mileage" },
      { label: "Shop hero", value: "PremiumContact 6" },
      { label: "Current flagship", value: "PremiumContact 7 (SA since 2023)" },
    ],
    products: [
      {
        slug: "premiumcontact-6",
        name: "PremiumContact 6",
        hero: true,
        category: "Premium passenger",
        tagline: "Still a top retail and OE pick on Golf / A3 / 3 Series class cars.",
        description:
          "PremiumContact 6 has been Continental's high-performance touring tyre since 2016 and remains a staple in South African replacement sizes. Safety Silica Compound targets consistent wet and dry grip. Continental designed the comfort-optimised footprint to cut interior noise and improve mileage, with a sporty macro-block shoulder for cornering stability. Many Alberton cars still leave the factory on this pattern — matching OE is often the safest like-for-like replacement.",
        highlights: [
          "Safety Silica Compound for wet and dry grip",
          "Comfort-optimised footprint for noise and mileage",
          "Macro-block shoulder for high-speed cornering stability",
        ],
        specs: [
          { label: "Type", value: "Premium summer touring / HP" },
          { label: "Compound", value: "Safety Silica Compound" },
          { label: "Tread", value: "Asymmetric, sporty macro-blocks" },
          { label: "Focus", value: "Wet braking, comfort, OE replacement" },
          { label: "Typical rims", value: "16\"–19\"" },
        ],
        typicalSizes: ["205/55R16", "225/45R17", "225/50R17", "235/45R18"],
        bestFor: "VW Golf, Audi A3, BMW 3 Series and similar European passenger cars.",
        imageFile: "premiumcontact-6.jpg",
      },
      {
        slug: "premiumcontact-7",
        name: "PremiumContact 7",
        hero: false,
        category: "Current flagship",
        tagline: "Current PremiumContact flagship — on sale in South Africa since 2023.",
        description:
          "PremiumContact 7 is Continental's current flagship passenger tyre. Adaptive tread pattern technology is designed to stay precise on wet and dry roads, while the RedChili compound is marketed for safe braking from the first metres — without a long warm-up. Selected sizes are marked EV-compatible for electric and hybrid cars as well as petrol and diesel. BestDrive SA lists 16- to 19-inch sizes including common 17- and 18-inch Y-rated fitments.",
        highlights: [
          "RedChili compound for immediate wet/dry braking",
          "Adaptive pattern for mixed weather handling",
          "EV-compatible marking on the current range",
        ],
        specs: [
          { label: "Type", value: "Premium flagship touring / HP" },
          { label: "Compound", value: "RedChili" },
          { label: "Tread", value: "Adaptive pattern technology" },
          { label: "EV", value: "EV-compatible sizes available" },
          { label: "SA availability", value: "On sale since 2023; 16\"–19\" listed" },
        ],
        typicalSizes: ["225/45R17", "225/50R17", "235/45R17", "225/40R18"],
        bestFor: "Drivers upgrading from PC6, and newer cars including hybrids and EVs.",
        imageFile: "premiumcontact-7.jpg",
      },
      {
        slug: "ultracontact",
        name: "UltraContact",
        hero: false,
        category: "High mileage",
        tagline: "Continental's mileage specialist — heavily promoted by BestDrive / Conti SA.",
        description:
          "UltraContact is the Continental line sold on longevity. YellowChili compound and a harmonised tread are aimed at ultra-high mileage with balanced wet safety. UltraShield is a thicker, robust casing for damage protection on rough urban roads. Extra sipes increase water wipe-out for shorter wet braking, and groove noise-breakers cut pattern roar. Choose this when kilometres-per-rand matter more than sporty feel.",
        highlights: [
          "YellowChili compound for high mileage",
          "UltraShield casing for cut and impact protection",
          "Sipes + groove noise-breakers for wet braking and quiet running",
        ],
        specs: [
          { label: "Type", value: "High-mileage touring" },
          { label: "Compound", value: "YellowChili" },
          { label: "Casing", value: "UltraShield" },
          { label: "Focus", value: "Mileage, robustness, wet safety" },
        ],
        typicalSizes: ["185/65R15", "195/65R15", "205/55R16", "215/55R17"],
        bestFor: "High-mileage commuters and fleet-style family cars on rough Gauteng roads.",
        imageFile: "ultracontact.jpg",
      },
      {
        slug: "ecocontact-6",
        name: "ContiEcoContact 5 / EcoContact 6",
        hero: false,
        category: "Eco / small sizes",
        tagline: "High listing volume in smaller sizes — fuel-saving EcoContact family.",
        description:
          "EcoContact 6 (with EcoContact 5 still in smaller replacement sizes) is Continental's low rolling-resistance line. Green Chili 2.0 compound is designed to reduce wear, fuel use and CO₂. An asymmetric rib and sipe layout keeps wet and dry control while chasing efficiency. These patterns dominate compact-car listings where 14- and 15-inch sizes still sell hard.",
        highlights: [
          "Green Chili 2.0 compound for wear and efficiency",
          "Low rolling resistance to cut fuel use",
          "Strong presence in compact 14\"–16\" sizes",
        ],
        specs: [
          { label: "Type", value: "Eco touring" },
          { label: "Compound", value: "Green Chili 2.0 (EcoContact 6)" },
          { label: "Focus", value: "Fuel economy, mileage, compact-car fitment" },
          { label: "Typical rims", value: "14\"–16\" volume sizes" },
        ],
        typicalSizes: ["165/70R14", "175/65R14", "185/65R15", "195/65R15"],
        bestFor: "Small hatches and fuel-conscious daily drivers.",
        imageFile: "ecocontact-6.jpg",
      },
      {
        slug: "crosscontact",
        name: "CrossContact / ContiCrossContact",
        hero: false,
        category: "SUV / crossover",
        tagline: "SUV replacement demand — on-road CrossContact with light-gravel options.",
        description:
          "Continental's CrossContact / ContiCrossContact family covers SUV and crossover replacement. LX and LX Sport patterns are on-road biased (roughly 80/20 to 90/10 tar/dirt) for crossovers that see the occasional gravel road. More rugged ATR-type CrossContact patterns exist when bakkie or SUV drivers need extra off-road traction. This is the SUV counterpart to PremiumContact on passenger cars.",
        highlights: [
          "On-road SUV stability with light-gravel versions available",
          "Strong replacement demand as SA SUV parc grows",
          "LX / LX Sport for crossovers; ATR-type for more dirt use",
        ],
        specs: [
          { label: "Type", value: "SUV highway / light all-terrain" },
          { label: "On/off mix", value: "LX Sport ~90/10; LX ~80/20 tar/dirt" },
          { label: "Focus", value: "SUV comfort, traction, replacement OE sizes" },
        ],
        typicalSizes: ["215/65R16", "225/65R17", "235/55R18", "255/55R18"],
        bestFor: "Tiguan, Sportage, Tucson, Rav4 and similar crossovers, plus light SUV use.",
        imageFile: "crosscontact.jpg",
      },
    ],
  },
  {
    slug: "goodyear",
    name: "Goodyear",
    rank: 3,
    tagline: "Major local manufacturer — EfficientGrip for cars, Wrangler for bakkies.",
    saPresence:
      "Goodyear is one of South Africa's historic local tyre makers, still a major manufacturer with deep retail listings from 14-inch compact sizes up to UHP and bakkie Wrangler patterns.",
    about: [
      "Goodyear remains a core South African factory brand. In passenger tyres the EfficientGrip family is the retail engine: Performance 2 as the premium touring seller, Compact 2 in small-car sizes, and the previous EfficientGrip Performance still widely fitted, including ZA-marked stock.",
      "Eagle F1 Asymmetric 3, 5 and 6 cover the performance end. Wrangler AT and HP patterns are the bakkie and SUV go-to when customers want a Goodyear rather than a Dueler or Grandtrek.",
      "We lead Goodyear quotes with EfficientGrip Performance 2 — TÜV-tested for high mileage and short wet/dry braking, and Auto Bild's 2022 summer test winner.",
    ],
    facts: [
      { label: "SA role", value: "Major local manufacturer" },
      { label: "Best known for", value: "EfficientGrip touring, Eagle F1, Wrangler" },
      { label: "Shop hero", value: "EfficientGrip Performance 2" },
      { label: "Bakkies / SUV", value: "Wrangler AT / HP" },
    ],
    products: [
      {
        slug: "efficientgrip-performance-2",
        name: "EfficientGrip Performance 2",
        hero: true,
        category: "Premium touring",
        tagline: "Main premium touring seller — high mileage, short wet and dry braking.",
        description:
          "EfficientGrip Performance 2 is Goodyear's current premium touring tyre. Goodyear cites up to 50% more kilometres than the previous EfficientGrip Performance (internal, 205/55R16 on a Golf 7) and 20% more miles than the next-best tested rival in a 2019 TÜV SÜD test versus Michelin Primacy 4, Continental PremiumContact 6, Bridgestone Turanza T005 and Pirelli Cinturato P7 Blue. Mileage Plus, Wet Braking and Dry Stability Plus technologies target wear, water evacuation and centre-rib stiffness. Auto Bild named it a 2022 summer test winner. SA listings typically run 15- to 20-inch rims.",
        highlights: [
          "Mileage Plus elastic tread for long wear",
          "Wet Braking technology with extra gripping edges",
          "TÜV SÜD mileage and braking results vs key rivals",
        ],
        specs: [
          { label: "Type", value: "Premium summer touring" },
          { label: "Tread", value: "Asymmetric" },
          { label: "Tech", value: "Mileage Plus / Wet Braking / Dry Stability Plus" },
          { label: "Typical rims", value: "15\"–20\"" },
          { label: "Popular on", value: "Focus, 1 Series, Civic, Octavia class cars" },
        ],
        typicalSizes: ["195/65R15", "205/55R16", "215/55R17", "225/45R17"],
        bestFor: "Family cars and commuter sedans that need a long-wearing premium tyre.",
        imageFile: "efficientgrip-performance-2.jpg",
      },
      {
        slug: "efficientgrip-compact-2",
        name: "EfficientGrip Compact 2",
        hero: false,
        category: "Small-car volume",
        tagline: "Volume small-car line — very common 14\" and 15\" listings.",
        description:
          "EfficientGrip Compact 2 is Goodyear's latest standard summer tyre for compact passenger cars. Long gripping edges help evacuate water; an optimised contact patch adds stiffness for dry stability. It is the pattern you see again and again in 155–195 section widths on entry-level hatches. Eco-minded rolling resistance and wet/dry braking are the selling points, not sporty noise levels.",
        highlights: [
          "Designed for 14\"–15\" compact-car sizes",
          "Water-evacuation siping and aquaplaning resistance",
          "Mileage and fuel-efficiency focus for city cars",
        ],
        specs: [
          { label: "Type", value: "Compact summer touring" },
          { label: "Typical rims", value: "14\"–15\"" },
          { label: "Speed ratings", value: "Mostly T / H" },
          { label: "Focus", value: "Wet grip, mileage, small-car OE sizes" },
        ],
        typicalSizes: ["155/65R14", "175/65R14", "185/65R15", "195/65R15"],
        bestFor: "Entry hatches and city cars in high-volume 14- and 15-inch sizes.",
        imageFile: "efficientgrip-compact-2.jpg",
      },
      {
        slug: "efficientgrip-performance",
        name: "EfficientGrip Performance",
        hero: false,
        category: "Touring (previous gen)",
        tagline: "Previous EfficientGrip Performance — still widely fitted, including ZA-marked stock.",
        description:
          "The original EfficientGrip Performance remains on South African shelves and on thousands of cars that have not yet stepped up to Performance 2. ZA-marked local stock is still common. It is a balanced wet/dry touring tyre and a like-for-like replacement when the customer wants to stay on the pattern already on the car, or when Performance 2 is not in the required size.",
        highlights: [
          "Still a high-volume replacement touring tyre in SA",
          "ZA-marked local stock still in circulation",
          "Direct predecessor to EfficientGrip Performance 2",
        ],
        specs: [
          { label: "Type", value: "Premium touring (previous generation)" },
          { label: "Status", value: "Current stock / replacement, not discontinued in SA retail" },
          { label: "Focus", value: "Everyday wet/dry touring" },
        ],
        typicalSizes: ["195/65R15", "205/55R16", "215/55R16", "225/45R17"],
        bestFor: "Matching existing EfficientGrip Performance fitments and value touring quotes.",
        imageFile: "efficientgrip-performance.jpg",
      },
      {
        slug: "eagle-f1-asymmetric",
        name: "Eagle F1 Asymmetric 3 / 5 / 6",
        hero: false,
        category: "Ultra high performance",
        tagline: "Current Eagle F1 performance family — Asymmetric 6 is the latest UHP flagship.",
        description:
          "Eagle F1 Asymmetric 3, 5 and 6 are Goodyear's ultra-high-performance family still actively sold. Asymmetric 6 is the current flagship: Dry Contact Plus adaptive contact patch, a wet-braking resin system for more micro-contact on damp tar, and EV-ready noise/rolling-resistance tuning. Independent testers praise wet and dry grip with more comfort than many UHP rivals. Older 3 and 5 patterns remain in some SA sizes.",
        highlights: [
          "Asymmetric 6: dry contact patch that adapts to driving style",
          "Wet Braking Pro resin system",
          "EV-suitable compound and noise-cancelling pattern on the latest generation",
        ],
        specs: [
          { label: "Type", value: "Ultra high performance summer" },
          { label: "Current flagship", value: "Eagle F1 Asymmetric 6" },
          { label: "Also stocked", value: "Asymmetric 3 and 5 in selected sizes" },
          { label: "Typical rims", value: "17\"–20\" (16\"–22\" across the family)" },
        ],
        typicalSizes: ["225/45R17", "225/40R18", "245/40R18", "225/45R18"],
        bestFor: "Performance hatches, sports sedans and drivers who want sharper Eagle F1 response.",
        imageFile: "eagle-f1-asymmetric-6.jpg",
      },
      {
        slug: "wrangler",
        name: "Wrangler AT / HP",
        hero: false,
        category: "Bakkie & SUV",
        tagline: "Goodyear's bakkie and SUV go-to — all-terrain and highway-terrain Wrangler patterns.",
        description:
          "Wrangler is Goodyear's light-truck and SUV family. All-terrain (AT / AT Adventure-type) patterns use open shoulders and biting edges for gravel, with tougher sidewalls (Durawall / Kevlar on selected Adventure specs) against cuts. Highway-terrain HP / HT patterns stay quieter on tar for Fortuner, Everest and crossover use. In Alberton this is the Goodyear answer to Dueler and Grandtrek on Rangers, Hiluxes and family SUVs.",
        highlights: [
          "AT patterns for tar-plus-gravel bakkie use",
          "HP / HT patterns for on-road SUV comfort",
          "Tough sidewall constructions on selected Adventure specs",
        ],
        specs: [
          { label: "Type", value: "Light truck / SUV AT and HT" },
          { label: "AT focus", value: "Traction, durability, wet gravel" },
          { label: "HP / HT focus", value: "On-road noise, wear, SUV sizes" },
        ],
        typicalSizes: ["245/70R16", "265/65R17", "265/60R18", "255/60R18"],
        bestFor: "Ranger, Hilux, D-Max, Fortuner, Everest and similar bakkie/SUV fitments.",
        imageFile: "wrangler-at.jpg",
      },
    ],
  },
  {
    slug: "dunlop",
    name: "Dunlop",
    rank: 4,
    tagline: "Sumitomo Rubber SA — Grandtrek rules bakkies; Sport Maxx covers performance cars.",
    saPresence:
      "Dunlop in South Africa is Sumitomo Rubber SA, which also produces Falken locally. Grandtrek all-terrains carry Dunlop Sure mileage warranties when fitted and maintained at a registered dealer.",
    about: [
      "Dunlop is the fourth local factory brand. Sumitomo Rubber SA builds Dunlop (and Falken) in South Africa, which is why Grandtrek patterns are everywhere on Hilux, Fortuner and Jimny-class vehicles.",
      "Grandtrek AT5 is the flagship all-terrain with a 100,000 km Dunlop Sure mileage warranty push. AT20 is a high-volume recreational A/T with huge replacement pull. AT25 is a current A/T with a 70,000 km warranty and Toyota OE history on selected Fortuner and Hilux models.",
      "On passenger performance cars, SP Sport Maxx 050+ is still actively promoted; 060+ is the newest UHP flagship. Budget patterns such as SP 560 / SP Touring sell hard too, but the five below are the brand's main name movers. We lead Dunlop quotes with Grandtrek AT5.",
    ],
    facts: [
      { label: "Parent in SA", value: "Sumitomo Rubber SA (also makes Falken)" },
      { label: "Best known for", value: "Grandtrek bakkie/SUV, Sport Maxx UHP" },
      { label: "Shop hero", value: "Grandtrek AT5" },
      { label: "Mileage warranty", value: "Dunlop Sure — AT5 100,000 km; AT20/AT25 70,000 km (T&Cs)" },
    ],
    products: [
      {
        slug: "grandtrek-at5",
        name: "Grandtrek AT5",
        hero: true,
        category: "All-terrain flagship",
        tagline: "Flagship A/T with Dunlop Sure 100,000 km mileage warranty push.",
        description:
          "Grandtrek AT5 is Dunlop SA's flagship on-and-off-road all-terrain. Long connected blocks even out contact pressure for tar stability; larger blocks and a Super Abrasion Carbon compound target wear. A shoulder-groove stone ejector helps prevent stone drilling. Dunlop lists a free 18-month tyre insurance offer plus a 100,000 km mileage warranty on AT5 when registered and maintained (alignment and rotation every 10,000 km at a registered dealer). Size coverage is wide, from 15-inch to 20-inch SUV fitments.",
        highlights: [
          "Long connected block design for on-road stability",
          "Super Abrasion Carbon compound and stone ejectors",
          "Dunlop Sure mileage warranty: 100,000 km (T&Cs apply)",
        ],
        specs: [
          { label: "Type", value: "4x4 / SUV all-terrain" },
          { label: "Compound", value: "Super Abrasion Carbon" },
          { label: "Tread", value: "Long connected blocks, large shoulder blocks" },
          { label: "Warranty", value: "100,000 km mileage + 18-month insurance (T&Cs)" },
          { label: "Typical rims", value: "15\"–20\"" },
        ],
        typicalSizes: ["265/65R17", "265/60R18", "255/70R16", "235/65R17"],
        bestFor: "Hilux, Ranger, Fortuner and family SUVs that want a warrantied flagship A/T.",
        imageFile: "grandtrek-at5.jpg",
      },
      {
        slug: "grandtrek-at20",
        name: "Grandtrek AT20",
        hero: false,
        category: "High-volume A/T",
        tagline: "Huge bakkie and compact-SUV replacement pull — OE heritage on recreational SUVs.",
        description:
          "Grandtrek AT20 is Dunlop's high-performance recreational all-terrain, described by Dunlop SA as a comfort-focused A/T fitted as original equipment in Japan on high-performance SUVs. In South Africa it is a staple replacement size for bakkies and compact 4x4s (including Jimny-class 15-inch fitments). Dunlop Sure lists AT20 at 70,000 km mileage cover. It is the pattern many owners already have on the vehicle — matching it is often the fastest, most trusted quote.",
        highlights: [
          "High replacement volume on bakkies and compact SUVs",
          "OE heritage on recreational / performance SUVs",
          "Dunlop Sure mileage warranty: 70,000 km (T&Cs apply)",
        ],
        specs: [
          { label: "Type", value: "4x4 / SUV all-terrain (recreational)" },
          { label: "Focus", value: "Comfort, on-road manners, OE replacement" },
          { label: "Warranty", value: "70,000 km mileage (T&Cs)" },
          { label: "Example sizes", value: "195/80R15 through 17\" bakkie/SUV sizes" },
        ],
        typicalSizes: ["195/80R15", "265/70R16", "245/70R17", "225/70R17"],
        bestFor: "Jimny-class, Hilux/Fortuner replacement sizes and owners matching existing AT20 fitment.",
        imageFile: "grandtrek-at20.jpg",
      },
      {
        slug: "grandtrek-at25",
        name: "Grandtrek AT25",
        hero: false,
        category: "Current A/T / Toyota OE",
        tagline: "Current all-terrain with 70,000 km warranty — OE on selected Fortuner and Hilux models.",
        description:
          "Grandtrek AT25 is specified as original equipment on selected Toyota Fortuner models and the Limited Edition Hilux Raider Black. Dunlop positions it as a stylish SUV tyre with all-terrain capability for tar and dirt. Dunlop Sure mileage cover is 70,000 km, with the same 18-month insurance offer as other Grandtreks. Listed sizes include 16- and 17-inch light-truck fitments such as 265/65R17 and 275/65R17.",
        highlights: [
          "Toyota OE on selected Fortuner and Hilux models",
          "All-terrain capability with on-road comfort",
          "Dunlop Sure mileage warranty: 70,000 km (T&Cs apply)",
        ],
        specs: [
          { label: "Type", value: "4x4 / SUV all-terrain" },
          { label: "OE", value: "Selected Toyota Fortuner & Hilux Raider Black" },
          { label: "Warranty", value: "70,000 km mileage (T&Cs)" },
          { label: "Typical rims", value: "16\"–17\" LT sizes" },
        ],
        typicalSizes: ["265/70R16", "265/65R17", "275/65R17", "255/65R17"],
        bestFor: "Fortuner and Hilux owners replacing OE AT25, and similar 16–17 inch bakkie sizes.",
        imageFile: "grandtrek-at25.jpg",
      },
      {
        slug: "sp-sport-maxx-050-plus",
        name: "SP Sport Maxx 050+",
        hero: false,
        category: "Ultra high performance",
        tagline: "Still actively promoted and stocked UHP for fast passenger cars and SUVs.",
        description:
          "SP Sport Maxx 050+ uses compound and tread design aimed at high-performance passenger cars and top-end SUVs. Dunlop SA still lists and promotes the pattern, with a free 18-month tyre insurance offer. Sizes run from 16-inch W-rated passenger fitments through 19–22 inch Y-rated performance and SUV sizes. It remains the volume Sport Maxx pattern in many SA listings while 060+ rolls out as the newer flagship.",
        highlights: [
          "UHP compound and tread for performance cars and SUVs",
          "Broad 16\"–22\" size coverage still actively listed",
          "Dunlop 18-month tyre insurance offer (T&Cs)",
        ],
        specs: [
          { label: "Type", value: "Passenger ultra high performance" },
          { label: "Speed ratings", value: "W / Y depending on size" },
          { label: "Typical rims", value: "16\"–22\"" },
          { label: "Status", value: "Current, still stocked and promoted" },
        ],
        typicalSizes: ["225/45R17", "225/50R17", "245/45R18", "255/40R18"],
        bestFor: "Performance sedans, fast SUVs and like-for-like 050+ replacements.",
        imageFile: "sp-sport-maxx-050-plus.jpg",
      },
      {
        slug: "sp-sport-maxx-060-plus",
        name: "SP Sport Maxx 060+",
        hero: false,
        category: "Latest UHP flagship",
        tagline: "Newest Sport Maxx flagship — current UHP, not end-of-life.",
        description:
          "SP Sport Maxx 060+ is Dunlop's newest ultra-high-performance flagship for passenger cars and performance SUVs. It uses an asymmetric tread for wet and dry stability, with an updated long-life compound versus older Maxx patterns. SA retailers still run dual stock of 050+ and 060+; 060+ is the one to quote when the driver wants the latest Dunlop UHP rather than matching an older 050+ OE.",
        highlights: [
          "Latest Dunlop UHP flagship",
          "Asymmetric tread for wet and dry stability",
          "Sold alongside 050+ as the newer generation",
        ],
        specs: [
          { label: "Type", value: "Passenger ultra high performance (current flagship)" },
          { label: "Tread", value: "Asymmetric UHP" },
          { label: "Focus", value: "Grip, high-speed stability, modern performance sizes" },
          { label: "Status", value: "Current generation, not discontinued" },
        ],
        typicalSizes: ["225/45R17", "225/40R18", "245/40R18", "245/45R18"],
        bestFor: "Drivers wanting the newest Dunlop performance tyre on sports hatches and sedans.",
        imageFile: "sp-sport-maxx-060-plus.jpg",
      },
    ],
  },
  {
    slug: "hankook",
    name: "Hankook",
    rank: 5,
    tagline: "Major import player — Ventus Prime for cars, Dynapro for SUVs.",
    saPresence:
      "Hankook is not one of the four local factories, but it is consistently listed next among major SA retail players. TyreCompare and independent fitment sites still treat Ventus Prime as a standout popular passenger line.",
    about: [
      "Hankook sits in the next tier after Bridgestone, Continental, Goodyear and Dunlop — alongside Michelin and Pirelli as a strong import brand with serious retail presence. It is a favourite when customers want premium-adjacent performance at a sharper price.",
      "Ventus Prime 3 remains the high-volume passenger pattern on comparison sites. Ventus Prime 4 (K135) is the current successor. Kinergy Eco² (K435) fills value touring sizes. Ventus S1 evo³ is the performance range. Dynapro HPX and related AT lines cover SUVs.",
      "We lead Hankook quotes with Ventus Prime 3, then offer Prime 4 when the size is in the new generation.",
    ],
    facts: [
      { label: "SA role", value: "Major import brand with dense retail listings" },
      { label: "Best known for", value: "Ventus Prime touring, Dynapro SUV" },
      { label: "Shop hero", value: "Ventus Prime 3" },
      { label: "Current successor", value: "Ventus Prime 4 (K135)" },
    ],
    products: [
      {
        slug: "ventus-prime-3",
        name: "Ventus Prime 3",
        hero: true,
        category: "Premium passenger",
        patternCode: "K125",
        tagline: "TyreCompare standout popular passenger line in South Africa.",
        description:
          "Ventus Prime 3 (K125) is Hankook's proven premium touring tyre and still the pattern comparison sites flag as a popular SA passenger seller. Four circumferential grooves drain water to cut aquaplaning. An asymmetric tread is designed to increase road contact (Hankook cites about 10%), with dual-stiffness outer ribs and a solid outside block for high-speed stability. A Visual Alignment Indicator (VAI) lets drivers spot alignment issues from the tread.",
        highlights: [
          "Four circumferential grooves for wet drainage",
          "Asymmetric tread with dual-stiffness outer ribs",
          "Visual Alignment Indicator (VAI) on the tread",
        ],
        specs: [
          { label: "Type", value: "Premium summer touring" },
          { label: "Pattern", value: "K125" },
          { label: "Tread", value: "Asymmetric, 4 circumferential grooves" },
          { label: "Focus", value: "Dry handling, wet safety, comfort" },
        ],
        typicalSizes: ["205/55R16", "215/55R17", "225/45R17", "225/50R17"],
        bestFor: "Everyday passenger cars needing a popular, well-priced premium touring tyre.",
        imageFile: "ventus-prime-3.jpg",
      },
      {
        slug: "ventus-prime-4",
        name: "Ventus Prime 4",
        hero: false,
        category: "Current touring successor",
        patternCode: "K135",
        tagline: "Current Ventus Prime successor — stocked at SA retailers.",
        description:
          "Ventus Prime 4 (K135) is Hankook's current Prime generation: optimum driving control with a quieter, more comfortable ride. Hankook highlights zigzag 3D tread blocks for dry friction, groove-wall knurling to cut pattern noise, and round-optimisation (RO) pitching for a smoother footprint. Wet braking uses uniform ground pressure and strong transverse drainage. Errols Tyres and other SA retailers list K135 as a current pattern.",
        highlights: [
          "Zigzag 3D tread technology for dry precision",
          "Low-noise groove-wall knurling",
          "Wet braking via even footprint pressure and drainage",
        ],
        specs: [
          { label: "Type", value: "Premium summer touring (current gen)" },
          { label: "Pattern", value: "K135" },
          { label: "Focus", value: "Wet braking, low noise, dry handling" },
          { label: "Example EU label", value: "Wet A / fuel C on selected sizes (e.g. 185/55R16)" },
        ],
        typicalSizes: ["205/55R16", "215/55R17", "225/45R17", "235/55R17"],
        bestFor: "Drivers stepping up from Prime 3 to the current Hankook touring flagship.",
        imageFile: "ventus-prime-4.jpg",
      },
      {
        slug: "kinergy-eco2",
        name: "Kinergy Eco² (K435)",
        hero: false,
        category: "Value touring",
        patternCode: "K435",
        tagline: "High listing density / value touring for compact and family sizes.",
        description:
          "Kinergy Eco² K435 is Hankook's fuel-efficient value touring tyre. It shows up densely in SA size listings where customers want a named brand without Ventus money. The brief is low rolling resistance, respectable wet grip (many sizes carry a B wet-grip EU label) and long wear on smaller rims. It is the Hankook counterpart to Ecopia and EcoContact in hatchback sizes.",
        highlights: [
          "Eco-oriented compound for fuel efficiency",
          "High listing density in compact passenger sizes",
          "Value alternative to premium touring patterns",
        ],
        specs: [
          { label: "Type", value: "Eco / value touring" },
          { label: "Pattern", value: "K435" },
          { label: "Focus", value: "Rolling resistance, mileage, compact sizes" },
          { label: "Typical rims", value: "14\"–16\"" },
        ],
        typicalSizes: ["175/65R14", "185/65R15", "195/65R15", "205/55R16"],
        bestFor: "Budget-conscious hatch and sedan owners who still want a major brand.",
        imageFile: "kinergy-eco2-k435.jpg",
      },
      {
        slug: "ventus-s1-evo3",
        name: "Ventus S1 evo³ / Ventus evo",
        hero: false,
        category: "Performance",
        patternCode: "K127",
        tagline: "Current Hankook performance range for luxury and sports cars.",
        description:
          "Ventus S1 evo³ (K127) is Hankook's current ultra-high-performance line, with SUV and EV variants in the wider Ventus evo family. HSSC silica is vulcanised longer at lower temperature for mileage and grip. An aramid hybrid belt keeps the contact patch flat under cornering (Hankook cites about 15% better dry handling vs the previous generation). Interlocking outer grooves target wet grip without giving up dry performance. It is a common OE-style performance tyre on premium German cars.",
        highlights: [
          "HSSC silica compound for grip and mileage",
          "Aramid hybrid belt for dry handling",
          "Interlocking outer grooves for wet performance",
        ],
        specs: [
          { label: "Type", value: "Ultra high performance" },
          { label: "Pattern", value: "K127 (SUV/EV variants in the evo family)" },
          { label: "Belt", value: "Aramid hybrid reinforcement" },
          { label: "Typical rims", value: "17\"–21\"" },
        ],
        typicalSizes: ["225/45R17", "225/40R18", "245/40R18", "255/35R19"],
        bestFor: "Performance and luxury cars that need a current Ventus UHP, including some SUV/EV sizes.",
        imageFile: "ventus-s1-evo3.jpg",
      },
      {
        slug: "dynapro-hpx",
        name: "Dynapro HPX",
        hero: false,
        category: "SUV volume",
        patternCode: "RA43",
        tagline: "SUV volume line — Dynapro HPX on-road, with Dynapro AT patterns for bakkie use.",
        description:
          "Dynapro is Hankook's SUV family. HPX (RA43) is the current on-road SUV touring tyre: a larger contact patch and all-season-style compound for even wear, 3D GripKontrol sipes for wet (and cold) grip, plus groove knurling and multi-pitch sequencing to keep SUV tyre roar down. Dynapro AT / AT2 patterns sit alongside it when the vehicle needs more gravel ability. Together they are Hankook's answer to CrossContact, Dueler H/T and Grandtrek on crossovers and bakkies.",
        highlights: [
          "Even-wear compound and larger contact patch",
          "3D GripKontrol sipes for wet grip and handling",
          "Companion Dynapro AT lines for light off-road / bakkie use",
        ],
        specs: [
          { label: "Type", value: "SUV highway-terrain (HPX) + AT family" },
          { label: "Pattern", value: "HPX RA43; AT companions RF11/RF12 etc." },
          { label: "Focus", value: "SUV mileage, wet safety, lower pattern noise" },
        ],
        typicalSizes: ["215/70R16", "225/65R17", "235/55R18", "265/65R17"],
        bestFor: "Crossovers and SUVs on HPX; bakkies and gravel use on Dynapro AT patterns.",
        imageFile: "dynapro-hpx.jpg",
      },
    ],
  },
];

export function getBrand(slug: string): TyreBrand | undefined {
  return TYRE_BRANDS.find((brand) => brand.slug === slug);
}

export function getAllBrandSlugs(): string[] {
  return TYRE_BRANDS.map((brand) => brand.slug);
}

export function brandLogoPath(slug: string): string {
  return `/images/brands/${slug}/logo.png`;
}

export function productImagePath(brandSlug: string, imageFile: string): string {
  return `/images/brands/${brandSlug}/${imageFile}`;
}
