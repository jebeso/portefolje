import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  genre: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <div>
      <div className="mb-1">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline decoration-violet-500"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg text-slate-600">
        <span>
          <DateFormatter dateString={date} />
        </span>
      </div>

      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
