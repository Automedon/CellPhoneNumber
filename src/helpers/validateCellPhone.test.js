import { validate } from "./validateCellPhone";
import { check } from "./validateCellPhone";
function rnd10(){
    const allc="0123456789";
    return allc[~~(allc.length*Math.random())];
}
function rndc1(){
    var allc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+\\/"
    return allc[~~(allc.length*Math.random())];
}
function genInValid(){
    let randomLength=()=>{
        return Math.floor(Math.random() * (1000 - 0)) + 0;}
    let str=''
    for (let i=0;i<randomLength();i++){
        str+=rndc1()
    }
    return str
}
function genValid(){
    return `\\${rnd10()+rnd10()+rnd10()}\\ ${rnd10()+rnd10()+rnd10()}-${rnd10()+rnd10()}-${rnd10()+rnd10()}`
}
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
     test('1000 random tests must be valid ',()=>{

        for (let i=0;i<1000;i++){
            let value = genValid()
            console.log(`${value} should match pattern`,!expect(value).toMatch(check))
            expect(value).toMatch(check)
        }});
    test('1000 random tests must be invalid ',()=>{

        for (let i=0;i<1000;i++){
            let value = genInValid()
            console.log(`${value} should not match pattern`,!expect(value).not.toMatch(check))
            expect(value).not.toMatch(check)
        }});
});
