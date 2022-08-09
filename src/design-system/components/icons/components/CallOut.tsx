//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from "styled-components/macro";
import { getIconSizeStyle, IconProps } from "../iconCommon";
import { createGuid } from "../../../utils/guid";
export const TdsIconCallOut = ({
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
        d="M1000.35 771.616c-15.664-11.008-187.059-124.974-208.066-137.806-9.152-5.6-20.32-8.336-32.464-8.336-15.664 0-33.008 4.56-49.935 13.472-16.497 8.688-66.464 37.12-90.913 51.088-21.536-15.12-72.127-53.872-151.84-133.664-79.215-79.184-118.319-130.191-133.535-151.84 13.936-24.432 42.336-74.4 50.976-90.848 16.368-31.008 18.225-61.968 4.944-82.848-12.463-19.68-125.968-191.808-137.68-208C240.813 7.554 221.021-.702 199.55-.702c-16.944 0-34.912 5.12-50.496 15.968C147.55 16.338-3.043 125.522-1.043 187.618 4.51 362.05 174.013 567.042 315.228 708.306s346.224 310.815 521.344 316.399h1.44c61.312 0 169.089-148.688 170.129-150.16 28.272-40.4 17.968-84.88-7.791-102.929zm-44.209 65.651c-40.592 56.224-98.225 114.945-120.784 123.346-120.032-5.632-288.464-111.12-474.88-297.568-186.4-186.464-291.872-354.704-297.44-474.336 8.096-22.624 66.815-80.624 122.527-120.912 4.128-2.848 9.216-4.496 13.968-4.496 1.055 0 1.935.096 2.624.224 18 26.16 114.624 172.433 132.16 199.776.064 2.88-.911 10.19-6.4 20.623-5.84 11.12-24.032 43.536-49.904 88.88l-20.128 35.28 23.344 33.248c17.408 24.72 58.816 78.464 140.624 160.288 82.16 82.192 135.712 123.473 160.336 140.784l33.248 23.344 35.28-20.16c34.193-19.537 75.504-42.945 88.945-50 10.784-5.68 18.16-6.129 20.16-6.129.32 0 .593 0 .816.033 24.496 15.376 173.937 114.592 200.32 132.688.432 2.56.031 8.128-4.816 15.088zM683.899 382.276l275.246-273.572-.88 155.056c-.288 12.944 9.968 24.192 22.912 23.889l16.416-.016c12.96-.32 23.649-8 23.921-20.928l.656-231.008c0-.223-.864-.383-.864-.607l1.264-11.712c.128-6.496-1.376-12.288-5.6-16.432-4.128-4.175-9.935-6.72-16.384-6.543L988.89.675c-.224 0-.4.096-.655.128L758.763-.222c-12.928.289-23.616 10.977-23.92 23.921l-.032 16.416c1.967 15.233 13.935 24.16 26.88 23.872l151.248.4L638.65 337.013c-12.497 12.496-12.497 32.768 0 45.264 12.496 12.481 32.752 12.481 45.248 0z"
      />
    </svg>
  );
};
