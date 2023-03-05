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
  const maxExcerptLength = 300;

  if (excerpt.length > maxExcerptLength) {
    const lastPeriodIndex = excerpt.lastIndexOf(".", maxExcerptLength);
    const lastQuestionIndex = excerpt.lastIndexOf("?", maxExcerptLength);
    const lastExclamationIndex = excerpt.lastIndexOf("!", maxExcerptLength);
    const lastPunctuationIndex = Math.max(
      lastPeriodIndex,
      lastQuestionIndex,
      lastExclamationIndex
    );

    if (lastPunctuationIndex !== -1) {
      excerpt = excerpt.substring(0, lastPunctuationIndex) + ".";
    } else {
      excerpt = excerpt.substring(0, maxExcerptLength) + "...";
    }
  }

  return (
    <>
      <div className="border p-7 rounded-3xl shadow-sm hover:shadow-lg border-violet-300 transition duration-200 ease-in-out hover:border-violet-500">
        <h3 className="text-3xl leading-snug pb-2">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:text-violet-700 transition duration-200"
          >
            {title}
          </Link>
          <div className="text-lg text-slate-400">
            <span>
              <DateFormatter dateString={date} />
            </span>
          </div>
        </h3>
        <p className="text-lg leading-relaxed">
          {excerpt}{" "}
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="underline text-violet-700"
          >
            <br />
            <span className="whitespace-nowrap">Read more...</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default PostPreview;
