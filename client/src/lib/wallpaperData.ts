export interface Wallpaper {
  id: string;
  title: string;
  cat: string;
  description: string;
  imagePath: string;
  resolution: string;
  fileSize: string;
}

export const wallpapers: Wallpaper[] = [
  {
    id: "luna-moonlight",
    title: "Luna: Moonlight Muse",
    cat: "Luna",
    description: "Luna sits gracefully on a vintage typewriter, bathed in ethereal moonlight. Floating clock gears and Roman numerals drift around her like celestial bodies, capturing her role as Amanda's nocturnal writing companion and editorial critic.",
    imagePath: "/wallpapers/luna-moonlight.png",
    resolution: "2560×1440",
    fileSize: "~3.2 MB"
  },
  {
    id: "kafka-philosopher",
    title: "Kafka: The Philosophical Prankster",
    cat: "Kafka",
    description: "Kafka demonstrates his philosophical precision by knocking a fountain pen off Amanda's desk, surrounded by impossible Escher-inspired architecture. This wallpaper captures his mischievous nature and the intellectual chaos he brings to the creative process.",
    imagePath: "/wallpapers/kafka-philosopher.png",
    resolution: "2560×1440",
    fileSize: "~3.5 MB"
  },
  {
    id: "dali-dreamer",
    title: "Dali: The Dimension Seer",
    cat: "Dali",
    description: "Dali stares intently at a wall that transforms into a portal to surreal dimensions—melting clocks, floating islands, and impossible geometries visible only to him. This wallpaper embodies his mysterious ability to perceive realities beyond our understanding.",
    imagePath: "/wallpapers/dali-dreamer.png",
    resolution: "2560×1440",
    fileSize: "~3.8 MB"
  }
];
