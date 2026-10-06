"use client";

import { useEffect, useState } from "react";

type Health = {
  status: string;
  timestamp: string;
};

export default function CustomersPage() {
  const [health, setHealth] = useState<Health | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: Health) => setHealth(data))
      .catch((err: Error) => setError(err.message));
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold tracking-tight">Clientes</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Conexión con la API a través del proxy /api
      </p>

      {error && (
        <p className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          ✗ Error: {error} — ¿Está corriendo la API (just api)?
        </p>
      )}

      {health && (
        <div className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          ✓ API responde: <b>{health.status}</b>
          <span className="ml-2 text-green-600">
            ({new Date(health.timestamp).toLocaleString("es")})
          </span>
        </div>
      )}

      {!health && !error && (
        <p className="mt-6 text-sm text-neutral-400">Cargando…</p>
      )}
    </section>
  );
}