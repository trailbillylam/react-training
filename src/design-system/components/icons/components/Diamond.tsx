//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconDiamond = ({
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
        d="M1018.72 295.472 878.848 28.03C870.688 12.43 849.584-.322 832-.322H510.064c-.351-.015-.703-.11-1.054-.127-.288 0-.56.113-.849.128h-316.16c-17.6 0-38.752 12.72-47.024 28.256L5.473 290.223c-8.289 15.536-6.624 39.937 3.631 54.257l480.016 669.152c5.153 7.184 12 10.815 18.832 10.815 6.785 0 13.584-3.536 18.768-10.591L1014.624 349.6c10.384-14.193 12.256-38.544 4.096-54.128zm-76.353-7.843H770.911l68.656-196.608zM575.343 63.677h205.968l-63.888 182.928zm92.895 223.952H370.591L511.263 85.533zm-354.351-30.544L249.71 63.677h198.816zm366.863 94.544L508.718 844.173 345.262 351.629H680.75zM436.926 831.085 92.99 351.629h184.832zm311.616-479.456H933.71l-352.976 480.56zM188.478 82.413l68.096 205.216H79.326z"
      />
    </svg>
  );
};
