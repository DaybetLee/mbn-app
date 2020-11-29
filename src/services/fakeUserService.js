export const user = {
  verified: true,
  _id: "5fa55048361d522208603703",
  firstName: "Daybet",
  lastName: "Lee",
  email: "daybetlee@gmail.com",
  password: "password",
  devices: [
    {
      name: "MailSensor",
      _id: "5fa66cd1f120ce2e48006264",
      mac: "80:7D:3A:69:2E:09",
      psk: "$2b$10$nbR.VraA8njEID3BOkoKluO9etke2UlTr4xjvf1vHSPlAT902E2AC",
      notify: true,
    },
  ],
  __v: 13,
};

export function getUsers() {
  return user.filter((d) => d);
}
