import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata = {
  title: "Ear Infection Doctor Sarigerme | English Speaking Doctor",
  description:
    "Ear infection doctor in Sarigerme, Dalaman and nearby areas. 24/7 English speaking doctor, hotel visits and urgent medical care for tourists.",
};

export default function EarInfectionPage() {
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
            EAR INFECTION DOCTOR
          </p>

          <h1 style={{ fontSize: 64, lineHeight: 1.1, marginTop: 20 }}>
            Ear Infection Doctor in Sarigerme
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
            Ear pain, blocked ears and infections are common during holidays,
            especially after swimming. Our English speaking doctors provide
            hotel visits, medical consultation and treatment support in
            Sarigerme, Dalaman and nearby areas.
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
            Symptoms We Can Help With
          </h2>

          <ul style={{ color: "#cfcfcf", fontSize: 20, lineHeight: 2 }}>
            <li>Ear pain</li>
            <li>Blocked ear sensation</li>
            <li>Swimmer&apos;s ear</li>
            <li>Ear discharge</li>
            <li>Fever with ear pain</li>
            <li>Dizziness related to ear problems</li>
            <li>Hearing discomfort</li>
            <li>Urgent medical consultation</li>
          </ul>

          <h2 style={{ marginTop: 60, fontSize: 40 }}>
            Hotel Visit For Ear Pain
          </h2>

          <p style={{ color: "#cfcfcf", fontSize: 19, lineHeight: 1.9 }}>
            If you are uncomfortable or unable to travel, our doctor can visit
            your hotel, villa or holiday home and assess your symptoms. If
            needed, we can guide you regarding medication and follow-up care.
          </p>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}