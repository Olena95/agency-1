import Content from "./components/contentBlock/Content";
import Features from "./components/contentBlock/Features";
import FirstBlock from "./components/contentBlock/FirstBlock";
import Form from "./components/contentBlock/Form";

export default function Home() {
  return (
    <main>
      <FirstBlock />
      <Features />
      <Content firstImgLeft={false} />
      <Form />
    </main>
  );
}
