//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconChart = ({
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
        d="M272.064 319.984H48c-17.68 0-32 14.32-32 32V992c0 17.68 14.32 32 32 32h224.064c17.68 0 32-14.32 32-32V351.984c0-17.68-14.32-32-32-32zm-32 640.016H80V383.984h160.064V960zm383.68-449.744h-224.08c-17.68 0-32 14.32-32 32V992c0 17.68 14.32 32 32 32h224.08c17.68 0 32-14.32 32-32V542.256c0-17.696-14.304-32-32-32zm-32 449.744h-160.08V574.256h160.08V960zM976 0H752.272c-17.68 0-32 14.32-32 32v960c0 17.68 14.32 32 32 32H976c17.68 0 32-14.32 32-32V32c0-17.68-14.32-32-32-32zm-32 960H784.272V64H944v896z"
      />
    </svg>
  );
};
