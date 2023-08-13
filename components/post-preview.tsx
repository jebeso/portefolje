import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  genre: string;
  language: string;
};

const truncateExcerpt = (excerpt, maxLength) => {
  if (excerpt.length <= maxLength) return excerpt;

  let lastPeriodIndex = excerpt.lastIndexOf(".", maxLength);
  let lastQuestionIndex = excerpt.lastIndexOf("?", maxLength);
  let lastExclamationIndex = excerpt.lastIndexOf("!", maxLength);

  let lastPunctuationIndex = Math.max(
    lastPeriodIndex,
    lastQuestionIndex,
    lastExclamationIndex
  );

  if (lastPunctuationIndex === -1 || lastPunctuationIndex < maxLength - 200) {
    lastPunctuationIndex = maxLength;
  }

  const lastParagraphIndex = excerpt.lastIndexOf("\n\n", maxLength);
  if (lastParagraphIndex !== -1 && lastParagraphIndex < lastPunctuationIndex) {
    return excerpt.substring(0, lastParagraphIndex).trim() + "...";
  }

  return excerpt.substring(0, lastPunctuationIndex + 1).trim() + "...";
};

const PostPreview = ({ title, date, excerpt }: Props) => {
  const maxExcerptLength = 3000;

  if (excerpt.length > maxExcerptLength) {
    excerpt = truncateExcerpt(excerpt, maxExcerptLength);
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl leading-snug pb-1">{title}</h2>
      <div className="text-lg dark:text-gray-300">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg">{excerpt}..</p>
      <div>
        <span className="whitespace-nowrap dark:text-gray-300 text-gray-600">
          Read more...
        </span>
      </div>
    </div>
  );
};

export default PostPreview;
