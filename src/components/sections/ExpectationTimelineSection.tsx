import { useLandingPageController } from '../../hooks/useLandingController';

const ExpectationTimelineSection = () => {
  const { config } = useLandingPageController();

  if (!config?.expectationTimeline) return null;

  const { title, milestones, cta, guarantee, backgroundColor } = config.expectationTimeline;

  return (
    <section
      className="py-16 px-4"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
          {title}
        </h2>

        <div className="relative">
          {/* Vertical Dotted Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-full border-l-2 border-dotted border-gray-400"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-center">
                {/* Timeline Node with thick dark border */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 border-[10px] border-green-800 rounded-full z-10"></div>

                {/* Content positioned based on side */}
                {milestone.side === 'left' ? (
                  <>
                    {/* Left side content */}
                    <div className="w-1/2 pr-16 text-right">
                      <div className="bg-white border-2 border-green-700 rounded-lg p-6 shadow-sm">
                        <p className="text-gray-700 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    {/* Right side timeframe */}
                    <div className="w-1/2 pl-16">
                      <div className="flex items-center text-green-700 font-bold text-4xl">
                        <img
                          src={milestone.icon}
                          alt="Calendar icon"
                          className="mr-4 w-8 h-8"
                        />
                        {milestone.timeframe}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left side timeframe */}
                    <div className="w-1/2 pr-16 text-right">
                      <div className="flex items-center justify-start text-green-700 font-bold text-4xl">
                        <img
                          src={milestone.icon}
                          alt="Calendar icon"
                          className="mr-4 w-8 h-8"
                        />
                        {milestone.timeframe}
                      </div>
                    </div>
                    {/* Right side content */}
                    <div className="w-1/2 pl-16">
                      <div className="bg-white border-2 border-green-700 rounded-lg p-6 shadow-sm">
                        <p className="text-gray-700 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button and Guarantee */}
        <div className="text-center mt-16">
          <button
            className="px-12 py-4 rounded-full text-lg font-semibold transition-colors hover:opacity-90 mb-4"
            style={{
              backgroundColor: '#2d6a4f',
              color: '#ffffff'
            }}
          >
            {cta.text}
          </button>

          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">✓</span>
            {guarantee}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpectationTimelineSection;