export const history = [
  {
    hourApart: 1,
    dayApart: 0,
    date: "Thu Nov 26 2020",
    time: "4:38:43 AM",
    message: "test has been deleted from list.",
    origin: "System",
  },
  {
    hourApart: 1,
    dayApart: 0,
    date: "Thu Nov 26 2020",
    time: "4:38:43 AM",
    message: "test has been added to list.",
    origin: "System",
  },
  {
    hourApart: 1,
    dayApart: 0,
    date: "Thu Nov 26 2020",
    time: "4:35:37 AM",
    message: "test has been deleted from list.",
    origin: "System",
  },
  {
    hourApart: 1,
    dayApart: 0,
    date: "Thu Nov 26 2020",
    time: "4:35:37 AM",
    message: "test has been added to list.",
    origin: "System",
  },
  {
    hourApart: 1,
    dayApart: 0,
    date: "Thu Nov 26 2020",
    time: "4:33:32 AM",
    message: "MailSensor has received parcel.",
    origin: "Device",
  },
  {
    hourApart: 4,
    dayApart: 0,
    date: "Thu Nov 26 2020",
    time: "1:40:40 AM",
    message: "test has been deleted from list.",
    origin: "System",
  },
  {
    hourApart: 4,
    dayApart: 0,
    date: "Thu Nov 26 2020",
    time: "1:40:40 AM",
    message: "test has been added to list.",
    origin: "System",
  },
  {
    hourApart: 17,
    dayApart: 0,
    date: "Wed Nov 25 2020",
    time: "12:37:55 PM",
    message: "MailSensor has received parcel.",
    origin: "Device",
  },
];

export function getHistory() {
  return history.filter((d) => d);
}
