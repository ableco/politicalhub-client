import {
  TextInput,
  TextSize,
  Color,
  Inline,
  Stack,
  Text,
  TextWeight,
  TextLeading,
} from "@ableco/baseline";
import { useId } from "@reach/auto-id";

const paddings = {
  xl: [1, 3],
  lg: [2, 3],
  md: [1, 2],
  sm: ["px", 2],
};

const textSize = {
  xl: TextSize.LG,
  lg: TextSize.SM,
  md: TextSize.SM,
  sm: TextSize.XS,
};

const autosizeMinHeight = {
  xl: 40,
  lg: 40,
  md: 32,
  sm: 22,
};

const textColor = {
  xl: Color.Neutral800,
  lg: Color.Neutral700,
  md: Color.Neutral700,
  sm: Color.Neutral700,
};

const inputTypeFromMode = {
  single: "text",
  multi: "multiline",
};

export function Input({
  id,
  size = "md",
  icon,
  label,
  placeholder,
  hideLabel = false,
  mode = "single",
  autosize = autosizeMinHeight[size],
  value,
  name,
  innerRef,
  enforceBorder = false,
  ...props
}) {
  const inputId = useId(id);
  const [paddingY, paddingX] = paddings[size];

  return (
    <Stack space={2} className="w-full">
      {label && !hideLabel ? (
        <Text
          as="label"
          color={Color.Neutral800}
          weight={TextWeight.Medium}
          size={TextSize.SM}
          leading={TextLeading.Relaxed}
          htmlFor={inputId}
        >
          {label}
        </Text>
      ) : null}

      <Inline
        space={2}
        className={[
          "border hover:border-neutral-200 focus-within:border-neutral-300",
          "rounded-md bg-white w-full",
          { "border-white": !enforceBorder },
          { "border-neutral-200": enforceBorder },
        ]}
        p={[0, paddingX]}
      >
        {icon ? (
          <Text
            as="label"
            htmlFor={inputId}
            color={Color.Neutral600}
            className="text-center"
          >
            {icon}
          </Text>
        ) : null}

        <TextInput
          {...props}
          innerRef={innerRef}
          id={inputId}
          type={inputTypeFromMode[mode]}
          text={textColor[size]}
          p={[paddingY, 0]}
          size={textSize[size]}
          placeholderColor={Color.Neutral400}
          className="leading-relaxed focus:outline-none w-full"
          aria-label={label}
          placeholder={placeholder}
          autosize={autosize}
          value={value}
          name={name}
        />
      </Inline>
    </Stack>
  );
}
