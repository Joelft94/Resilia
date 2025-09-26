export interface RosabellaMoringaConfig {
  configName: string;
  storeId: string;
  accountId: string;
  branding: {
    companyName: string;
    logoUrl: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    selectionColor: string;
  };
  product: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    carouselImages: string[];
    price: number;
    originalPrice: number;
    savings: number;
    savingsPercent: number;
    benefits: string[];
    nutritionFacts: {
      totalNutrients: string;
      vitamins: Array<{
        name: string;
        description: string;
        types?: string[];
      }>;
      minerals: Array<{
        name: string;
        description: string;
      }>;
      antioxidants: Array<{
        name: string;
        description: string;
      }>;
    };
    uniqueSellingPoints: string[];
  };
  customerSurvey: {
    title: string;
    subtitle: string;
    results: Array<{
      percentage: number;
      description: string;
      icon: string;
    }>;
  };
  testimonials: {
    title: string;
    overallRating: number;
    totalReviews: number;
    reviews: Array<{
      id: number;
      name: string;
      rating: number;
      comment: string;
      verified: boolean;
      avatar: string;
      location: string;
    }>;
  };
  guarantee: {
    days: number;
    title: string;
    description: string;
    features: string[];
  };
  bonus: {
    title: string;
    productName: string;
    value: number;
    description: string;
    image: string;
  };
  faq: {
    title: string;
    questions: Array<{
      id: number;
      question: string;
      answer: string;
    }>;
  };
  features: {
    enableTestimonials: boolean;
    enableFAQ: boolean;
    enableCustomerSurvey: boolean;
    enableGuarantee: boolean;
    enableBonus: boolean;
    enableNutritionFacts: boolean;
  };
  contact: {
    email: string;
    phone: string;
    hours: string;
  };
  footer: {
    logoUrl: string;
    links: Array<{
      label: string;
      url: string;
    }>;
    copyright: string;
  };
  variants: {
    single: string;
  };
  prices: {
    [variantId: string]: {
      oneTime: string;
      recurring: string;
    };
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  defaultCurrency: string;
}

export const applyThemeColors = (config: RosabellaMoringaConfig | undefined) => {
  if (!config?.branding) return;

  const root = document.documentElement;
  root.style.setProperty('--color-primary', config.branding.primaryColor);
  root.style.setProperty('--color-secondary', config.branding.secondaryColor);
  root.style.setProperty('--color-accent', config.branding.accentColor);
  root.style.setProperty('--color-selection', config.branding.selectionColor);
};

export const isFeatureEnabled = (
  config: RosabellaMoringaConfig | undefined,
  feature: keyof RosabellaMoringaConfig['features']
): boolean => {
  return config?.features?.[feature] ?? false;
};

export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};