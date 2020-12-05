import http from "../services/httpService";
import { apiUrl } from "../config.json";

export async function verify(token) {
  return http.put(apiUrl + "/verify", { token });
}

export async function resendLink() {
  return http.post(apiUrl + "/mailer/verify");
}
