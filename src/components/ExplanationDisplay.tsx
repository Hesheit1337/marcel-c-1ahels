import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, BookOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface ExplanationDisplayProps {
  title: string;
  icon: string;
  content: string;
  codeExample?: string;
  onBack: () => void;
}

export const ExplanationDisplay = ({
  title,
  icon,
  content,
  codeExample,
  onBack,
}: ExplanationDisplayProps) => {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <Card className="p-8 md:p-10 bg-gradient-to-br from-card via-card to-card/80 shadow-2xl border-2 border-border/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8 animate-slide-up">
            <div className="text-6xl animate-float">{icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-6 h-6 text-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                  Erklärung
                </span>
              </div>
              <h2 className="text-4xl font-bold text-card-foreground bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                {title}
              </h2>
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none mb-8 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-foreground mb-4 mt-6">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold text-foreground mb-3 mt-5">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="ml-4">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="text-foreground font-semibold">{children}</strong>
                ),
                code: ({ className, children }) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="bg-code-bg px-2 py-1 rounded text-sm font-mono text-primary">
                        {children}
                      </code>
                    );
                  }
                  const language = className?.replace('language-', '') || 'c';
                  return (
                    <SyntaxHighlighter
                      language={language}
                      style={vscDarkPlus}
                      customStyle={{
                        margin: "1rem 0",
                        borderRadius: "0.75rem",
                        fontSize: "0.9rem",
                        padding: "1rem",
                      }}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  );
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          {codeExample && (
            <div 
              className="mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">💻</span>
                Vollständiges Beispiel
              </h3>
              <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-border/30">
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
                  {codeExample}
                </SyntaxHighlighter>
              </div>
            </div>
          )}

          <Button 
            onClick={onBack} 
            className="mt-4 gap-2 transition-all duration-300 hover:scale-105 shadow-lg animate-slide-up" 
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
