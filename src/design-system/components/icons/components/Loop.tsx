//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconLoop = ({
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
        d="m960 101.84-896.002.002c-35.344 0-64 28.656-64 64v576c0 35.36 28.656 64 64 64h160c20.496 0 32-26.32 32-31.984v-.016c0-5.824-10.88-32.416-32-32.416h-120.96c-21.376 0-38.72-17.344-38.72-38.72V206.002c0-21.391 17.328-38.72 38.72-38.72l818.272-1.007c21.376 0 38.72 17.328 38.72 38.72V702.69c0 21.376-17.344 38.72-38.72 38.72H518.142l75.984-68.912c9.344-8.944 12.369-23.408 3.025-32.336l-5.472-8.064c-9.376-8.945-24.496-8.945-33.84 0L428.111 750.53c-.192.16-.368.224-.528.368l-8.48 8.096c-4.672 4.431-7.008 10.335-6.976 16.223-.032 5.904 2.288 11.777 6.977 16.288l8.48 8.096c.16.16.368.192.528.336L555.84 915.44c9.344 8.944 24.464 8.944 33.84 0l5.472-8.065c9.344-8.944 6.32-23.44-3.025-32.368l-77.135-69.168H960c35.343 0 64-28.64 64-64v-576c0-35.344-28.657-64-64-64z"
      />
    </svg>
  );
};
