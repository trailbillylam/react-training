//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconSocialFacebook = ({
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
        d="M581.76 80.496c3.808 0 5.999.16 5.999.16h83.568l-.431 96h-83.008c-45.68 0-44.624 39.007-44.624 39.007v152.192h161.632l-22.56 95.872h-139.6v479.776h-95.904l-.064-479.776H319.36l-.256-95.872h127.712V218.671C446.83 88.591 554.864 80.495 581.76 80.495zm89.567.159h.16-.16zm-89.567-64.16c-23.008 0-67.97 3.809-110.562 29.473-40.32 24.256-88.368 73.935-88.368 172.688v85.183h-63.712c-17.008 0-33.312 6.784-45.344 18.817a64.003 64.003 0 0 0-18.655 45.408l.256 95.872c.128 35.248 28.752 63.776 64 63.776h63.408l.064 415.776c0 35.344 28.657 64 64 64h95.905c35.343 0 64-28.656 64-64V527.712h75.6c28.4 0 53.407-18.72 61.407-45.967l22.56-95.873c5.68-19.343 1.903-40.255-10.192-56.368a63.912 63.912 0 0 0-51.217-25.664h-97.632v-63.152l63.632-.032c35.216 0 63.84-28.464 64-63.712l.431-92.752a64.3 64.3 0 0 0 .097-3.536c0-35.344-28.592-64-63.935-64h-81.936c-1.84-.096-4.496-.16-7.807-.161z"
      />
    </svg>
  );
};
