import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Nav } from "../../components/Nav";
import Layout from "../../components/Layout";
import { ResumePoliticalParty } from "../../components/Resume";
import { Header } from "../../components/Header";
import Tabs from "../../components/Tabs";
import Candidatos from "../../components/Tabs/Candidatos";
import ContentTab from "../../components/ContentTab";

const tabs = [{ name: "Candidatos", component: Candidatos }];

export default function PoliticalPartyPage({ politicalParty, candidates }) {
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
      <ResumePoliticalParty politicalParty={politicalParty} />
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTabObject && (
        <ContentTab
          activeTabComponent={activeTabObject.component}
          politicalParty={politicalParty}
          candidates={candidates}
        />
      )}
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const responsePoliticalParty = await fetch(
    `${process.env.API_URL}/political_organizations/${slug}`,
  );
  const politicalParty = await responsePoliticalParty.json();
  const responseCandidates = await fetch(
    `${process.env.API_URL}/candidates?political_organization=${politicalParty.political_organization.id}`,
  );
  const candidates = await responseCandidates.json();

  return {
    props: {
      politicalParty: politicalParty.political_organization,
      candidates,
    },
  };
}
