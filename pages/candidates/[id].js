import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Nav } from "../../components/Nav";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Resume from "../../components/Resume";
import { Header } from "../../components/Header";
import Tabs from "../../components/Tabs";
import Ficha from "../../components/Tabs/Ficha";
// import Perfil from "../../components/Tabs/Perfil";
import Sentencias from "../../components/Tabs/Sentencias";
// import Declaraciones from "../../components/Tabs/Declaraciones";
import Historial from "../../components/Tabs/Historial";
import ContentTab from "../../components/ContentTab";
import { candidateAnswers } from "../../utils/questionsAndAnswers";

const allTabs = [
  { name: "Ficha", component: Ficha },
  // { name: "Perfil Político", component: Perfil },
  { name: "Sentencias", component: Sentencias },
  // { name: "Últimas Declaraciones", component: Declaraciones },
  { name: "Historial Político", component: Historial },
];

export default function CandidatePage({
  candidate,
  politicalParty,
  metaPoliticalParties,
}) {
  const hasAnswers = candidateAnswers.find((item) => item.id === candidate.id);
  const tabs = hasAnswers
    ? allTabs
    : allTabs.filter((tab) => tab.name !== "Perfil Político");

  const router = useRouter();
  const [activeTab, setActiveTab] = useState(
    router.query.activeTab ?? tabs[0].name,
  );
  const activeTabObject = tabs.find((tab) => tab.name === activeTab);

  useEffect(() => {
    setActiveTab(router.query.activeTab ?? tabs[0].name);
  }, [router.query.activeTab, setActiveTab, tabs]);

  return (
    <Layout>
      <Nav />
      <Header candidate={candidate} />
      <Resume
        candidate={candidate}
        politicalParty={politicalParty.political_organization}
        metaPoliticalParties={metaPoliticalParties}
      />
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTabObject && (
        <ContentTab
          activeTabComponent={activeTabObject.component}
          candidate={candidate}
        />
      )}
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const responseCandidate = await fetch(
    `${process.env.API_URL}/candidates/${id}?include=person,person.individual_financial_contributions,person.electoral_history_entries,person.tax_debts,electoral_process,political_organization,candidate_education_entries,candidate_university_education_entries,candidate_graduate_education_entries,candidate_work_experience_entries,candidate_political_party_office_entries,candidate_previous_elected_office_entries,candidate_political_organization_resignation_entries,candidate_criminal_conviction_entries,candidate_civil_judgement_entries,candidate_income_entries,candidate_property_entries`,
  );
  const { candidate } = await responseCandidate.json();

  const responsePoliticalParty = await fetch(
    `${process.env.API_URL}/political_organizations/${candidate.political_organization.slug}`,
  );
  const politicalParty = await responsePoliticalParty.json();

  const responsePoliticalParties = await fetch(
    `${process.env.API_URL}/political_organizations`,
  );
  const politicalParties = await responsePoliticalParties.json();

  return {
    props: {
      candidate,
      politicalParty,
      metaPoliticalParties: politicalParties.meta,
    },
  };
}
