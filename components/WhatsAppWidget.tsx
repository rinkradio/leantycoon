"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE;

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || "")}`;
    window.open(url, "_blank");
  };

  return (
    /* Key fix: 
       - Use 'fixed' with a specific bottom spacing.
       - Add 'mb-safe' or manual padding-bottom to avoid jumping when the address bar moves.
    */
    <div className="fixed bottom-8 right-6 z-[9999] flex flex-col items-center">
      
      {/* Tooltip */}
      <div className="absolute bottom-full mb-3 hidden md:block whitespace-nowrap bg-white text-gray-800 text-xs font-bold px-3 py-2 rounded-lg shadow-xl border border-gray-100">
        Chat with us 👋
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
      </div>

      {/* Button */}
      <button
        onClick={openWhatsApp}
        className="relative flex items-center justify-center bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg active:scale-90 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
        <FaWhatsapp size={30} className="relative z-10" />
      </button>

      {/* This invisible spacer prevents the button from jumping when the URL bar hides/shows */}
      <div className="h-[env(safe-area-inset-bottom)]"></div>
    </div>
  );
}
