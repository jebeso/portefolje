import moment from "moment";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  return <>Written {moment(dateString).fromNow()}</>;
};

export default DateFormatter;
