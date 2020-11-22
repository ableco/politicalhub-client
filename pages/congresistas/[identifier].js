import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Nav } from "../../components/Nav";
import Layout from "../../components/Layout";
import Resume from "../../components/Resume";
import { Header } from "../../components/Header";
import Tabs from "../../components/Tabs";
import Ficha from "../../components/Tabs/Ficha";
import Denuncias from "../../components/Tabs/Denuncias";
import Declaraciones from "../../components/Tabs/Declaraciones";
import Historial from "../../components/Tabs/Historial";
import ContentTab from "../../components/ContentTab";

const tabs = [
  { name: "Ficha", component: Ficha },
  { name: "Denuncias", component: Denuncias },
  { name: "Últimas Declaraciones", component: Declaraciones },
  { name: "Historial Político", component: Historial },
];

export default function CandidatePage({ candidate }) {
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
      <Header candidate={candidate} />
      <Resume variant="success" candidate={candidate} />
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTabObject && (
        <ContentTab activeTabComponent={activeTabObject.component} />
      )}
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const { identifier } = params;
  const responseCandidate = await fetch(
    `${process.env.API_URL}/congresistas/${identifier}`,
  );
  const candidate = await responseCandidate.json();

  return {
    props: {
      candidate,
    },
  };
}
