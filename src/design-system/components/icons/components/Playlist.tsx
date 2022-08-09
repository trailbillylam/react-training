//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconPlaylist = ({
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
        d="M33.76 63.76h448c17.664 0 32-14.336 32-32s-14.336-32-32-32h-448c-17.664 0-32 14.336-32 32s14.32 32 32 32zm0 192h448c17.664 0 32-14.336 32-32s-14.336-32-32-32h-448c-17.664 0-32 14.336-32 32s14.32 32 32 32zm480 160c0-17.664-14.336-32-32-32h-448c-17.664 0-32 14.336-32 32s14.336 32 32 32h448c17.664 0 32-14.336 32-32zm499.12-91.216L699.968 11.646c-9.904-9.92-24.656-11.84-36.592-6.016-12.544 4.336-21.616 16.113-21.616 30.128v708.4c-33.92-25.135-78.432-40.527-127.376-40.527-106.064 0-192.097 71.776-192.097 160.288 0 88.528 86.032 160.336 192.097 160.336 106.128 0 192.096-71.808 192.096-160.336 0-4.016-.368-7.936-.72-11.871V107.952L967.6 369.808c12.496 12.496 32.769 12.496 45.265 0 12.496-12.496 12.496-32.769.015-45.265zM641.76 867.021c-2.304 44.497-54.191 92.815-128.127 92.815-75.648 0-128.353-50.56-128.353-95.871 0-45.344 52.704-95.84 128.353-95.84 73.936 0 125.823 48.256 128.127 92.784v6.113z"
      />
    </svg>
  );
};
