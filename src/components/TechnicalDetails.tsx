import { useState, useEffect } from "react";
import { Eye, EyeOff, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const TechnicalDetails = () => {
  const [showIP, setShowIP] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  
  // Simulated values - in production these would come from headers/server
  const rayId = "94c8a5c3be813c91";
  const userIP = "113.160.224.182";
  const maskedIP = userIP.replace(/\d+\.\d+$/, "***");

  const copyToClipboard = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
    toast({
      title: "Copied to clipboard",
      description: `${label} has been copied.`,
    });
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6 space-y-4">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        Technical Details
      </h3>
      
      <div className="space-y-3">
        {/* Ray ID */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2 border-b border-border">
          <span className="text-sm text-muted-foreground">Ray ID</span>
          <div className="flex items-center gap-2">
            <code className="text-sm font-mono text-foreground bg-muted px-2 py-1 rounded">
              {rayId}
            </code>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => copyToClipboard(rayId, "Ray ID")}
            >
              {copied === "Ray ID" ? (
                <Check className="h-4 w-4 text-shb-orange" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
        </div>
        
        {/* IP Address */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2">
          <span className="text-sm text-muted-foreground">Your IP</span>
          <div className="flex items-center gap-2">
            <code className="text-sm font-mono text-foreground bg-muted px-2 py-1 rounded">
              {showIP ? userIP : maskedIP}
            </code>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setShowIP(!showIP)}
              title={showIP ? "Hide IP" : "Show IP"}
            >
              {showIP ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => copyToClipboard(userIP, "IP Address")}
            >
              {copied === "IP Address" ? (
                <Check className="h-4 w-4 text-shb-orange" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDetails;
