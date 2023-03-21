type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-2 sm:px-10 max-w-4xl">{children}</div>
  );
};

export default Container;
