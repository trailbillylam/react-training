//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconEarphonesAlt = ({
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
        d="M1023.84 572.544c.096-21.056-3.217-100.496-5.745-123.216-29.12-260.752-240.752-450-503.184-450-273.344 0-494.815 210.624-509.84 489.904-.32 6.096-2.56 49.344-2.72 75.088l-.08 14.32C.958 584.56.158 590.672.158 596.976v214.656c0 46.88 38.128 85.008 85.008 85.008h86.288c46.88 0 85.023-38.128 85.023-85.008v-214.64c0-46.88-38.16-85.008-85.024-85.008H85.15a85.65 85.65 0 0 0-17.184 1.744c.48-10.383.912-18.576 1.025-21.056C82.159 247.888 276.127 63.328 514.91 63.328c229.28 0 414.128 165.344 439.568 393.12 1.072 9.504 2.448 33.664 3.552 57.92-6.193-1.44-12.577-2.385-19.2-2.385h-85.28c-46.88 0-85.008 38.128-85.008 85.008v213.664c0 32.368 18.4 60.256 45.09 74.592l-205.44 80.656v-5.216c0-17.664-14.337-32-32-32h-96c-17.665 0-32 14.336-32 32v32c0 17.664 14.335 32 32 32h96c.272 0 .512-.08.784-.08l57.36-.224L963.89 895.007c4.32-1.792 7.984-4.464 10.992-7.664 28.848-13.616 48.991-42.736 48.991-76.688V596.99c0-5.216-.64-10.288-1.552-15.233.88-2.944 1.504-6 1.52-9.216zm-938.689 3.44h86.29c11.6 0 21.023 9.408 21.023 21.008v214.656c0 11.6-9.44 21.008-21.025 21.008H85.152c-11.6 0-21.007-9.409-21.007-21.008V596.992c.015-11.6 9.423-21.008 21.007-21.008zm747.377 21.008c0-11.6 9.41-21.008 21.009-21.008h85.28c11.6 0 21.023 9.408 21.023 21.008v213.664c0 11.6-9.44 21.008-21.024 21.008h-85.28c-11.6 0-21.008-9.408-21.008-21.008V596.992z"
      />
    </svg>
  );
};
