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
  announcementBar?: {
    enabled: boolean;
    backgroundColor: string;
    textColor: string;
    messages: string[];
    rotationInterval: number;
  };
  product: {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    detailedDescription: string;
    carouselImages: string[];
    price: number;
    originalPrice: number;
    currency: string;
    benefits: string[];
  };
  reviews?: {
    platform: string;
    averageRating: number;
    totalReviews: number;
    verified: boolean;
    date: string;
  };
  shipping?: {
    provider: string;
    estimatedDate: string;
    deliveryTime: string;
    inStock: boolean;
    stockMessage: string;
  };
  paymentMethods?: Array<{
    name: string;
    icon: string;
    alt: string;
  }>;
  cta?: {
    primaryButton: string;
    primaryButtonColor: string;
    primaryButtonTextColor: string;
  };
  guarantee?: {
    title: string;
    description: string;
  };
  testimonial?: {
    rating: number;
    quote: string;
    customerName: string;
    customerLocation: string;
    customerImage: string;
    verified: boolean;
  };
  nutritionProblems?: {
    title: string;
    content: string[];
    mediaUrl: string;
    mediaAlt: string;
    backgroundColor?: string;
  };
  nutrientDensePlant?: {
    title: string;
    subtitle: string;
    description: string;
    benefitsTitle: string;
    benefits: string[];
    conclusion: string;
    mediaUrl: string;
    mediaAlt: string;
    backgroundColor?: string;
  };
  customerSurvey?: {
    title: string;
    subtitle: string;
    stats: Array<{
      percentage: string;
      description: string;
    }>;
    disclaimer: string;
    backgroundColor?: string;
  };
  oneIngredient?: {
    title: string;
    description: string;
    subtitle: string;
    vitamins: {
      title: string;
      benefits: string[];
    };
    minerals: {
      title: string;
      benefits: string[];
    };
    antioxidants: {
      title: string;
      benefits: string[];
    };
    centerImage: {
      url: string;
      alt: string;
    };
    backgroundColor?: string;
  };
  videoTestimonials?: {
    title: string;
    videos: Array<{
      src: string;
      poster: string;
      alt: string;
    }>;
    cta: {
      text: string;
      buttonColor: string;
      textColor: string;
    };
    guarantee: string;
    backgroundColor?: string;
  };
  moringaPromise?: {
    title: string;
    promises: Array<{
      icon: string;
      title: string;
      alt: string;
    }>;
    backgroundColor?: string;
  };
  expectationTimeline?: {
    title: string;
    milestones: Array<{
      timeframe: string;
      icon: string;
      description: string;
      side: 'left' | 'right';
    }>;
    cta: {
      text: string;
      buttonColor: string;
      textColor: string;
    };
    guarantee: string;
    backgroundColor?: string;
  };
  faq?: {
    questions: Array<{
      id: number;
      question: string;
      answer: string;
    }>;
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
  feature: string
): boolean => {
  return config?.features?.[feature] ?? false;
};

export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};