import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Nav } from "../../components/Nav";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import { ResumePoliticalParty } from "../../components/Resume";
import { Header } from "../../components/Header";
import Tabs from "../../components/Tabs";
import Candidatos from "../../components/Tabs/Candidatos";
import ContentTab from "../../components/ContentTab";
import buildURL from "../../utils/buildURL";
import fetchJSON from "../../utils/fetchJSON";

const tabs = [{ name: "Candidatos", component: Candidatos }];

export default function PoliticalPartyPage({
  politicalParty,
  candidates,
  metaPoliticalParties,
}) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(
    router.query.activeTab ?? tabs[0].name,
  );
  const activeTabObject = tabs.find((tab) => tab.name === activeTab);

  useEffect(() => {
    setActiveTab(router.query.activeTab ?? tabs[0].name);
  }, [router.query.activeTab, setActiveTab]);

  return (
    <Layout>
      <Nav />
      <Header politicalParty={politicalParty} />
      <ResumePoliticalParty
        politicalParty={politicalParty}
        metaPoliticalParties={metaPoliticalParties}
      />
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTabObject && (
        <ContentTab
          activeTabComponent={activeTabObject.component}
          politicalParty={politicalParty}
          candidates={candidates}
        />
      )}
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const politicalParty = await fetchJSON(
    `${process.env.API_URL}/political_organizations/${slug}`,
  );

  const candidates = await fetchJSON(
    buildURL({
      filter: {
        political_organization: politicalParty.political_organization.id,
      },
    }),
  );
  const presidentialCandidates = await fetchJSON(
    buildURL({
      filter: {
        political_organization: politicalParty.political_organization.id,
        office: [1, 2],
      },
    }),
  );

  const politicalParties = await fetchJSON(
    `${process.env.API_URL}/political_organizations`,
  );

  return {
    props: {
      politicalParty: politicalParty.political_organization,
      presidentialCandidates,
      candidates,
      metaPoliticalParties: politicalParties.meta,
    },
  };
}
