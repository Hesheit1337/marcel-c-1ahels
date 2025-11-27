import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ExampleCardProps {
  icon: string;
  title: string;
  onClick: () => void;
  index: number;
}

export const ExampleCard = ({ icon, title, onClick, index }: ExampleCardProps) => {
  return (
    <Card
      onClick={onClick}
      style={{ animationDelay: `${index * 0.05}s` }}
      className={cn(
        "group cursor-pointer transition-all duration-500 ease-out",
        "hover:scale-105 hover:-translate-y-2",
        "p-8 flex flex-col items-center justify-center gap-4 text-center",
        "bg-gradient-to-br from-card to-card/80",
        "border-2 border-border/50 hover:border-primary/50",
        "shadow-md hover:shadow-2xl hover:shadow-primary/20",
        "opacity-0 animate-scale-in",
        "relative overflow-hidden"
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <span className="text-6xl transform group-hover:scale-110 transition-transform duration-500 relative z-10">
        {icon}
      </span>
      <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 relative z-10">
        {title}
      </h3>
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </Card>
  );
};
