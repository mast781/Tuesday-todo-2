import {addSalary, divSalary, fallSalary, multSalary} from "./Tasks";


test("addSalary", () => {
    //1. Тестовые данные
    const salary: number = 700
    const bonus: number = 250

    //2. Выполнение тестируемого кода
    const result = addSalary(salary, bonus)

    //3. Проверка ожидаемого результата
    expect(result).toBe(950)

})

test("fallSalary", () => {

    const salary: number = 700
    const minus: number = 50

    const result = fallSalary(salary, minus)

    expect(result).toBe(650)

})

test("multSalary", () => {

    const salary: number = 700
    const coefficient: number = 1.2

    const result = multSalary(salary, coefficient)

    expect(result).toBe(840)

})

test("divSalary", () => {

    const salary: number = 700
    const coefficient: number = 0.9

    const result = divSalary(salary, coefficient)

    expect(result).toBe(630)

})