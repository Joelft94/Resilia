import React from 'react';
import { useLandingPageController } from '../hooks/useLandingController';

// Import new section components
import { AnnouncementBar } from './sections/AnnouncementBar';
import { HeroSection } from './sections/HeroSection';
import { NutritionProblemsSection } from './sections/NutritionProblemsSection';
import { NutrientDensePlantSection } from './sections/NutrientDensePlantSection';
import { CustomerSurveySection } from './sections/CustomerSurveySection';
import { OneIngredientSection } from './sections/OneIngredientSection';
import VideoTestimonialsSection from './sections/VideoTestimonialsSection';
import MoringaPromiseSection from './sections/MoringaPromiseSection';
import ExpectationTimelineSection from './sections/ExpectationTimelineSection';
import ComparisonSection from './sections/ComparisonSection';
import SpecialOfferSection from './sections/SpecialOfferSection';
import { FAQSection } from './sections/FAQSection';
import { FooterSection } from './sections/FooterSection';

export function RosabellaMoringaLanding() {
    const controller = useLandingPageController();

    if (controller.isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-primary mx-auto mb-4"></div>
                    <p className="text-xl font-medium text-gray-700">Loading your Moringa experience...</p>
                    <p className="text-gray-500 mt-2">Preparing nature's most powerful superfood</p>
                </div>
            </div>
        );
    }

    if (!controller.config || !controller.product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100">
                <div className="text-center max-w-md mx-auto p-6">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Configuration Error</h1>
                    <p className="text-gray-600 mb-6">
                        Unable to load plugin configuration or product data. Please check:
                    </p>
                    <ul className="text-left text-sm text-gray-500 space-y-2 mb-6">
                        <li>• Your config/default.tgd.json file exists</li>
                        <li>• Product ID in config matches store product</li>
                        <li>• Store credentials are valid</li>
                        <li>• Network connection is stable</li>
                    </ul>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h3 className="font-semibold text-yellow-800 mb-2">Debug Information:</h3>
                        <p className="text-sm text-yellow-700">
                            Config loaded: {controller.config ? '✅' : '❌'}<br />
                            Product loaded: {controller.product ? '✅' : '❌'}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Top Announcement Bar */}
            <AnnouncementBar />

            {/* Hero Section with Two-Column Layout including guarantee and FAQ */}
            <HeroSection />

            {/* Modern Nutrition Problems Section */}
            <NutritionProblemsSection />

            {/* Nutrient-Dense Plant Section */}
            <NutrientDensePlantSection />

            {/* Customer Survey Results Section */}
            <CustomerSurveySection />

            {/* One Ingredient Section */}
            <OneIngredientSection />

            {/* Video Testimonials Section */}
            <VideoTestimonialsSection />

            {/* Moringa Promise Section */}
            <MoringaPromiseSection />

            {/* Separator Line */}
            <div className="border-b border-gray-200"></div>

            {/* Expectation Timeline Section */}
            <ExpectationTimelineSection />

            {/* Comparison Section */}
            <ComparisonSection />

            {/* Special Offer Section */}
            <SpecialOfferSection />

            {/* FAQ Section */}
            <FAQSection />

            {/* Footer Section */}
            <FooterSection />
        </div>
    );
}