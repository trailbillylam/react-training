//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconStar = ({
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
        d="m512 77.488 137.472 285.088L962.08 409.04 735.664 634.88l7.616 45.311 45.28 270.16-276.607-148.784L235.36 950.415l45.295-270.224 7.584-45.311L61.904 409.008l312.592-46.464L395.04 320zm-.017-61.936c-28.656 0-54.784 16.176-66.977 41.456l-115.904 240.64-266.704 39.664c-27.391 4.096-50.143 22.8-58.975 48.384-8.817 25.664-2.145 53.904 17.199 73.152l195.408 195.2-45.328 270.656c-4.56 27.28 7.232 54.624 30.368 70.576 12.72 8.737 27.664 13.153 42.624 13.153 12.32 0 24.64-2.992 35.793-8.977l232.496-125.184 232.512 125.184a75.853 75.853 0 0 0 35.776 8.977c14.96 0 29.905-4.416 42.657-13.153 23.103-15.952 34.91-43.295 30.319-70.576l-45.344-270.656 195.504-195.2c19.344-19.248 25.968-47.504 17.152-73.152-8.848-25.616-31.6-44.32-58.976-48.385l-266.656-39.664-115.968-240.64c-12.112-25.311-38.256-41.455-66.976-41.455z"
      />
    </svg>
  );
};
