import { Phone, MessageCircle } from "lucide-react";
import { siteInfo } from "../data/site";

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a href={siteInfo.phoneHref} aria-label="Call emergency">
        <Phone size={26} />
      </a>

      <a
        href={siteInfo.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="whatsapp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}