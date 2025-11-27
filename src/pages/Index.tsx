import { useState } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { CodeDisplay } from "@/components/CodeDisplay";
import { codeExamples, CodeExample } from "@/data/examples";
import { Code2 } from "lucide-react";

const Index = () => {
  const [selectedExample, setSelectedExample] = useState<CodeExample | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3">
            <Code2 className="w-10 h-10" />
            <h1 className="text-4xl font-bold">C-Programme Lernplattform</h1>
          </div>
          <p className="text-center mt-2 text-primary-foreground/90">
            Lerne C-Programmierung mit praktischen Beispielen
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {!selectedExample ? (
          <>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Wähle ein Beispiel
              </h2>
              <p className="text-muted-foreground">
                Klicke auf eine Karte, um den Code zu sehen
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {codeExamples.map((example) => (
                <ExampleCard
                  key={example.id}
                  icon={example.icon}
                  title={example.title}
                  onClick={() => setSelectedExample(example)}
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

      <footer className="bg-secondary/30 py-6 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Um neue Beispiele hinzuzufügen, bearbeite die Datei{" "}
            <code className="bg-code-bg px-2 py-1 rounded text-xs">
              src/data/examples.ts
            </code>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
