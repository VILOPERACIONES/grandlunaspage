import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hello World — Tarjeta de saludo" },
      { name: "description", content: "Una tarjeta de saludo con Hello World." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-accent p-6">
      <article className="relative max-w-md w-full rounded-3xl bg-card text-card-foreground shadow-2xl p-10 text-center border border-border overflow-hidden">
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/10 blur-2xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary/10 blur-2xl" />
        <p className="relative text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Una tarjeta para ti
        </p>
        <h1 className="relative text-5xl font-bold tracking-tight mb-4">
          Hello World 👋
        </h1>
        <p className="relative text-muted-foreground">
          Te envío este saludo con cariño desde el código.
        </p>
      </article>
    </main>
  );
}
