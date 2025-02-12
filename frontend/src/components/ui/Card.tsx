import { ReactElement } from "react";

type CardProps = {
  icon: ReactElement;
  title: string;
  desc: string;
};
function Card(props: CardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="text-indigo-600 mb-4">{props.icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {props.title}
      </h3>
      <p className="text-gray-600">{props.desc}</p>
    </div>
  );
}

export default Card;
