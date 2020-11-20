import {
  Icon,
  Inline,
  Text,
  Color,
  Spacer,
  TextSize,
  TextWeight,
} from "@ableco/baseline";
import { Menu } from "./Icons";
import { Search } from "./Search";

export function Nav() {
  return (
    <Inline as="nav">
      <Inline space={5}>
        <Icon color={Color.Neutral800}>
          <Menu />
        </Icon>
        <Text color={Color.Neutral800} weight={TextWeight.Bold}>
          votabien
          <Text color={Color.Primary} weight={TextWeight.Bold}>
            .pe
          </Text>
        </Text>
        <Search />
      </Inline>
      <Spacer />
      <Inline space={5}>
        <Text as="a" color={Color.Primary} size={TextSize.XS}>
          ¿Quieres ayudar?
        </Text>
        <Text as="a" color={Color.Neutral800} size={TextSize.XS}>
          Login
        </Text>
      </Inline>
    </Inline>
  );
}
