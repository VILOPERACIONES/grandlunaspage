import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Calendar, FileText, Phone } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Grand Lunas Yucatán" },
      { name: "description", content: "Hablemos. Estamos para escucharte." },
    ],
  }),
  component: ContactoPage,
});

const paths = [
  { n: "01", icon: <Calendar className="size-5" />, t: "Agendar una visita", d: "Ven a conocer la hacienda en persona. Recorrido de aproximadamente 90 minutos con un miembro del equipo, café incluido y todas tus preguntas resueltas.", cta: "Agendar visita", primary: true },
  { n: "02", icon: <FileText className="size-5" />, t: "Pedir información", d: "Si todavía estás explorando, te enviamos por correo el dossier completo: tarifas, servicios, calendario de actividades, fotos detalladas y respuestas a las preguntas que más nos hacen." },
  { n: "03", icon: <Phone className="size-5" />, t: "Comunícate con nosotros", d: "Para casos donde la persona tiene necesidades específicas — recuperación post-quirúrgica, Alzheimer, Parkinson, movilidad limitada — te conectamos directo con nuestra coordinadora de cuidado.", cta: "Llamar a coordinación" },
];

function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-terracotta text-terracotta-foreground py-20 px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase mb-5 opacity-80">Contáctanos</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-6 italic">Estamos para escucharte.</h1>
        <p className="max-w-xl mx-auto text-sm leading-relaxed opacity-90">
          Antes de tomar una decisión así de importante, lo más normal es tener muchas preguntas. Aquí estamos para responder todas, sin presión, sin venta de paquete y sin guion: por teléfono, por WhatsApp, por correo o sentados en el patio con un café.
        </p>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-ink/50 mb-4">Tres caminos</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">¿Por dónde quieres <span className="italic">empezar?</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {paths.map((p) => (
              <article key={p.n} className="bg-cream p-8 flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="size-10 flex items-center justify-center text-terracotta">{p.icon}</div>
                  <span className="text-xs text-ink/40">{p.n}</span>
                </div>
                <h3 className="font-serif text-2xl text-ink mb-4">{p.t}</h3>
                <div className="w-8 h-px bg-ink/20 mb-4" />
                <p className="text-sm text-ink/70 leading-relaxed mb-8 flex-1">{p.d}</p>
                {p.cta && (
                  <button className={`text-[11px] tracking-[0.3em] uppercase px-6 py-3 self-start ${p.primary ? "bg-terracotta text-terracotta-foreground hover:bg-terracotta/90" : "border border-ink text-ink hover:bg-ink hover:text-white"} transition-colors`}>
                    {p.cta}
                  </button>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          <div className="aspect-[4/3] overflow-hidden bg-cream">
            <iframe
              title="Mapa"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-89.85%2C20.85%2C-89.65%2C21.0&layer=mapnik&marker=20.92,-89.75"
              className="w-full h-full border-0"
            />
          </div>
          <div className="space-y-6">
            <p className="text-sm text-ink/70 leading-relaxed">
              A 20 minutos de Mérida, en Umán — un pueblo henequenero tradicional. La hacienda está sobre la carretera que va de Umán a Kinichil, con entrada señalizada por un portón de mampostería original.
            </p>
            {[
              { l: "Desde el aeropuerto (MID)", v: "~15 min · Mérida hacia Umán" },
              { l: "Desde el centro de Mérida", v: "~20 min · Periférico Norte → salida Umán → señales de la hacienda." },
              { l: "Estacionamiento", v: "Gratuito dentro de la hacienda." },
            ].map((r) => (
              <div key={r.l} className="border-b border-ink/10 pb-4">
                <div className="text-[11px] tracking-[0.25em] uppercase text-terracotta mb-2">{r.l}</div>
                <div className="text-sm text-ink">{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-ink/50 mb-4">Escríbenos</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink mb-3">Cuéntanos qué <span className="italic">buscas</span>.</h2>
            <p className="text-sm italic text-ink/60">Cuanto más concreto seas, más útil será nuestra primera respuesta.</p>
          </div>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <Field label="Nombre completo *" placeholder="Tu nombre y apellido" />
              <Field label="Correo electrónico *" placeholder="tucorreo@ejemplo.com" type="email" />
              <Field label="Teléfono / WhatsApp" placeholder="+52 999 123 4567" />
              <div>
                <label className="block text-[11px] tracking-[0.25em] uppercase text-ink/60 mb-2">¿Qué te interesa?</label>
                <select className="w-full bg-transparent border-b border-ink/20 py-2 text-sm focus:outline-none focus:border-terracotta">
                  <option>Selecciona una opción</option>
                  <option>Residencia permanente</option>
                  <option>Estancia temporal</option>
                  <option>Recuperación post-hospitalaria</option>
                  <option>Visita guiada</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.25em] uppercase text-ink/60 mb-2">Mensaje</label>
              <textarea rows={3} placeholder="Cuéntanos brevemente qué buscas. Por favor evita compartir información médica sensible en este formulario; lo trataremos por canal seguro." className="w-full bg-transparent border-b border-ink/20 py-2 text-sm focus:outline-none focus:border-terracotta resize-none" />
            </div>
            <label className="flex items-start gap-3 text-sm text-ink/70">
              <input type="checkbox" className="mt-1" />
              <span>He leído el <a href="#" className="text-terracotta underline">aviso de privacidad</a> y autorizo a Grand-Lunas a contactarme por los medios proporcionados.</span>
            </label>
            <button type="submit" className="bg-terracotta text-terracotta-foreground px-10 py-3 text-[11px] tracking-[0.3em] uppercase hover:bg-terracotta/90 transition-colors">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.25em] uppercase text-ink/60 mb-2">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full bg-transparent border-b border-ink/20 py-2 text-sm focus:outline-none focus:border-terracotta placeholder:text-ink/30" />
    </div>
  );
}
