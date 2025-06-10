import { ArrowRight, Music, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="from-spotify/10 via-background to-youtube/10 relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br">
      {/* Background Pattern */}
      <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>

      {/* Floating Music Icons */}
      <div className="animate-float absolute top-20 left-10">
        <Music className="text-spotify/30 h-8 w-8" />
      </div>
      <div
        className="animate-float absolute top-40 right-20"
        style={{ animationDelay: "1s" }}
      >
        <Play className="text-youtube/30 h-6 w-6" />
      </div>
      <div
        className="animate-float absolute bottom-32 left-20"
        style={{ animationDelay: "2s" }}
      >
        <Music className="text-primary/20 h-10 w-10" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="bg-primary/10 text-primary mb-8 inline-flex animate-pulse items-center rounded-full px-4 py-2 text-sm font-medium">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
            Migração rápida e segura
          </div>

          {/* Main Heading */}
          <h1 className="from-spotify via-primary to-youtube mb-6 bg-gradient-to-r bg-clip-text text-5xl leading-tight font-bold text-transparent md:text-7xl">
            Migre suas Playlists
            <span className="block">entre Plataformas</span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
            Transfira suas músicas favoritas do{" "}
            <span className="text-spotify font-semibold">Spotify</span> para o{" "}
            <span className="text-youtube font-semibold">YouTube Premium</span>{" "}
            e vice-versa em apenas alguns cliques.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="from-spotify hover:to-spotify transform rounded-xl bg-gradient-to-r to-green-600 px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-600 hover:shadow-xl"
            >
              Começar Migração Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary/5 rounded-xl border-2 px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Ver Como Funciona
            </Button>
          </div>

          {/* Stats */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-primary mb-2 text-3xl font-bold">500K+</div>
              <div className="text-muted-foreground">Playlists Migradas</div>
            </div>
            <div className="text-center">
              <div className="text-primary mb-2 text-3xl font-bold">99.9%</div>
              <div className="text-muted-foreground">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-primary mb-2 text-3xl font-bold">30s</div>
              <div className="text-muted-foreground">Tempo Médio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
