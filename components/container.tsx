type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-4 sm:px-10 2xl:px-60">{children}</div>
  );
};

export default Container;
