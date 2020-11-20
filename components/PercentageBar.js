import { Frame, Color } from "@ableco/baseline";

export default function PercentageBar({ variant, percentage, marginBottom }) {
  return (
    <Frame
      bg={Color.White}
      className={`rounded-lg overflow-hidden w-full ${marginBottom}`}
    >
      <Frame
        style={{ width: percentage }}
        className={`h-4 bg-${variant}`}
      ></Frame>
    </Frame>
  );
}
