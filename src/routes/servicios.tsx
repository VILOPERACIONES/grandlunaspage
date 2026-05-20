import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { Clock, Mail, Star, Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Grand Lunas Yucatán" },
      { name: "description", content: "Hospedaje permanente, estancia temporal y recuperación post-hospitalaria en hacienda boutique." },
    ],
  }),
  component: ServiciosPage,
});

const services = [
  {
    n: "01",
    t: "Residencia Permanente",
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    d: "Diseñada para adultos mayores que buscan un hogar definitivo en un entorno seguro y tranquilo. Aquí cada residente mantiene su vida social activa, disfruta de privacidad y libertad, y recibe la atención integral que un verdadero hogar puede ofrecer.",
    f: ["Atención integral 24/7", "Ambiente seguro y tranquilo", "Vida social activa"],
  },
  {
    n: "02",
    t: "Estancia Temporal",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    d: "Hospedaje por días, semanas o meses para quien necesita alojamiento por un viaje familiar, una cirugía programada o cualquier situación imprevista. Durante la estancia, el huésped disfruta de todos los servicios de la residencia permanente.",
    f: ["Ideal para estancias cortas", "Todos los servicios incluidos", "Alojamiento seguro y flexible"],
  },
  {
    n: "03",
    t: "Recuperación Post-Hospitalaria",
    img: "https://images.unsplash.com/photo-1564540583246-934409427776?w=800&q=80",
    d: "Servicio especializado para adultos que salen de una cirugía, enfermedad o accidente y necesitan cuidados post-operatorios en un entorno tranquilo. Las instalaciones están adaptadas para el descanso, la atención especializada y el acompañamiento.",
    f: ["Espacio adaptado y seguro", "Cuidados tras cirugía o enfermedad", "Acompañamiento profesional"],
  },
];

const faqs = [
  { q: "¿Cuál es el proceso para ingresar a Grand-Lunas?", a: "Iniciamos con una visita o llamada para conocer la situación de la persona y la familia, seguido de una valoración médica y una propuesta personalizada." },
  { q: "¿Cuánto tiempo dura una estancia típica?", a: "Desde unos pocos días en recuperación post-hospitalaria hasta estancias permanentes. Cada plan se diseña a medida." },
  { q: "¿Atienden a un perfil específico de adulto mayor?", a: "Recibimos adultos mayores autosuficientes y con distintos grados de dependencia. Evaluamos caso por caso." },
  { q: "¿Puede recibir a alguien por sólo unos días o fin de semana?", a: "Sí. Las estancias cortas y de fin de semana son una de nuestras especialidades." },
  { q: "¿Manejan ustedes la coordinación con el equipo médico?", a: "Sí. Coordinamos con médicos, especialistas y terapeutas — internos y externos — según las necesidades del residente." },
];

function ServiciosPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-terracotta text-terracotta-foreground py-20 px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase mb-5 opacity-80">Nuestros servicios</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-6 italic">Cuidar es nuestra forma de hospedar.</h1>
        <p className="max-w-2xl mx-auto text-sm leading-relaxed opacity-90">
          Grand Lunas Yucatán es la residencia premium boutique para adultos mayores en una hacienda yucateca restaurada al norte de Mérida. Ofrecemos hospedaje de lujo, cuidado integral 24/7 y acompañamiento profesional con la tranquilidad de un hogar y la calidez de un equipo que aprende los nombres, los gustos y las rutinas de cada residente.
        </p>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-ink/50 mb-4">¿Por qué elegir Grand Lunas Yucatán?</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              Una Residencia Premium<br /><span className="italic">Donde nada falta</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 border-t border-ink/10 pt-12">
            {services.map((s) => (
              <article key={s.n}>
                <div className="aspect-[4/3] overflow-hidden mb-5">
                  <img src={s.img} alt={s.t} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-xs text-ink/40">{s.n}</span>
                  <h3 className="font-serif text-2xl text-ink">{s.t}</h3>
                </div>
                <p className="text-sm text-ink/70 leading-relaxed mb-6">{s.d}</p>
                <ul className="space-y-3 text-xs tracking-[0.2em] uppercase text-ink/70">
                  <li className="flex items-center gap-3"><Clock className="size-4 text-terracotta" /> {s.f[0]}</li>
                  <li className="flex items-center gap-3"><Mail className="size-4 text-terracotta" /> {s.f[1]}</li>
                  <li className="flex items-center gap-3"><Star className="size-4 text-terracotta" /> {s.f[2]}</li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl bg-cream p-12 text-center">
          <p className="text-sm text-ink/70 leading-relaxed mb-6">
            Desde el descanso pausado de una hacienda restaurada hasta la atención profesional cuando se necesita, cada detalle de Grand-Lunas está diseñado para cuidar y para hospedar.
          </p>
          <div className="h-px bg-ink/10 my-6" />
          <p className="font-serif text-xl text-ink mb-6">Vive la experiencia Grand-Lunas</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[11px] tracking-[0.25em] uppercase text-ink/70">
            <span>■ Cultura e historia</span>
            <span>■ Hacienda histórica</span>
            <span>■ A 20 mins de Mérida</span>
            <span>■ 12 recámaras privadas</span>
            <span>■ 8 áreas comunes</span>
            <span>■ Atención 24/7</span>
          </div>
        </div>
      </section>

      <section className="bg-terracotta text-terracotta-foreground py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-4 opacity-70">Preguntas Frecuentes</p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-wider uppercase">Lo que más nos preguntan</h2>
          </div>
          <div className="space-y-1">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-white/20">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left text-sm">
                  <span>{f.q}</span>
                  <Plus className={`size-4 transition-transform ${open === i ? "rotate-45" : ""}`} />
                </button>
                {open === i && <p className="pb-5 text-sm opacity-90 leading-relaxed">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
