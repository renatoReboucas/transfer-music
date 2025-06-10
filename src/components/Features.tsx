import { Clock, RefreshCw, Shield, Star, Users, Zap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Migração Instantânea",
    description:
      "Transfira suas playlists em segundos com nossa tecnologia avançada de matching musical.",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description:
      "Seus dados estão protegidos. Não armazenamos credenciais e usamos OAuth oficial.",
  },
  {
    icon: RefreshCw,
    title: "Sincronização Bidirecional",
    description:
      "Migre do Spotify para YouTube Premium e vice-versa sem perder nenhuma música.",
  },
  {
    icon: Users,
    title: "Playlists Colaborativas",
    description:
      "Mantenha a funcionalidade colaborativa mesmo após a migração entre plataformas.",
  },
  {
    icon: Clock,
    title: "Histórico Preservado",
    description:
      "Mantemos a ordem, datas de criação e metadados importantes de suas playlists.",
  },
  {
    icon: Star,
    title: "Qualidade Garantida",
    description:
      "Algoritmo inteligente que encontra as melhores correspondências para cada música.",
  },
];

export const Features = () => {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Por que escolher o PlaylistMigrator?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            A solução mais confiável e rápida para migrar suas músicas favoritas
            entre plataformas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/50 transform border-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full">
                  <feature.icon className="text-primary h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
