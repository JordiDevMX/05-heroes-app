import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de Super Heroes"
        description="Descubre, explora y administra super heroes y villanos"
      />
      <HeroStats />
      {/* Filter & Search */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
