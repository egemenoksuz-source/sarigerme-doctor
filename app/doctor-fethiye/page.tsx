import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata = {
  title: "Doctor Fethiye | 24/7 English Speaking Doctor",
  description:
    "24/7 English speaking doctor in Fethiye, Sarigerme and Dalaman. Emergency doctor, hotel doctor, private doctor, IV therapy and ambulance service.",
};

export default function DoctorFethiyePage() {
  return (
    <>
      <Header />

      <main
        style={{
          background: "#050505",
          color: "white",
          paddingTop: 120,
          minHeight: "100vh",
        }}
      >
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 8%",
          }}
        >
          <p style={{ color: "#ff4d4d", letterSpacing: 3, fontWeight: 700 }}>
            DOCTOR FETHIYE
          </p>

          <h1 style={{ fontSize: 64, lineHeight: 1.1, marginTop: 20 }}>
            24/7 English Speaking Doctor in Fethiye
          </h1>

          <p
            style={{
              color: "#d0d0d0",
              fontSize: 20,
              lineHeight: 1.8,
              maxWidth: 900,
              marginTop: 30,
            }}
          >
            Our English speaking doctors provide emergency medical care, hotel
            visits, home visits, IV therapy and ambulance support for tourists
            in Fethiye, Sarigerme, Dalaman and nearby holiday destinations.
          </p>

          <div style={{ display: "flex", gap: 20, marginTop: 40, flexWrap: "wrap" }}>
            <a
              href="tel:+905555555555"
              style={{
                background: "#d10024",
                color: "white",
                padding: "18px 34px",
                borderRadius: 40,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Call Now
            </a>

            <a
              href="https://wa.me/905555555555"
              style={{
                border: "1px solid rgba(255,255,255,.25)",
                color: "white",
                padding: "18px 34px",
                borderRadius: 40,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              WhatsApp
            </a>
          </div>

          <h2 style={{ marginTop: 80, fontSize: 40 }}>
            Private Doctor & Hotel Doctor in Fethiye
          </h2>

          <p style={{ color: "#cfcfcf", fontSize: 19, lineHeight: 1.9 }}>
            If you are looking for a doctor in Fethiye, tourist doctor, hotel
            doctor, private doctor or emergency doctor, our medical team can
            provide professional healthcare support. We assist international
            patients staying in hotels, villas and holiday homes.
          </p>

          <h2 style={{ marginTop: 60, fontSize: 40 }}>
            Available Medical Services
          </h2>

          <ul style={{ color: "#cfcfcf", fontSize: 20, lineHeight: 2 }}>
            <li>Doctor Fethiye</li>
            <li>English speaking doctor</li>
            <li>Hotel doctor</li>
            <li>Doctor to hotel</li>
            <li>Emergency doctor</li>
            <li>Private doctor</li>
            <li>IV drip therapy</li>
            <li>Food poisoning doctor</li>
            <li>Ear infection doctor</li>
            <li>Ambulance service</li>
          </ul>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}