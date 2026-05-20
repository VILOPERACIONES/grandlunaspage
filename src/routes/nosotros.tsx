import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { Home, Bed, MapPin, Building2, ShieldCheck, Play } from "lucide-react";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Grand Lunas Yucatán" },
      { name: "description", content: "Conoce la historia de Hacienda Santa María Batzán y la residencia Grand Lunas." },
    ],
  }),
  component: NosotrosPage,
});

const stats = [
  { icon: <Home className="size-5" />, label: "Desde 1916" },
  { icon: <Bed className="size-5" />, label: "12 Habitaciones" },
  { icon: <MapPin className="size-5" />, label: "25 min de Mérida" },
  { icon: <Building2 className="size-5" />, label: "8 Áreas comunes" },
  { icon: <ShieldCheck className="size-5" />, label: "24/7 Atención" },
];

const cards = [
  { n: "01", t: "Cuidado Profesional", img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80", d: "Atención integral de salud bajo demanda: equipo médico y de enfermería. Acompañamos sin infantilizar la autonomía del huésped." },
  { n: "02", t: "Talleres y experiencias", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80", d: "Programa rotativo abierto a huéspedes y visitantes externos: cocina yucateca, acuarela, escritura, lectura en voz alta y plática con artistas." },
  { n: "03", t: "Lejos del caos", img: "https://images.unsplash.com/photo-1564540583246-934409427776?w=800&q=80", d: "A 20 minutos de Mérida y a menos de 15 del aeropuerto, en un poblado de tradición henequenera. Cerca de hospitales pero lejos del ruido." },
  { n: "04", t: "Calidad de vida", img: "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&q=80", d: "Los huéspedes que se quedan más de unos días suelen contarnos lo mismo: empezar a dormir mejor, leer otra vez, recuperar conversaciones largas." },
  { n: "05", t: "El despertar", img: "https://images.unsplash.com/photo-1564540583246-934409427776?w=800&q=80", d: "A las 6:30 los cardenales, chachalacas y el toh — el pájaro reloj de Yucatán — cantan en el flamboyán del patio principal." },
  { n: "06", t: "La filosofía", img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80", d: "Aquí no hay prisa. No hay timbres ni horarios estrictos, ni listas de actividades obligatorias. Los días empiezan cuando el cuerpo lo pide." },
];

function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-terracotta text-terracotta-foreground py-20 px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase mb-5 opacity-80">Hacienda Santa María Batzán</p>
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Nuestra casa</h1>
        <p className="max-w-2xl mx-auto text-sm leading-relaxed opacity-90">
          Donde hoy se levanta Grand Lunas Yucatán, hubo primero un casco henequenero de finales del siglo XIX. Cada arco de medio punto, cada bóveda catalana, cada piso de pasta amarillo henequén guarda esa memoria — hoy restaurada con acabados de lujo y el confort de un hotel boutique.
        </p>
      </section>

      <section className="bg-cream py-10 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/60 p-6 flex flex-col items-center text-center">
              <div className="text-terracotta mb-3">{s.icon}</div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-ink/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative aspect-[16/8] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=1920&q=80')" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="size-20 rounded-full bg-white/90 flex items-center justify-center">
            <Play className="size-7 text-terracotta fill-terracotta ml-1" />
          </button>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-ink/50 mb-4">¿Por qué elegir Grand Lunas Yucatán?</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              Una Residencia Premium<br /><span className="italic">Donde nada falta</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {cards.map((c) => (
              <article key={c.n}>
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img src={c.img} alt={c.t} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-xs text-ink/40">{c.n}</span>
                  <h3 className="font-serif text-xl text-ink">{c.t}</h3>
                </div>
                <p className="text-sm text-ink/70 leading-relaxed">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="aspect-[16/10] overflow-hidden mb-6">
            <img src="https://images.unsplash.com/photo-1631049035182-249067d7618e?w=1200&q=80" alt="Biblioteca" className="w-full h-full object-cover" />
          </div>
          <p className="italic text-terracotta font-serif text-2xl mb-6">Somos tu tercer hogar</p>
          <p className="text-sm text-ink/70 leading-relaxed">
            Nos enorgullece construir vínculos largos con quienes confían en nosotros. La transparencia, la palabra cumplida y la cercanía son la base de cómo trabajamos. Cada conversación con un huésped o con su familia es la oportunidad de afinar el cuidado y de hacer de la hacienda un lugar verdaderamente suyo.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
