//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconTarget = ({
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
        d="M992 480h-97.44C879.168 293.472 730.512 144.96 544 129.536V32c0-17.664-14.336-32-32-32s-32 14.336-32 32v97.536C293.504 144.96 144.832 293.472 129.424 480H32c-17.664 0-32 14.336-32 32s14.336 32 32 32h97.424C144.832 730.512 293.504 879.04 480 894.464V992c0 17.664 14.336 32 32 32s32-14.336 32-32v-97.536C730.512 879.04 879.168 730.512 894.56 544H992c17.664 0 32-14.336 32-32s-14.336-32-32-32zM480 193.584V480H193.552C208.56 328.8 328.8 208.592 480 193.584zM193.552 544H480v286.416C328.8 815.408 208.56 695.2 193.552 544zM544 830.416V544h286.448C815.44 695.2 695.2 815.408 544 830.416zM544 480V193.584C695.2 208.592 815.44 328.8 830.448 480z"
      />
    </svg>
  );
};
