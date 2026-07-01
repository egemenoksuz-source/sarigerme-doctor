import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata = {
  title: "Doctor Dalaman | 24/7 English Speaking Doctor",
  description:
    "24/7 English speaking doctor in Dalaman. Emergency doctor, hotel doctor, ambulance service, IV therapy and doctor near Dalaman Airport.",
};

export default function DoctorDalamanPage() {
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
            DOCTOR DALAMAN
          </p>

          <h1 style={{ fontSize: 64, lineHeight: 1.1, marginTop: 20 }}>
            24/7 English Speaking Doctor in Dalaman
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
            We provide private doctor visits, emergency medical care, ambulance
            service and hotel doctor support in Dalaman, including areas near
            Dalaman Airport.
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

          <h2 style={{ marginTop: 80, fontSize: 42 }}>
            Doctor Near Dalaman Airport
          </h2>

          <p style={{ color: "#cfcfcf", fontSize: 19, lineHeight: 1.9 }}>
            If you are looking for a doctor near Dalaman Airport, a private
            doctor, emergency doctor, hotel doctor or English speaking doctor in
            Dalaman, our medical team is available 24/7.
          </p>

          <h2 style={{ fontSize: 36, marginTop: 50 }}>Available Services</h2>

          <ul style={{ color: "#cfcfcf", fontSize: 20, lineHeight: 2 }}>
            <li>Doctor Dalaman</li>
            <li>Doctor near Dalaman Airport</li>
            <li>Emergency doctor</li>
            <li>Hotel doctor</li>
            <li>Doctor to hotel</li>
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