import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata = {
  title: "Doctor Near Dalaman Airport | 24/7 English Speaking Doctor",
  description:
    "Doctor near Dalaman Airport. 24/7 English speaking doctor, emergency medical care, hotel visits, ambulance service and IV therapy near Dalaman Airport.",
};

export default function DoctorNearDalamanAirportPage() {
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
            DOCTOR NEAR DALAMAN AIRPORT
          </p>

          <h1 style={{ fontSize: 64, lineHeight: 1.1, marginTop: 20 }}>
            Doctor Near Dalaman Airport
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
            If you need a doctor near Dalaman Airport, our English speaking
            medical team provides emergency care, hotel visits, private doctor
            support, IV therapy and ambulance assistance 24/7.
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
            Fast Medical Help Near The Airport
          </h2>

          <p style={{ color: "#cfcfcf", fontSize: 19, lineHeight: 1.9 }}>
            We help tourists, travellers and local residents who need urgent
            medical support near Dalaman Airport. Whether you are arriving,
            departing or staying nearby, our team can assist with private doctor
            visits and emergency care.
          </p>

          <h2 style={{ marginTop: 60, fontSize: 40 }}>Available Services</h2>

          <ul style={{ color: "#cfcfcf", fontSize: 20, lineHeight: 2 }}>
            <li>Doctor near Dalaman Airport</li>
            <li>Emergency doctor</li>
            <li>English speaking doctor</li>
            <li>Private doctor</li>
            <li>Hotel doctor</li>
            <li>Doctor to hotel</li>
            <li>IV drip therapy</li>
            <li>Food poisoning doctor</li>
            <li>Ambulance service</li>
            <li>Tourist doctor</li>
          </ul>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}