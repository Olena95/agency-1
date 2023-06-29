import Cta from "./components/contentBlock/Cta";
import Content from "./components/contentBlock/Content";
import Features from "./components/contentBlock/Features";
import FirstBlock from "./components/contentBlock/FirstBlock";

export default function Home() {
  return (
    <main className="bg-background-black">
      <FirstBlock />
      <Features />
      <Content firstImgLeft={false} />
      <Cta />
    </main>
  );
}
