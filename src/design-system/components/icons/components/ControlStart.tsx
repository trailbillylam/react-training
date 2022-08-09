//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconControlStart = ({
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
        d="M974.944 65.392c0-23.232-12.592-44.654-32.912-55.935a63.765 63.765 0 0 0-31.088-8.063 63.96 63.96 0 0 0-33.775 9.648L141.44 457.634c-15.952 9.905-26.512 26.208-29.376 44.4V32.004c0-17.664-14.336-32-32-32s-32 14.336-32 32v960c0 17.664 14.336 32 32 32s32-14.336 32-32V521.939c2.88 18.208 13.44 34.511 29.375 44.384l736.72 446.64a63.881 63.881 0 0 0 33.776 9.664 63.937 63.937 0 0 0 31.088-8.065 63.958 63.958 0 0 0 32.912-55.936zM175.2 511.985 910.944 65.393l1.008 893.216z"
      />
    </svg>
  );
};
