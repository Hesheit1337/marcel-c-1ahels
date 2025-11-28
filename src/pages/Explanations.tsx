import { useState } from "react";
import { ExplanationCard } from "@/components/ExplanationCard";
import { ExplanationDisplay } from "@/components/ExplanationDisplay";
import { explanations, Explanation } from "@/data/explanations";
import { BookOpen } from "lucide-react";

const Explanations = () => {
  const [selectedExplanation, setSelectedExplanation] = useState<Explanation | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12 px-4">
      {!selectedExplanation ? (
        <>
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-10 h-10 text-accent" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Erklärungen
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Hoffentlich verständlich Erklärt 
            </p>
          </div>
          <div className="container mx-auto max-w-4xl space-y-4">
            {explanations.map((explanation, index) => (
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
