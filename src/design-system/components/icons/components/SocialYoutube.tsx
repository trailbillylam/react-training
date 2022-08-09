//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconSocialYoutube = ({
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
        d="M940.736 189.696C912.992 169.728 835.68 143.2 511.728 143.2c-347.152 0-398.656 30.464-415.185 40.432C8.575 236.479.223 470.447-.544 517.887.512 580.545 10.64 789.008 96.48 840.577c16.497 9.935 67.712 40.223 415.248 40.223 324.16 0 401.376-26.4 429.008-46.288 74.976-53.935 83.6-239.68 83.808-317.439-.192-62.528-6.752-271.872-83.807-327.376zm-37.376 592.88c-11.152 8.032-75.186 34.223-391.634 34.223-305.936 0-370.128-23.744-382.256-31.056-30.88-18.528-63.472-116.88-66.031-268.032 2.528-150.816 35.568-260.912 66.097-279.216 12.16-7.344 76.591-31.28 382.19-31.28 316.192 0 380.4 26.369 391.633 34.433 27.409 19.744 56.752 123.68 57.184 275.632-.432 154.336-29.968 245.712-57.184 265.296zM720.415 486.83 432.481 310.141a32.003 32.003 0 0 0-32.257-.464 32.016 32.016 0 0 0-16.288 27.872v353.44a32.016 32.016 0 0 0 32 32 32.02 32.02 0 0 0 16.527-4.592L720.4 541.645c9.6-5.807 15.472-16.19 15.472-27.407s-5.856-21.632-15.456-27.408zM447.953 634.301V394.204l194 120.032z"
      />
    </svg>
  );
};
