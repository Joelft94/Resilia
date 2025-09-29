import React from 'react';
import { useLandingPageController } from '../../hooks/useLandingController';

export function NutrientDensePlantSection() {
    const { config } = useLandingPageController();

    if (!config?.nutrientDensePlant) return null;

    return (
        <section
            className="py-16"
            style={{ backgroundColor: config.nutrientDensePlant.backgroundColor || '#f9fafb' }}
        >
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Media */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <img
                                src={config.nutrientDensePlant.mediaUrl}
                                alt={config.nutrientDensePlant.mediaAlt}
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            {config.nutrientDensePlant.title}
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            {config.nutrientDensePlant.subtitle}
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            {config.nutrientDensePlant.description}
                        </p>

                        {/* Benefits Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {config.nutrientDensePlant.benefitsTitle}
                            </h3>
                            <div className="space-y-3">
                                {config.nutrientDensePlant.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-lg text-gray-900 font-medium leading-relaxed">
                            {config.nutrientDensePlant.conclusion}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}