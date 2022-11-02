import React from "react";

export default function FormattedTime(props) {
  let hours = props.dateInfo.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.dateInfo.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      {hours}:{minutes}
    </span>
  );
}
