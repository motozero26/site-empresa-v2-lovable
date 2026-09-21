/**
 * Configuração centralizada da empresa MWTechs
 * 
 * Regra: Não inventar dados. O que não estiver confirmado no projeto
 * possui placeholders explícitos [INSERIR ...]
 */

export interface CompanyConfig {
  name: string;
  tradeName: string;
  category: string;
  description: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappDefaultMessage: string;
  email: string;
  website: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  serviceArea: string[];
  openingHours: string;
  openingHoursSpecification: Array<{
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export const companyConfig: CompanyConfig = {
  name: "MWTechs - Assistência Técnica Especializada",
  tradeName: "MWTechs",
  category: "Assistência Técnica de Computadores e Notebooks",
  description: "Assistência técnica especializada em computadores e notebooks. Diagnóstico gratuito, manutenção preventiva, reparos eletrônicos e upgrades em Natal, RN.",
  phone: "+5584994295162",
  phoneDisplay: "(84) 9 9429-5162",
  whatsapp: "5584994295162",
  whatsappDisplay: "(84) 9 9429-5162",
  whatsappDefaultMessage: "Olá! Gostaria de solicitar um orçamento sem compromisso para meu equipamento.",
  email: "assistencia.mwtechs@gmail.com",
  website: "https://www.mwtechs.com.br",
  address: {
    street: "[INSERIR ENDEREÇO / RUA E NÚMERO]",
    neighborhood: "[INSERIR BAIRRO]",
    city: "Natal",
    state: "RN",
    country: "BR",
    postalCode: "[INSERIR CEP]",
  },
  serviceArea: [
    "Natal",
    "Parnamirim [CONFIRMAR ATENDIMENTO]",
    "Região Metropolitana de Natal [CONFIRMAR ATENDIMENTO]",
  ],
  openingHours: "[INSERIR HORÁRIO REAL - EX: Segunda a Sexta: 08h às 18h]",
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  socialLinks: {
    instagram: "[INSERIR INSTAGRAM OFICIAL]",
    facebook: "[INSERIR FACEBOOK OFICIAL]",
  },
};

export const getWhatsAppUrl = (message?: string): string => {
  const text = encodeURIComponent(message || companyConfig.whatsappDefaultMessage);
  return `https://wa.me/${companyConfig.whatsapp}?text=${text}`;
};
