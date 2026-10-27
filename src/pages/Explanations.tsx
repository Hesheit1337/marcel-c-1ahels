import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ExplanationCard } from "@/components/ExplanationCard";
import { ExplanationDisplay } from "@/components/ExplanationDisplay";
import { KlassenAuswahl, Klasse } from "@/components/KlassenAuswahl";
import { Input } from "@/components/ui/input";
import { explanations, Explanation } from "@/data/explanations";
import { BookOpen, Search } from "lucide-react";

const Explanations = () => {
  const [selectedExplanation, setSelectedExplanation] = useState<Explanation | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [suche, setSuche] = useState("");

  const klasse: Klasse = searchParams.get("klasse") === "2" ? 2 : 1;
  const suchbegriff = suche.trim().toLowerCase();
  const sichtbareErklaerungen = explanations.filter(
    (e) => e.klasse === klasse && e.title.toLowerCase().includes(suchbegriff)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12 px-4">
      {!selectedExplanation ? (
        <>
          <div className="text-center mb-10 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-10 h-10 text-accent" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Erklärungen
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">Hoffentlich verständlich erklärt</p>
          </div>

          <KlassenAuswahl
            value={klasse}
            onChange={(k) => {
              setSearchParams({ klasse: String(k) });
              setSuche("");
            }}
          />

          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={suche}
              onChange={(e) => setSuche(e.target.value)}
              placeholder="Erklärung suchen..."
              className="pl-10"
            />
          </div>

          {sichtbareErklaerungen.length === 0 && (
            <p className="text-center text-muted-foreground">
              {suchbegriff
                ? "Nichts gefunden – probier einen anderen Suchbegriff. 🔍"
                : `Für die ${klasse}. Klasse gibt es noch keine Erklärungen – bald mehr! 🚧`}
            </p>
          )}

          <div className="container mx-auto max-w-4xl space-y-4">
            {sichtbareErklaerungen.map((explanation, index) => (
              <ExplanationCard
                key={explanation.id}
                icon={explanation.icon}
                title={explanation.title}
                onClick={() => setSelectedExplanation(explanation)}
                index={index}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="container mx-auto">
          <ExplanationDisplay
            title={selectedExplanation.title}
            icon={selectedExplanation.icon}
            content={selectedExplanation.content}
            codeExample={selectedExplanation.codeExample}
            onBack={() => setSelectedExplanation(null)}
          />
        </div>
      )}
    </div>
  );
};

export default Explanations;
