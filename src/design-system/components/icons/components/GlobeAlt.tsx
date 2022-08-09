//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconGlobeAlt = ({
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
        d="M929.504 414.416c0-168.784-88.978-321.873-237.97-409.569-15.248-9.008-34.88-3.872-43.808 11.376-8.944 15.216-3.872 34.848 11.376 43.808 129.248 76.032 206.4 208.528 206.4 354.368 0 242.368-175.936 418.288-418.319 418.288-54.192 0-106.784-10.16-156.32-30.16-16.368-6.657-35.056 1.279-41.665 17.662-6.624 16.4 1.28 35.057 17.664 41.665 57.216 23.12 117.872 34.848 180.32 34.848.193 0 .385-.015.578-.015v63.007h-92.928c-18.464 0-33.44 14.304-33.44 31.952s14.976 31.937 33.44 31.937H607.68c18.464 0 33.44-14.304 33.44-31.936 0-17.664-14.976-31.952-33.44-31.952h-96.384v-66.8c245.808-28.559 418.208-220.91 418.208-478.478zm-130.13 2.879c0-194.656-157.744-353.408-352.4-353.408-194.688 0-352.465 158.752-352.465 353.408s157.776 351.44 352.465 351.44c194.656 0 352.4-156.784 352.4-351.44zm-640.88 0c0-159.024 129.408-289.408 288.464-289.408 159.024 0 288.4 130.368 288.4 289.408s-129.376 287.44-288.4 287.44c-159.056 0-288.464-128.4-288.464-287.44z"
      />
    </svg>
  );
};
