import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import data from "./db.json";

function App() {
  const [pets, setPets] = useState(data.pets);
  const [filters, setFilters] = useState({ type: "all" });

  //callback that updates the filter type

  function onChangeType(newType) {
    setFilters({ ...filters, type: newType });
  } 

  //callback to filter the pets depending on the  type selected

  function onFindPetsClick() {
    let filteredPets = data.pets;
    if (filters.type !== 'all') {
      filteredPets = data.pets.filter(pet => pet.type === filters.type);
    }

    setPets(filteredPets);
  }

  // callback that adopts a pet

  function onAdoptPet(petId) {
    setPets(pets.map(pet => 
      pet.id === petId ? { ...pet, isAdopted: true } : pet
    ));
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;