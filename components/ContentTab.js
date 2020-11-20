export default function ContentTab({ activeTabComponent }) {
  return <div>{activeTabComponent()}</div>;
}
