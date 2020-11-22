/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Icon,
  Inline,
  Text,
  Color,
  Spacer,
  TextSize,
  TextWeight,
} from "@ableco/baseline";
import Link from "next/link";
import { Menu } from "./Icons";
import { Search } from "./Search";

export function Nav() {
  return (
    <Inline as="nav" className="p-4">
      <Inline space={5}>
        <Icon color={Color.Neutral800}>
          <Menu />
        </Icon>
        <Link href="/">
          <a>
            <Text color={Color.Neutral800} weight={TextWeight.Bold}>
              votabien
              <Text color={Color.Primary} weight={TextWeight.Bold}>
                .pe
              </Text>
            </Text>
          </a>
        </Link>
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
