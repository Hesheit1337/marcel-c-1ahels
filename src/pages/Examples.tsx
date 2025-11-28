import { useState, useEffect } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { CodeDisplay } from "@/components/CodeDisplay";
import { codeExamples, CodeExample } from "@/data/examples";
import { Code2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const Examples = () => {
  const [selectedExample, setSelectedExample] = useState<CodeExample | null>(null);
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (id) {
      const found = codeExamples.find((e) => e.id === id);
      if (found) setSelectedExample(found);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12 px-4">
      {!selectedExample ? (
        <>
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code2 className="w-10 h-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Code-Beispiele
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Übungsbeispiele zum Lernen 
            </p>
          </div>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {codeExamples.map((example, index) => (
              <Link key={example.id} to={`/examples/${example.id}`} className="no-underline">
                <ExampleCard
                  icon={example.icon}
                  title={example.title}
                  onClick={() => setSelectedExample(example)}
                  index={index}
                />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="container mx-auto">
          <CodeDisplay
            title={selectedExample.title}
            icon={selectedExample.icon}
            description={selectedExample.description}
            tip={selectedExample.tip}
            code={selectedExample.code}
            onBack={() => setSelectedExample(null)}
          />
        </div>
      )}
    </div>
  );
};

export default Examples;
