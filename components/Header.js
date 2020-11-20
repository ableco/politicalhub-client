import {
  Center,
  Stack,
  Avatar,
  Text,
  TextWeight,
  TextSize,
  Color,
} from "@ableco/baseline";

export function Header() {
  return (
    <Center className="mt-16">
      <Stack className="text-center" space={6}>
        <Center>
          <Avatar
            source="https://assets.teenvogue.com/photos/5eac665515d49786070b2c49/1:1/w_1267,h_1267,c_limit/joe%20biden%20addresses%20allegations%20denies%20teen%20vogue.jpg"
            name="Joe Biden"
            width="104"
            height="104"
          />
        </Center>
        <Stack space={4}>
          <Text as="h1" size={TextSize.XL3} weight={TextWeight.Bold}>
            Joe Biden
          </Text>
          <Text color={Color.Neutral400}>
            Candidato/a al Congreso por{" "}
            <Text color={Color.Primary}>Partido Morado</Text>
          </Text>
        </Stack>
      </Stack>
    </Center>
  );
}
