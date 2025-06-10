
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Music, Mail, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16 p-12 bg-gradient-to-r from-primary/10 via-spotify/5 to-youtube/10 rounded-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para migrar suas playlists?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de usuários que já migraram suas músicas com segurança e rapidez.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-spotify to-green-600 hover:from-green-600 hover:to-spotify text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Começar Agora - Grátis
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Music className="w-8 h-8 text-primary mr-3" />
              <span className="text-2xl font-bold">PlaylistMigrator</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              A forma mais rápida e segura de migrar suas playlists entre Spotify e YouTube Premium. 
              Mantenha sua música sempre acessível, independente da plataforma.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Status</a></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; 2024 PlaylistMigrator. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-sm">Feito com ❤️ para melómanos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
