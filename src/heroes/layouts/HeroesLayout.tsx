import { Outlet } from "react-router";
// TODO: Crear un admin layout de diferente color
export const HeroesLayout = () => {
  return (
    <div className="bg-red-500">
      {/* Esto hace que todas las rutas hijas tengan este mismo contenedor */}
      <Outlet />
    </div>
  );
};
