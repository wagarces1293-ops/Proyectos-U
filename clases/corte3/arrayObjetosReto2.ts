/* Estadísticas de ventas
Crea un array de 6 ventas con: id, vendedor, monto, region (Norte/Sur/Centro).
Encuentra la venta de mayor monto. Calcula el total por región usando reduce. Lista
los vendedores únicos sin duplicados. */
interface Venta {
  id: number;
  vendedor: string;
  monto: number;
  region: "Norte" | "Sur" | "Centro";
}
const ventas: Venta[] = [
  { id: 1, vendedor: "Juan", monto: 500, region: "Norte" },
  { id: 2, vendedor: "María", monto: 700, region: "Sur" },
  { id: 3, vendedor: "Pedro", monto: 600, region: "Centro" },
  { id: 4, vendedor: "Ana", monto: 800, region: "Norte" },
  { id: 5, vendedor: "Luis", monto: 900, region: "Sur" },
  { id: 6, vendedor: "Sofía", monto: 750, region: "Centro" }
];
const ventaMayorMonto = ventas.reduce((max, venta) => venta.monto > max.monto ? venta : max);
console.log("Venta de mayor monto:", ventaMayorMonto);
const totalPorRegion = ventas.reduce((acumulador, venta) => {
  acumulador[venta.region] = (acumulador[venta.region] || 0) + venta.monto;
  return acumulador;
}, {} as Record<"Norte" | "Sur" | "Centro", number>);
console.log("Total por región:", totalPorRegion);
const vendedoresUnicos = [...new Set(ventas.map(venta => venta.vendedor))];
console.log("Vendedores únicos:", vendedoresUnicos);