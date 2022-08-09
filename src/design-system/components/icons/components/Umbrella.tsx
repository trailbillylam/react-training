//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconUmbrella = ({
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
        d="M1024.32 509.584c0 17.664-14.29 31.984-31.97 31.984H543.47V865.76c0 87.153-70.912 158.08-158.096 158.08s-158.11-70.927-158.11-158.08c0-17.664 14.32-31.984 31.984-31.984s31.984 14.32 31.984 31.984c0 51.905 42.224 94.128 94.16 94.128 51.92 0 94.16-42.223 94.16-94.128V541.568H31.662C14 541.568-.32 527.233-.32 509.584c0-247.296 180.912-404.112 479.856-414.48V32.128c0-17.664 14.32-31.967 31.984-31.967 17.68 0 31.968 14.32 31.968 31.968v62.976c299.008 10.352 480.832 167.184 480.833 414.479zm-65.17-31.968c-15.776-200.528-178.896-319.119-447.648-319.119S80.606 277.089 64.847 477.601h894.304v.016z"
      />
    </svg>
  );
};
