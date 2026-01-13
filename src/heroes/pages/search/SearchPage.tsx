import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de Super Heroes"
        description="Descubre, explora y administra super heroes y villanos"
      />
      <HeroStats />
    </>
  );
};

export default SearchPage;
