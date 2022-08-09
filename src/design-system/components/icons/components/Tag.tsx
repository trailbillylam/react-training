//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconTag = ({
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
        d="m1023.98 416.272-.001-338.367c0-42.944-34.944-77.904-77.872-77.904H600.73c-21.68 0-54.496 0-75.92 21.44L18.875 527.393c-12.16 12.16-18.88 28.304-18.88 45.487 0 17.216 6.689 33.376 18.849 45.537l386.8 386.72C417.756 1017.312 433.916 1024 451.1 1024s33.36-6.689 45.487-18.849l505.952-505.968c21.696-21.648 21.569-52.816 21.441-82.912zm-66.685 37.666L450.878 959.874 64.126 572.658 569.518 67.154c5.088-3.152 23.408-3.152 30.992-3.152l14.4.048 331.2-.048c7.665 0 13.873 6.24 13.873 13.904V416.53c.064 12.176.129 32.544-2.688 37.408zM768.014 128.001c-70.689 0-128 57.311-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 192c-35.344 0-64-28.656-64-64s28.656-64 64-64 64 28.656 64 64-28.656 64-64 64z"
      />
    </svg>
  );
};
