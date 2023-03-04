import moment from "moment";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  return (
    <div className="select-none">Written {moment(dateString).fromNow()}</div>
  );
};

export default DateFormatter;
