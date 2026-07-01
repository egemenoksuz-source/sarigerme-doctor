import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata = {
  title: "Tourist Doctor Turkey | 24/7 English Speaking Doctor",
  description:
    "Tourist doctor service in Sarigerme, Dalaman, Fethiye and nearby areas. English speaking doctors, hotel visits, emergency care, IV therapy and ambulance service.",
};

export default function TouristDoctorPage() {
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
            TOURIST DOCTOR
          </p>

          <h1 style={{ fontSize: 64, lineHeight: 1.1, marginTop: 20 }}>
            Tourist Doctor for International Visitors
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
            We provide English speaking doctor services for tourists staying in
            hotels, villas, resorts and holiday homes. Our medical team supports
            visitors with urgent care, hotel visits, IV therapy and ambulance
            assistance.
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
            Medical Help During Your Holiday
          </h2>

          <p style={{ color: "#cfcfcf", fontSize: 19, lineHeight: 1.9 }}>
            If you are feeling unwell during your stay in Turkey, our tourist
            doctor service helps you receive medical support without unnecessary
            stress. We can visit your hotel or holiday accommodation and provide
            medical assessment and treatment guidance.
          </p>

          <h2 style={{ marginTop: 60, fontSize: 40 }}>Common Tourist Needs</h2>

          <ul style={{ color: "#cfcfcf", fontSize: 20, lineHeight: 2 }}>
            <li>English speaking doctor</li>
            <li>Hotel doctor</li>
            <li>Doctor to hotel</li>
            <li>Food poisoning doctor</li>
            <li>Ear infection doctor</li>
            <li>IV drip therapy</li>
            <li>Private doctor</li>
            <li>Emergency doctor</li>
            <li>Ambulance service</li>
            <li>Medical clinic support</li>
          </ul>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}