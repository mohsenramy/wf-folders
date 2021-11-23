export const formatBytes = (bytes: number, decimals: number = 0): string => {
  if (bytes === 0) return "0 Bytes";

  const kilo = 1024;
  const correctedDecimals = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const exponent = Math.floor(Math.log(bytes) / Math.log(kilo));

  return (
    parseFloat((bytes / Math.pow(kilo, exponent)).toFixed(correctedDecimals)) +
    sizes[exponent]
  );
};
