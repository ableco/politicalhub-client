import Candidates from "../Candidates";

export default function Candidatos({ candidates, politicalParty }) {
  return (
    <div className="px-8 lg:px-52 py-10">
      <h2 className="text-2xl font-extrabold">A la presidencia</h2>
      <Candidates
        candidates={candidates}
        politicalParty={politicalParty}
        filter={{ office: [1, 2], per_page: 20 }}
      />
      <h2 className="text-2xl font-extrabold">Al Congreso</h2>
      <Candidates
        candidates={candidates}
        politicalParty={politicalParty}
        filterByUbigeo
        filter={{ office: 4, per_page: 9 }}
        showNumber
      />
    </div>
  );
}
