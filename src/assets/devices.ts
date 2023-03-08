export type RhombusDevice = any;

// Dummy data
export const mockDevices: RhombusDevice[] = [
  {
    name: "Front Door",
    serialNumber: "R360-788881077",
    id: "insNNIOntari_n12io",
    deviceType: "CAMERA",
    maxBitrate: 2056,
    hardwareType: "CAMERA_R360",
  },
  {
    name: "Doorbell",
    serialNumber: "A100-10997834",
    id: "ieldn_enionat-_qw",
    deviceType: "AUDIO_GATEWAY",
    disconnected: true,
    microphoneEnabled: true,
    speakerEnabled: true,
  },
  {
    name: "Back Door",
    serialNumber: "R500-1000072848",
    id: "_ienawmvoaOEItanreao",
    deviceType: "CAMERA",
    maxBitrate: 3500,
    hardwareType: "CAMERA_R500",
  },
  {
    name: "Side Door",
    serialNumber: "R200-1775880071",
    id: "akkn098384ARSeONiet",
    deviceType: "CAMERA",
    disconnected: true,
    maxBitrate: 3000,
    hardwareType: "CAMERA_R200",
  },
  {
    name: "Announcement System",
    serialNumber: "A100-109874782",
    id: "7einoaIEE_ienartetaAR",
    deviceType: "AUDIO_GATEWAY",
    microphoneEnabled: false,
    speakerEnabled: true,
  },
  {
    name: "Bathroom Smoke Detector",
    serialNumber: "E2-007128472",
    id: "uvmamwiONent_ensna-na2",
    deviceType: "ENVIRONMENTAL_SENSOR",
    temperatureCelsius: 21,
    humidityPermyriad: 1000,
  },
]
