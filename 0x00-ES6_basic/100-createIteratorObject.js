export default function createIteratorObject(report) {
  let employees = [];

  for (const department of Object.values(report.allEmployees)) {
    employees = [...employees, ...department];
  }

  return employees[Symbol.iterator]();
}
