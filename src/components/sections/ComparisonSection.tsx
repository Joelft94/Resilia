import { useLandingPageController } from '../../hooks/useLandingController';

const ComparisonSection = () => {
  const { config } = useLandingPageController();

  if (!config?.comparisonSection) return null;

  const {
    title,
    rosabellaProduct,
    genericProduct,
    comparisonItems,
    cta,
    guarantee,
    backgroundColor
  } = config.comparisonSection;

  return (
    <section
      className="py-16 px-4"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>

        {/* Products Layout */}
        <div className="relative max-w-5xl mx-auto mb-8">
          <div className="grid grid-cols-3 gap-4 items-end">
            {/* Rosabella Product */}
            <div className="text-center">
              <img
                src={rosabellaProduct.image}
                alt={rosabellaProduct.name}
                className="w-40 h-40 mx-auto mb-4 object-contain"
              />
              <h3 className="text-2xl font-bold" style={{ color: '#2d6a4f' }}>
                {rosabellaProduct.name}
              </h3>
            </div>

            {/* VS Badge */}
            <div className="text-center">
              <div className="w-20 h-20 bg-white border-4 border-gray-800 rounded-full flex items-center justify-center text-2xl font-bold text-gray-800 mx-auto shadow-lg">
                VS
              </div>
            </div>

            {/* Generic Product */}
            <div className="text-center">
              <img
                src={genericProduct.image}
                alt={genericProduct.name}
                className="w-40 h-40 mx-auto mb-4 object-contain"
              />
              <h3 className="text-2xl font-bold" style={{ color: '#2d6a4f' }}>
                {genericProduct.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="relative bg-white rounded-xl border-2 overflow-hidden shadow-md max-w-4xl mx-auto" style={{ borderColor: '#2d6a4f' }}>
          {/* Table Header Row */}
          <div className="grid grid-cols-3 gap-0">
            {/* Empty left column */}
            <div className="p-4 bg-gray-50"></div>

            {/* Center Header */}
            <div className="p-6 text-white text-center" style={{ backgroundColor: '#2d6a4f' }}>
              <span className="text-lg font-bold">Pound for pound which has more</span>
            </div>

            {/* Empty right column */}
            <div className="p-4 bg-gray-50"></div>
          </div>

          {/* Comparison Rows - Skip header row */}
          {comparisonItems.filter(item => !item.isHeader).map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-0 border-t border-white">
              {/* Left column - Rosabella */}
              <div className="p-3 bg-gray-50 border-r border-gray-300 flex items-center justify-center">
                {item.rosabellaHas ? (
                  <img
                    src="/icons/checkicon.svg"
                    alt="Check"
                    className="w-8 h-8"
                  />
                ) : (
                  <img
                    src="/icons/crossicon.svg"
                    alt="Cross"
                    className="w-8 h-8"
                  />
                )}
              </div>

              {/* Center column - Feature */}
              <div className="p-4 text-white text-center flex items-center justify-center" style={{ backgroundColor: '#2d6a4f' }}>
                <span className="font-semibold text-sm">
                  {item.feature}
                </span>
              </div>

              {/* Right column - Generic */}
              <div className="p-3 bg-gray-50 border-l border-gray-300 flex items-center justify-center">
                {item.genericHas ? (
                  <img
                    src="/icons/checkicon.svg"
                    alt="Check"
                    className="w-8 h-8"
                  />
                ) : (
                  <img
                    src="/icons/crossicon.svg"
                    alt="Cross"
                    className="w-8 h-8"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button and Guarantee */}
        <div className="text-center mt-12">
          <button
            className="px-12 py-4 rounded-full text-lg font-semibold transition-colors hover:opacity-90 mb-4"
            style={{
              backgroundColor: cta.buttonColor,
              color: cta.textColor
            }}
          >
            {cta.text}
          </button>

          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">🛡️</span>
            {guarantee}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;