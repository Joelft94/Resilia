import React from 'react';
import { useLandingPageController } from '../../hooks/useLandingController';

export function CustomerSurveySection() {
    const { config } = useLandingPageController();

    if (!config?.customerSurvey) return null;

    return (
        <section
            className="py-16"
            style={{ backgroundColor: config.customerSurvey.backgroundColor || '#ffffff' }}
        >
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Title */}
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        {config.customerSurvey.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-700 mb-12">
                        {config.customerSurvey.subtitle}
                    </p>

                    {/* Statistics Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {config.customerSurvey.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold text-green-600 mb-4">
                                    {stat.percentage}
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Disclaimer */}
                    <p className="text-sm text-gray-500 max-w-4xl mx-auto">
                        {config.customerSurvey.disclaimer}
                    </p>
                </div>
            </div>
        </section>
    );
}