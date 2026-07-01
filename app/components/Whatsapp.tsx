export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/905519354800"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: 25,
        bottom: 25,
        width: 65,
        height: 65,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textDecoration: "none",
        fontSize: 34,
        fontWeight: "bold",
        boxShadow: "0 12px 30px rgba(0,0,0,.35)",
        zIndex: 9999,
        transition: ".3s",
      }}
    >
      💬
    </a>
  );
}