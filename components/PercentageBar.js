export default function PercentageBar({ variant, percentage, marginBottom }) {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden w-full ${marginBottom}`}
    >
      <div style={{ width: percentage }} className={`h-4 bg-${variant}`}></div>
    </div>
  );
}
