import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  genre: string;
};

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <div className="border-b border-violet-300">
      <h3 className="text-3xl leading-snug pb-2">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:text-violet-700 transition duration-200 underline"
        >
          {title}
        </Link>
        <div className="text-lg text-slate-400">
          <span>
            <DateFormatter dateString={date} />
          </span>
        </div>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
