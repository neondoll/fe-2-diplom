import Layout from "../../components/Layout/Layout";
import RootAbout from "./About/RootAbout";
import RootFeedbacks from "./Feedbacks/RootFeedbacks";
import RootWidget from "./Widget/RootWidget";
import RootWork from "./Work/RootWork";
import "./Root.css";

export default function Root() {
  return (
    <Layout className="root-page" mainClassName="root-page__main">
      <RootWidget className="root-page__widget" />
      <RootAbout className="root-page__about" id="about" />
      <RootWork className="root-page__work" id="work" />
      <RootFeedbacks className="root-page__feedbacks" id="feedbacks" />
    </Layout>
  );
}
