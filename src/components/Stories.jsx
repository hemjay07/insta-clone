import Story from "./Story";

export default function Stories() {
  return (
    <div className="flex  justify-start gap-4 my-6 overflow-auto px-8">
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
}
