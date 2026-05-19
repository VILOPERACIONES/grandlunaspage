import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Wifi, Utensils, ShieldCheck, ChevronLeft, ChevronRight, Plus } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Grand Lunas — Hospitalidad de lujo en una hacienda restaurada en Yucatán" },
      {
        name: "description",
        content:
          "Vive Yucatán sin prisa en una hacienda restaurada con historia. Habitaciones, áreas comunes y experiencias únicas en Grand Lunas.",
      },
      { property: "og:title", content: "Grand Lunas — Hacienda en Yucatán" },
      { property: "og:description", content: "El tiempo merece ser vivido, con calma. Vive en Yucatán, vive sin prisa." },
    ],
  }),
});

const HERO = "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1800&q=80";
const CORRIDOR = "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1400&q=80";
const TURQUOISE = "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1800&q=80";
const POOL = "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80";
const ROOM = "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80";
const LIVING = "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80";
const DINING = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80";
const ARCH = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=80";
const PRIVACY = "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1100&q=80";
const BATH = "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1100&q=80";
const WELLNESS = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=80";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`flex items-center gap-2 font-serif ${light ? "text-cream" : "text-forest"}`}>
      <div className={`w-9 h-9 rounded-full border-2 ${light ? "border-cream" : "border-forest"} flex items-center justify-center text-[10px] tracking-widest`}>
        GL
      </div>
      <div className="leading-tight">
        <div className="text-lg tracking-[0.25em] font-medium">GRAND LUNAS</div>
        <div className="text-[10px] tracking-[0.3em] opacity-70 -mt-0.5">HACIENDA · YUCATÁN</div>
      </div>
    </div>
  );
}

