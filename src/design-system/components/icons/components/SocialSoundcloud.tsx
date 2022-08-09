//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconSocialSoundcloud = ({
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
        d="M1021.8 577.8c0 88-71.4 159.399-159.399 159.399h-63.8c-17.6 0-31.8-14.2-31.8-31.8s14.2-31.8 31.8-31.8h63.8c52.8 0 95.6-42.8 95.6-95.6S915.2 482.4 862.4 482.4h-.4c-41.4 0-76.801-26.4-90.001-63.2 0-.2-.4-.4-.4-.8-24.8-69.8-89-121-166-126.6-16.6 1-29.8 14.799-29.8 31.599v381.8c0 17.6-14.2 31.8-31.8 31.8s-31.8-14.2-31.8-31.8v-381.8c0-52.4 42.2-94.801 94.4-95.4 104 6 191.2 74.2 224.8 168.2.2.2.4.4.6.4 4.201 12.8 16.201 22 30.201 22h.4c1.8 0 3.6.2 5.2.2h1c85 3.4 153 73.2 153 159zM416.4 737.199c-17.6 0-31.8-14.201-31.8-31.8v-350.6c0-17.6 14.2-31.8 31.8-31.8s31.8 14.2 31.8 31.8v350.6c0 17.4-14.2 31.8-31.8 31.8zm-127.599-.001c-17.6 0-31.8-14.201-31.8-31.8v-366.6c0-17.6 14.2-31.8 31.8-31.8s31.8 14.2 31.8 31.8v366.4c.2 17.599-14.2 32-31.8 32zm-127.401-.001c-17.6 0-31.8-14.201-31.8-31.8v-255c0-17.6 14.2-31.8 31.8-31.8s31.8 14.2 31.8 31.8v255c0 17.4-14.2 31.8-31.8 31.8zM34 673.396c-17.6 0-31.8-14.2-31.8-31.8v-127.4c0-17.6 14.2-31.8 31.8-31.8s31.8 14.2 31.8 31.8v127.4c0 17.6-14.2 31.8-31.8 31.8zm637.2 0c17.6 0 31.8 14.2 31.8 31.8s-14.2 31.8-31.8 31.8-31.8-14.2-31.8-31.8 14.2-31.8 31.8-31.8z"
      />
    </svg>
  );
};
