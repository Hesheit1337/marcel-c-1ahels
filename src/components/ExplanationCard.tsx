import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface ExplanationCardProps {
  icon: string;
  title: string;
  onClick: () => void;
  index: number;
}

export const ExplanationCard = ({ icon, title, onClick, index }: ExplanationCardProps) => {
  return (
    <Card
      onClick={onClick}
      style={{ animationDelay: `${index * 0.05}s` }}
      className={cn(
        "group cursor-pointer transition-all duration-500 ease-out",
        "hover:scale-105 hover:-translate-y-2",
        "p-6 flex items-center justify-between gap-4",
        "bg-gradient-to-br from-card to-card/80",
        "border-2 border-border/50 hover:border-accent/50",
        "shadow-md hover:shadow-2xl hover:shadow-accent/20",
        "opacity-0 animate-scale-in",
        "relative overflow-hidden"
      )}
    >
      <div className="flex items-center gap-4 relative z-10">
        <span className="text-5xl transform group-hover:scale-110 transition-transform duration-500">
          {icon}
        </span>
        <h3 className="text-xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
      </div>
      
      <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all duration-300 relative z-10" />
      
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </Card>
  );
};
