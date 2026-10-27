import { useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ExampleCard } from "@/components/ExampleCard";
import { CodeDisplay } from "@/components/CodeDisplay";
import { KlassenAuswahl, Klasse } from "@/components/KlassenAuswahl";
import { Input } from "@/components/ui/input";
import { codeExamples } from "@/data/examples";
import { Code2, Search } from "lucide-react";

const Examples = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [suche, setSuche] = useState("");

  // Das ausgewählte Beispiel kommt direkt aus der Adresse (/examples/:id)
  const selectedExample = id ? codeExamples.find((e) => e.id === id) ?? null : null;

  // Die Klasse steht in der Adresse (?klasse=2), so kann man sie auch verlinken
  const klasse: Klasse = selectedExample
    ? selectedExample.klasse
    : searchParams.get("klasse") === "2"
    ? 2
    : 1;

  const suchbegriff = suche.trim().toLowerCase();
  const sichtbareBeispiele = codeExamples.filter(
    (e) =>
      e.klasse === klasse &&
      (e.title.toLowerCase().includes(suchbegriff) ||
        e.description.toLowerCase().includes(suchbegriff))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12 px-4">
      {!selectedExample ? (
        <>
          <div className="text-center mb-10 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code2 className="w-10 h-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Code-Beispiele
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">Übungsbeispiele zum Lernen</p>
          </div>

          <KlassenAuswahl
            value={klasse}
            onChange={(k) => {
              setSearchParams({ klasse: String(k) });
              setSuche("");
            }}
          />

          <div className="relative max-w-md mx-auto mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={suche}
              onChange={(e) => setSuche(e.target.value)}
              placeholder="Beispiel suchen..."
              className="pl-10"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mb-8">
            {sichtbareBeispiele.length} {sichtbareBeispiele.length === 1 ? "Beispiel" : "Beispiele"}{" "}
            in der {klasse}. Klasse
          </p>

          {sichtbareBeispiele.length === 0 && (
            <p className="text-center text-muted-foreground">
              {suchbegriff
                ? "Nichts gefunden – probier einen anderen Suchbegriff. 🔍"
                : `Für die ${klasse}. Klasse gibt es noch keine Beispiele – bald mehr! 🚧`}
            </p>
          )}

          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {sichtbareBeispiele.map((example, index) => (
              <Link key={example.id} to={`/examples/${example.id}`} className="no-underline">
                <ExampleCard
                  icon={example.icon}
                  title={example.title}
                  onClick={() => {}}
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
            onBack={() => navigate(`/examples?klasse=${selectedExample.klasse}`)}
          />
        </div>
      )}
    </div>
  );
};

export default Examples;
