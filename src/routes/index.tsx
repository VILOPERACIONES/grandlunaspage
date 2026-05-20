import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { MessageCircle, Wifi, Utensils, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grand Lunas Yucatán — Residencia boutique para adultos mayores" },
      { name: "description", content: "Hacienda yucateca restaurada al norte de Mérida. Hospedaje, cuidado profesional 24/7 y vida sin prisa." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section
        className="relative h-[88vh] min-h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=1920&q=80')",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <p className="text-xs tracking-[0.4em] uppercase mb-6 opacity-90">Hacienda Santa María Batzán</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            El tiempo merece ser vivido, con calma.<br />
            <span className="italic">Vive en Yucatán, vive sin prisa.</span>
          </h1>
          <a
            href="https://wa.me/529991234567"
            className="inline-flex items-center gap-2 bg-terracotta px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-terracotta/90 transition-colors"
          >
            <MessageCircle className="size-4" /> Escríbenos por WhatsApp
          </a>
        </div>
      </section>

      {/* Terracotta intro */}
      <section className="bg-terracotta text-terracotta-foreground py-24 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs tracking-[0.4em] uppercase mb-6 opacity-80">Una casa con historia</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-snug">
            Más de cien años de vida hacendaria, hoy abiertos como hogar para adultos mayores que merecen una vejez serena, digna y acompañada.
          </h2>
        </div>
      </section>

      {/* Hospitalidad */}
      <section className="py-24 px-6 bg-cream">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-terracotta mb-4">Hospitalidad</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6">
              Una hacienda <span className="italic">restaurada con alma</span>
            </h2>
            <p className="text-ink/70 leading-relaxed mb-8">
              GrandLunas Yucatán es la residencia boutique para adultos mayores en una hacienda yucateca restaurada al norte de Mérida. Acompañamos cada día con cocina yucateca casera, cuidado profesional 24/7 y la calma que solo da el campo henequenero.
            </p>
            <div className="space-y-4">
              <Feature icon={<ShieldCheck className="size-5" />} title="Cuidado 24/7" text="Equipo profesional de enfermería siempre disponible." />
              <Feature icon={<Utensils className="size-5" />} title="Cocina yucateca casera" text="Recetas tradicionales con productos de la región." />
              <Feature icon={<Wifi className="size-5" />} title="Conectividad" text="WiFi, llamadas y videollamadas con la familia." />
            </div>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1564540583246-934409427776?w=900&q=80" alt="Corredor de hacienda" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Premium reasons */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-6xl text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-terracotta mb-4">¿Por qué elegir Grand Lunas Yucatán?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Una Residencia Premium<br /><span className="italic">Donde nada falta</span>
          </h2>
        </div>
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80", n: "01", t: "Cuidado Profesional", d: "Atención integral disponible bajo demanda con un equipo médico humano y atento." },
            { img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80", n: "02", t: "Talleres y experiencias", d: "Cocina, acuarela, lectura en voz alta y pláticas con artistas locales." },
            { img: "https://images.unsplash.com/photo-1564540583246-934409427776?w=800&q=80", n: "03", t: "Lejos del caos", d: "A 20 minutos de Mérida pero suficientemente cerca de hospitales y clínicas." },
          ].map((c) => (
            <article key={c.n}>
              <div className="aspect-[4/3] overflow-hidden mb-5">
                <img src={c.img} alt={c.t} className="w-full h-full object-cover" />
              </div>
              <div className="text-xs text-ink/40 mb-2">{c.n}</div>
              <h3 className="font-serif text-2xl text-ink mb-3">{c.t}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{c.d}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-4">
      <div className="size-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <div className="font-serif text-lg text-ink">{title}</div>
        <div className="text-sm text-ink/60">{text}</div>
      </div>
    </div>
  );
}
