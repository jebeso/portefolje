import moment from "moment";

type Props = {
  dateString: string;
  genre?: string;
  prefix?: string;
};

const DateFormatter = ({ dateString, genre, prefix }: Props) => {
  return (
    <div className="select-none">
      {genre && genre + " - "}
      {prefix}
      {moment(dateString).fromNow()}
    </div>
  );
};

export default DateFormatter;
