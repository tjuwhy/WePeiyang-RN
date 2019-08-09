import { palette } from "./palette"

const white = alpha => `rgba(255,255,255,${alpha})`
const black = alpha => `rgba(0,0,0,${alpha})`

export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  background: palette.offWhite,
  card: palette.white,
  /**
   * The main tinting color.
   */
  primary: palette.offPale2,
  /**
   * The main tinting color, but darker.
   */

  lightGrey: palette.lightGrey,
  washed: palette.washed,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.offWhite,
  /**
   * The default color of text in many components.
   */
  text: palette.offPale2,
  /**
   * Secondary information.
   */
  dim: palette.lightGrey,
  /**
   * Error messages and icons.
   */
  error: palette.angry,
  warning: palette.orange,

  /**
   * ColorHashes palette for books & course blocks.
   */
  hash: {
    course: [
      palette.offPale,
      palette.novaPale,
      palette.authenticPale,
      palette.pale,
      palette.offBlack,
    ],
    bookStrip: [palette.washed, palette.lighterPale, palette.lighterAuthenticPale],
  },

  /**
   * Module-specific colors.
   */
  module: {
    gpa: [palette.angry, white(0.95), white(0.35), white(0.08)],
    ecard: [palette.offBlack, palette.silver, palette.gold],
  },

  /**
   * Translucent color generate helpers.
   */
  white: white,
  black: black,
}
