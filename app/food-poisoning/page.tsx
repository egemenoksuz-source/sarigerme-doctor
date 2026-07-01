import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata = {
  title: "Food Poisoning Doctor Sarigerme | 24/7 Tourist Doctor",
  description:
    "Food poisoning doctor in Sarigerme, Dalaman and nearby areas. 24/7 English speaking doctor, hotel visits, IV therapy and emergency medical care.",
};

export default function FoodPoisoningPage() {
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
            FOOD POISONING DOCTOR
          </p>

          <h1 style={{ fontSize: 64, lineHeight: 1.1, marginTop: 20 }}>
            Food Poisoning Doctor in Sarigerme
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
            Food poisoning can quickly ruin your holiday. Our English speaking
            doctors provide fast medical care, hotel visits, IV therapy and
            emergency support for tourists in Sarigerme, Dalaman and nearby
            areas.
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
            <li>Nausea and vomiting</li>
            <li>Diarrhea</li>
            <li>Stomach cramps</li>
            <li>Dehydration</li>
            <li>Fever</li>
            <li>Weakness and fatigue</li>
            <li>Loss of appetite</li>
            <li>Travel-related stomach illness</li>
          </ul>

          <h2 style={{ marginTop: 60, fontSize: 40 }}>
            Hotel Visit & IV Therapy
          </h2>

          <p style={{ color: "#cfcfcf", fontSize: 19, lineHeight: 1.9 }}>
            If you are too unwell to travel, our doctor can visit your hotel,
            villa or holiday home. IV hydration may help with dehydration caused
            by vomiting or diarrhea when medically appropriate.
          </p>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}