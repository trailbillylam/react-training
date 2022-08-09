//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconVolume1 = ({
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
        d="M654.768 65.904c-10.432-5.552-23.088-4.928-32.912 1.696L300.768 319.712l-106.624.08c-54.512 0-98.88 38.657-98.88 86.4l1.712 211.137c0 47.536 44.352 86.224 98.863 86.224l106.592.065L621.823 956.37a31.977 31.977 0 0 0 17.905 5.472c5.152 0 10.32-1.249 15.008-3.745a31.951 31.951 0 0 0 17.008-28.256V94.16a32.088 32.088 0 0 0-16.976-28.257zm-47.04 803.728L330.129 645.106a31.97 31.97 0 0 0-17.889-5.473l-116.384-.064c-20.544 0-34.88-11.712-34.88-22.464l-1.712-211.152c0-10.48 14.336-22.16 34.896-22.16l116.4-.08a32.017 32.017 0 0 0 17.855-5.457l279.312-224v715.376zm182.097-521.998c-17.712-2.928-33.937 8.864-36.849 26.305-2.912 17.424 8.88 33.92 26.289 36.832 50.32 8.4 85.472 52.304 85.472 106.753 0 51.84-36.368 96.687-86.496 106.688-17.344 3.44-28.592 20.288-25.12 37.632 3.024 15.215 16.368 25.744 31.344 25.744a31.34 31.34 0 0 0 6.288-.624c79.968-15.905 138-87.185 138-169.44-.016-85.025-58.447-156.465-138.928-169.89z"
      />
    </svg>
  );
};
