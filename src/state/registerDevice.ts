export default function registerDevice(device: CreateDevice) {
  return new Promise<{ deviceId: string }>((resolve, reject) => {
    const apiCallFailed = getMockApiCallFailed();
    const isValidDevice = validateDevice(device);

    setTimeout(() => {
      if (apiCallFailed) reject(new Error("An unexpected network error occurred"));
      else if (!isValidDevice) reject(new Error("Bad request, unable to register device"));
      else resolve({ deviceId: generateDeviceId() });
    }, 500)
  })
}

const FAILURE_RATE = 0.5;
function getMockApiCallFailed() {
  return Math.random() <= FAILURE_RATE;
}

function generateDeviceId() {
  return Array
    .from({ length: 16 }, () => "abcdefghijklmnopqrstuvwxyz"[Math.round(Math.random() * 26)])
    .join("");
}

type CreateDevice = { name: string; serialNumber: string; deviceType: string; };

function validateDevice(device: CreateDevice) {
  return !!device.name && !!device.serialNumber && !!device.deviceType;
}
