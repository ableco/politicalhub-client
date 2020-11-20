import { Nav } from "../components/Nav";
import Layout from "../components/Layout";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <Layout>
      <Nav />
      <Resume variant="success" />
    </Layout>
  );
}
