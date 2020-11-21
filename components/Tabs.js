import Tab from "./Tab";

export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="mt-12">
      <div className="flex px-52 border-b border-neutral-200">
        {tabs.map((tab) => (
          <Tab
            tab={tab}
            key={tab.name}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
    </div>
  );
}
