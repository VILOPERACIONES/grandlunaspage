import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[#2a1810] text-amber-50/90">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img src={logo} alt="Grand Lunas Yucatán" className="h-16 w-auto mb-4 brightness-0 invert" />
          <p className="text-xs leading-relaxed opacity-70">
            Residencia boutique para adultos mayores en una hacienda yucateca restaurada, a 25 minutos al norte de Mérida. Hospedaje, cuidado profesional 24/7 y vida sin prisa — para estancias permanentes, temporales y recuperación post-hospitalaria.
          </p>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Sitio</div>
          <ul className="space-y-3 text-xs tracking-[0.2em] uppercase">
            <li><Link to="/nosotros" className="hover:text-terracotta">Nosotros</Link></li>
            <li><Link to="/servicios" className="hover:text-terracotta">Servicios</Link></li>
            <li><Link to="/galeria" className="hover:text-terracotta">Galería</Link></li>
            <li><Link to="/contacto" className="hover:text-terracotta">Contacto</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2 space-y-4 text-xs">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-2">Ubicación</div>
            <p className="opacity-80">Km 4, Samahil-Umán, Yucatán, a unos 15 km del aeropuerto de Mérida y a 60 km de Celestún.</p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-2">E-mail</div>
            <p className="opacity-80">grandlunasyucatan@gmail.com</p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-2">Teléfono</div>
            <p className="opacity-80">+52 999 123 4567</p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-2">Horarios de atención</div>
            <p className="opacity-80">Lunes a Viernes: 9:00am – 5:00pm</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-[11px] opacity-60">
        © Grand Lunas Yucatán 2026 – Diseñado y Desarrollado por Búho Solutions
      </div>
    </footer>
  );
}
