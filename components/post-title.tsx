import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <>
      <h1 className="text-4xl select-none md:text-4xl lg:text-5xl tracking-tight leading-tight md:leading-none mb-6 text-center">
        {children}
      </h1>
    </>
  );
};

export default PostTitle;
