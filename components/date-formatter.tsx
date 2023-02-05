import moment from "moment";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  return <>{moment(dateString).fromNow()}</>;
};

export default DateFormatter;
