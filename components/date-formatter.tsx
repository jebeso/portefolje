import { parseISO, format } from "date-fns";
import moment from "moment";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  return <p>{moment(dateString).fromNow()}</p>;
};

export default DateFormatter;
