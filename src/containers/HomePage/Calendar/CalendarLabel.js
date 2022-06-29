import React from "react";
import styled from "@emotion/styled";

const HoursGap = styled.div`
  width: 60px;
  padding-right: 1em;
`;

const DateString = styled.p`
  font-size: 1em;
  flex-grow: 100;
`;

const CalendarLabel = ({ day, view }) => {
  const options = { month: "short", day: "numeric" };
  const labels = day.toLocaleDateString("en-US", options);

  return (
    <>
      <HoursGap></HoursGap>
      <DateString key={day}>{labels}</DateString>
    </>
  );
};

export default CalendarLabel;
