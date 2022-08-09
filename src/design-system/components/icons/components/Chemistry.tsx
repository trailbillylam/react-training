//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconChemistry = ({
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
        d="M810.416 970.72 640.015 769.056V415.552h21.312c17.68 0 32-14.32 32-32s-14.32-32-32-32h-53.312c-17.68 0-32 14.32-32 32v397.824a31.944 31.944 0 0 0 8.256 21.44l130.368 157.343h-405.28l130.368-157.344a31.944 31.944 0 0 0 8.256-21.44V383.553c0-17.68-14.32-32-32-32H362.67c-17.68 0-32 14.32-32 32s14.32 32 32 32h21.312v353.504l-170.4 201.664a32.039 32.039 0 0 0-5.504 34.431 32.001 32.001 0 0 0 29.249 19.01h549.344a32.001 32.001 0 0 0 29.249-19.01c5.12-11.551 2.976-25.055-5.504-34.431zM479.999 319.68c35.264 0 63.84-28.592 63.84-63.84 0-35.216-28.576-63.807-63.84-63.807-35.28 0-63.84 28.591-63.84 63.807 0 35.248 28.56 63.84 63.84 63.84zm208.48-94.992c62.368 0 112.928-50.336 112.928-112.416S750.863-.144 688.479-.144c-62.352 0-112.928 50.336-112.928 112.416s50.576 112.416 112.928 112.416zm-.496-161.025c26.656 0 48.336 21.584 48.336 48.128 0 26.528-21.68 48.128-48.336 48.128s-48.336-21.6-48.336-48.128c.016-26.544 21.68-48.128 48.336-48.128z"
      />
    </svg>
  );
};
