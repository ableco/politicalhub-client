import {
  Center,
  Stack,
  Avatar,
  Text,
  TextWeight,
  TextSize,
  Color,
} from "@ableco/baseline";
import titleize from "../utils/titleize";

export function Header({ candidate }) {
  return (
    <Center className="mt-16">
      <Stack className="text-center" space={6}>
        <Center>
          <Avatar
            source={candidate.foto}
            name={`${candidate.nombres}  ${candidate.apellido_paterno} ${candidate.apellido_materno}`}
            className="object-cover w-28 h-28"
          />
        </Center>
        <Stack space={4}>
          <Text
            as="h1"
            size={TextSize.XL3}
            weight={TextWeight.Bold}
            className="px-5"
          >
            {titleize(
              `${candidate.nombres}  ${candidate.apellido_paterno} ${candidate.apellido_materno}`,
            )}
          </Text>
          <Text color={Color.Neutral400} className="px-5">
            Candidato/a al Congreso por{" "}
            <Text color={Color.Primary}>
              {titleize(candidate.organizacion_politica)}
            </Text>
          </Text>
        </Stack>
      </Stack>
    </Center>
  );
}
