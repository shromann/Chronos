import EventBox from "../../components/EventBox";
import RowBlocks from "../../components/RowBlocks";

const DayCalendar = ({events, height}) => {
  return (
    <div css={{flexGrow: 100}} id="dayCalendar">
      <RowBlocks />
      {events.map((event, index) => (
        <EventBox key={index} event={event} maxHeight={height} />
      ))}
    </div>
  );
};

export default DayCalendar;
