import { useLandingPageController } from '../../hooks/useLandingController';

const MoringaPromiseSection = () => {
  const { config } = useLandingPageController();

  if (!config?.moringaPromise) return null;

  const { title, promises, backgroundColor } = config.moringaPromise;

  return (
    <section
      className="py-16 px-4"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {promises.map((promise, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4 flex items-center justify-center">
                <img
                  src={promise.icon}
                  alt={promise.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 leading-tight">
                {promise.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoringaPromiseSection;