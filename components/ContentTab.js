export default function ContentTab({ activeTabComponent, ...props }) {
  return <div>{activeTabComponent({ ...props })}</div>;
}
