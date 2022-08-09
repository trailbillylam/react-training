//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconActionUndo = ({
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
        d="M990.064 942.336c-.336 0-.72 0-1.088-.031-16.192-.529-26.4-13.088-27.776-29.216-1.088-11.872-33.968-299.088-482.256-298.784v183.664c0 12.368-7.12 23.664-18.336 28.944-11.088 5.312-24.432 3.68-33.968-4.224L11.664 478.913a31.864 31.864 0 0 1-11.68-24.784c.032-9.6 4.335-18.687 11.776-24.752l414.96-340.56c9.568-7.807 22.784-9.311 33.936-4.095 11.153 5.311 18.288 16.56 18.288 28.91v179.633c185.968 5.904 330.992 65.712 424.336 174.976 151.936 177.776 118.031 436.16 116.432 446.912-2.368 15.664-13.872 27.183-29.648 27.183zm-543.12-392.527.063-.001C767.23 550 889.599 658.128 959.47 753.617c-10.224-76.496-40.064-168.72-105.008-244.031-86.336-100.096-225.44-152.848-407.535-152.848-17.68 0-32-14.32-32-32V180.962L82.496 454.322l332.432 275.904v-148.4a31.953 31.953 0 0 1 9.408-22.656 32.02 32.02 0 0 1 22.608-9.36z"
      />
    </svg>
  );
};
