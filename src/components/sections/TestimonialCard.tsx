import React from 'react';
import { Star } from 'lucide-react';
import { useLandingPageController } from '../../hooks/useLandingController';

export function TestimonialCard() {
    const { config } = useLandingPageController();

    if (!config?.testimonial) return null;

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
            {/* 5 Star Rating */}
            <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        className={`w-5 h-5 ${
                            index < config.testimonial.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-gray-200 text-gray-200'
                        }`}
                    />
                ))}
            </div>

            {/* Quote */}
            <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{config.testimonial.quote}"
            </blockquote>

            {/* Customer Info */}
            <div className="flex items-center gap-3">
                <img
                    src={config.testimonial.customerImage}
                    alt={`${config.testimonial.customerName} profile`}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                        — {config.testimonial.customerName}, {config.testimonial.customerLocation}
                    </div>
                    {config.testimonial.verified && (
                        <div className="flex items-center gap-1 mt-1">
                            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="text-white text-xs">✓</div>
                            </div>
                            <span className="text-sm text-green-600 font-medium">Verified Customer</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}