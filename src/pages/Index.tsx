import { useState } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { CodeDisplay } from "@/components/CodeDisplay";
import { codeExamples, CodeExample } from "@/data/examples";
import { Code2, Sparkles } from "lucide-react";

const Index = () => {
  const [selectedExample, setSelectedExample] = useState<CodeExample | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <header className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground py-12 shadow-2xl overflow-hidden">
        {/* Header decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-4 animate-slide-up">
            <Code2 className="w-12 h-12 animate-float" />
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-2 drop-shadow-lg">
                C-Programme Lernplattform
              </h1>
              <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
                <Sparkles className="w-5 h-5" />
                <p className="text-lg md:text-xl">
                  Lerne C-Programmierung mit praktischen Beispielen
                </p>
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 relative z-10">
        {!selectedExample ? (
          <>
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Wähle ein Beispiel
              </h2>
              <p className="text-lg text-muted-foreground">
                Klicke auf eine Karte, um den vollständigen Code zu sehen
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {codeExamples.map((example, index) => (
                <ExampleCard
                  key={example.id}
                  icon={example.icon}
                  title={example.title}
                  onClick={() => setSelectedExample(example)}
                  index={index}
                />
              ))}
            </div>
          </>
        ) : (
          <CodeDisplay
            title={selectedExample.title}
            icon={selectedExample.icon}
            description={selectedExample.description}
            tip={selectedExample.tip}
            code={selectedExample.code}
            onBack={() => setSelectedExample(null)}
          />
        )}
      </main>

      <footer className="relative bg-gradient-to-r from-secondary/50 via-secondary/30 to-secondary/50 py-8 mt-20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm md:text-base mb-2">
            ✨ Um neue Beispiele hinzuzufügen, bearbeite einfach die Datei
          </p>
          <code className="bg-code-bg px-4 py-2 rounded-lg text-sm font-mono shadow-md inline-block">
            src/data/examples.ts
          </code>
          <p className="text-muted-foreground text-xs mt-4">
            Alles aktualisiert sich automatisch! 🚀
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
