import {
  Ambulance,
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";
import { siteInfo } from "../data/site";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#030303",
        color: "white",
        padding: "90px 8% 30px",
        borderTop: "1px solid rgba(255,0,0,.15)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 50,
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
            <Ambulance color="#ff4040" size={38} />
            <div>
              <h2 style={{ margin: 0 }}>{siteInfo.name}</h2>
              <p style={{ color: "#ff5d5d", marginTop: 6 }}>
                {siteInfo.tagline}
              </p>
            </div>
          </div>

          <p style={{ color: "#bcbcbc", lineHeight: 1.8, marginTop: 25 }}>
            24/7 ambulance service, hotel visits, IV therapy and emergency
            medical assistance in Sarigerme, Dalaman and nearby areas.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p><a href="/">Home</a></p>
          <p><a href="/hotel-doctor">Hotel Doctor</a></p>
          <p><a href="/emergency-doctor">Emergency Doctor</a></p>
          <p><a href="/iv-therapy">IV Therapy</a></p>
          <p><a href="/contact">Contact</a></p>
        </div>

        <div>
          <h3>Contact</h3>

          <p style={rowStyle}>
            <Phone size={16} /> {siteInfo.phoneDisplay}
          </p>

          <p style={rowStyle}>
            <Mail size={16} /> {siteInfo.email}
          </p>

          <p style={rowStyle}>
            <MapPin size={16} /> {siteInfo.address}
          </p>

          <p style={rowStyle}>
            <Clock3 size={16} /> 24/7 Emergency Service
          </p>
        </div>
      </div>

      <hr style={{ margin: "50px 0 25px", borderColor: "#222" }} />

      <p style={{ textAlign: "center", color: "#888" }}>
        © 2025 {siteInfo.name} • All Rights Reserved
      </p>
    </footer>
  );
}

const rowStyle = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  color: "#bcbcbc",
};