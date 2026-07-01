import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata = {
  title: "IV Therapy Sarigerme | IV Drip Near Me",
  description:
    "IV therapy and IV drip service in Sarigerme, Dalaman and nearby areas. Hydration, vitamin drip and recovery treatment by English speaking medical team.",
};

export default function IVTherapyPage() {
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
            IV THERAPY
          </p>

          <h1 style={{ fontSize: 64, lineHeight: 1.1, marginTop: 20 }}>
            IV Drip Therapy in Sarigerme
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
            Feeling dehydrated, tired or unwell during your holiday? Our medical
            team provides safe IV drip therapy for hydration, vitamin support and
            recovery in hotels, villas and private homes.
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
            IV Drip Near Me
          </h2>

          <p style={{ color: "#cfcfcf", fontSize: 19, lineHeight: 1.9 }}>
            If you are searching for IV drip near me or IV therapy near me in
            Sarigerme, our English speaking medical team can visit your hotel,
            villa or home and provide treatment safely.
          </p>

          <h2 style={{ marginTop: 60, fontSize: 40 }}>
            Common Reasons For IV Therapy
          </h2>

          <ul style={{ color: "#cfcfcf", fontSize: 20, lineHeight: 2 }}>
            <li>Dehydration</li>
            <li>Food poisoning recovery</li>
            <li>Hangover recovery</li>
            <li>Fatigue and weakness</li>
            <li>Vitamin support</li>
            <li>Travel-related illness</li>
            <li>Heat exhaustion</li>
            <li>Stomach upset</li>
          </ul>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}