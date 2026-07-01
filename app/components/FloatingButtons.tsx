import { Phone, MessageCircle } from "lucide-react";
import { siteInfo } from "../data/site";

export default function FloatingButtons() {
  return (
    <div
      style={{
        position: "fixed",
        right: 22,
        bottom: 22,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <a
        href={siteInfo.phoneHref}
        aria-label="Call emergency"
        style={{
          width: 62,
          height: 62,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#ff3a3a,#a60000)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          boxShadow: "0 18px 40px rgba(255,0,0,.38)",
        }}
      >
        <Phone size={28} />
      </a>

      <a
        href={siteInfo.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={{
          width: 62,
          height: 62,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          boxShadow: "0 18px 40px rgba(0,0,0,.35)",
        }}
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}