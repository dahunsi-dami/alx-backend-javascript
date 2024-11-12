interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "New York"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 25,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = table.insertRow();

const headerCell1 = headerRow.insertCell();
headerCell1.textContent = "First Name";
const headerCell2 = headerRow.insertCell();
headerCell2.textContent = "Location";

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  cell1.textContent = student.firstName;
  const cell2 = row.insertCell();
  cell2.textContent = student.location;
});

document.body.appendChild(table);
