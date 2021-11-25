/**
 * @function
 * @description a function to truncate extensions from a filename string if exist, if not returns filename
 * @param filename string
 * @returns filename without extension
 */
export const fileWithoutExtension = (filename: string): string => {
  return filename.indexOf(".") >= 0
    ? filename.split(".").slice(0, -1).join(".")
    : filename;
};
