const studentData = [
  {
    name: "John",
    age: 27,
    grade: "A",
  },
  {
    name: "James",
    age: 33,
    grade: "B",
  },
  {
    name: "Jane",
    age: 29,
    grade: "C",
  },
];

const name = document.querySelector("#name");
const age = document.querySelector("#age");
const grade = document.querySelector("#grade");
const table = document.querySelector("tbody");
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
  console.log("dd", filterData);
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

const entry = document.querySelector("#entry");

entry.addEventListener("click", enterData);

searchData();

searchInput.addEventListener("input", searchData);
searchGrade.addEventListener("input", searchData);
