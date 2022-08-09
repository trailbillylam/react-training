//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconSocialTumblr = ({
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
        d="m528.016 63.744-.002 223.871h224.32v95.968H529.006l-.32 278.528c0 51.776 2.688 85.009 8.16 99.745 8.528 23.248 39.568 53.008 97.184 53.008 44.689 0 104.977-13.44 150.16-47.248v149.312c-37.68 17.967-72.72 25.215-103.248 32.464-30.56 7.215-63.663 10.847-99.15 10.847-39.537 0-153.665-1.088-200.497-120.399-8.432-21.471-12.655-52.655-12.655-93.471V383.745H239.792l.624-98.128c42.656 0 170.624-25.905 170.624-221.872zm-.002-64.001L411.038-.259c-35.344 0-64 28.656-64 64 0 146.496-81.632 157.872-106.624 157.872-35.216 0-63.84 28.464-64 63.68l-.624 98.128c-.096 17.024 6.624 33.376 18.624 45.471a64.057 64.057 0 0 0 45.376 18.849h64.848v298.624c0 49.376 5.6 87.632 17.088 116.88 28.847 73.44 97.376 161.009 260.064 161.009 40.288 0 78.591-4.224 113.872-12.56l7.055-1.664c29.872-7.024 68.032-15.776 109.008-35.312a63.979 63.979 0 0 0 36.464-57.777V767.63a63.985 63.985 0 0 0-35.344-57.214c-9.055-4.56-18.88-6.784-28.656-6.784a64.008 64.008 0 0 0-38.337 12.752c-38.095 28.529-86.847 34.496-111.808 34.496-25.6 0-35.119-9.28-37.215-11.744-1.087-5.024-4.127-23.776-4.127-77.008l.223-214.528h159.408c35.344 0 64-28.657 64-64v-95.97c0-35.344-28.656-64-64-64h-160.32V63.743c0-35.344-28.656-64-64-64z"
      />
    </svg>
  );
};
