import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/user";

function userURL(id) {
  return `${apiEndpoint}/${id}`;
}

export function getUser(id) {
  return http.get(userURL(id));
}

export function register({
  firstName,
  lastName,
  email,
  password,
  confirm_password,
}) {
  return http.post(apiEndpoint, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    rep_pass: confirm_password,
  });
}

export function update(
  id,
  { firstName, lastName, email, password, confirm_password }
) {
  return http.put(userURL(id), {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    rep_pass: confirm_password,
  });
}

export function getHistories(id) {
  return http.get(userURL(id) + "/history");
}
