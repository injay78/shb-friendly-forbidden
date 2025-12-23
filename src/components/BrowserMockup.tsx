import { X } from "lucide-react";

const BrowserMockup = () => {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl border border-border">
      {/* Browser Chrome */}
      <div className="bg-browser-bg px-4 py-3 flex items-center gap-3">
        {/* Traffic lights */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-browser-dot-red" />
          <div className="w-3 h-3 rounded-full bg-browser-dot-yellow" />
          <div className="w-3 h-3 rounded-full bg-browser-dot-green" />
        </div>
        {/* URL Bar */}
        <div className="flex-1 bg-browser-bar rounded h-6" />
      </div>
      
      {/* Browser Content */}
      <div className="bg-card aspect-[16/10] flex items-center justify-center">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-error-icon flex items-center justify-center shadow-lg">
          <X className="w-16 h-16 md:w-20 md:h-20 text-destructive-foreground stroke-[3]" />
        </div>
      </div>
    </div>
  );
};

export default BrowserMockup;
