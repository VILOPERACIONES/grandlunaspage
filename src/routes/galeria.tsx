import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { ChevronLeft, ChevronRight, Home, Bed, Utensils, Leaf, Sun } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería — Grand Lunas Yucatán" },
      { name: "description", content: "Recorre la hacienda. Imágenes de los espacios, recámaras y jardines." },
    ],
  }),
  component: GaleriaPage,
});

const slides = [
  "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=1600&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80",
  "https://images.unsplash.com/photo-1564540583246-934409427776?w=1600&q=80",
];

const thumbs = [
  "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=600&q=80",
  "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
  "https://images.unsplash.com/photo-1564540583246-934409427776?w=600&q=80",
];

const features = [
  { n: "01", t: "La hacienda", icon: <Home className="size-5" />, d: "Más de un siglo de historia restaurada con la mano de artesanos meridanos. Cada arco de medio punto, cada bóveda catalana y cada centímetro de pasta amarillo henequén." },
  { n: "02", t: "Recámaras privadas", icon: <Bed className="size-5" />, d: "Veinte recámaras, todas distintas, todas privadas. Paredes gruesas que ya saben aislar el ruido desde hace cien años. Vista al jardín, al patio o al oratorio." },
  { n: "03", t: "Espacios comunes", icon: <Utensils className="size-5" />, d: "Comedor de mesa larga, cocina abierta, biblioteca con sillones profundos, oratorio restaurado y terraza alta. Lugares para coincidir o quedarse en silencio." },
  { n: "04", t: "Naturaleza", icon: <Leaf className="size-5" />, d: "Casi dos hectáreas de jardín, un huerto caminable y una piscina de agua salada rodeada de palapa. Aquí los días se pasan mejor afuera." },
  { n: "05", t: "La vida diaria", icon: <Sun className="size-5" />, d: "Yoga al amanecer, talleres de cocina yucateca, lecturas en voz alta, cenas largas bajo los flamboyanes. Las actividades son siempre opcionales." },
];

function GaleriaPage() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-terracotta text-terracotta-foreground py-20 px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase mb-5 opacity-80">Galería de imágenes</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-6 italic">Una hacienda que se cuenta sola.</h1>
        <p className="max-w-2xl mx-auto text-sm leading-relaxed opacity-90">
          Las imágenes dicen más que los párrafos. Recorre GrandLunas como si caminaras por la casa al amanecer: la cantera fresca bajo los pies, la luz que entra por las bóvedas, los rincones donde el día se acomoda sin prisa. Cada fotografía se tomó dentro de la hacienda — sin montajes, sin retoques.
        </p>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-ink/50 mb-4">Galería</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Recorre <span className="italic">la hacienda</span>.</h2>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden mb-4">
            <img src={slides[idx]} alt="Hacienda" className="w-full h-full object-cover" />
            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 size-11 rounded-full bg-white/90 flex items-center justify-center hover:bg-white">
              <ChevronLeft className="size-5 text-ink" />
            </button>
            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 size-11 rounded-full bg-white/90 flex items-center justify-center hover:bg-white">
              <ChevronRight className="size-5 text-ink" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {thumbs.map((t, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden">
                <img src={t} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl bg-cream p-10 grid md:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((f) => (
            <article key={f.n}>
              <div className="flex items-start justify-between mb-4">
                <div className="text-terracotta">{f.icon}</div>
                <span className="text-xs text-ink/40">{f.n}</span>
              </div>
              <h3 className="font-serif text-xl text-ink mb-3">{f.t}</h3>
              <div className="w-8 h-px bg-ink/20 mb-3" />
              <p className="text-sm text-ink/70 leading-relaxed">{f.d}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
