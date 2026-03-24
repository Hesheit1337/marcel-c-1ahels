import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ChevronLeft, Lightbulb, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { codeExamples } from "@/data/examples";

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
  const [quizMode, setQuizMode] = useState(false);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [quizFeedback, setQuizFeedback] = useState<string>("");

  const correctAnswer = description;

  const shuffle = (array: string[]) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    if (quizMode) {
      const otherDescriptions = codeExamples
        .filter((example) => example.description !== correctAnswer)
        .map((example) => example.description);

      const selectedFakes = shuffle(otherDescriptions).slice(0, Math.min(3, otherDescriptions.length));
      const allOptions = shuffle([...selectedFakes, correctAnswer]);

      setQuizOptions(allOptions);
      setSelectedQuizOption(null);
      setQuizFeedback("");
    }
  }, [quizMode, correctAnswer]);

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

            <Button
              variant={quizMode ? "secondary" : "outline"}
              size="sm"
              onClick={() => setQuizMode((prev) => !prev)}
              className="gap-2 transition-all duration-300 hover:scale-105"
            >
              {quizMode ? "Quiz-Modus aus" : "Quiz-Modus an"}
            </Button>

            {quizMode && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const otherDescriptions = codeExamples
                    .filter((example) => example.description !== correctAnswer)
                    .map((example) => example.description);
                  const selectedFakes = shuffle(otherDescriptions).slice(0, Math.min(3, otherDescriptions.length));
                  setQuizOptions(shuffle([...selectedFakes, correctAnswer]));
                  setSelectedQuizOption(null);
                  setQuizFeedback("");
                }}
                className="gap-2 transition-all duration-300 hover:scale-105"
              >
                Neu starten
              </Button>
            )}
          </div>

          {/* RunWidget entfernt — Ausführen von Code entfernt auf Wunsch des Users */}
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

          {quizMode && (
            <div className="mb-6 p-5 bg-gradient-to-r from-secondary/10 to-secondary/20 border-l-4 border-secondary rounded-lg shadow-md animate-slide-up">
              <h3 className="text-lg font-semibold mb-3">Quiz: Was macht dieser Code?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {quizOptions.map((option) => {
                  const isSelected = selectedQuizOption === option;
                  const isCorrect = option === correctAnswer;
                  const optionClass = isSelected
                    ? isCorrect
                      ? "bg-green-100 text-green-900"
                      : "bg-red-100 text-red-900"
                    : "bg-background/70 hover:bg-background/90";

                  return (
                    <button
                      key={option}
                      className={`rounded-lg border border-border p-3 text-left transition ${optionClass}`}
                      onClick={() => {
                        if (selectedQuizOption) return;
                        setSelectedQuizOption(option);
                        if (option === correctAnswer) {
                          setQuizFeedback("✅ Richtig! Gut erkannt.");
                        } else {
                          setQuizFeedback("❌ Falsch. Versuch es nochmal oder schau dir den Code erneut an.");
                        }
                      }}
                      disabled={!!selectedQuizOption}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {quizFeedback && (
                <p className="mt-4 text-sm font-medium">{quizFeedback}</p>
              )}
              {selectedQuizOption && selectedQuizOption !== correctAnswer && (
                <p className="mt-2 text-sm text-muted-foreground">
                  Richtige Antwort: {correctAnswer}
                </p>
              )}
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
