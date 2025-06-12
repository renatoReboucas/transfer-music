import dayjs from "dayjs";

// import { Instagram, Mail, Music, Twitter, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import Logo from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-16">
        {/* CTA Section */}
        {/* <div className="from-primary/10 via-spotify/5 to-youtube/10 mb-16 rounded-2xl bg-gradient-to-r p-12 text-center">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">
            Pronto para migrar suas playlists?
          </h3>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
            Junte-se a milhares de usuários que já migraram suas músicas com
            segurança e rapidez.
          </p>
          <Button
            size="lg"
            className="from-spotify hover:to-spotify transform rounded-xl bg-gradient-to-r to-green-600 px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-600 hover:shadow-xl"
          >
            Começar Agora - Grátis
          </Button>
        </div> */}

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Logo />
            <p className="text-muted-foreground mb-6 max-w-md">
              A forma mais rápida e segura de migrar suas playlists entre
              Spotify e YouTube Premium. Mantenha sua música sempre acessível,
              independente da plataforma.
            </p>
            {/* <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-4 w-4" />
              </Button>
            </div> */}
          </div>

          {/* Product Links */}
          <div>
            <h4 className="mb-4 font-semibold">Produto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Preços
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          {/* <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div> */}
        </div>

        <Separator className="mb-8" />

        <div className="text-muted-foreground flex flex-col items-center justify-between md:flex-row">
          <p>
            &copy; {dayjs().year()} TransferMusic. Todos os direitos reservados.
          </p>
          <div className="mt-4 flex items-center space-x-6 md:mt-0">
            <span className="text-sm">Feito com ❤️ por R2</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
