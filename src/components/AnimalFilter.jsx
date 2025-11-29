import React from "react";

const AnimalFilter = () => {
  const animals = ["Cat", "Dog", "Elephant", "Cow", "Eagle"];
  const filtered = animals.filter(animal => animal.startsWith("E"));

  return (
    <ul>
      {filtered.map(animal => <li key={animal}>{animal}</li>)}
    </ul>
  );
};

export default AnimalFilter;
