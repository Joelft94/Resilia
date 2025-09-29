import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLandingPageController } from '../../hooks/useLandingController';

export function FAQSection() {
    const { config } = useLandingPageController();
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    if (!config?.faq?.questions) return null;

    const toggleQuestion = (index: number) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div className="mt-6">
            {/* FAQ Items */}
            <div className="space-y-3">
                {config.faq.questions.map((faq, index) => (
                    <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleQuestion(index)}
                            className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                            <h3 className="text-sm font-medium text-gray-900 pr-3">
                                {faq.question}
                            </h3>
                            <div className="flex-shrink-0">
                                {openQuestion === index ? (
                                    <ChevronUp className="w-4 h-4 text-gray-500" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-gray-500" />
                                )}
                            </div>
                        </button>

                        {openQuestion === index && (
                            <div className="px-4 pb-3">
                                <div className="pt-2 border-t border-gray-100">
                                    {/* Check if answer contains bullet points or detailed content */}
                                    {faq.answer.includes('•') || faq.answer.includes('\n') ? (
                                        <div className="space-y-3">
                                            {faq.answer.split('\n').map((paragraph, pIndex) => {
                                                if (paragraph.trim().startsWith('•')) {
                                                    // Handle bullet points
                                                    return (
                                                        <div key={pIndex} className="space-y-2">
                                                            {paragraph.split('•').filter(item => item.trim()).map((item, iIndex) => (
                                                                <div key={iIndex} className="flex items-start gap-2">
                                                                    <span className="text-blue-500 text-xs mt-1">💧</span>
                                                                    <div>
                                                                        <h4 className="font-semibold text-gray-900 mb-1 text-xs">
                                                                            {item.split(':')[0]}
                                                                        </h4>
                                                                        <p className="text-gray-600 text-xs leading-relaxed">
                                                                            {item.split(':').slice(1).join(':').trim()}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    );
                                                } else if (paragraph.trim()) {
                                                    return (
                                                        <p key={pIndex} className="text-gray-700 text-xs leading-relaxed">
                                                            {paragraph.trim()}
                                                        </p>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                    ) : (
                                        <p className="text-gray-700 text-xs leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}