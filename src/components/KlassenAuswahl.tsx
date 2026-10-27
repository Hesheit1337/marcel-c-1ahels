import { Button } from "@/components/ui/button";

export type Klasse = 1 | 2;

interface KlassenAuswahlProps {
  value: Klasse;
  onChange: (klasse: Klasse) => void;
}

// Hier kannst du später einfach eine 3. Klasse usw. ergänzen
const klassen: { wert: Klasse; label: string }[] = [
  { wert: 1, label: "1. Klasse" },
  { wert: 2, label: "2. Klasse" },
];

export const KlassenAuswahl = ({ value, onChange }: KlassenAuswahlProps) => (
  <div className="flex justify-center gap-3 mb-10">
    {klassen.map((k) => (
      <Button
        key={k.wert}
        variant={value === k.wert ? "default" : "outline"}
        onClick={() => onChange(k.wert)}
        className="min-w-32 text-base"
      >
        {k.label}
      </Button>
    ))}
  </div>
);
