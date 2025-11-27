import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, Lightbulb } from "lucide-react";

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

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <Card className="p-8 bg-card shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">{icon}</span>
          <h2 className="text-3xl font-bold text-card-foreground">{title}</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">{description}</p>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowTip(!showTip)}
          className="mb-4 gap-2"
        >
          <Lightbulb className="w-4 h-4" />
          {showTip ? "Tipp ausblenden" : "Tipp anzeigen"}
        </Button>

        {showTip && (
          <div className="mb-6 p-4 bg-tip-bg border-l-4 border-tip-border rounded-md animate-fade-in">
            <p className="text-sm flex items-start gap-2">
              <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{tip}</span>
            </p>
          </div>
        )}

        <div className="rounded-lg overflow-hidden shadow-inner">
          <SyntaxHighlighter
            language="c"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              borderRadius: "0.5rem",
              fontSize: "0.9rem",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>

        <Button onClick={onBack} className="mt-6 gap-2" variant="secondary">
          <ChevronLeft className="w-4 h-4" />
          Zurück zur Übersicht
        </Button>
      </Card>
    </div>
  );
};
