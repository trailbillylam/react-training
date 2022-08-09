//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconAnchor = ({
  title: titleSource,
  color,
  size = "md",
  isStandalone = false,
  ...props
}: IconProps): JSX.Element => {
  if (isStandalone && !titleSource) {
    console.warn(
      "You must include a title for a standalone icon to make it accessible. See Storybook documentation for more details."
    );
  }

  const titleId = createGuid();
  const title = isStandalone ? titleSource : undefined;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      css={css`
        ${getIconSizeStyle(size)};
      `}
      aria-hidden={!isStandalone}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M1021.02 731.408 938.734 580.11c-.128-.208-.096-.4-.224-.593l-5.872-10.143c-3.28-5.617-8.432-9.233-14.192-10.593-5.696-1.408-11.985-.544-17.408 2.975l-9.84 6.336c-.193.113-.305.288-.497.416l-145.6 98.32c-10.88 7.008-14.416 21.68-7.936 32.913l6.544 7.2c6.48 11.184 21.265 11.647 32.161 4.64l87.04-59.184c-20.608 166-154.736 293.392-318.96 308.176v-641.6h128.048c17.664 0 32-14.336 32-32s-14.336-32-32-32h-129.44c-.24-.832-.448-1.664-.768-2.464 57.103-13.28 99.695-64.368 99.695-125.536 0-71.248-57.744-129.008-129.008-129.008-71.248 0-128.992 57.744-128.992 129.008 0 60.817 42.112 111.664 98.736 125.28-.336.88-.576 1.808-.848 2.72H351.997c-17.665 0-32 14.336-32 32s14.335 32 32 32H479.98v641.584c-164.176-14.784-298.16-142.128-318.816-308.112l86.944 59.12c10.88 7.008 25.664 6.544 32.144-4.64l6.56-7.2c6.48-11.216 2.944-25.903-7.951-32.911l-145.6-98.32c-.193-.144-.305-.32-.48-.415l-9.857-6.336a22.16 22.16 0 0 0-17.408-2.976c-5.744 1.36-10.912 4.992-14.193 10.592l-5.872 10.16c-.112.193-.096.385-.209.593L2.971 731.408c-6.496 11.168-2.945 25.872 7.952 32.896l9.12 3.424c10.88 6.992 24.256.64 30.752-10.543l47.904-88.975c29.376 204.72 205.104 357.823 413.28 357.823 208.063 0 383.92-153.088 413.36-357.712l47.84 88.864c6.496 11.184 19.888 17.535 30.768 10.543l9.12-3.424c10.896-7.024 14.448-21.728 7.952-32.896zM447.506 126.975c0-35.84 29.153-65.01 64.993-65.01 35.84 0 65.008 29.153 65.008 65.009s-29.152 65.009-65.009 65.009c-35.824-.016-64.992-29.168-64.992-65.008z"
      />
    </svg>
  );
};
