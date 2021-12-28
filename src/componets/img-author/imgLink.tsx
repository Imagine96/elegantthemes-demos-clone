interface props {
  children?: React.ReactNode;
  byLink: string;
  onLink: string;
  text: string;
  color?: string;
}

const ImgLink = (props: props) => {
  const color = props.color ? props.color : "white";

  return (
    <p className={`text-${color} p-2 absolute top-0 left-0 z-50 opacity-20`}>
      {` Photo by `}
      <a href={props.byLink}>{props.text}</a>
      {` on `}
      <a href={props.onLink}>Unsplash</a>
    </p>
  );
};

export default ImgLink;
