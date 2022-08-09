//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconHeart = ({
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
        d="M287.984 114.16c31.376 0 88.094 15.008 180.094 105.616l45.616 44.912 44.928-45.632c63.872-64.896 131.84-105.2 177.376-105.2 61.408 0 109.809 21.008 157.009 68.096 44.464 44.368 68.992 103.36 68.992 166.112.032 62.784-24.448 121.824-69.408 166.672-3.664 3.712-196.992 212.304-358.96 387.104-7.632 7.248-16.352 8.32-20.991 8.32-4.576 0-13.2-1.024-20.8-8.096-39.472-43.905-325.552-362-358.815-395.232C88.497 462.416 64 403.376 64 340.608c.015-62.752 24.511-121.728 69.04-166.144 43.295-43.264 93.984-60.304 154.944-60.304zm-.002-64c-76.528 0-144 22.895-200.176 79.008-117.072 116.768-117.072 306.128 0 422.96 33.424 33.44 357.855 394.337 357.855 394.337 18.48 18.496 42.753 27.68 66.96 27.68 24.225 0 48.4-9.184 66.912-27.68 0 0 354.88-383.024 358.656-386.85 117.04-116.88 117.04-306.24 0-423.007-58.112-58-123.024-86.784-202.208-86.784-75.648 0-160 60.32-223.008 124.32C447.981 110.159 366.237 50.16 287.981 50.16z"
      />
    </svg>
  );
};
