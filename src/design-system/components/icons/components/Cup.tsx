//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconCup = ({
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
        d="M832.56 415.792c-8.336 0-35.202-.16-64.306-.368l.113-63.968c0-35.344-28.657-64-64-64l-640.496-.16c-35.344 0-64 28.656-64 64V832.24c0 106.032 85.967 192 192 192h384.656c106.032 0 191.008-85.968 191.008-192l.064-32.848c29.024.224 58.608.4 64.977.4 105.776 0 191.568-85.04 191.568-191.072-.016-106.048-85.808-192.928-191.584-192.928zM703.533 832.24c0 70.592-56.4 128-127.008 128H191.869c-70.592 0-128-57.408-128-128l-.096-480.944 640.592.192zm129.026-95.519c-6.352 0-35.888-.191-64.863-.4l.448-256.815c29.12.208 56.048.368 64.4.368 73.12 0 128.623 54.544 128.623 127.84S905.68 736.722 832.56 736.722zM575.87 223.762c17.664 0 32-14.336 32-32v-160c0-17.664-14.336-32-32-32s-32 14.336-32 32v160c0 17.68 14.336 32 32 32zm-384 0c17.664 0 32-14.336 32-32v-160c0-17.664-14.336-32-32-32s-32 14.336-32 32v160c0 17.68 14.336 32 32 32zm192 0c17.664 0 32-14.336 32-32v-160c0-17.664-14.336-32-32-32s-32 14.336-32 32v160c0 17.68 14.336 32 32 32z"
      />
    </svg>
  );
};
