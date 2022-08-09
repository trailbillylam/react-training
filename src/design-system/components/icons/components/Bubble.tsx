//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconBubble = ({
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
        d="M512 128c247.024 0 448 143.553 448 320.001 0 176.432-200.976 320-448 320l-26.512.096c-17.584 0-29.088-.464-47.072-3.153l-35.856-5.12-23.008 27.84c-10.576 12.784-64.544 57.12-124.112 85.664 12.112-32.032 21.04-67.008 21.84-101.6l.32-1.904V725.2l-34.864-17.808C129.136 649.28 64 554.752 64 448c0-176.448 200.976-320 448-320zm0-63.999C229.2 64.001 0 235.936 0 448c0 132.064 78.256 247.152 213.584 316.336 0 .816-.256 1.408-.256 2.32 0 57.376-32.16 120.464-51.008 152.944h.048c-1.488 3.49-2.368 7.313-2.368 11.41 0 16.08 12.96 28.992 29.008 28.992 2.416 0 6.256-.496 7.664-.496.336 0 .528 0 .496.095 100-16.336 209.952-104.688 231.824-131.344 22.48 3.344 37.664 3.84 56.48 3.84 7.936 0 16.496-.096 26.528-.096 282.752 0 512-171.904 512-384 0-212.064-229.248-384-512-383.999z"
      />
    </svg>
  );
};
