"use client";

import { motion } from "framer-motion";
import { Users, Clock3, ShieldCheck, HeartPulse } from "lucide-react";

const stats = [
  {
    icon: <Users size={40} />,
    number: "5000+",
    title: "Patients Assisted",
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
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            style={{
              position: "relative",
              overflow: "hidden",
              background: "rgba(255,255,255,.045)",
              backdropFilter: "blur(18px)",
              border: "1px solid rgba(255,70,70,.16)",
              borderRadius: 30,
              padding: "42px 30px",
              textAlign: "center",
              boxShadow: "0 24px 55px rgba(255,0,0,.08)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 160,
                height: 160,
                borderRadius: "50%",
                background: "#ff1f1f",
                opacity: 0.08,
                filter: "blur(60px)",
              }}
            />

            <div
              style={{
                width: 82,
                height: 82,
                margin: "0 auto 26px",
                borderRadius: 24,
                background: "linear-gradient(135deg,#ff3b3b,#8f0000)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                boxShadow: "0 18px 40px rgba(255,0,0,.35)",
              }}
            >
              {item.icon}
            </div>

            <h2
              style={{
                color: "#ff4d4d",
                fontSize: 56,
                margin: 0,
                fontWeight: 950,
                letterSpacing: -1.5,
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}