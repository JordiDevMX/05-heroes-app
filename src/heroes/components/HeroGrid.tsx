import { HeroGridCard } from "./HeroGridCard";
import type { Character } from "./HeroGridCard";

const characters: Character[] = [
  {
    id: 1,
    characterName: "Superman",
    realIdentity: "Clark Kent",
    characterDescription:
      "The Last Son of Krypton, protector of Earth and symbol of hope for all humanity.",
    company: "Justice League",
    firstAppeared: 1938,
    img: "/placeholder.svg?height=300&width=300",
    isActive: true,
    powers: [
      "Super Strength",
      "Flight",
      "Heat Vision",
      "Super Speed",
      "Invulnerability",
    ],
    side: "Hero",
    stats: { durability: 100, intelligence: 80, speed: 90, strength: 100 },
    universeBadge: "DC",
  },
  {
    id: 2,
    characterName: "Batman",
    realIdentity: "Bruce Wayne",
    characterDescription:
      "The Dark Knight of Gotham City, using fear as a weapon against crime and corruption.",
    company: "Justice League",
    firstAppeared: 1939,
    img: "/placeholder.svg?height=300&width=300",
    isActive: true,
    powers: [
      "Martial Arts",
      "Detective Skills",
      "Technology Expertise",
      "Stealth",
      "Tactical Genius",
    ],
    side: "Hero",
    stats: { durability: 70, intelligence: 100, speed: 60, strength: 60 },
    universeBadge: "DC",
  },
  {
    id: 3,
    characterName: "Wonder Woman",
    realIdentity: "Diana Prince",
    characterDescription:
      "Amazonian princess and warrior, champion of truth, justice, and equality.",
    company: "Justice League",
    firstAppeared: 1941,
    img: "/placeholder.svg?height=300&width=300",
    isActive: true,
    powers: [
      "Super Strength",
      "Flight",
      "Lasso of Truth",
      "Immortality",
      "Combat Skills",
    ],
    side: "Hero",
    stats: { durability: 90, intelligence: 80, speed: 80, strength: 90 },
    universeBadge: "DC",
  },
  {
    id: 4,
    characterName: "Spider-Man",
    realIdentity: "Peter Parker",
    characterDescription:
      "Your friendly neighborhood Spider-Man, with great power comes great responsibility.",
    company: "Avengers",
    firstAppeared: 1962,
    img: "/placeholder.svg?height=300&width=300",
    isActive: true,
    powers: [
      "Wall Crawling",
      "Spider Sense",
      "Web Shooting",
      "Super Agility",
      "Enhanced Strength",
    ],
    side: "Hero",
    stats: { durability: 70, intelligence: 90, speed: 70, strength: 70 },
    universeBadge: "Marvel",
  },
  {
    id: 5,
    characterName: "Iron Man",
    realIdentity: "Tony Stark",
    characterDescription:
      "Billionaire genius inventor who uses his technology to protect the world.",
    company: "Avengers",
    firstAppeared: 1963,
    img: "/placeholder.svg?height=300&width=300",
    isActive: true,
    powers: [
      "Powered Armor",
      "Genius Intellect",
      "Flight",
      "Energy Projection",
      "Advanced Tech",
    ],
    side: "Hero",
    stats: { durability: 80, intelligence: 100, speed: 70, strength: 80 },
    universeBadge: "Marvel",
  },

  {
    id: 6,
    characterName: "Deadpool",
    realIdentity: "Wade Wilson",
    characterDescription:
      "The Merc with a Mouth, an unpredictable anti-hero with accelerated healing powers.",
    company: "X-Force",
    firstAppeared: 1991,
    img: "/placeholder.svg?height=300&width=300",
    isActive: true,
    powers: [
      "Healing Factor",
      "Martial Arts",
      "Weapons Mastery",
      "Agility",
      "Regeneration",
    ],
    side: "Anti-Hero",
    stats: { durability: 90, intelligence: 70, speed: 70, strength: 60 },
    universeBadge: "Marvel",
  },
];

export const HeroGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {/* TODO: Crear <HeroGridCard/> */}
      <HeroGridCard characters={characters} />
    </div>
  );
};
