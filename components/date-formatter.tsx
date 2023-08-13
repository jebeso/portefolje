import moment from "moment";

type Props = {
  dateString: string;
  prefix?: string;
};

const DateFormatter = ({ dateString, prefix }: Props) => {
  return (
    <div className="select-none">
      {prefix}
      {moment(dateString).fromNow()}
    </div>
  );
};

export default DateFormatter;
