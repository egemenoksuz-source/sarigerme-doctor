"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ShieldCheck, Clock3, MapPin } from "lucide-react";
import { siteInfo } from "../data/site";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 78% 20%, rgba(255,0,45,.45), transparent 30%), linear-gradient(135deg,#020202 0%,#120000 45%,#000 100%)",
        display: "flex",
        alignItems: "center",
        padding: "150px 7% 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.22, scale: 1 }}
        transition={{ duration: 1.6 }}
        style={{
          position: "absolute",
          right: -160,
          top: 80,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "#ff002f",
          filter: "blur(140px)",
        }}
      />

      <div
        style={{
          maxWidth: 1450,
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.08fr",
          gap: 70,
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "11px 18px",
              borderRadius: 999,
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,70,70,.22)",
              color: "#ff6b6b",
              fontWeight: 800,
              letterSpacing: 2,
              fontSize: 13,
              marginBottom: 28,
            }}
          >
            <ShieldCheck size={18} />
            24/7 EMERGENCY MEDICAL SERVICE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            style={{
              color: "white",
              fontSize: 88,
              lineHeight: 0.95,
              margin: 0,
              fontWeight: 950,
              letterSpacing: -3,
            }}
          >
            Emergency
            <br />
            Medical Care
            <br />
            in Sarigerme
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            style={{
              color: "#d4d4d4",
              fontSize: 22,
              lineHeight: 1.75,
              maxWidth: 650,
              marginTop: 32,
            }}
          >
            24/7 ambulance service, hotel visits, IV therapy and emergency
            medical assistance for patients in Sarigerme, Dalaman and nearby areas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            style={{
              display: "flex",
              gap: 18,
              marginTop: 44,
              flexWrap: "wrap",
            }}
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              href={siteInfo.phoneHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "linear-gradient(90deg,#ff3333,#a80000)",
                color: "white",
                textDecoration: "none",
                padding: "18px 34px",
                borderRadius: 999,
                fontWeight: 850,
                fontSize: 18,
                boxShadow: "0 22px 55px rgba(255,0,0,.38)",
              }}
            >
              <Phone size={21} />
              Call Emergency
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              href={siteInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "white",
                textDecoration: "none",
                padding: "18px 34px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.18)",
                background: "rgba(255,255,255,.055)",
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              <MessageCircle size={21} />
              WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(130px, 1fr))",
              gap: 18,
              marginTop: 58,
              maxWidth: 670,
            }}
          >
            {[
              { icon: <Clock3 size={24} />, value: "24/7", label: "Available" },
              { icon: <MapPin size={24} />, value: "15 min", label: "Avg. arrival" },
              { icon: <ShieldCheck size={24} />, value: "5000+", label: "Patients" },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{
                  background: "rgba(255,255,255,.055)",
                  border: "1px solid rgba(255,70,70,.18)",
                  borderRadius: 22,
                  padding: 22,
                  backdropFilter: "blur(18px)",
                }}
              >
                <div style={{ color: "#ff4d4d", marginBottom: 12 }}>
                  {item.icon}
                </div>
                <h3 style={{ color: "white", fontSize: 30, margin: 0 }}>
                  {item.value}
                </h3>
                <p style={{ color: "#bdbdbd", margin: "6px 0 0" }}>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 720,
          }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/ambulance.png"
              alt="Emergency ambulance service in Sarigerme"
              width={1300}
              height={900}
              priority
              style={{
                width: "118%",
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 40px 85px rgba(255,0,0,.42))",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}