import React from 'react';
import { X } from 'lucide-react';
import { useModal } from './ModalContext';

const DownloadModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const handleAppStoreClick = () => {
    window.open(
      "https://apps.apple.com/us/app/sellwase/id6477298187",
      "_blank"
    );
  };

  // Function to handle redirection to the Google Play Store
  const handlePlayStoreClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.app.sellwase",
      "_blank"
    );
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
        {/* Close Button */}
        <button className="absolute top-3 right-3" onClick={closeModal} aria-label="Close">
          <X className="w-5 h-5 text-gray-600 hover:text-gray-800" />
        </button>

        <h2 className="text-xl font-bold mb-6 text-center">Download App</h2>
        <div className="flex flex-col gap-4">
        <button
                onClick={handlePlayStoreClick}
                className="bg-[#1877F2] text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#1877F2]/90 shadow-lg"
              >
                <img
                  src="/src/assets/google-play.svg"
                  alt="Get Sellwase on Google Play"
                  className="w-6 h-6"
                />
                Get it on Google Play
              </button>

              {/* App Store Button */}
              <button
                onClick={handleAppStoreClick}
                className="bg-white text-black px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:bg-gray-100 border border-gray-200 transition-all duration-300"
              >
                <img
                  src="/src/assets/apple.svg"
                  alt="Download Sellwase on App Store"
                  className="w-6 h-6"
                />
                Download on App Store
              </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
