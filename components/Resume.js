import PercentageBar from "../components/PercentageBar";
import {
  Text,
  Flex,
  Frame,
  TextSize,
  TextWeight,
  Color,
} from "@ableco/baseline";

export default function Resume() {
  return (
    <Flex as="section" className="py-8 px-10 mx-52 mt-12 bg-neutral-100">
      <Frame
        as="section"
        className="flex-grow"
        style={{ paddingRight: "50px" }}
      >
        <Text as="h2" className="mb-3" weight={TextWeight.SemiBold}>
          Declaraciones en Tweets o Noticias
        </Text>
        <PercentageBar
          variant="success-base"
          percentage="50%"
          marginBottom="mb-3"
        />
        <Flex className="mb-8" distribution="between">
          <Text as="p" size={TextSize.SM} color={Color.SuccessDark}>
            Mayormente veridicas
          </Text>
          <Text as="p" color={Color.Neutral400} size={TextSize.SM}>
            55 checks
          </Text>
        </Flex>
        <Text as="h2" className="mb-3" weight={TextWeight.SemiBold}>
          Denuncias
        </Text>
        <Flex alignment="center">
          <Frame
            className="px-2"
            bg={Color.Success}
            style={{ borderRadius: "4px" }}
          >
            <Text color={Color.White}>1</Text>
          </Frame>
          <Text
            as="p"
            size={TextSize.SM}
            className="ml-3"
            color={Color.SuccessDark}
          >
            Muy por debajo de la media
          </Text>
        </Flex>
      </Frame>
      <Frame as="section" className="flex-grow" style={{ paddingLeft: "50px" }}>
        <Text as="p" weight={TextWeight.SemiBold} className="mb-5">
          Actual Partido Politico
        </Text>
        <Flex className="mb-5">
          <Frame
            className="mr-6"
            bg={Color.Neutral200}
            style={{ width: "88px", height: "88px" }}
          ></Frame>
          <Frame>
            <Text
              as="h2"
              size={TextSize.LG}
              color={Color.Primary}
              weight={TextWeight.SemiBold}
              className="mb-2"
            >
              Partido Morado
            </Text>
            <Text as="p" className="mb-2">
              Denuncias acumuladas:
            </Text>
            <Flex alignment="center">
              <Frame
                className="px-2 mr-3"
                bg={Color.SuccessLight}
                style={{ borderRadius: "4px" }}
              >
                <Text color={Color.White}>12</Text>
              </Frame>
              <Text size={TextSize.SM} color={Color.Success}>
                Debajo de la media
              </Text>
            </Flex>
          </Frame>
        </Flex>
        <Text size={TextSize.SM} color={Color.Neutral400}>
          Tambien ha pertenecido a{" "}
          <a href="/" className="border-b border-neutral-400">
            Somos Peru
          </a>{" "}
          y{" "}
          <a href="/" className="border-b border-neutral-400">
            Solidaridad Nacional
          </a>
        </Text>
      </Frame>
    </Flex>
  );
}
