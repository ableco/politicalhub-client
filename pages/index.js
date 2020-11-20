import { Nav } from "../components/Nav";
import Layout from "../components/Layout";
import Resume from "../components/Resume";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Layout>
      <Nav />
      <Header />
      <Resume variant="success" />
    </Layout>
  );
}
