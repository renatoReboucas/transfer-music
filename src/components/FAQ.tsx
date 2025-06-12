import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a migração entre Spotify e YouTube Premium?",
    answer:
      "Utilizamos as APIs oficiais de ambas as plataformas para acessar suas playlists. Nosso algoritmo inteligente faz a correspondência entre as músicas usando metadados como título, artista e álbum, garantindo alta precisão na migração.",
  },
  // {
  //   question: "Meus dados pessoais ficam seguros?",
  //   answer: "Sim, totalmente seguros. Usamos OAuth oficial das plataformas, não armazenamos suas credenciais e seguimos as melhores práticas de segurança. Seus dados são processados de forma criptografada e não compartilhamos com terceiros."
  // },
  // {
  //   question: "Posso migrar playlists colaborativas?",
  //   answer:
  //     "Sim! Migramos playlists colaborativas mantendo a funcionalidade de colaboração na plataforma de destino. Os colaboradores precisarão aceitar o convite na nova plataforma.",
  // },
  {
    question: "E se algumas músicas não forem encontradas?",
    answer:
      "As músicas que não foram possível transferir será mostrada ao final do processo de transferência.",
  },
  {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer:
      "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas ou multas. Você continuará tendo acesso aos recursos premium até o final do período pago.",
  },
  {
    question: "Quanto tempo leva para migrar uma playlist?",
    answer:
      "A migração é quase instantânea. Playlists pequenas (até 100 músicas) levam alguns segundos, enquanto playlists maiores podem levar até alguns minutos, dependendo do tamanho e da complexidade.",
  },
  {
    question: "O TransferMusic remove a sua playlist da plataforma fonte?",
    answer:
      "Não! Nós apenas copiamos sua música para a nova plataforma de destino. Nós não alteramos ou deletamos nada da plataforma original ou plataforma fonte.",
  },
  {
    question: "Há suporte para outras plataformas de música?",
    answer:
      "Atualmente suportamos Spotify e YouTube Premium, que são as duas maiores plataformas. Estamos trabalhando para adicionar suporte ao Apple Music e Amazon Music em breve.",
  },
];

export const FAQ = () => {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Encontre respostas para as dúvidas mais comuns sobre nosso serviço.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border bg-card/50 rounded-lg border px-6 backdrop-blur-sm"
              >
                <AccordionTrigger className="hover:text-primary text-left font-semibold transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
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
