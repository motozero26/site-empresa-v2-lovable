import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

export const WhatsAppFloatingButton = () => {
  const handleClick = () => {
    window.open(getWhatsAppUrl("Olá! Gostaria de falar com um técnico sobre meu equipamento."), "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      <span className="hidden sm:inline-block mr-3 bg-card/95 text-foreground text-xs font-semibold py-1.5 px-3 rounded-full border border-border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Falar com técnico no WhatsApp
      </span>
      <button
        onClick={handleClick}
        aria-label="Falar com a MWTechs no WhatsApp"
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};
