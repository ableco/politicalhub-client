import { Nav } from "../components/Nav";
import Layout from "../components/Layout";
import PoliticalParties from "../components/PoliticalParties";
import Candidates from "../components/Candidates";
import buildURL from "../utils/buildURL";
import fetchJSON from "../utils/fetchJSON";

export default function Home({
  politicalParties,
  presidentialCandidates,
  candidates,
}) {
  return (
    <Layout>
      <Nav />
      <main className="px-8 lg:px-52 py-10">
        <div className="max-w-2xl">
          <p className="text-xl text-neutral-400">Bienvenido a Votemos.pe</p>
          <p className="text-xl text-neutral-400">
            Nuestra misión es proveer información centralizada y validada de
            candidatos y partidos politicos para la elección del 2021.
          </p>
        </div>
        <PoliticalParties
          politicalParties={politicalParties.political_organizations}
        />
        <Candidates
          key="presidential"
          candidates={presidentialCandidates}
          heading="A la Presidencia"
          filter={{ office: 1, per_page: 20 }}
        />
        <Candidates
          candidates={candidates}
          heading="Al Congreso"
          filter={{ office: 4, per_page: 9 }}
        />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const responsePoliticalParties = await fetch(
    `${process.env.API_URL}/political_organizations`,
  );
  const politicalParties = await responsePoliticalParties.json();
  const candidates = await fetchJSON(
    buildURL({ filter: { office: 4, per_page: 9 } }),
  );
  const presidentialCandidates = await fetchJSON(
    buildURL({ filter: { office: 1, per_page: 20 } }),
  );

  return {
    props: {
      politicalParties,
      presidentialCandidates,
      candidates,
    },
  };
}
