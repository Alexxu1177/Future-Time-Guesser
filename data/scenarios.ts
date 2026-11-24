export const years = [2030, 2040, 2050, 2060, 2070] as const;
export type Year = (typeof years)[number];

export const scenarios = [
  { title: "The self-monitoring circuit", description: "A factory tests a circuit board that can flag its own failing components before a machine stops.", alt: "Electronic components on a circuit board", image: "/images/scene-1.jpg" },
  { title: "A building that follows the sun", description: "An office tower adjusts its outer panels throughout the day to bring daylight inside while keeping rooms cool.", alt: "Geometric facade of a modern building", image: "/images/scene-2.jpg" },
  { title: "A window in orbit", description: "Students book a live session with a classroom in orbit and watch their coastline pass beneath the station.", alt: "Earth seen from space", image: "/images/scene-3.jpg" },
  { title: "Power after sunset", description: "A town stores the electricity from its solar fields through summer and draws on it during the darkest weeks of winter.", alt: "A field of solar panels", image: "/images/scene-4.jpg" },
  { title: "Listening to the ocean", description: "A coastal community follows the recovery of its reef through a network of underwater listening stations.", alt: "Ocean water at the surface", image: "/images/scene-5.jpg" },
] as const;
