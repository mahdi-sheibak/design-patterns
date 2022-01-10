class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  accept(visitor) {
    visitor(this);
  }
}

const employee = new Employee("Mahdi", 10000);
console.log(employee.getSalary()); // 10000
employee.setSalary(200000);
console.log(employee.getSalary()); // 200000

function ExtraSalaryVisitor(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

employee.accept(ExtraSalaryVisitor);
console.log(employee.getSalary()); // 400000
