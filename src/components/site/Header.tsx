import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-dark.png";

export function Header() {
  const navLink =
    "text-xs tracking-[0.2em] uppercase text-ink/80 hover:text-terracotta transition-colors";
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Grand Lunas Yucatán" className="h-14 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/nosotros" className={navLink} activeProps={{ className: "text-terracotta" }}>Nosotros</Link>
          <Link to="/servicios" className={navLink} activeProps={{ className: "text-terracotta" }}>Servicios</Link>
          <Link to="/galeria" className={navLink} activeProps={{ className: "text-terracotta" }}>Galería</Link>
        </nav>
        <Link
          to="/contacto"
          className="bg-terracotta text-terracotta-foreground px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-terracotta/90 transition-colors"
        >
          Contacto
        </Link>
      </div>
    </header>
  );
}
