export const addSalary = (salary: number, bonus: number) => salary + bonus
export const fallSalary = (salary: number, minus: number) => salary - minus
export const multSalary = (salary: number, coefficient: number) => salary * coefficient
export const divSalary = (salary: number, coefficient: number) => salary * coefficient

//1. В параметрах - salary (state)
//2. Тип действия в названии (type of action / action type)
//3. Доб.значения для каждогот па действия

export const salaryReducer = () => {

}