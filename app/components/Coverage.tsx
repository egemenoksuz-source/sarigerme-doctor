import { MapPin, Ambulance } from "lucide-react";

const areas = [
  {
    city: "Sarigerme",
    text: "24/7 emergency doctor and ambulance service.",
  },
  {
    city: "Dalaman",
    text: "Fast medical response for hotels and airport area.",
  },
  {
    city: "Ortaca",
    text: "Professional healthcare and home visits.",
  },
  {
    city: "Göcek",
    text: "Emergency medical assistance for villas and marinas.",
  },
  {
    city: "Dalyan",
    text: "Doctor visits and ambulance transportation.",
  },
  {
    city: "Akyaka",
    text: "Medical support for tourists and local residents.",
  },
];

export default function Coverage() {
  return (
    <section
      style={{
        background: "#050505",
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
            color: "#ff4040",
            letterSpacing: 3,
            fontWeight: 700,
          }}
        >
          COVERAGE AREA
        </p>

        <h2
          style={{
            color: "white",
            fontSize: 48,
            marginTop: 15,
            marginBottom: 20,
          }}
        >
          Areas We Serve
        </h2>

        <p
          style={{
            color: "#bfbfbf",
            maxWidth: 700,
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          We provide rapid emergency medical services throughout the region with
          experienced English-speaking doctors and fully equipped ambulances.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 30,
        }}
      >
        {areas.map((area, index) => (
          <div
            key={index}
            style={{
              background: "#141414",
              borderRadius: 24,
              padding: 35,
              border: "1px solid rgba(255,60,60,.18)",
              boxShadow: "0 10px 30px rgba(255,0,0,.08)",
            }}
          >
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: 18,
                background:
                  "linear-gradient(135deg,#ff3a3a,#a80000)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                marginBottom: 25,
              }}
            >
              <MapPin size={34} />
            </div>

            <h3
              style={{
                color: "white",
                fontSize: 26,
                marginBottom: 15,
              }}
            >
              {area.city}
            </h3>

            <p
              style={{
                color: "#c5c5c5",
                lineHeight: 1.8,
                marginBottom: 25,
              }}
            >
              {area.text}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#ff5050",
                fontWeight: 700,
                gap: 10,
              }}
            >
              <Ambulance size={20} />
              24/7 Available
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}