import {
  Ambulance,
  HeartPulse,
  House,
  Stethoscope,
  Syringe,
  TestTube,
} from "lucide-react";

const services = [
  {
    icon: <Ambulance size={44} />,
    title: "Emergency Doctor",
    text: "24/7 emergency medical assistance with rapid response across Sarigerme and surrounding areas.",
  },
  {
    icon: <House size={44} />,
    title: "Hotel & Home Visit",
    text: "Professional doctor visits directly to your hotel, villa or private residence.",
  },
  {
    icon: <Syringe size={44} />,
    title: "IV Therapy",
    text: "Hydration therapy, vitamin infusions and recovery treatments performed safely.",
  },
  {
    icon: <HeartPulse size={44} />,
    title: "Cardiology",
    text: "ECG, blood pressure monitoring and comprehensive cardiovascular examinations.",
  },
  {
    icon: <Stethoscope size={44} />,
    title: "Family Medicine",
    text: "General healthcare services for adults, children and elderly patients.",
  },
  {
    icon: <TestTube size={44} />,
    title: "Laboratory Tests",
    text: "Fast blood analysis and diagnostic laboratory services with reliable results.",
  },
];

export default function Services() {
  return (
    <section
      style={{
        background:
          "linear-gradient(180deg,#050505 0%,#0b0b0b 100%)",
        padding: "120px 8%",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: 760,
          margin: "0 auto 80px",
        }}
      >
        <p
          style={{
            color: "#ff5050",
            fontWeight: 700,
            letterSpacing: 4,
            marginBottom: 18,
          }}
        >
          OUR MEDICAL SERVICES
        </p>

        <h2
          style={{
            color: "white",
            fontSize: 56,
            fontWeight: 900,
            marginBottom: 25,
          }}
        >
          Healthcare Without
          <br />
          Compromise
        </h2>

        <p
          style={{
            color: "#bdbdbd",
            fontSize: 20,
            lineHeight: 1.9,
          }}
        >
          From emergency doctor visits to ambulance transportation,
          we deliver professional healthcare wherever you are.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
          gap: 35,
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              background: "rgba(255,255,255,.04)",
              backdropFilter: "blur(16px)",
              borderRadius: 28,
              padding: 40,
              border: "1px solid rgba(255,70,70,.15)",
              boxShadow: "0 20px 50px rgba(255,0,0,.08)",
              transition: ".3s",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -70,
                right: -70,
                width: 170,
                height: 170,
                borderRadius: "50%",
                background: "#ff1a1a",
                opacity: .08,
                filter: "blur(60px)",
              }}
            />

            <div
              style={{
                width: 82,
                height: 82,
                borderRadius: 22,
                background:
                  "linear-gradient(135deg,#ff3d3d,#980000)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                marginBottom: 30,
                boxShadow: "0 15px 35px rgba(255,0,0,.35)",
              }}
            >
              {service.icon}
            </div>

            <h3
              style={{
                color: "white",
                fontSize: 28,
                marginBottom: 18,
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                color: "#c6c6c6",
                lineHeight: 1.9,
                fontSize: 17,
              }}
            >
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}