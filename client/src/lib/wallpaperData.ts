export interface Wallpaper {
  id: string;
  title: string;
  cat: string;
  description: string;
  imagePath: string;
  resolution: string;
  fileSize: string;
  mobileImagePath?: string;
  mobileResolution?: string;
  mobileFileSize?: string;
}

export const wallpapers: Wallpaper[] = [
  {
    id: "luna-moonlight",
    title: "Luna: Moonlight Muse",
    cat: "Luna",
    description: "Luna sits gracefully on a vintage typewriter, bathed in ethereal moonlight. Floating clock gears and Roman numerals drift around her like celestial bodies, capturing her role as Amanda's nocturnal writing companion and editorial critic.",
    imagePath: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262892493/4dPsFenJ89qK3sxRBC443S/luna-moonlight_3aa9cecc.png",
    resolution: "2560×1440",
    fileSize: "~3.2 MB",
    mobileImagePath: "https://private-us-east-1.manuscdn.com/sessionFile/eUJrMTqdMvWORN2Iz3BIvp/sandbox/03E3msc6bkonkQr3d99NNf-img-1_1770522989000_na1fn_bHVuYS1tb2JpbGU.png",
    mobileResolution: "1080×1620",
    mobileFileSize: "~1.8 MB"
  },
  {
    id: "kafka-philosopher",
    title: "Kafka: The Philosophical Prankster",
    cat: "Kafka",
    description: "Kafka demonstrates his philosophical precision by knocking a fountain pen off Amanda's desk, surrounded by impossible Escher-inspired architecture. This wallpaper captures his mischievous nature and the intellectual chaos he brings to the creative process.",
    imagePath: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262892493/4dPsFenJ89qK3sxRBC443S/kafka-philosopher_ae7d0952.png",
    resolution: "2560×1440",
    fileSize: "~3.5 MB",
    mobileImagePath: "https://private-us-east-1.manuscdn.com/sessionFile/eUJrMTqdMvWORN2Iz3BIvp/sandbox/03E3msc6bkonkQr3d99NNf-img-2_1770522993000_na1fn_a2Fma2EtbW9iaWxl.png",
    mobileResolution: "1080×1620",
    mobileFileSize: "~2.1 MB"
  },
  {
    id: "dali-dreamer",
    title: "Dali: The Dimension Seer",
    cat: "Dali",
    description: "Dali stares intently at a wall that transforms into a portal to surreal dimensions—melting clocks, floating islands, and impossible geometries visible only to him. This wallpaper embodies his mysterious ability to perceive realities beyond our understanding.",
    imagePath: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262892493/4dPsFenJ89qK3sxRBC443S/dali-dreamer_f3624166.png",
    resolution: "2560×1440",
    fileSize: "~3.8 MB",
    mobileImagePath: "https://private-us-east-1.manuscdn.com/sessionFile/eUJrMTqdMvWORN2Iz3BIvp/sandbox/03E3msc6bkonkQr3d99NNf-img-3_1770522991000_na1fn_ZGFsaS1tb2JpbGU.png",
    mobileResolution: "1080×1620",
    mobileFileSize: "~2.3 MB"
  }
];
