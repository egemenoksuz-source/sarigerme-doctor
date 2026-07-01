import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata = {
  title: "Hotel Doctor | 24/7 Hotel Doctor Service in Sarigerme",
  description:
    "24/7 hotel doctor service in Sarigerme, Dalaman and Fethiye. English speaking doctors visiting hotels, villas and holiday homes.",
};

export default function HotelDoctorPage() {
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
            HOTEL DOCTOR
          </p>

          <h1
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              marginTop: 20,
            }}
          >
            24/7 Hotel Doctor Service
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
            Our English speaking doctors can visit your hotel, villa or holiday
            apartment anywhere in Sarigerme, Dalaman, Ortaca and nearby
            destinations. No need to travel while you are unwell—we come to you.
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

          <h2 style={{ marginTop: 80, fontSize: 40 }}>
            What We Treat
          </h2>

          <ul
            style={{
              color: "#cfcfcf",
              fontSize: 20,
              lineHeight: 2,
            }}
          >
            <li>Food poisoning</li>
            <li>Fever & flu</li>
            <li>Ear infections</li>
            <li>Stomach pain</li>
            <li>Dehydration</li>
            <li>IV drip therapy</li>
            <li>Minor injuries</li>
            <li>Travel-related illnesses</li>
          </ul>

          <h2 style={{ marginTop: 60, fontSize: 40 }}>
            Why Choose Our Hotel Doctor Service?
          </h2>

          <p
            style={{
              color: "#cfcfcf",
              fontSize: 19,
              lineHeight: 1.9,
            }}
          >
            We provide fast response times, English speaking doctors, modern
            medical equipment and professional treatment directly at your hotel.
            Our goal is to help you recover quickly and enjoy your holiday with
            confidence.
          </p>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}