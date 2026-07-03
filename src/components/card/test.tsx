interface Props {
  name: string;
  content: string;
}

const TestimonialCard = ({ name, content }: Props) => {
  return (
    <div
      className="
      bg-white
      p-8
      rounded-3xl
      shadow-lg
    "
    >
      <div className="text-5xl text-[#C8A27C]">"</div>

      <p className="mt-4 text-gray-600">{content}</p>

      <h3 className="mt-5 font-bold">{name}</h3>
    </div>
  );
};

export default TestimonialCard;
