import React from 'react';
import { useLandingPageController } from '../../hooks/useLandingController';

export function GuaranteeSection() {
    const { config } = useLandingPageController();

    if (!config?.guarantee) return null;

    return (
        <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3 mt-6">
            {/* Guarantee Badge/Icon */}
            <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <div className="text-white text-lg">✓</div>
                </div>
            </div>

            {/* Guarantee Content */}
            <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {config.guarantee.title || 'Feel better or it\'s free!'}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                    {config.guarantee.description}
                </p>
            </div>
        </div>
    );
}