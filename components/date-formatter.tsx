import moment from "moment";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  return <>Posted {moment(dateString).fromNow()}</>;
};

export default DateFormatter;
