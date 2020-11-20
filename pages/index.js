import Layout from "../components/Layout";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-neutral-800">PoliticalHub</h1>
      <Resume variant="success" />
    </Layout>
  );
}
