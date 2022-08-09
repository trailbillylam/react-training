//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconShareAlt = ({
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
        d="M901.84 949.376H69.841v-640h257.6l64.72-62.336-1.664-1.664H69.84c-35.344 0-64 28.656-64 64v640c0 35.344 28.656 64 64 64h832c35.343 0 64-28.656 64-64V448.704l-64 61.088v439.584zm-631.711-256 64.48-.001c44.865-254.496 266.545-448 533.889-448 11.215 0 21.855.096 32.623.176L783.873 362.783c-12.464 12.496-12.464 32.752 0 45.248 6.255 6.256 14.463 9.376 22.656 9.376s16.336-3.12 22.592-9.376l189.024-194L829.12 19.999c-12.464-12.496-32.72-12.496-45.248 0-12.464 12.496-12.464 32.752 0 45.248l116.176 116.16c-10.033-.016-19.968-.048-30.208-.048-303.056 0-553.567 221.952-599.711 512.017z"
      />
    </svg>
  );
};
