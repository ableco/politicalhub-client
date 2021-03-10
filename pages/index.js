import PoliticalPartiesContext from "../contexts/politicalParties";
import { Nav } from "../components/Nav";
import Footer from "../components/Footer";
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
      <section className="bg-neutral-100 p-10">
        <article className="flex flex-nowrap flex-col sm:flex-col md:flex-row items-center gap-3 max-w-screen-lg m-auto">
          <aside
            className="w-full sm:w-3/4 md:w-2/4 rounded-lg p-8 text-white min-h-full"
            style={{
              background:
                "linear-gradient(105.99deg, #FF5C70 0%, #F74887 99.63%)",
            }}
          >
            <h3 className="text-3xl font-extrabold mb-6 ">
              Encuentra Tu Match
            </h3>
            <p style={{ maxWidth: 300 }}>
              Responde una serie de preguntas y descubre el candidato mas
              compatible contigo y tus preferencias.
            </p>
          </aside>
          <aside
            className="w-full sm:w-3/4 md:w-2/4 rounded-lg p-8 text-white min-h-full"
            style={{
              background: "linear-gradient(105.7deg, #607AD6 0%, #4E64D8 100%)",
            }}
          >
            <h3 className="text-3xl font-extrabold mb-6">Trivia Electoral</h3>
            <p style={{ maxWidth: 300 }}>
              ¿Qué tan informado estas para votar? Juega a nuestra trivia y reta
              a tus contactos.
            </p>
          </aside>
        </article>
      </section>
      <main className="max-w-screen-lg m-auto mb-10 px-10">
        <PoliticalParties
          politicalParties={politicalParties.political_organizations}
        />
        <PoliticalPartiesContext.Provider
          value={politicalParties.political_organizations}
        >
          <Candidates
            key="presidential"
            candidates={presidentialCandidates}
            heading="A la Presidencia"
            filter={{ office: 1, per_page: 20 }}
          />
          <Candidates
            candidates={candidates}
            heading="Al Congreso"
            filterByUbigeo
            filter={{ office: 4, per_page: 9 }}
            showNumber
          />
        </PoliticalPartiesContext.Provider>
      </main>
      <Footer />
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
