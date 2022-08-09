//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconUserFemale = ({
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
        d="M960.032 802.688 681.535 670.624c37.152-18.624 182.256-24.528 194.256-57.28 0 0-57.344-88.016-71.344-202.336-5.44-44.368-14.752-102.592-24-184.592C765.44 93.408 653.567 0 512.257 0h-.513C370.432 0 258.56 93.408 243.568 226.4c-9.248 82-18.56 140.224-24 184.592-14 114.336-71.344 202.336-71.344 202.336 12 32.752 157.088 38.656 194.256 57.28L63.968 802.688S0 825.152 0 878.16v84.528C0 998.064 28.624 1024 63.968 1024h896.064c35.343 0 63.967-25.936 63.967-61.312V878.16c0-53.008-63.967-75.472-63.967-75.472zM63.999 960v-81.84c0-3.408 12.096-11.6 21.936-15.344 2.127-.752 3.44-1.344 5.44-2.32L369.87 728.432c22.128-10.464 36.32-32.687 36.593-57.151.256-24.464-13.44-46.976-35.313-57.936-21.68-10.88-50.336-16.256-95.248-24.032-10.656-1.872-25.216-4.496-39.344-7.312 18.32-41.105 38.56-98.593 46.529-163.633 1.968-16.193 4.496-34.416 7.312-54.592 4.848-34.336 10.848-77.872 16.752-130.224 11.168-98.865 95.28-169.553 204.592-169.553h.512c109.312 0 193.439 70.688 204.592 169.568 5.904 52.336 11.904 95.887 16.752 130.224 2.816 20.176 5.345 38.4 7.312 54.592 7.968 65.024 28.224 122.513 46.528 163.633-14.128 2.816-28.688 5.44-39.344 7.312-44.912 7.776-73.568 13.152-95.248 24.032-21.872 10.976-35.568 33.472-35.313 57.936.289 24.464 14.464 46.687 36.592 57.151l278.496 132.064c2 .976 3.312 1.568 5.44 2.32 9.84 3.744 20.496 11.936 21.936 15.344l.032 81.824H64z"
      />
    </svg>
  );
};
