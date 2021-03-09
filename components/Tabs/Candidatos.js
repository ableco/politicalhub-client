import Candidates from "../Candidates";

export default function Candidatos({ candidates, politicalParty }) {
  return (
    <div className="px-8 lg:px-52 py-10">
      <Candidates
        candidates={candidates}
        politicalParty={politicalParty}
        showNumber
      />
    </div>
  );
}
