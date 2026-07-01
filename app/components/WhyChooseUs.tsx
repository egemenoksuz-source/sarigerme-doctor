import {
  Ambulance,
  Clock3,
  Globe,
  HeartPulse,
  ShieldCheck,
  Star,
} from "lucide-react";

const features = [
  {
    icon: <Ambulance size={42} />,
    title: "24/7 Emergency",
    text: "Emergency medical care available day and night.",
  },
  {
    icon: <Clock3 size={42} />,
    title: "Fast Response",
    text: "Average arrival time within 15-20 minutes.",
  },
  {
    icon: <Globe size={42} />,
    title: "English Speaking",
    text: "Professional communication with international patients.",
  },
  {
    icon: <HeartPulse size={42} />,
    title: "Modern Equipment",
    text: "Fully equipped ambulance and advanced medical devices.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Trusted Service",
    text: "Reliable healthcare trusted by thousands of visitors.",
  },
  {
    icon: <Star size={42} />,
    title: "5-Star Experience",
    text: "Premium medical service focused on patient satisfaction.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      style={{
        background: "#070707",
        padding: "110px 8%",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: 70,
        }}
      >
        <p
          style={{
            color: "#ff3d3d",
            fontWeight: 700,
            letterSpacing: 3,
          }}
        >
          WHY CHOOSE US
        </p>

        <h2
          style={{
            color: "white",
            fontSize: 50,
            fontWeight: 800,
            marginTop: 15,
          }}
        >
          Premium Healthcare Experience
        </h2>

        <p
          style={{
            color: "#bcbcbc",
            maxWidth: 700,
            margin: "20px auto",
            lineHeight: 1.8,
            fontSize: 18,
          }}
        >
          We provide fast, professional and reliable medical care for tourists
          and local residents throughout the Sarigerme region.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 30,
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#131313",
              borderRadius: 25,
              padding: 35,
              border: "1px solid rgba(255,70,70,.18)",
              boxShadow: "0 10px 30px rgba(255,0,0,.08)",
              transition: ".3s",
            }}
          >
            <div
              style={{
                width: 75,
                height: 75,
                borderRadius: 20,
                background:
                  "linear-gradient(135deg,#ff2f2f,#a50000)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                marginBottom: 25,
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: "white",
                fontSize: 24,
                marginBottom: 15,
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#b8b8b8",
                lineHeight: 1.8,
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}