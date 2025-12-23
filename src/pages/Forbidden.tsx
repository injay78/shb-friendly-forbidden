import { Helmet } from "react-helmet-async";
import shbLogo from "@/assets/shb-logo.png";
import BrowserMockup from "@/components/BrowserMockup";
import InfoSection from "@/components/InfoSection";
import TechnicalDetails from "@/components/TechnicalDetails";

const Forbidden = () => {
  return (
    <>
      <Helmet>
        <title>Access Denied - SHB</title>
        <meta name="description" content="Access to this resource has been denied" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-5">
            <img 
              src={shbLogo} 
              alt="SHB Logo" 
              className="h-14 md:h-16 lg:h-20 w-auto"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            {/* Title Section */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Sorry, you have been blocked
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                You are unable to access <span className="font-medium text-shb-navy">shb.com.vn</span>
              </p>
            </div>

            {/* Browser Mockup */}
            <BrowserMockup />

            {/* Info Sections */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <InfoSection
                title="Why have I been blocked?"
                description="This website is using a security service to protect itself from online attacks. The action you just performed triggered the security solution. There are several actions that could trigger this block including submitting a certain word or phrase, a SQL command or malformed data."
              />
              <InfoSection
                title="What can I do to resolve this?"
                description="You can email the site owner to let them know you were blocked. Please include what you were doing when this page came up and the Ray ID found at the bottom of this page."
              />
            </div>

            {/* Technical Details */}
            <TechnicalDetails />
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-card mt-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>© 2024 SHB - Saigon-Hanoi Commercial Joint Stock Bank</p>
              <div className="flex items-center gap-1">
                <span>Performance & security by</span>
                <span className="font-medium text-shb-navy">SHB Security</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Forbidden;
