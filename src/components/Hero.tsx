export default function Hero() {
  // Function to handle redirection to the App Store
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

  return (
    <div className="min-h-screen pt-60 bg-gradient-to-b from-[#1877F2]/10 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ lineHeight: "1.2" }}
            >
              <span className="text-[#1877F2]">#1 University Marketplace</span>{" "}
              & Student Carpooling App
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of students buying, selling, and sharing rides on
              campus. The ultimate marketplace and carpooling app for university
              life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Button for Google Play Store */}
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
            {/* SEO-optimized text hidden visually but available to search engines */}
            <div className="sr-only">
              <h2>
                Sellwase - The Ultimate University Marketplace and Carpooling
                Platform
              </h2>
              <p>
                Find campus rides, buy and sell textbooks, connect with your
                university community. Available for all college students.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="Students using Sellwase app for campus marketplace and carpooling"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
