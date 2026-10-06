export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight">Modern CRM</h1>
      <p className="mt-3 max-w-xl text-neutral-600">
        Plantilla de CRM construida con Next.js, NestJS, PostgreSQL y Prisma.
        Inicia sesión para gestionar tus clientes, notas y oportunidades.
      </p>

      <ul className="mt-8 space-y-2 text-sm text-neutral-600">
        <li>▸ Clientes con notas y oportunidades</li>
        <li>▸ Cada usuario ve solo sus datos</li>
        <li>▸ Sesión con cookie httpOnly</li>
      </ul>
    </section>
  );
};