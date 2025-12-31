import ItemsPanel from "./GameElements/ItemsPanel";
import StoryPanel from "./GameElements/StoryPanel";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-screen h-screen">
      <StoryPanel />
      <ItemsPanel />
    </div>
  );
}
