import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata = {
  title: "Doctor Sarigerme | 24/7 English Speaking Doctor",
  description:
    "24/7 English speaking doctor in Sarigerme. Hotel doctor, emergency doctor, IV therapy, ambulance service and home visits.",
};

export default function DoctorSarigermePage() {
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
          <p
            style={{
              color: "#ff4d4d",
              letterSpacing: 3,
              fontWeight: 700,
            }}
          >
            DOCTOR SARIGERME
          </p>

          <h1
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              marginTop: 20,
            }}
          >
            24/7 English Speaking Doctor in Sarigerme
          </h1>

          <p
            style={{
              color: "#cfcfcf",
              fontSize: 20,
              lineHeight: 1.8,
              maxWidth: 900,
              marginTop: 30,
            }}
          >
            We provide emergency doctor services, hotel doctor visits,
            home visits, ambulance support and IV therapy for tourists
            and residents in Sarigerme.
          </p>

          <div
            style={{
              display: "flex",
              gap: 20,
              marginTop: 40,
              flexWrap: "wrap",
            }}
          >
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

          <h2
            style={{
              marginTop: 80,
              fontSize: 42,
            }}
          >
            Our Medical Services
          </h2>

          <ul
            style={{
              color: "#cfcfcf",
              fontSize: 20,
              lineHeight: 2,
            }}
          >
            <li>Emergency Doctor</li>
            <li>Hotel Doctor</li>
            <li>Doctor To Hotel</li>
            <li>Private Doctor</li>
            <li>IV Drip Therapy</li>
            <li>Food Poisoning Treatment</li>
            <li>Ear Infection Treatment</li>
            <li>Ambulance Service</li>
            <li>English Speaking Doctor</li>
            <li>24/7 Medical Assistance</li>
          </ul>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}