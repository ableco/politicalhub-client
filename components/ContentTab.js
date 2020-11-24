export default function ContentTab({ activeTabComponent, candidate }) {
  return <div>{activeTabComponent({ candidate })}</div>;
}
