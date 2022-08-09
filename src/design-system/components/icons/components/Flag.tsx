//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconFlag = ({
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
        d="M680 95.328c-160 0-202.655-96-405.312-96C144-.672 64 98.016 64 98.016v894.656c0 17.665 14.336 32 32 32s32-14.335 32-32V584.8c33.76-21.776 80.336-41.472 138.688-41.472 202.656 0 261.312 96 421.312 96s272-96 272-96v-544s-120 96-280 96zM896.001 510.72c-36.16 23.584-112.784 64.606-208 64.606-62.912 0-105.84-17.263-160.224-39.135-66.272-26.64-141.408-56.864-261.088-56.864-54.688 0-101.072 13.76-138.688 32.16v-387.47c24.096-21.92 76.624-60.688 146.688-60.688 94.112 0 147.088 22.848 203.184 47.008 55.872 24.08 113.664 48.992 202.128 48.992 85.248 0 160.128-23.568 216-48.912V510.72z"
      />
    </svg>
  );
};
