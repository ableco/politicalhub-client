/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
export default function Tab({ tab, activeTab, setActiveTab }) {
  function handleOnClick(event) {
    event.preventDefault();
    setActiveTab(tab.name);
    const url = new URL(window.location);
    url.searchParams.set("activeTab", tab.name);
    window.history.pushState({}, "", url);
  }

  return (
    <div
      className={
        "mr-12 pb-3 cursor-pointer " +
        (activeTab === tab.name ? "border-b-4 border-primary-base" : "")
      }
      onClick={handleOnClick}
    >
      <span
        className={"text-sm " + (activeTab === tab.name ? "font-semibold" : "")}
      >
        {tab.name}
      </span>
    </div>
  );
}
