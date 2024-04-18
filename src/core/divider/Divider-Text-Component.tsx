export type DividerTextProps = {
  content?: React.ReactNode;
};
export default function DividerText(props: DividerTextProps) {
  return (
    <div className={"flex flex-row " + (props.content ? " gap-2" : "")}>
      <div className="flex-1 self-center">
        <div className="h-0.5 bg-gray-300"></div>
      </div>
      {props.content}
      <div className="flex-1 self-center">
        <div className="h-0.5 bg-gray-300"></div>
      </div>
    </div>
  );
}
