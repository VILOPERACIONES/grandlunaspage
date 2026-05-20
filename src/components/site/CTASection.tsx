import { Link } from "@tanstack/react-router";

export function CTASection() {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(74,98,60,0.85), rgba(74,98,60,0.85)), url('https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80')",
      }}
    >
      <div className="mx-auto max-w-3xl text-center px-6 text-white">
        <h2 className="font-serif text-4xl md:text-5xl mb-2">¿Estás considerando una estancia?</h2>
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Hablemos.</h2>
        <p className="text-sm opacity-90 max-w-xl mx-auto mb-8">
          Conversemos sobre lo que buscas. Resolvemos dudas, te mostramos cada espacio y te ayudamos a decidir si la hacienda es el lugar correcto para ti o para alguien de tu familia.
        </p>
        <Link
          to="/contacto"
          className="inline-block bg-white text-ink px-10 py-3 text-xs tracking-[0.3em] uppercase hover:bg-cream transition-colors"
        >
          Contáctanos
        </Link>
      </div>
    </section>
  );
}
