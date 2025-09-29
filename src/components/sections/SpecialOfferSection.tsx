import { useLandingPageController } from '../../hooks/useLandingController';

const SpecialOfferSection = () => {
  const { config } = useLandingPageController();

  if (!config?.specialOffer) return null;

  const {
    title,
    subtitle,
    riskFreeText,
    offerImage,
    benefitsTitle,
    benefits,
    price,
    cta,
    paymentMethods,
    securityMessage,
    availabilityNote,
    backgroundColor
  } = config.specialOffer;

  // Function to highlight Risk-Free text
  const renderSubtitle = (text: string, highlightText: string) => {
    const parts = text.split(highlightText);
    return (
      <>
        {parts[0]}
        <span className="underline font-bold">{highlightText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section
      className="py-16 px-4"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column - Offer Image */}
          <div className="text-center lg:text-left">
            <img
              src={offerImage}
              alt="Special Offer"
              className="w-full max-w-md mx-auto lg:mx-0 object-contain"
            />
          </div>

          {/* Right Column - All Content */}
          <div>
            {/* Title and Subtitle */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-left">
                {title}
              </h2>
              <p className="text-lg text-gray-700 text-left">
                {renderSubtitle(subtitle, riskFreeText)}
              </p>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">
              {benefitsTitle}
            </h3>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="text-left mb-8">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900">
                {price}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-left mb-8">
              <button
                className="w-full lg:w-auto px-12 py-4 rounded-full text-lg font-semibold transition-colors hover:opacity-90"
                style={{
                  backgroundColor: '#2d6a4f',
                  color: '#ffffff'
                }}
              >
                {cta.text}
              </button>
            </div>

            {/* Payment Methods */}
            <div className="text-left">
              <div className="mb-4">
                <img
                  src="/icons/credit-card.webp"
                  alt="Accepted Payment Methods"
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Security Message */}
              <div className="flex items-center justify-start gap-2 text-sm text-gray-600 mb-2">
                <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                {securityMessage}
              </div>

              {/* Availability Note */}
              <p className="text-sm text-gray-500 text-left italic">
                Note: {availabilityNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;