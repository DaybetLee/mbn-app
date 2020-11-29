import React from "react";
import Card from "../common/card";

const HistoryCard = ({ histories }) => {
  const historyCardBadge = ({ origin }) => {
    const classes = "badge badge-pill badge-";
    return origin === "Device" ? classes + "primary" : classes + "info";
  };

  const historyCardTime = ({ dayApart, hourApart }) => {
    return dayApart
      ? dayApart + " days ago"
      : hourApart
      ? hourApart + " hours ago"
      : "A moment ago";
  };

  return (
    <Card
      head={<div>History</div>}
      body={histories.map((history, index) => (
        <div key={index} id="innerCard" className="card div card-body m-2">
          <div className="d-flex align-items-center align-content-around flex-wrap flex-row">
            <div className="p-1 ">
              <span className={historyCardBadge(history)}>
                {history.origin}
              </span>
            </div>
            <div className="p-1 ">{history.message} </div>
          </div>
          <div className="d-flex align-items-center align-content-around flex-wrap flex-row-reverse">
            <div className="p-1 ">{historyCardTime(history)}</div>
            <div className="p-1 ">
              <em>{history.date}</em>,
            </div>
          </div>
        </div>
      ))}
    />
  );
};

export default HistoryCard;
