import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteInfo } from "../data/site";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#080808",
        padding: "110px 8%",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 70 }}>
        <p style={{ color: "#ff4040", letterSpacing: 3, fontWeight: 700 }}>
          CONTACT
        </p>

        <h2 style={{ color: "white", fontSize: 48, marginTop: 15 }}>
          24/7 Emergency Contact
        </h2>

        <p
          style={{
            color: "#bfbfbf",
            maxWidth: 700,
            margin: "20px auto",
            lineHeight: 1.8,
          }}
        >
          Call us anytime for ambulance service, hotel visits, IV therapy and
          emergency medical assistance.
        </p>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 30,
        }}
      >
        <a href={siteInfo.phoneHref} style={cardStyle}>
          <Phone color="#ff4040" size={42} />
          <h3 style={titleStyle}>Call Now</h3>
          <p style={textStyle}>{siteInfo.phoneDisplay}</p>
        </a>

        <a href={siteInfo.whatsappHref} target="_blank" style={cardStyle}>
          <MessageCircle color="#25D366" size={42} />
          <h3 style={titleStyle}>WhatsApp</h3>
          <p style={textStyle}>{siteInfo.whatsappDisplay}</p>
        </a>

        <a href={`mailto:${siteInfo.email}`} style={cardStyle}>
          <Mail color="#ff4040" size={42} />
          <h3 style={titleStyle}>Email</h3>
          <p style={textStyle}>{siteInfo.email}</p>
        </a>

        <div style={cardStyle}>
          <MapPin color="#ff4040" size={42} />
          <h3 style={titleStyle}>Location</h3>
          <p style={textStyle}>{siteInfo.address}</p>
        </div>
      </div>

      <div
        style={{
          marginTop: 70,
          borderRadius: 28,
          overflow: "hidden",
          border: "1px solid rgba(255,60,60,.18)",
          boxShadow: "0 25px 70px rgba(255,0,0,.12)",
        }}
      >
        <iframe
          src={siteInfo.mapsUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </section>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,.04)",
  borderRadius: 24,
  padding: 35,
  textAlign: "center" as const,
  border: "1px solid rgba(255,60,60,.15)",
  textDecoration: "none",
  color: "white",
};

const titleStyle = {
  color: "white",
  marginTop: 20,
};

const textStyle = {
  color: "#bdbdbd",
};