//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconEnvolopeLetter = ({
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
        d="M1023.31 473.28c-1.36-11.312-5.614-21.713-12.095-30.465h.16l-.88-.88c-3.28-4.32-7.12-8.128-11.408-11.504L831.935 262.047V158.783c0-17.68-14.32-32-32-32H698.607l-116.8-99.711c-36.223-36.224-99.504-36.289-135.776 0l-116.4 99.711H223.935c-17.68 0-32 14.32-32 32V264.16L28.815 427.28c-17.343 11.472-28.88 31.088-28.88 53.344v479.504c0 35.184 28.817 64 64 64h896c35.184 0 64-28.816 64-64v-478.24c.224-2.88-.064-5.76-.624-8.607zM268.865 725.503 63.937 915.582V544.686zm61.697 29.999a31.634 31.634 0 0 0 11.377-8.224c1.712-1.935 3.056-4.063 4.224-6.255l137.904-127.936c7.248-5.84 15.84-8.913 24.88-8.913 9.183 0 18.367 3.216 24.527 8l383.84 347.936H110.002zm427.777-25.776 201.6-178.896v361.632zm139.599-313.104h-.976l54.896 55.792-119.92 106.432V350.638zM491.283 72.318c6.064-6.032 14.095-9.376 22.623-9.376 8.56 0 16.592 3.344 22.656 9.376l64.624 54.464H426.754zm276.655 118.464V635.63l-57.312 50.88-136.32-123.568c-37.68-29.536-91.775-30.817-131.68 1.376l-126.624 117.44-60.064-53.008V190.782zM103.777 442.813l88.16-88.129V572.3L75.313 469.404l26.992-26.592h1.472z"
      />
    </svg>
  );
};
