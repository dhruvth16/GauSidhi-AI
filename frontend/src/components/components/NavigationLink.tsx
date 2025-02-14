type NavigationLinkProps = {
  href: string;
  text: string;
  onClick?: () => void;
};

function NavigationLink(props: NavigationLinkProps) {
  const defaultStyle = "text-gray-600 hover:text-indigo-600";
  return (
    <a href={props.href} className={defaultStyle} onClick={props.onClick}>
      {props.text}
    </a>
  );
}

export default NavigationLink;
