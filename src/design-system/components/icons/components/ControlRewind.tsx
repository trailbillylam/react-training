//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconControlRewind = ({
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
        d="M573.92 197.904 68.64 512.001l505.28 314.096V579.121l384 246.976V197.905l-384 246.992v-255.84 8.847zm-2.656-63.999c10.704 0 22.736 2.67 32.416 8.062 20.32 11.28 34.24 32.705 34.24 55.937v131.84l298.224-186.192c10.32-6.4 21.376-9.648 33.12-9.648 10.688 0 15.728 2.671 25.424 8.063 20.32 11.28 27.232 32.704 27.232 55.937v628.192c0 23.248-7.248 44.656-27.568 55.936-9.68 5.376-17.727 8.064-28.432 8.064-11.727 0-20.783-3.216-31.103-9.665L637.921 694.255v131.84c0 23.248-13.92 44.657-34.24 55.937-9.68 5.376-21.04 8.064-31.76 8.064-11.712 0-23.792-3.215-34.112-9.664L32.353 566.336C13.585 554.688 2.08 534.128 2.08 512s11.376-42.671 30.16-54.351l505.264-314.096a63.856 63.856 0 0 1 33.759-9.648z"
      />
    </svg>
  );
};
