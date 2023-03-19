import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

interface Props {
  title: string;
  coverImage?: string;
  date: string;
}

const prefix = "Written ";

const PostHeader = ({ title, date }: Props) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className="hidden md:block md:mb-8" />
    <div className="mb-8 md:mb-16 sm:mx-0" />
    <div className="max-w-2xl mx-auto">
      <div className="block md:hidden mb-6" />
      <div className="mb-6 text-lg dark:text-violet-300 text-violet-700 text-center select-none mx-auto">
        <DateFormatter dateString={date} prefix={prefix} />
      </div>
    </div>
  </>
);

export default PostHeader;
