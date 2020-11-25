import { Nav } from "../components/Nav";
import Layout from "../components/Layout";
import PoliticalParties from "../components/PoliticalParties";
import Candidates from "../components/Candidates";

export default function Home({ politicalParties, candidates }) {
  return (
    <Layout>
      <Nav />
      <main className="px-52 py-10">
        <div className="max-w-2xl">
          <p className="text-xl text-neutral-400">Bienvenido a votabien.pe</p>
          <p className="text-xl text-neutral-400">
            Nuestra misión es proveer información centralizada y validada de
            candidatos y partidos politicos para la elección del 2021.
          </p>
        </div>
        <PoliticalParties politicalParties={politicalParties} />
        <Candidates candidates={candidates} />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const responsePoliticalParties = await fetch(
    `${process.env.API_URL}/organizaciones-politicas`,
  );
  const politicalParties = await responsePoliticalParties.json();

  return {
    props: {
      politicalParties,
    },
  };
}
