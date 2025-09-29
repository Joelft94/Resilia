import { useLandingPageController } from '../../hooks/useLandingController';

export const FooterSection = () => {
  const { config } = useLandingPageController();

  if (!config?.footer) return null;

  const {
    companyName,
    logoUrl,
    copyright,
    fdaDisclaimer,
    medicalDisclaimer
  } = config.footer;

  return (
    <footer className="py-12 px-4 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        {/* Company Logo and Name */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">😊</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">{companyName}</h3>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            {copyright}
          </p>
        </div>

        {/* FDA Disclaimer */}
        <div className="space-y-4 text-xs text-gray-600 leading-relaxed">
          <p>
            <span className="font-medium">*</span>{fdaDisclaimer}
          </p>

          <p>
            {medicalDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};