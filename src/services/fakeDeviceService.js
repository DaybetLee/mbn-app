export const devices = [
  {
    _id: "5fa66cd1f120ce2e48006264",
    name: "1234567890",
    mac: "80:7D:3A:69:2E:09",
    psk: "keys",
    notify: true,
  },
  {
    _id: "5fa66cd1f120ce2e48006265",
    name: "MailSensor2",
    mac: "80:7D:3A:69:2E:19",
    psk: "keys",
    notify: true,
  },
  {
    _id: "5fa66cd1f120ce2e48006266",
    name: "MailSensor3",
    mac: "80:7D:3A:69:2E:11",
    psk: "keys",
    notify: false,
  },
];

export function getDevices() {
  return devices.filter((d) => d);
}
