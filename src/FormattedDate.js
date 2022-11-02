import React from "react";

export default function FormattedDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[props.dateInfo.getDay()];
  const date = props.dateInfo.getDate();
  let ordinalIndicator = `th`;
  if (date === 1) {
    ordinalIndicator = `st`;
  } else if (date === 2) {
    ordinalIndicator = `nd`;
  } else if (date === 3) {
    ordinalIndicator = `rd`;
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.dateInfo.getMonth()];
  let year = props.dateInfo.getFullYear();
  return (
    <div>
      {day}, {month} {date}
      {ordinalIndicator} {year}
    </div>
  );
}
