import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, BookOpen, Sparkles, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Code2 className="w-16 h-16 text-primary animate-float" />
            <Sparkles className="w-12 h-12 text-accent animate-float" style={{ animationDelay: "0.5s" }} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            C-Programme Lernplattform
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Lerne C-Programmierung mit praktischen Beispielen und verständlichen Erklärungen
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4" />
            <span>Perfekt für Anfänger und Fortgeschrittene</span>
          </div>
        </div>

        {/* Main Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <Card 
            className="group p-8 bg-gradient-to-br from-card to-card/80 border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden animate-slide-up cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                💻
              </div>
              <h2 className="text-3xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                Code-Beispiele
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Praktische C-Programme mit ausführlichen Kommentaren und Tipps. Von einfachen Berechnungen bis zu komplexen Algorithmen.
              </p>
              <Link to="/examples">
                <Button className="gap-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  Beispiele ansehen
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Card>

          <Card 
            className="group p-8 bg-gradient-to-br from-card to-card/80 border-2 border-accent/20 hover:border-accent/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-accent/20 relative overflow-hidden animate-slide-up cursor-pointer"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                📚
              </div>
              <h2 className="text-3xl font-bold mb-4 text-card-foreground group-hover:text-accent transition-colors">
                Erklärungen
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Verständliche Erklärungen zu wichtigen Konzepten der C-Programmierung. Schritt für Schritt zum Verständnis.
              </p>
              <Link to="/explanations">
                <Button variant="secondary" className="gap-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  Erklärungen lesen
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>


      </div>
    </div>
  );
};

export default Index;
