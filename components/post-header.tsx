import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-8"></div>
      <div className="mb-8 md:mb-16 sm:mx-0"></div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6"></div>
        <div className="mb-6 text-lg text-violet-700 text-center select-none">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
