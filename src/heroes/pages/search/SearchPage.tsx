import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/ui/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de Super Heroes"
        description="Descubre, explora y administra super heroes y villanos"
      />
      <CustomBreadcrumbs
        currentPage="Buscador de personajes"
        // breadcrumbs={[
        //   { label: "Home", to: "/" },
        //   { label: "Home2", to: "/" },
        //   { label: "Home3", to: "/" },
        // ]}
      />
      <HeroStats />
      {/* Filter & Search */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
