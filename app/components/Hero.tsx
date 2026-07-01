import Image from "next/image";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock3,
  MapPin,
} from "lucide-react";
import { siteInfo } from "../data/site";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-glow" />

      <div className="hero-container">
        <div className="hero-text">
          <div className="hero-badge">
            <ShieldCheck size={18} />
            24/7 EMERGENCY MEDICAL SERVICE
          </div>

          <h1>
            Emergency
            <br />
            Medical Care
            <br />
            in Sarigerme
          </h1>

          <p>
            24/7 ambulance service, hotel visits, IV therapy and emergency
            medical assistance for patients in Sarigerme, Dalaman and nearby
            areas.
          </p>

          <div className="hero-buttons">
            <a href={siteInfo.phoneHref} className="hero-call">
              <Phone size={21} />
              Call Emergency
            </a>

            <a
              href={siteInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-whatsapp"
            >
              <MessageCircle size={21} />
              WhatsApp
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <Clock3 size={24} />
              <h3>24/7</h3>
              <span>Available</span>
            </div>

            <div>
              <MapPin size={24} />
              <h3>15 min</h3>
              <span>Avg. arrival</span>
            </div>

            <div>
              <ShieldCheck size={24} />
              <h3>5000+</h3>
              <span>Patients</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrap">
          <Image
            src="/ambulance.png"
            alt="Emergency ambulance service in Sarigerme"
            width={1200}
            height={850}
            priority
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}