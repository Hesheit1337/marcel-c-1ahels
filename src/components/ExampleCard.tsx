import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ExampleCardProps {
  icon: string;
  title: string;
  onClick: () => void;
}

export const ExampleCard = ({ icon, title, onClick }: ExampleCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg",
        "p-6 flex flex-col items-center justify-center gap-3 text-center",
        "bg-card hover:bg-secondary/50"
      )}
    >
      <span className="text-5xl">{icon}</span>
      <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
    </Card>
  );
};
