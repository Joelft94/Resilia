import React from 'react';
import { useLandingPageController } from '../../hooks/useLandingController';

export function OneIngredientSection() {
    const { config } = useLandingPageController();

    if (!config?.oneIngredient) return null;

    return (
        <section
            className="py-16"
            style={{ backgroundColor: config.oneIngredient.backgroundColor || '#f8f9fa' }}
        >
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column - Text Content */}
                        <div>
                            {/* Title */}
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                {config.oneIngredient.title}
                            </h2>

                            {/* Description */}
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                {config.oneIngredient.description}
                            </p>

                            {/* Subtitle */}
                            <p className="text-lg font-semibold text-gray-900 mb-8">
                                {config.oneIngredient.subtitle}
                            </p>

                            {/* Vitamins */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {config.oneIngredient.vitamins.title}
                                </h3>
                                <div className="space-y-3">
                                    {config.oneIngredient.vitamins.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Minerals */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {config.oneIngredient.minerals.title}
                                </h3>
                                <div className="space-y-3">
                                    {config.oneIngredient.minerals.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Antioxidants */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {config.oneIngredient.antioxidants.title}
                                </h3>
                                <div className="space-y-3">
                                    {config.oneIngredient.antioxidants.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Nutritional Benefits Image */}
                        <div className="flex items-center justify-center">
                            <img
                                src={config.oneIngredient.centerImage.url}
                                alt={config.oneIngredient.centerImage.alt}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}