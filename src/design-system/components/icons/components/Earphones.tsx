//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconEarphones = ({
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
        d="M1023.84 604.56c.096-21.056-3.216-100.497-5.744-123.217-29.12-260.752-240.752-450-503.184-450-273.344 0-494.815 210.624-509.84 489.904-.32 6.096-2.56 49.344-2.72 75.088l-.08 14.32C.96 616.575.16 622.687.16 628.991v278.656c0 46.88 38.128 85.008 85.008 85.008h86.288c46.88 0 85.023-38.128 85.023-85.008v-278.64c0-46.88-38.16-85.008-85.024-85.008h-86.32a85.65 85.65 0 0 0-17.184 1.744c.48-10.383.912-18.591 1.024-21.055C82.16 279.904 276.111 95.344 514.911 95.344c229.28 0 414.128 165.344 439.568 393.12 1.088 9.504 2.464 33.664 3.569 57.92-6.24-1.44-12.609-2.385-19.233-2.385h-85.28c-46.88 0-85.008 38.128-85.008 85.008V906.67c0 46.895 38.128 85.007 85.008 85.007h85.28c46.88 0 85.024-38.127 85.024-85.007V629.007c0-5.216-.64-10.288-1.568-15.216.928-2.944 1.536-6.017 1.569-9.233zm-938.704 3.439h86.288c11.6 0 21.023 9.408 21.023 21.008v278.656c0 11.616-9.44 21.008-21.024 21.008H85.135c-11.6 0-21.008-9.409-21.008-21.008V629.007c.032-11.6 9.44-21.008 21.009-21.008zM959.84 906.655c0 11.6-9.44 21.008-21.023 21.008h-85.28c-11.6 0-21.009-9.408-21.009-21.008V629.007c0-11.6 9.409-21.007 21.008-21.007h85.28c11.6 0 21.024 9.408 21.024 21.007v277.648z"
      />
    </svg>
  );
};
