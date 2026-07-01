"use client";

import { useState } from "react";
import { Ambulance, Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteInfo } from "../data/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="/" className="site-logo">
          <div className="site-logo-icon">
            <Ambulance size={30} />
          </div>

          <div>
            <h2>{siteInfo.name}</h2>
            <p>{siteInfo.tagline}</p>
          </div>
        </a>

        <nav className="desktop-nav">
          <a href="/">Home</a>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setOpenMenu("locations")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span>
              Locations <ChevronDown size={14} />
            </span>

            {openMenu === "locations" && (
              <div className="dropdown-menu">
                <a href="/doctor-sarigerme">Doctor Sarigerme</a>
                <a href="/doctor-dalaman">Doctor Dalaman</a>
                <a href="/doctor-fethiye">Doctor Fethiye</a>
                <a href="/doctor-near-dalaman-airport">
                  Near Dalaman Airport
                </a>
              </div>
            )}
          </div>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span>
              Services <ChevronDown size={14} />
            </span>

            {openMenu === "services" && (
              <div className="dropdown-menu">
                <a href="/hotel-doctor">Hotel Doctor</a>
                <a href="/emergency-doctor">Emergency Doctor</a>
                <a href="/iv-therapy">IV Therapy</a>
                <a href="/food-poisoning">Food Poisoning</a>
                <a href="/ear-infection">Ear Infection</a>
                <a href="/tourist-doctor">Tourist Doctor</a>
              </div>
            )}
          </div>

          <a href="/#contact">Contact</a>

          <a href={siteInfo.phoneHref} className="header-call">
            <Phone size={18} />
            Emergency Call
          </a>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-menu">
          <a onClick={closeMobile} href="/">
            Home
          </a>

          <p>Locations</p>
          <a onClick={closeMobile} href="/doctor-sarigerme">
            Doctor Sarigerme
          </a>
          <a onClick={closeMobile} href="/doctor-dalaman">
            Doctor Dalaman
          </a>
          <a onClick={closeMobile} href="/doctor-fethiye">
            Doctor Fethiye
          </a>
          <a onClick={closeMobile} href="/doctor-near-dalaman-airport">
            Near Dalaman Airport
          </a>

          <p>Services</p>
          <a onClick={closeMobile} href="/hotel-doctor">
            Hotel Doctor
          </a>
          <a onClick={closeMobile} href="/emergency-doctor">
            Emergency Doctor
          </a>
          <a onClick={closeMobile} href="/iv-therapy">
            IV Therapy
          </a>
          <a onClick={closeMobile} href="/food-poisoning">
            Food Poisoning
          </a>
          <a onClick={closeMobile} href="/ear-infection">
            Ear Infection
          </a>
          <a onClick={closeMobile} href="/tourist-doctor">
            Tourist Doctor
          </a>

          <a onClick={closeMobile} href="/#contact">
            Contact
          </a>

          <a onClick={closeMobile} href={siteInfo.phoneHref} className="mobile-call">
            <Phone size={18} />
            Emergency Call
          </a>
        </div>
      )}
    </header>
  );
}