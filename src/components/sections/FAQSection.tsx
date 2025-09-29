import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLandingPageController } from '../../hooks/useLandingController';

interface FAQSectionProps {
  showCTA?: boolean;
  showTitle?: boolean;
  className?: string;
}

export const FAQSection = ({ showCTA = true, showTitle = true, className = "" }: FAQSectionProps) => {
  const { config } = useLandingPageController();
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  if (!config?.faq?.questions) return null;

  const toggleQuestion = (questionId: number) => {
    setOpenQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const sectionClasses = showTitle ? "py-16 px-4 bg-gray-50" : className;
  const containerClasses = showTitle ? "max-w-4xl mx-auto" : "";

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        {showTitle && (
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
        )}

        <div className="space-y-4">
          {config.faq.questions.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleQuestion(faq.id)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openQuestions.includes(faq.id) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {openQuestions.includes(faq.id) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA - only show if showCTA is true */}
        {showCTA && (
          <div className="text-center mt-12">
            <button
              className="px-12 py-4 rounded-full text-lg font-semibold transition-colors hover:opacity-90 mb-4"
              style={{
                backgroundColor: '#2d6a4f',
                color: '#ffffff'
              }}
            >
              BUY NOW & SAVE
            </button>

            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              <span className="w-4 h-4 flex items-center justify-center">🛡️</span>
              90-Day Money Back Guarantee
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

