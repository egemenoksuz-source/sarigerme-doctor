"use client";

import { motion } from "framer-motion";
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
    text: "24/7 emergency medical assistance with rapid response across Sarigerme and nearby areas.",
  },
  {
    icon: <House size={44} />,
    title: "Hotel & Home Visit",
    text: "Private medical visits directly to your hotel, villa or holiday home.",
  },
  {
    icon: <Syringe size={44} />,
    title: "IV Therapy",
    text: "Hydration therapy, vitamin support and recovery treatments when medically suitable.",
  },
  {
    icon: <HeartPulse size={44} />,
    title: "Emergency Care",
    text: "Fast assessment and medical assistance for urgent health needs.",
  },
  {
    icon: <Stethoscope size={44} />,
    title: "Medical Consultation",
    text: "Professional consultation for patients, tourists and residents.",
  },
  {
    icon: <TestTube size={44} />,
    title: "Laboratory Tests",
    text: "Blood tests and diagnostic support with reliable follow-up.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background:
          "linear-gradient(180deg,#050505 0%,#0a0a0a 55%,#050505 100%)",
        padding: "120px 8%",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: "center",
          maxWidth: 780,
          margin: "0 auto 80px",
        }}
      >
        <p
          style={{
            color: "#ff5050",
            fontWeight: 800,
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
            fontWeight: 950,
            marginBottom: 25,
            letterSpacing: -2,
          }}
        >
          Fast, Private and
          <br />
          Reliable Medical Care
        </h2>

        <p
          style={{
            color: "#bdbdbd",
            fontSize: 20,
            lineHeight: 1.9,
          }}
        >
          From ambulance support to hotel visits and IV therapy, we provide
          professional medical assistance when patients need it most.
        </p>
      </motion.div>

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
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.015 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            style={{
              position: "relative",
              overflow: "hidden",
              background: "rgba(255,255,255,.045)",
              backdropFilter: "blur(18px)",
              borderRadius: 30,
              padding: 42,
              border: "1px solid rgba(255,70,70,.16)",
              boxShadow: "0 24px 60px rgba(255,0,0,.08)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -70,
                right: -70,
                width: 180,
                height: 180,
                borderRadius: "50%",
                background: "#ff1a1a",
                opacity: 0.08,
                filter: "blur(65px)",
              }}
            />

            <div
              style={{
                width: 86,
                height: 86,
                borderRadius: 24,
                background: "linear-gradient(135deg,#ff3d3d,#8f0000)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                marginBottom: 32,
                boxShadow: "0 18px 40px rgba(255,0,0,.35)",
              }}
            >
              {service.icon}
            </div>

            <h3
              style={{
                color: "white",
                fontSize: 29,
                marginBottom: 18,
                letterSpacing: -0.5,
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                color: "#c7c7c7",
                lineHeight: 1.9,
                fontSize: 17,
              }}
            >
              {service.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}