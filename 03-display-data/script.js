// const studentData = [
//   {
//     name: "John",
//     age: 27,
//     grade: "A",
//   },
//   {
//     name: "James",
//     age: 33,
//     grade: "B",
//   },
//   {
//     name: "Jane",
//     age: 29,
//     grade: "C",
//   },
// ];

const studentData = [
  { name: "Student1", age: 27, grade: "A" },
  { name: "Student2", age: 24, grade: "B" },
  { name: "Student3", age: 22, grade: "E" },
  { name: "Student4", age: 26, grade: "D" },
  { name: "Student5", age: 21, grade: "C" },
  { name: "Student6", age: 28, grade: "A" },
  { name: "Student7", age: 28, grade: "B" },
  { name: "Student8", age: 26, grade: "D" },
  { name: "Student9", age: 25, grade: "B" },
  { name: "Student10", age: 23, grade: "C" },
  { name: "Student11", age: 28, grade: "E" },
  { name: "Student12", age: 21, grade: "A" },
  { name: "Student13", age: 27, grade: "D" },
  { name: "Student14", age: 23, grade: "C" },
  { name: "Student15", age: 20, grade: "A" },
  { name: "Student16", age: 27, grade: "C" },
  { name: "Student17", age: 24, grade: "B" },
  { name: "Student18", age: 28, grade: "D" },
  { name: "Student19", age: 29, grade: "A" },
  { name: "Student20", age: 28, grade: "C" },
  { name: "Student21", age: 27, grade: "E" },
  { name: "Student22", age: 24, grade: "B" },
  { name: "Student23", age: 27, grade: "A" },
  { name: "Student24", age: 21, grade: "D" },
  { name: "Student25", age: 26, grade: "C" },
  { name: "Student26", age: 20, grade: "A" },
  { name: "Student27", age: 25, grade: "B" },
  { name: "Student28", age: 25, grade: "D" },
  { name: "Student29", age: 27, grade: "C" },
  { name: "Student30", age: 23, grade: "A" },
  { name: "Student31", age: 28, grade: "E" },
  { name: "Student32", age: 27, grade: "B" },
  { name: "Student33", age: 29, grade: "A" },
  { name: "Student34", age: 25, grade: "D" },
  { name: "Student35", age: 22, grade: "C" },
  { name: "Student36", age: 24, grade: "B" },
  { name: "Student37", age: 28, grade: "E" },
  { name: "Student38", age: 25, grade: "A" },
  { name: "Student39", age: 24, grade: "B" },
  { name: "Student40", age: 20, grade: "D" },
  { name: "Student41", age: 26, grade: "C" },
  { name: "Student42", age: 20, grade: "A" },
  { name: "Student43", age: 22, grade: "B" },
  { name: "Student44", age: 28, grade: "E" },
  { name: "Student45", age: 26, grade: "C" },
  { name: "Student46", age: 20, grade: "A" },
  { name: "Student47", age: 26, grade: "D" },
  { name: "Student48", age: 23, grade: "B" },
  { name: "Student49", age: 21, grade: "C" },
  { name: "Student50", age: 28, grade: "E" },
];

const name = document.querySelector("#name");
const age = document.querySelector("#age");
const grade = document.querySelector("#grade");
const table = document.querySelector("tbody");
const entry = document.querySelector("#entry");
const searchInput = document.querySelector("#search");
const searchGrade = document.querySelector("#gradeOptions");

function enterData() {
  const studentObj = {
    name: name.value,
    age: age.value,
    grade: grade.value,
  };

  studentData.push(studentObj);
  //   console.log(studentData);
  searchData();
  name.value = "";
  age.value = "";
  grade.value = "";
}

function searchData() {
  table.innerHTML = "";
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedGrade = searchGrade.value;

  const filterData = studentData.filter((student) => {
    const nameMatch = student.name.toLowerCase().includes(searchText);
    const gradeMatch =
      selectedGrade === "any" || student.grade === selectedGrade;
    return nameMatch && gradeMatch;
  });

  // const filterData = studentData.filter(
  //   (student) => selectedGrade === "any" || student.grade === selectedGrade
  // );

  filterData.forEach((student) => {
    const tr = document.createElement("tr");
    for (const key in student) {
      const td = document.createElement("td");
      const textNode = document.createTextNode(student[key]);
      td.appendChild(textNode);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  });
}

entry.addEventListener("click", enterData);
searchInput.addEventListener("input", searchData);
searchGrade.addEventListener("input", searchData);

searchData();
