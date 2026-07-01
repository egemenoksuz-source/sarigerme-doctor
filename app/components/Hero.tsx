import Image from "next/image";
import { Phone, MessageCircle, ShieldCheck, Clock3, MapPin } from "lucide-react";
import { siteInfo } from "../data/site";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 80% 20%, rgba(210,0,35,.55), transparent 32%), linear-gradient(135deg,#030303 0%,#120000 45%,#000 100%)",
        display: "flex",
        alignItems: "center",
        padding: "150px 7% 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1450,
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.08fr",
          gap: 70,
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "11px 18px",
              borderRadius: 999,
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,70,70,.22)",
              color: "#ff6b6b",
              fontWeight: 800,
              letterSpacing: 2,
              fontSize: 13,
              marginBottom: 28,
            }}
          >
            <ShieldCheck size={18} />
            24/7 PRIVATE EMERGENCY SERVICE
          </div>

          <h1
            style={{
              color: "white",
              fontSize: 88,
              lineHeight: 0.95,
              margin: 0,
              fontWeight: 950,
              letterSpacing: -3,
            }}
          >
            Emergency
            <br />
            Medical Care
            <br />
            in Sarigerme
          </h1>

          <p
            style={{
              color: "#d4d4d4",
              fontSize: 22,
              lineHeight: 1.75,
              maxWidth: 650,
              marginTop: 32,
            }}
          >
            24/7 ambulance service, hotel visits, IV therapy and emergency
            medical assistance for tourists in Sarigerme, Dalaman and nearby
            areas.
          </p>

          <div
            style={{
              display: "flex",
              gap: 18,
              marginTop: 44,
              flexWrap: "wrap",
            }}
          >
            <a
              href={siteInfo.phoneHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "linear-gradient(90deg,#ff3333,#a80000)",
                color: "white",
                textDecoration: "none",
                padding: "18px 34px",
                borderRadius: 999,
                fontWeight: 850,
                fontSize: 18,
                boxShadow: "0 22px 55px rgba(255,0,0,.38)",
              }}
            >
              <Phone size={21} />
              Call Emergency
            </a>

            <a
              href={siteInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "white",
                textDecoration: "none",
                padding: "18px 34px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.18)",
                background: "rgba(255,255,255,.055)",
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              <MessageCircle size={21} />
              WhatsApp
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(130px, 1fr))",
              gap: 18,
              marginTop: 58,
              maxWidth: 670,
            }}
          >
            {[
              { icon: <Clock3 size={24} />, value: "24/7", label: "Available" },
              { icon: <MapPin size={24} />, value: "15 min", label: "Avg. arrival" },
              { icon: <ShieldCheck size={24} />, value: "5000+", label: "Patients" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(255,255,255,.055)",
                  border: "1px solid rgba(255,70,70,.18)",
                  borderRadius: 22,
                  padding: 22,
                  backdropFilter: "blur(18px)",
                }}
              >
                <div style={{ color: "#ff4d4d", marginBottom: 12 }}>
                  {item.icon}
                </div>
                <h3 style={{ color: "white", fontSize: 30, margin: 0 }}>
                  {item.value}
                </h3>
                <p style={{ color: "#bdbdbd", margin: "6px 0 0" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 720,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 520,
              height: 520,
              borderRadius: "50%",
              background: "#ff002f",
              opacity: 0.18,
              filter: "blur(120px)",
            }}
          />

          <Image
            src="/ambulance.png"
            alt="Emergency ambulance service in Sarigerme"
            width={1300}
            height={900}
            priority
            style={{
              position: "relative",
              zIndex: 2,
              width: "118%",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 40px 85px rgba(255,0,0,.42))",
            }}
          />
        </div>
      </div>
    </section>
  );
}