function Index() {
  const nav = ["Inicio", "La Hacienda", "Experiencias", "Galería", "Contacto"];

  return (
    <main className="font-sans text-ink bg-cream">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-ink/80">
            {nav.map((n) => (
              <a key={n} href="#" className="hover:text-terracotta transition-colors">{n}</a>
            ))}
          </nav>
          <a href="#contacto" className="bg-terracotta text-terracotta-foreground px-5 py-2.5 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition">
            Reservar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[92vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden pt-16">
        <img src={HERO} alt="Fachada de la Hacienda Grand Lunas en Yucatán" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        <div className="relative max-w-3xl px-6">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-6 opacity-90">— Bienvenido —</p>
          <h1 className="font-serif italic text-4xl md:text-6xl leading-tight mb-10">
            El tiempo merece ser vivido, con calma.
            <br />
            Vive en Yucatán, vive sin prisa.
          </h1>
          <a href="#contacto" className="inline-block bg-cream text-ink px-8 py-3 text-xs tracking-[0.3em] uppercase hover:bg-white transition">
            Conoce más
          </a>
        </div>
        <a
          href="#"
          aria-label="WhatsApp"
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </section>

      {/* Terracotta intro */}
      <section className="bg-terracotta text-terracotta-foreground py-20 px-6 text-center">
        <p className="text-[11px] tracking-[0.4em] uppercase mb-6 opacity-80">— Nuestra esencia —</p>
        <h2 className="font-serif italic text-2xl md:text-3xl max-w-3xl mx-auto mb-6">
          Una vez está con historia. Un cuidado con propósito.
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed opacity-90">
          Grand Lunas es una hacienda yucateca restaurada con respeto por sus piedras y su gente. Recibimos a quienes
          buscan descanso verdadero, conexión con la tierra y momentos que no se olvidan. Aquí se vive despacio, se come
          bien y se respira el silencio de los grandes patios.
        </p>
      </section>

      {/* Hospitalidad */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-terracotta mb-4">— Sobre la hacienda —</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              Hospitalidad De Lujo En
              <br />
              Una <em className="italic text-terracotta">Hacienda Restaurada</em>
            </h2>
            <p className="text-ink/70 leading-relaxed mb-8 max-w-md">
              Cada rincón conserva el alma del henequén: arcos de cal, techos de viga, frescos patios y jardines
              perfumados. Hospedarte aquí es habitar un pedazo vivo de la historia de Yucatán con todas las comodidades
              de hoy.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-terracotta/10 border border-terracotta/30 flex items-center justify-center">
                <span className="font-serif text-terracotta text-xs tracking-widest text-center leading-tight">GRAND<br />LUNAS</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-terracotta" /> Anfitriones residentes</div>
                <div className="flex items-center gap-3"><Utensils className="w-4 h-4 text-terracotta" /> Cocina yucateca de autor</div>
                <div className="flex items-center gap-3"><Wifi className="w-4 h-4 text-terracotta" /> Conectividad y confort</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={CORRIDOR} alt="Corredor con arcos de la hacienda" className="w-full aspect-[4/5] object-cover rounded-sm" />
          </div>
        </div>
      </section>

      {/* Carousel-like gallery */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <img src={TURQUOISE} alt="Pasillo turquesa" className="col-span-2 w-full h-[60vh] object-cover" />
          <img src={POOL} alt="Alberca de la hacienda" className="w-full h-[60vh] object-cover" />
        </div>
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white">
          <ChevronRight className="w-5 h-5" />
        </button>
      </section>

      {/* Olive section */}
      <section className="bg-olive text-olive-foreground py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif italic text-3xl md:text-4xl mb-10">La hacienda, en cada rincón.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: ROOM, title: "Recámaras y suites", desc: "Espacios serenos con altos techos, ventiladores de viga y ropa de cama natural." },
              { img: LIVING, title: "Áreas comunes", desc: "Patios, corredores y salones donde la luz cambia con las horas del día." },
              { img: DINING, title: "Áreas de comida", desc: "Mesas largas para compartir cocina regional y desayunos junto al jardín." },
            ].map((c) => (
              <article key={c.title} className="space-y-3">
                <img src={c.img} alt={c.title} className="w-full aspect-[4/3] object-cover" />
                <h3 className="font-serif text-xl">{c.title}</h3>
                <p className="text-xs opacity-90 leading-relaxed">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Residencia premium */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-terracotta mb-4">— Lo que hace única tu estancia —</p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Una Residencia Premium
            <br />
            Donde <em className="italic text-terracotta">nada falta</em>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {[
            {
              t: "ARQUITECTURA Y LEGADO",
              d: "Cada arco, viga y muro fue restaurado conservando técnicas tradicionales yucatecas. Materiales nobles y artesanía local conviven con el confort contemporáneo.",
              img: ARCH,
            },
            {
              t: "PRIVACIDAD Y PERTENENCIA",
              d: "Reservas la hacienda completa: nada de pasillos compartidos ni vecinos desconocidos. Solo tu gente, tus tiempos y la libertad de habitarla como casa propia.",
              img: PRIVACY,
            },
            {
              t: "UNA VACACIÓN CON BAÑO PROPIO",
              d: "Cada habitación tiene baño en suite con regaderas amplias, amenidades naturales y vistas a los patios. Privacidad sin sacrificar el carácter del lugar.",
              img: BATH,
            },
            {
              t: "SALUD Y BIENESTAR TODOS LOS DÍAS",
              d: "Desayunos frescos, jugos de la región, espacio para yoga, alberca, y rutinas de cuidado pensadas para que vuelvas mejor de como llegaste.",
              img: WELLNESS,
            },
          ].map((row) => (
            <div key={row.t} className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-serif tracking-[0.2em] text-sm mb-4">{row.t}</h3>
                <p className="text-ink/70 text-sm leading-relaxed max-w-md">{row.d}</p>
              </div>
              <img src={row.img} alt={row.t} className="w-full aspect-[5/3] object-cover rounded-sm" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-terracotta text-terracotta-foreground py-24 px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[11px] tracking-[0.4em] uppercase opacity-80 mb-4">— Preguntas frecuentes —</p>
          <h2 className="font-serif text-4xl md:text-5xl">LO QUE MÁS NOS PREGUNTAN</h2>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-cream/20">
          {[
            "¿Qué incluye el alojamiento?",
            "¿Cuántas personas se pueden hospedar a la vez?",
            "¿Se puede reservar la hacienda completa?",
            "¿Sirven comidas o bebidas?",
            "¿Cuál es el proceso para reservar y confirmar?",
          ].map((q) => (
            <details key={q} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none text-sm">
                <span>{q}</span>
                <Plus className="w-4 h-4 transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-sm opacity-80 leading-relaxed">
                Con gusto te compartimos los detalles por mensaje directo o correo. Escríbenos y un anfitrión te
                responde el mismo día.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[0.4em] uppercase text-terracotta mb-4">— Contacto —</p>
            <h2 className="font-serif text-4xl md:text-5xl">Cuéntanos qué buscas.</h2>
            <p className="text-ink/60 text-sm mt-4">Responde un par de datos y te escribimos con disponibilidad y experiencias.</p>
          </div>

          <form className="grid md:grid-cols-2 gap-5 text-sm">
            <Field label="Nombre completo" placeholder="Ej. María Solís" />
            <Field label="Correo electrónico" placeholder="tu@correo.com" type="email" />
            <Field label="Teléfono / WhatsApp" placeholder="+52 ..." />
            <div>
              <label className="block text-[11px] tracking-[0.2em] uppercase text-ink/60 mb-2">Tipo de estancia</label>
              <select className="w-full bg-transparent border-b border-ink/20 py-2 outline-none focus:border-terracotta">
                <option>Selecciona una opción</option>
                <option>Fin de semana</option>
                <option>Semana completa</option>
                <option>Evento privado</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-[11px] tracking-[0.2em] uppercase text-ink/60 mb-2">Mensaje</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-ink/20 py-2 outline-none focus:border-terracotta resize-none" placeholder="Cuéntanos fechas, número de personas y lo que te gustaría vivir." />
            </div>
            <label className="md:col-span-2 flex items-start gap-3 text-xs text-ink/60">
              <input type="checkbox" className="mt-1 accent-terracotta" />
              <span>He leído y acepto el aviso de privacidad y los términos de contacto.</span>
            </label>
            <button type="button" className="md:col-span-2 justify-self-start bg-terracotta text-terracotta-foreground px-8 py-3 text-xs tracking-[0.3em] uppercase hover:opacity-90 transition">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest text-forest-foreground py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
          <div className="space-y-4">
            <Logo light />
            <p className="text-xs opacity-70 leading-relaxed">
              Hacienda restaurada en el corazón de Yucatán. Hospitalidad de autor para descansar sin prisa.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase mb-4 opacity-70">Navegación</h4>
            <ul className="space-y-2">
              {nav.map((n) => <li key={n}><a href="#" className="hover:text-terracotta">{n}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase mb-4 opacity-70">Contacto</h4>
            <ul className="space-y-2 opacity-80">
              <li>hola@grandlunas.mx</li>
              <li>+52 999 000 0000</li>
              <li>Carretera Mérida–Izamal, Yucatán</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase mb-4 opacity-70">Síguenos</h4>
            <ul className="space-y-2 opacity-80">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-cream/10 text-[11px] opacity-60 flex flex-col md:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} Grand Lunas Hacienda. Todos los derechos reservados.</span>
          <span>Aviso de privacidad · Términos</span>
        </div>
      </footer>
    </main>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.2em] uppercase text-ink/60 mb-2">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full bg-transparent border-b border-ink/20 py-2 outline-none focus:border-terracotta placeholder:text-ink/30" />
    </div>
  );
}
