import { ArrowRight, CheckCircle, List, LogIn } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: LogIn,
    title: "Conecte suas Contas",
    description:
      "Faça login seguro no Spotify e YouTube Premium usando OAuth oficial.",
    color: "text-blue-500",
  },
  {
    icon: List,
    title: "Selecione Playlists",
    description:
      "Escolha quais playlists você deseja migrar entre as plataformas.",
    color: "text-purple-500",
  },
  {
    icon: ArrowRight,
    title: "Iniciamos a Migração",
    description:
      "Nosso algoritmo encontra e transfere suas músicas automaticamente.",
    color: "text-orange-500",
  },
  {
    icon: CheckCircle,
    title: "Pronto!",
    description:
      "Suas playlists estão disponíveis na nova plataforma em segundos.",
    color: "text-green-500",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Como Funciona</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Migre suas playlists em 4 passos simples e rápidos.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="hover:border-primary/50 transform border-2 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div
                        className={`inline-flex h-16 w-16 items-center justify-center rounded-full bg-zinc-200 ${step.color}`}
                      >
                        <step.icon className="h-8 w-8" />
                      </div>
                      <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 transform lg:block">
                    <ArrowRight className="text-muted-foreground h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
