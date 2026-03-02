export interface Plant {
  id: number;
  scientificName: string;
  commonNameEn: string;
  commonNameFil: string;
  family: string;
  isDohApproved: boolean;
  medicinalUses: string;
  safetyWarnings?: string;
  preparation: string;
  confidence?: number;
}

export const plantsData: Plant[] = [
  {
    id: 1,
    scientificName: "Vitex negundo",
    commonNameEn: "Five-leaved Chaste Tree",
    commonNameFil: "Lagundi",
    family: "Lamiaceae",
    isDohApproved: true,
    medicinalUses: "Relief of coughs, asthma, fever, and pain. Treatment of respiratory problems.",
    preparation: "Boil leaves in water for 10-15 minutes. Drink as tea 3 times daily.",
    safetyWarnings: "Consult doctor if pregnant or breastfeeding.",
    confidence: 95
  },
  {
    id: 2,
    scientificName: "Blumea balsamifera",
    commonNameEn: "Sambong",
    commonNameFil: "Sambong",
    family: "Asteraceae",
    isDohApproved: true,
    medicinalUses: "Treatment of kidney stones, urinary tract infections, and hypertension.",
    preparation: "Boil 2 tablespoons of leaves in 2 cups of water for 15 minutes. Drink 3 times daily.",
    safetyWarnings: "Not recommended for those with kidney disease.",
  },
  {
    id: 3,
    scientificName: "Psidium guajava",
    commonNameEn: "Guava",
    commonNameFil: "Bayabas",
    family: "Myrtaceae",
    isDohApproved: true,
    medicinalUses: "Treatment of diarrhea, wounds, and oral infections. Anti-bacterial properties.",
    preparation: "Boil leaves and use as mouthwash or drink as tea for diarrhea.",
  },
  {
    id: 4,
    scientificName: "Momordica charantia",
    commonNameEn: "Bitter Gourd",
    commonNameFil: "Ampalaya",
    family: "Cucurbitaceae",
    isDohApproved: true,
    medicinalUses: "Help manage diabetes and blood sugar levels. Rich in antioxidants.",
    preparation: "Boil leaves or fruit in water and drink as tea twice daily.",
    safetyWarnings: "May lower blood sugar too much if taking diabetes medication.",
  },
  {
    id: 5,
    scientificName: "Allium sativum",
    commonNameEn: "Garlic",
    commonNameFil: "Bawang",
    family: "Amaryllidaceae",
    isDohApproved: true,
    medicinalUses: "Lower cholesterol, reduce blood pressure, boost immune system.",
    preparation: "Eat raw or cooked. Can be made into oil or supplements.",
  },
  {
    id: 6,
    scientificName: "Zingiber officinale",
    commonNameEn: "Ginger",
    commonNameFil: "Luya",
    family: "Zingiberaceae",
    isDohApproved: true,
    medicinalUses: "Relief of nausea, indigestion, and inflammation. Pain relief.",
    preparation: "Grate fresh ginger and steep in hot water for tea.",
  },
  {
    id: 7,
    scientificName: "Clinopodium douglasii",
    commonNameEn: "Yerba Buena",
    commonNameFil: "Yerba Buena",
    family: "Lamiaceae",
    isDohApproved: true,
    medicinalUses: "Pain reliever for headaches, stomach ache, and rheumatism.",
    preparation: "Crush leaves and apply as poultice or brew as tea.",
  },
  {
    id: 8,
    scientificName: "Cassia alata",
    commonNameEn: "Ringworm Bush",
    commonNameFil: "Akapulko",
    family: "Fabaceae",
    isDohApproved: true,
    medicinalUses: "Treatment of fungal infections, ringworm, and skin problems.",
    preparation: "Crush fresh leaves and apply directly to affected area.",
  },
  {
    id: 9,
    scientificName: "Peperomia pellucida",
    commonNameEn: "Pepper Elder",
    commonNameFil: "Ulasimang Bato",
    family: "Piperaceae",
    isDohApproved: true,
    medicinalUses: "Treatment of gout, arthritis, and high uric acid levels.",
    preparation: "Boil whole plant and drink as tea 2-3 times daily.",
  },
  {
    id: 10,
    scientificName: "Quisqualis indica",
    commonNameEn: "Rangoon Creeper",
    commonNameFil: "Niyog-niyogan",
    family: "Combretaceae",
    isDohApproved: true,
    medicinalUses: "Antihelmintic properties for intestinal worms in children.",
    preparation: "Dried seeds can be roasted and eaten or boiled as tea.",
    safetyWarnings: "Consult pediatrician for proper dosage for children.",
  },
  {
    id: 11,
    scientificName: "Ehretia microphylla",
    commonNameEn: "Philippine Tea Tree",
    commonNameFil: "Tsaang Gubat",
    family: "Boraginaceae",
    isDohApproved: true,
    medicinalUses: "Treatment of stomach ache, diarrhea, and intestinal disorders.",
    preparation: "Boil leaves in water and drink as tea after meals.",
  },
  {
    id: 12,
    scientificName: "Coleus blumei",
    commonNameEn: "Painted Nettle",
    commonNameFil: "Mayana",
    family: "Lamiaceae",
    isDohApproved: false,
    medicinalUses: "Treatment of wounds, cuts, and bruises. Anti-inflammatory properties.",
    preparation: "Crush fresh leaves and apply as poultice to wounds.",
  }
];
