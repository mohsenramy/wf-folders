import { formatBytes } from "./bytes";

describe("utils->Formatters.bytes", () => {
  it("Return 0 Bytes when receives 0", () => {
    expect(formatBytes(0)).toEqual("0Bytes");
  });
  it("Return the correct value in bytes, KB, MB, GB & TB No decimal", () => {
    expect(formatBytes(1)).toEqual("1Bytes");
    expect(formatBytes(1024)).toEqual("1KB");
    expect(formatBytes(1048576)).toEqual("1MB");
    expect(formatBytes(1073741824)).toEqual("1GB");
    expect(formatBytes(1099511627776)).toEqual("1TB");
    expect(formatBytes(1125899906842624)).toEqual("1PB");
    expect(formatBytes(1.152921504606847e18)).toEqual("1EB");
    expect(formatBytes(1.180591620717411e21)).toEqual("1ZB");
    expect(formatBytes(1.208925819614629e24)).toEqual("1YB");
  });
  it("Return the correct value in bytes, KB, MB, GB & TB with decimals", () => {
    expect(formatBytes(1, 2)).toEqual("1Bytes");
    expect(formatBytes(1324, 2)).toEqual("1.29KB");
    expect(formatBytes(1348576, 2)).toEqual("1.29MB");
    expect(formatBytes(1373741824, 2)).toEqual("1.28GB");
    expect(formatBytes(1399511627776, 2)).toEqual("1.27TB");
    expect(formatBytes(1855899906842624, 2)).toEqual("1.65PB");
    expect(formatBytes(1.452921504606847e18, 2)).toEqual("1.26EB");
    expect(formatBytes(1.580591620717411e21, 2)).toEqual("1.34ZB");
    expect(formatBytes(1.308925819614629e24, 2)).toEqual("1.08YB");
  });
});
