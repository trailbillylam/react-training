//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconMustache = ({
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
        d="M792.848 736.72c-101.344 0-158.865-47.629-196.945-79.148-13.472-11.153-25.727-21.905-36.88-31.665-16.912-14.847-38-33.343-45.344-35.903-.223 0-3.712-.16-3.935-.192-1.168.096-4.144.687-4.448.72-5.072 2.064-23.087 17.568-37.568 30-13.136 11.28-28.111 24.16-45.039 37.376l-3.088 2.368c-43.472 33.935-97.584 76.159-193.152 76.159-70.992 0-140.928-32.128-182.576-83.872-27.92-34.689-57.296-95.025-38.672-185.473 2.256-10.944 10.016-19.904 20.432-23.632 10.48-3.776 22.016-1.712 30.608 5.376.624.464 22.576 17.344 59.057 17.344 18.368 0 37.504-4.336 56.832-12.945 33.135-14.752 56.735-56.127 81.71-84.063 34.176-38.16 72.848-81.408 136.689-81.904 44.048 0 83.792 16.288 119.248 48.496 35.311-32.065 74.767-48.257 117.68-48.257 65.103.496 104.592 43.776 139.439 82 25.44 27.872 49.472 69.216 82.608 83.968 19.328 8.592 38.672 12.943 57.488 12.943 37.872 0 61.504-17.311 62.449-18.063 8.767-6.496 20.319-8.193 30.48-4.225 10.143 4 17.679 12.88 19.711 23.664 17.088 89.44-12.96 149.408-41.184 183.968-42.767 52.4-113.903 84.96-185.6 84.96zM510.733 525.875c.992 0 3.683.095 4.627.19.032 0 4.688.336 4.688.369.336.032 3.008.368 3.296.432 23.153 3.28 44.624 22.128 77.216 50.688 10.704 9.408 22.496 19.744 35.472 30.496 34.784 28.816 78.097 64.656 156.816 64.656 53.311 0 105.743-23.632 136.783-61.68 20.4-24.975 31.009-54.72 31.68-88.784-15.024 4.689-33.28 8.192-54.32 8.192-27.664 0-55.568-6.192-82.976-18.368-45.248-20.095-76.304-69.12-103.68-99.152-34.529-37.872-57.473-61.088-92.081-61.376-46.16 0-75.953 29.056-94.416 50.912-6.033 7.12-14.817 11.216-24.097 11.216-9.28 0-18.08-4.128-24.08-11.248-18.529-21.936-48.416-51.12-93.84-51.12-35.088.257-57.408 23.281-90.992 60.85-27.056 30.223-57.696 79.471-103.231 99.68-27.392 12.191-55.104 18.367-82.304 18.367-20.4 0-38.064-3.408-52.624-8.032-.032 34.72 10.111 64.912 30.335 90.032 29.936 37.153 81.04 60.256 133.439 60.256 74 0 114.896-31.935 154.464-62.815l3.088-2.416c16.048-12.529 30.24-24.752 42.688-35.44 28.512-24.497 47.329-40.69 67.649-44.289.015.016 9.695-1.616 16.4-1.616z"
      />
    </svg>
  );
};
