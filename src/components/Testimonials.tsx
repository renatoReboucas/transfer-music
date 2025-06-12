import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "DJ Profissional",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Incrível! Migrei mais de 50 playlists do Spotify para o YouTube Premium em minutos. A qualidade do matching é perfeita.",
  },
  {
    name: "João Santos",
    role: "Produtor Musical",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Como produtor, preciso alternar entre plataformas constantemente. Este serviço me economiza horas de trabalho manual.",
  },
  {
    name: "Ana Costa",
    role: "Influenciadora",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Perfeito para quem trabalha com conteúdo musical. Migrei minhas playlists de trabalho sem perder nenhuma música importante.",
  },
  {
    name: "Carlos Oliveira",
    role: "Melômano",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Tinha 10 anos de playlists no Spotify. A migração foi perfeita, manteve até as capas e descrições originais!",
  },
  {
    name: "Beatriz Lima",
    role: "Estudante de Música",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Interface super intuitiva e resultado impecável. Recomendo para qualquer pessoa que queira trocar de plataforma.",
  },
  {
    name: "Rafael Mendes",
    role: "Radialista",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Uso no meu trabalho diariamente. A velocidade de migração é impressionante e nunca tive problemas de compatibilidade.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            O que nossos usuários dizem
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Mais de 100.000 usuários confiam no TransferMusic para suas
            migrações musicais.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 transform border-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-8">
                <div className="mb-4 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-yellow-500"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <Avatar className="mr-4">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
