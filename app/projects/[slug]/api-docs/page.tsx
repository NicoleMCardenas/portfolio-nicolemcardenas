'use client';

import dynamic from 'next/dynamic';
const SwaggerUI = dynamic<any>(() => import('swagger-ui-react'), { ssr: false });
import 'swagger-ui-react/swagger-ui.css';

export default function EcommerceDocs() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-semibold mb-4">E-commerce Backend API</h1>
      <p className="text-gray-500 mb-6">
        Documentación generada automáticamente con NestJS + Swagger.
      </p>
      <SwaggerUI url="/ecommerce-openapi.json" />
    </div>
  );
}
