import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron";
import { HeroStats } from "../../components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useEffect, useMemo, useState } from "react";
import { CustomPagination } from "@/components/ui/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/ui/custom/CustomBreadcrumbs";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // TODO: Dejar de usar el useState y usar "activeTab"
  // TODO: El valor de activeTab sera el URL que mandaremos a traves de una llave llamada "tab"
  // ? Ejemplo: tabAll deberian de pasar todos los favoritos, todos los heroes o anti-heroes

  const activeTab = searchParams.get("tab") ?? "all";

  const currentTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  const { data: heroesResponse } = useQuery({
    queryKey: ["heroes"],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5, // 5 mins
  });

  // useEffect(() => {
  //   getHeroesByPage().then((heroes) => {});
  // }, []);

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Universo de Super Heroes"
        description="Descubre, explora y administra super heroes y villanos"
      />

      <CustomBreadcrumbs currentPage="Super Heroes" />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Tabs */}
      <Tabs value={currentTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            value="all"
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "all");
                return prev;
              })
            }
          >
            All Characters (16)
          </TabsTrigger>
          <TabsTrigger
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "all");
                return prev;
              })
            }
            value="favorites"
            className="flex items-center gap-2"
          >
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "all");
                return prev;
              })
            }
            value="heroes"
          >
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "all");
                return prev;
              })
            }
            value="villains"
          >
            Villains (2)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {/* Mostrar todos los personajeSs */}
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="favorites">
          {/* Mostrar todos los personajes favoritos */}
          <h1>Favoritos!!!</h1>
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="heroes">
          {/* Mostrar todos los heroes */}
          <h1>Heroes</h1>
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        {/* Mostrar todos los villanos */}
        <TabsContent value="villains">
          <h1>Villanos</h1>
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
      </Tabs>
      <CustomPagination totalPages={8} />
    </>
  );
};
