import {
    addSalary,
    AddSalaryActionType,
    divSalary, DivSalaryActionType,
    fallSalary,
    FallSalaryActionType,
    multSalary, MultSalaryActionType,
    salaryReducer
} from "./Tasks";


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

test("ADD-SALLARY", () => {

    const salary: number = 700
    const action: AddSalaryActionType = {
        type: "ADD_SALARY",
        bonus: 300
    }

    expect(salaryReducer(salary, action)).toBe(1000)

})

test("FALL-SALLARY", () => {

    const salary: number = 700
    const action: FallSalaryActionType = {
        type: "FALL_SALARY",
        minus: 50
    }

    expect(salaryReducer(salary, action)).toBe(650)

})

test("MULT-SALLARY", () => {

    const salary: number = 700
    const action: MultSalaryActionType = {
        type: "MULT_SALARY",
        coefficient: 1.2
    }

    expect(salaryReducer(salary, action)).toBe(840)

})

test("DIV-SALLARY", () => {

    const salary: number = 700
    const action: DivSalaryActionType = {
        type: "DIV_SALARY",
        coefficient: 0.9
    }

    expect(salaryReducer(salary, action)).toBe(630)

})
