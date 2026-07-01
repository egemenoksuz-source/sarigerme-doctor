import {
  Users,
  Clock3,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

const stats = [
  {
    icon: <Users size={40} />,
    number: "5000+",
    title: "Happy Patients",
  },
  {
    icon: <Clock3 size={40} />,
    number: "24/7",
    title: "Emergency Service",
  },
  {
    icon: <ShieldCheck size={40} />,
    number: "15+",
    title: "Years Experience",
  },
  {
    icon: <HeartPulse size={40} />,
    number: "98%",
    title: "Patient Satisfaction",
  },
];

export default function Stats() {
  return (
    <section
      style={{
        background: "#050505",
        padding: "100px 8%",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 30,
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              background: "rgba(255,255,255,.04)",
              backdropFilter: "blur(18px)",
              border: "1px solid rgba(255,70,70,.15)",
              borderRadius: 28,
              padding: "40px 30px",
              textAlign: "center",
              boxShadow: "0 20px 45px rgba(255,0,0,.08)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 150,
                height: 150,
                borderRadius: "50%",
                background: "#ff1f1f",
                opacity: .08,
                filter: "blur(60px)",
              }}
            />

            <div
              style={{
                width: 80,
                height: 80,
                margin: "0 auto 25px",
                borderRadius: 22,
                background:
                  "linear-gradient(135deg,#ff3b3b,#980000)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                boxShadow: "0 15px 35px rgba(255,0,0,.35)",
              }}
            >
              {item.icon}
            </div>

            <h2
              style={{
                color: "#ff4d4d",
                fontSize: 54,
                margin: 0,
                fontWeight: 900,
              }}
            >
              {item.number}
            </h2>

            <p
              style={{
                color: "#d2d2d2",
                marginTop: 14,
                fontSize: 18,
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}