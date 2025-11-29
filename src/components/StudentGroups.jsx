import React from "react";

const StudentGroups = () => {
  const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "A" },
    { id: 4, name: "David", grade: "C" }
  ];

  const groups = students.reduce((acc, student) => {
    if (!acc[student.grade]) acc[student.grade] = [];
    acc[student.grade].push(student.name);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groups).map(([grade, names]) => (
        <div key={grade}>
          <h3>Grade {grade}</h3>
          <ul>
            {names.map(name => <li key={name}>{name}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudentGroups;
