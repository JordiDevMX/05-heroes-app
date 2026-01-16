import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron";
import { HeroStats } from "../../components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useState } from "react";
import { CustomPagination } from "@/heroes/components/custom/CustomPagination";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "villains" | "heroes" | "favorites" | "all"
  >("all");

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Universo de Super Heroes"
        description="Descubre, explora y administra super heroes y villanos"
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Tabs */}
      <Tabs value={activeTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
            All Characters (16)
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            onClick={() => setActiveTab("favorites")}
            className="flex items-center gap-2"
          >
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger
            value="villains"
            onClick={() => setActiveTab("villains")}
          >
            Villains (2)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {/* Mostrar todos los personajes */}
          <HeroGrid />
        </TabsContent>
        <TabsContent value="favorites">
          {/* Mostrar todos los personajes favoritos */}
          <h1>Favoritos!!!</h1>
          <HeroGrid />
        </TabsContent>
        <TabsContent value="heroes">
          {/* Mostrar todos los heroes */}
          <h1>Heroes</h1>
          <HeroGrid />
        </TabsContent>
        {/* Mostrar todos los villanos */}
        <TabsContent value="villains">
          <h1>Villanos</h1>
          <HeroGrid />
        </TabsContent>
      </Tabs>
      <CustomPagination totalPages={8} />
    </>
  );
};
