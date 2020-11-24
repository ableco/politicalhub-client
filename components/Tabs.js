import Tab from "./Tab";

export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="mt-12">
      <div className="flex px-4 sm:px-8 md:px-8 lg:px-52 md:justify-center-center border-b border-neutral-200">
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
