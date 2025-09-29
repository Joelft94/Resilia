import React from 'react';
import { useLandingPageController } from '../../hooks/useLandingController';

export function NutritionProblemsSection() {
    const { config } = useLandingPageController();

    if (!config?.nutritionProblems) return null;

    return (
        <section
            className="py-16"
            style={{ backgroundColor: config.nutritionProblems.backgroundColor || '#ffffff' }}
        >
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="order-1">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">
                            {config.nutritionProblems.title}
                        </h2>

                        <div className="space-y-6">
                            {config.nutritionProblems.content.map((paragraph, index) => (
                                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Media */}
                    <div className="order-2">
                        <div className="relative">
                            <img
                                src={config.nutritionProblems.mediaUrl}
                                alt={config.nutritionProblems.mediaAlt}
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}