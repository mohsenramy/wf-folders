import { fileWithoutExtension } from "./files";

describe("utils->Formatters.files", () => {
  it("Return value if the fileName has no extension", () => {
    expect(fileWithoutExtension("noExtensionFile")).toEqual("noExtensionFile");
  });
  it("Return filename without extension", () => {
    expect(fileWithoutExtension("noExtensionFile.ext")).toEqual("noExtensionFile");
    expect(fileWithoutExtension("noExtensionFile.extension")).toEqual("noExtensionFile");
    expect(fileWithoutExtension("noExtensionFile.ext-ens")).toEqual("noExtensionFile");
    expect(fileWithoutExtension("noExtensionFile.123456789")).toEqual("noExtensionFile");
  });
  it("Return value if the fileName has no extension if has (.) in the name", () => {
    expect(fileWithoutExtension("noExtension.File.ext")).toEqual("noExtension.File");
    expect(fileWithoutExtension("noExtension.File.extension")).toEqual("noExtension.File");
    expect(fileWithoutExtension("noExtension.File.ext-ens")).toEqual("noExtension.File");
    expect(fileWithoutExtension("noExtension.File.123456789")).toEqual("noExtension.File");
  });
});
