//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconLink = ({
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
        d="M295.664 732.448c6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376L728.576 341.76c12.496-12.496 12.496-32.752 0-45.248s-32.752-12.496-45.248 0L295.664 687.2c-12.512 12.496-12.512 32.752 0 45.248zm180.208-68.143c10.576 46.624-.834 92.4-36.866 128.432L309.758 917.985c-27.2 27.184-63.36 42.16-101.824 42.16s-74.624-14.976-101.808-42.16c-56.144-56.16-56.144-147.536-.336-203.344l126.256-130.256c27.2-27.184 63.36-42.176 101.824-42.176 13.152 0 25.824 2.352 38.176 5.743L421.998 498c-27.872-13.024-57.952-19.792-88.128-19.792-53.233 0-106.465 20.32-147.073 60.929L60.86 669.073c-81.216 81.216-81.216 212.912 0 294.16 40.608 40.624 93.84 60.912 147.073 60.912s106.465-20.288 147.073-60.912L483.95 838.289c62.128-62.128 75.568-148.72 42.656-224.72zM963.134 60.784C922.51 20.176 869.294-.145 816.077-.145c-53.248 0-106.496 20.32-147.088 60.929L540.061 185.728c-64.4 64.4-77.536 160.465-39.792 238.033l49.664-49.648c-14.704-49.104-3.408-104.336 35.056-142.832l129.248-125.248c27.216-27.184 63.344-42.176 101.84-42.176 38.431 0 74.624 14.992 101.808 42.176 56.128 56.16 56.128 147.536.32 203.344L788.957 438.625c-27.183 27.183-63.376 42.159-101.808 42.159-9.808 0-18.431.992-27.84-.928l-50.975 51.008c25.471 10.592 51.632 13.935 78.815 13.935 53.216 0 106.432-20.303 147.056-60.927L963.15 354.928c81.2-81.216 81.2-212.896-.015-294.144z"
      />
    </svg>
  );
};
