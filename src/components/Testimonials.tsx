
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "DJ Profissional",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Incrível! Migrei mais de 50 playlists do Spotify para o YouTube Premium em minutos. A qualidade do matching é perfeita."
  },
  {
    name: "João Santos",
    role: "Produtor Musical",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Como produtor, preciso alternar entre plataformas constantemente. Este serviço me economiza horas de trabalho manual."
  },
  {
    name: "Ana Costa",
    role: "Influenciadora",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Perfeito para quem trabalha com conteúdo musical. Migrei minhas playlists de trabalho sem perder nenhuma música importante."
  },
  {
    name: "Carlos Oliveira",
    role: "Melômano",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Tinha 10 anos de playlists no Spotify. A migração foi perfeita, manteve até as capas e descrições originais!"
  },
  {
    name: "Beatriz Lima",
    role: "Estudante de Música",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Interface super intuitiva e resultado impecável. Recomendo para qualquer pessoa que queira trocar de plataforma."
  },
  {
    name: "Rafael Mendes",
    role: "Radialista",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Uso no meu trabalho diariamente. A velocidade de migração é impressionante e nunca tive problemas de compatibilidade."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que nossos usuários dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 100.000 usuários confiam no PlaylistMigrator para suas migrações musicais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <Avatar className="mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
