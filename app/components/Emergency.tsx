export default function Emergency() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg,#0d0d0d 0%,#1b0000 45%,#6b0000 100%)",
        padding: "110px 8%",
      }}
    >
      <div
        style={{
          maxWidth: 1300,
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#ff5858",
              fontWeight: 700,
              letterSpacing: 3,
              marginBottom: 18,
            }}
          >
            24/7 EMERGENCY SERVICE
          </p>

          <h2
            style={{
              color: "white",
              fontSize: 54,
              lineHeight: 1.1,
              marginBottom: 25,
            }}
          >
            Need an Ambulance
            <br />
            Right Now?
          </h2>

          <p
            style={{
              color: "#d8d8d8",
              fontSize: 19,
              lineHeight: 1.9,
              marginBottom: 40,
            }}
          >
            Our experienced emergency team is available 24 hours a day.
            We provide rapid medical response, hotel visits,
            home visits and ambulance transportation throughout
            Sarigerme, Dalaman and Ortaca.
          </p>

          <div
            style={{
              display: "flex",
              gap: 25,
              flexWrap: "wrap",
              marginBottom: 45,
            }}
          >
            <div
              style={{
                background: "#1b1b1b",
                padding: 25,
                borderRadius: 18,
                minWidth: 170,
                border: "1px solid rgba(255,80,80,.2)",
              }}
            >
              <h3
                style={{
                  color: "#ff4d4d",
                  fontSize: 42,
                  margin: 0,
                }}
              >
                24/7
              </h3>

              <p
                style={{
                  color: "#ddd",
                  marginTop: 10,
                }}
              >
                Emergency Service
              </p>
            </div>

            <div
              style={{
                background: "#1b1b1b",
                padding: 25,
                borderRadius: 18,
                minWidth: 170,
                border: "1px solid rgba(255,80,80,.2)",
              }}
            >
              <h3
                style={{
                  color: "#ff4d4d",
                  fontSize: 42,
                  margin: 0,
                }}
              >
                15 min
              </h3>

              <p
                style={{
                  color: "#ddd",
                  marginTop: 10,
                }}
              >
                Average Arrival
              </p>
            </div>
          </div>

          <button
            style={{
              background:
                "linear-gradient(90deg,#ff2d2d,#a30000)",
              color: "white",
              border: "none",
              padding: "18px 45px",
              borderRadius: 50,
              fontSize: 20,
              cursor: "pointer",
              fontWeight: 700,
              boxShadow: "0 15px 40px rgba(255,0,0,.35)",
            }}
          >
            📞 Call Emergency
          </button>
        </div>

        <div>
          <img
            src="/ambulance.png"
            alt="Ambulance"
            style={{
              width: "100%",
              borderRadius: 30,
              display: "block",
              boxShadow: "0 25px 60px rgba(255,0,0,.35)",
            }}
          />
        </div>
      </div>
    </section>
  );
}