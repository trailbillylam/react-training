//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconHandbag = ({
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
        d="m1022.74 942.64-83.407-503.777c-7.44-65.312-66.977-118.432-132.721-118.432h-70.656v-85.28c0-130.16-92.848-236.033-222.976-236.033-130.096 0-224.943 105.872-224.943 236.032v85.28h-76.672c-65.744 0-125.28 53.12-132.528 117.057l-77.28 504.16c-2.976 26.56 2.224 47.503 15.408 62.288 12.431 13.904 30.527 20.976 53.743 20.976h873.568c32.912 0 51.776-13.216 61.84-24.32 9.216-10.208 19.648-28.144 16.624-57.951zM352.049 235.135c0-94.848 66.127-172.031 160.943-172.031 94.816 0 158.977 77.184 158.977 172.031v85.28h-319.92zm595.119 725.311-872.498.45c-5.504 0-11.008-2.945-9.712-10.689l77.248-504.096c3.84-33.44 35.504-61.68 69.152-61.68h76.689v72.927c-19.072 11.072-32.048 31.488-32.048 55.137 0 35.344 28.656 64 64 64s64-28.656 64-64c0-23.616-12.928-44-31.952-55.088v-72.992H671.95v72.992c-19.008 11.088-31.952 31.488-31.952 55.088 0 35.344 28.656 64 64 64s64-28.656 64-64c0-23.649-12.976-44.065-32.048-55.153v-72.927h70.656c33.664 0 65.313 28.256 69.408 63.44l83.344 503.28c.4 4.095-2.815 9.31-12.191 9.31z"
      />
    </svg>
  );
};
