export const siteConfig = {
  name: "VAESocial",
  title: "VAESocial — Accompagnement VAE dans le secteur social et médico-social",
  description:
    "VAESocial accompagne les professionnels du secteur social et médico-social dans l'obtention de leur diplôme par la Validation des Acquis de l'Expérience (DEES, DEAES, DEEJE, DEME...).",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.vaesocial.fr",
  phone: "+33 0000000000",
  email: "arthurpro@avenir-professionnel.fr",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  googleAdsConversionId: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID,
} as const;
