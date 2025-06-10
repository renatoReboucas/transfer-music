
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a migração entre Spotify e YouTube Premium?",
    answer: "Utilizamos as APIs oficiais de ambas as plataformas para acessar suas playlists. Nosso algoritmo inteligente faz a correspondência entre as músicas usando metadados como título, artista e álbum, garantindo alta precisão na migração."
  },
  {
    question: "Meus dados pessoais ficam seguros?",
    answer: "Sim, totalmente seguros. Usamos OAuth oficial das plataformas, não armazenamos suas credenciais e seguimos as melhores práticas de segurança. Seus dados são processados de forma criptografada e não compartilhamos com terceiros."
  },
  {
    question: "Posso migrar playlists colaborativas?",
    answer: "Sim! Migramos playlists colaborativas mantendo a funcionalidade de colaboração na plataforma de destino. Os colaboradores precisarão aceitar o convite na nova plataforma."
  },
  {
    question: "E se algumas músicas não forem encontradas?",
    answer: "Nosso algoritmo tem 99.9% de precisão, mas caso algumas músicas não sejam encontradas, fornecemos um relatório detalhado para que você possa adicioná-las manualmente. Também sugerimos alternativas quando disponíveis."
  },
  {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas ou multas. Você continuará tendo acesso aos recursos premium até o final do período pago."
  },
  {
    question: "Quanto tempo leva para migrar uma playlist?",
    answer: "A migração é quase instantânea. Playlists pequenas (até 100 músicas) levam alguns segundos, enquanto playlists maiores podem levar até alguns minutos, dependendo do tamanho e da complexidade."
  },
  {
    question: "Posso migrar de volta para a plataforma original?",
    answer: "Claro! Nossa migração é bidirecional. Você pode migrar do Spotify para YouTube Premium e vice-versa quantas vezes quiser, mantendo todas as suas playlists atualizadas."
  },
  {
    question: "Há suporte para outras plataformas de música?",
    answer: "Atualmente suportamos Spotify e YouTube Premium, que são as duas maiores plataformas. Estamos trabalhando para adicionar suporte ao Apple Music e Amazon Music em breve."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nosso serviço.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
