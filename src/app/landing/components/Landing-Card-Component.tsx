type LandingCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundColor?: string;
};

export default function LandingCard(props: LandingCardProps) {
  return (
    <article className=" bg-white flex flex-col gap-4 p-7 rounded-lg">
      <div
        className={` size-16 flex flex-col justify-center align-middle items-center rounded-lg`}
      >
        {props.icon}
      </div>
      <h1 className="text-3xl  text-cyan-950">{props.title}</h1>
      <p className="text-sm text-cyan-950">{props.description}</p>
    </article>
  );
}
