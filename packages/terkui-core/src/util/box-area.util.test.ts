import { generateBoxAreaStyle, generateComponentBoxAreaStyle } from "./box-area.util";

describe("Box area util", () => {
  it("should render padding styles", () => {
    console.log(generateBoxAreaStyle("px-2"));
    expect(generateBoxAreaStyle("p-2")).toEqual("padding: 0.5rem;");
    expect(generateBoxAreaStyle("pt-2")).toEqual("padding-top: 0.5rem;");
    expect(generateBoxAreaStyle("pb-2")).toEqual("padding-bottom: 0.5rem;");
    expect(generateBoxAreaStyle("pl-2")).toEqual("padding-left: 0.5rem;");
    expect(generateBoxAreaStyle("pr-2")).toEqual("padding-right: 0.5rem;");
    expect(generateBoxAreaStyle("px-2").includes("padding-right: 0.5rem;")).toEqual(true);
    expect(generateBoxAreaStyle("px-2").includes("padding-left: 0.5rem;")).toEqual(true);
  });

  it("should render margin styles", () => {
    expect(generateBoxAreaStyle("m-2")).toEqual("margin: 0.5rem;");
    expect(generateBoxAreaStyle("mt-2")).toEqual("margin-top: 0.5rem;");
    expect(generateBoxAreaStyle("mb-2")).toEqual("margin-bottom: 0.5rem;");
    expect(generateBoxAreaStyle("ml-2")).toEqual("margin-left: 0.5rem;");
    expect(generateBoxAreaStyle("mr-2")).toEqual("margin-right: 0.5rem;");
    expect(generateBoxAreaStyle("mx-2").includes("margin-right: 0.5rem;")).toEqual(true);
    expect(generateBoxAreaStyle("mx-2").includes("margin-left: 0.5rem;")).toEqual(true);
  });

  it("should", () => {
    expect(
      generateComponentBoxAreaStyle({
        p: "p-0",
        px: "px-3",
        py: "py-9"
      }).includes("padding: 0rem;")
    ).toEqual(true);
    expect(
      generateComponentBoxAreaStyle({
        p: "p-0",
        px: "px-3",
        py: "py-9"
      }).includes("padding-left: 1rem;")
    ).toEqual(true);
    expect(
      generateComponentBoxAreaStyle({
        p: "p-0",
        px: "px-3",
        py: "py-9"
      }).includes("padding-right: 1rem;")
    ).toEqual(true);
    expect(
      generateComponentBoxAreaStyle({
        p: "p-0",
        px: "px-3",
        py: "py-9"
      }).includes(" padding-top: 4rem;")
    ).toEqual(true);
  });
});
