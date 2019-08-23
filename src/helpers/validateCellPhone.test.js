import { validate } from "./validateCellPhone";
import { check } from "./validateCellPhone";

describe("Validate CellPhoneNumbers", () => {
  test("not valid 2", () => {
    expect(validate(2)).toStrictEqual({ number: "Invalid number" });
  });
  test("not valid kek", () => {
    expect(validate("kek")).toStrictEqual({ number: "Invalid number" });
  });
  test("not valid 099 999-11-11", () => {
    expect(validate(`099 999-11-11`)).toStrictEqual({
      number: "Invalid number"
    });
  });
  test("not valid 100 111-00-00", () => {
    expect(`100 111-00-00`).not.toMatch(check);
  });
  test("valid \\099\\ 999-99-99", () => {
    expect(`\\099\\ 999-99-99`).toMatch(check);
  });
  test("valid \\100\\ 111-00-00", () => {
    expect(`\\100\\ 111-00-00`).toMatch(check);
  });
});
