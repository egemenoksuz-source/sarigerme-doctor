import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata = {
  title: "Emergency Doctor | 24/7 Emergency Doctor in Sarigerme",
  description:
    "24/7 emergency doctor service in Sarigerme, Dalaman and nearby areas. English speaking doctors, ambulance support, hotel visits and urgent medical care.",
};

export default function EmergencyDoctorPage() {
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
            EMERGENCY DOCTOR
          </p>

          <h1 style={{ fontSize: 64, lineHeight: 1.1, marginTop: 20 }}>
            24/7 Emergency Doctor Service
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
            If you need urgent medical help in Sarigerme, Dalaman, Ortaca or
            nearby areas, our English speaking emergency doctors are available
            24 hours a day for hotel visits, home visits and ambulance support.
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
              Call Emergency
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
            Emergency Medical Care For Tourists
          </h2>

          <p style={{ color: "#cfcfcf", fontSize: 19, lineHeight: 1.9 }}>
            We provide urgent medical assistance for tourists staying in hotels,
            villas, holiday homes and resorts. Our doctors can help with fever,
            food poisoning, dehydration, infections, pain, injuries and travel
            related illnesses.
          </p>

          <h2 style={{ marginTop: 60, fontSize: 40 }}>
            Emergency Services
          </h2>

          <ul style={{ color: "#cfcfcf", fontSize: 20, lineHeight: 2 }}>
            <li>24/7 emergency doctor</li>
            <li>Ambulance support</li>
            <li>Hotel emergency doctor</li>
            <li>Home emergency visit</li>
            <li>Food poisoning treatment</li>
            <li>IV drip therapy</li>
            <li>Ear infection treatment</li>
            <li>Tourist medical assistance</li>
          </ul>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}