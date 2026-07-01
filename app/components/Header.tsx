"use client";

import { useState } from "react";
import { Ambulance, ChevronDown, Phone } from "lucide-react";
import { siteInfo } from "../data/site";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        background: "rgba(5,5,5,.88)",
        backdropFilter: "blur(22px)",
        borderBottom: "1px solid rgba(255,70,70,.16)",
      }}
    >
      <div
        style={{
          maxWidth: 1450,
          margin: "0 auto",
          padding: "18px 7%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              background: "linear-gradient(135deg,#ff4040,#9b0000)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 15px 35px rgba(255,0,0,.35)",
            }}
          >
            <Ambulance color="white" size={30} />
          </div>

          <div>
            <h2
              style={{
                margin: 0,
                color: "white",
                fontSize: 26,
                fontWeight: 900,
              }}
            >
              {siteInfo.name}
            </h2>

            <p
              style={{
                margin: 0,
                color: "#ff5d5d",
                fontSize: 12,
                letterSpacing: 2,
                fontWeight: 700,
              }}
            >
              {siteInfo.tagline}
            </p>
          </div>
        </a>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          <a href="/" style={linkStyle}>
            Home
          </a>

          <div
            style={menuWrap}
            onMouseEnter={() => setOpenMenu("locations")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span style={linkStyle}>
              Locations <ChevronDown size={14} />
            </span>

            {openMenu === "locations" && (
              <div style={dropdown}>
                <a href="/doctor-sarigerme" style={dropLink}>Doctor Sarigerme</a>
                <a href="/doctor-dalaman" style={dropLink}>Doctor Dalaman</a>
                <a href="/doctor-fethiye" style={dropLink}>Doctor Fethiye</a>
                <a href="/doctor-near-dalaman-airport" style={dropLink}>
                  Near Dalaman Airport
                </a>
              </div>
            )}
          </div>

          <div
            style={menuWrap}
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span style={linkStyle}>
              Services <ChevronDown size={14} />
            </span>

            {openMenu === "services" && (
              <div style={dropdown}>
                <a href="/hotel-doctor" style={dropLink}>Hotel Doctor</a>
                <a href="/emergency-doctor" style={dropLink}>Emergency Doctor</a>
                <a href="/iv-therapy" style={dropLink}>IV Therapy</a>
                <a href="/food-poisoning" style={dropLink}>Food Poisoning</a>
                <a href="/ear-infection" style={dropLink}>Ear Infection</a>
                <a href="/tourist-doctor" style={dropLink}>Tourist Doctor</a>
              </div>
            )}
          </div>

          <a href="#contact" style={linkStyle}>
            Contact
          </a>

          <a
            href={siteInfo.phoneHref}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              background: "linear-gradient(90deg,#ff3434,#a70000)",
              color: "white",
              padding: "14px 24px",
              borderRadius: 999,
              fontWeight: 800,
              boxShadow: "0 14px 34px rgba(255,0,0,.35)",
            }}
          >
            <Phone size={18} />
            Emergency Call
          </a>
        </nav>
      </div>
    </header>
  );
}

const linkStyle = {
  color: "#f4f4f4",
  textDecoration: "none",
  fontSize: 15,
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  gap: 6,
  cursor: "pointer",
};

const menuWrap = {
  position: "relative" as const,
  padding: "22px 0",
};

const dropdown = {
  position: "absolute" as const,
  top: "64px",
  left: "-20px",
  minWidth: 260,
  background: "rgba(12,12,12,.96)",
  border: "1px solid rgba(255,70,70,.18)",
  borderRadius: 20,
  padding: 14,
  display: "grid",
  gap: 6,
  boxShadow: "0 25px 70px rgba(0,0,0,.45)",
};

const dropLink = {
  color: "#e8e8e8",
  textDecoration: "none",
  padding: "12px 14px",
  borderRadius: 12,
  fontSize: 15,
  fontWeight: 600,
};