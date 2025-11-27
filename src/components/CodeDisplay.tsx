import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, Lightbulb, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface CodeDisplayProps {
  title: string;
  icon: string;
  description: string;
  tip: string;
  code: string;
  onBack: () => void;
}

export const CodeDisplay = ({
  title,
  icon,
  description,
  tip,
  code,
  onBack,
}: CodeDisplayProps) => {
  const [showTip, setShowTip] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code kopiert!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <Card className="p-8 md:p-10 bg-gradient-to-br from-card via-card to-card/80 shadow-2xl border-2 border-border/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-0" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6 animate-slide-up">
            <div className="text-6xl animate-float">{icon}</div>
            <div>
              <h2 className="text-4xl font-bold text-card-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {title}
              </h2>
              <p className="text-muted-foreground mt-1">{description}</p>
            </div>
          </div>

          <div className="flex gap-3 mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowTip(!showTip)}
              className="gap-2 transition-all duration-300 hover:scale-105"
            >
              <Lightbulb className={cn("w-4 h-4", showTip && "text-accent")} />
              {showTip ? "Tipp ausblenden" : "💡 Tipp anzeigen"}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="gap-2 transition-all duration-300 hover:scale-105"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  Kopiert!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Code kopieren
                </>
              )}
            </Button>
          </div>

          {showTip && (
            <div 
              className="mb-6 p-5 bg-gradient-to-r from-tip-bg to-tip-bg/50 border-l-4 border-tip-border rounded-lg shadow-md animate-slide-up backdrop-blur-sm"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent animate-pulse" />
                <p className="text-sm font-medium">{tip}</p>
              </div>
            </div>
          )}

          <div 
            className="rounded-xl overflow-hidden shadow-2xl border-2 border-border/30 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <SyntaxHighlighter
              language="c"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: "0.75rem",
                fontSize: "0.95rem",
                padding: "1.5rem",
              }}
              showLineNumbers
            >
              {code}
            </SyntaxHighlighter>
          </div>

          <Button 
            onClick={onBack} 
            className="mt-8 gap-2 transition-all duration-300 hover:scale-105 shadow-lg animate-slide-up" 
            size="lg"
            style={{ animationDelay: "0.25s" }}
          >
            <ChevronLeft className="w-5 h-5" />
            Zurück zur Übersicht
          </Button>
        </div>
      </Card>
    </div>
  );
};

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};
