type NavigationLinkProps = {
  href: string;
  text: string;
};

function NavigationLink(props: NavigationLinkProps) {
  const defaultStyle = "text-gray-600 hover:text-indigo-600";
  return (
    <a href={props.href} className={defaultStyle}>
      {props.text}
    </a>
  );
}

export default NavigationLink;
