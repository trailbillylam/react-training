//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconSymbolMale = ({
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
        d="M1023.3 22.656c.144-6.48-1.378-12.29-5.586-16.433a22.058 22.058 0 0 0-16.4-6.527l-11.696.273c-.223 0-.383.08-.64.112L695.476-.944c-12.928.289-23.616 10.993-23.92 23.92l-.032 16.432c1.967 15.248 13.952 24.16 26.88 23.872l215.215.432-256.144 254.592c-69.488-58.24-159.008-93.36-256.768-93.36-220.928 0-400 179.071-400 400 0 220.911 179.072 400 400 400 220.912 0 400-179.089 400-400 0-100.113-36.864-191.569-97.664-261.713L959.938 107.92l-.944 219.152c-.304 12.928 9.952 24.176 22.897 23.888l16.416-.032c12.96-.304 23.647-8 23.92-20.928l.671-295.008c0-.24-.88-.4-.88-.624zM737.229 624.943c0 185.856-150.672 336.528-336.544 336.528-185.856 0-336.528-150.672-336.528-336.528 0-185.856 150.672-336.528 336.528-336.528 185.872-.016 336.544 150.656 336.544 336.528z"
      />
    </svg>
  );
};
