/* Perfil profesional
Crea un objeto Perfil con nombre, profesion, experiencia (años) y habilidades
(array). Crea un perfil completo. Luego clona el perfil con spread cambiándole
nombre y experiencia. Imprime las claves del objeto original con Object.keys. */
type Perfil = {
  nombre: string;
  profesion: string;
  experiencia: number;
  habilidades: string[];
};
const perfilOriginal: Perfil = {
  nombre: "Ana",
  profesion: "Ingeniera de Software",
  experiencia: 5,
  habilidades: ["JavaScript", "TypeScript", "React"]
};
const perfilClonado: Perfil = {
  ...perfilOriginal,
  nombre: "Ana García",
  experiencia: 6
};
console.log(Object.keys(perfilOriginal));