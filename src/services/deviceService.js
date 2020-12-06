import http from "./httpService";

import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/device";

function deviceURL(id) {
  return `${apiEndpoint}/${id}`;
}

export function deleteDevice(id) {
  return http.delete(deviceURL(id));
}

export function addDevice({ name, mac, psk }) {
  return http.post(apiEndpoint, { name, mac, psk });
}

export function toggleDeviceNotificatio(id) {
  return http.patch(deviceURL(id));
}
