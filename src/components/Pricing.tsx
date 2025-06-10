import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    description: "Perfeito para experimentar",
    features: [
      "2 playlists por mês",
      "Até 50 músicas por playlist",
      "Migração padrão",
    ],
    cta: "Começar Grátis",
    popular: false,
  },
  {
    name: "Premium",
    price: "R$ 19",
    period: "/mês",
    description: "Para usuários regulares",
    features: [
      "Playlists ilimitadas",
      "Músicas ilimitadas",
      "Migração instantânea",
    ],
    cta: "Assinar Premium",
    popular: true,
  },
];

export const Pricing = () => {
  return (
    <section className="bg-[#f8fafc] py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-5xl font-extrabold text-neutral-900">
            Planos Simples e Transparentes
          </h2>
          <p className="text-xl text-gray-500">
            Escolha o plano ideal para suas necessidades. Cancele a qualquer
            momento.
          </p>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col items-stretch justify-center gap-8 md:flex-row">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex-1 rounded-2xl border bg-white ${plan.popular ? "z-10 scale-105 border-neutral-900 shadow-xl" : "border-gray-200"} relative flex min-h-[500px] transform flex-col items-center px-8 py-10 transition-all duration-200 hover:scale-105`}
              style={{
                boxShadow: plan.popular
                  ? "0 8px 32px 0 rgba(16,24,40,0.08)"
                  : undefined,
              }}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center rounded-full bg-neutral-900 px-4 py-1 text-sm font-semibold text-white shadow">
                    <Star className="mr-1 h-4 w-4" />
                    Mais Popular
                  </div>
                </div>
              )}
              <div className="mt-2 mb-6 flex flex-1 flex-col text-center">
                <div>
                  <div className="mb-1 text-2xl font-bold">{plan.name}</div>
                  <div className="mb-2">
                    <span className="text-4xl font-extrabold">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <div className="text-base text-gray-500">
                    {plan.description}
                  </div>
                </div>
                <ul className="mt-6 mb-8 flex w-full flex-col items-start space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="mt-0.5 text-sm text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`w-full rounded-xl border py-4 text-lg font-semibold ${
                  plan.popular
                    ? "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800"
                    : "border-gray-200 bg-white text-neutral-900 hover:bg-gray-50"
                } mt-auto transition-all duration-200`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            Todas as assinaturas incluem 7 dias de teste grátis. Sem
            compromisso.
          </p>
        </div>
      </div>
    </section>
  );
};
