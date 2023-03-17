import moment from "moment";

type Props = {
  dateString: string;
  genre?: string;
};

const DateFormatter = ({ dateString, genre }: Props) => {
  return (
    <div className="select-none">
      {genre && genre + ", "}
      {moment(dateString).fromNow()}
    </div>
  );
};

export default DateFormatter;
