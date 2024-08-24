import React from "react";

function Pet({ pet, onAdoptPet }) {

  const { id, name, type, age, weight, gender, isAdopted } = pet;

  // find the gender symbol
  const genderSymbol = gender === "male" ? "♂" : "♀";

  // Handle adopt button click

  function handleAdoptClick() {
    onAdoptPet(id);


  }
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
        {name} {genderSymbol}
          
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
        <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? (
        <button className="ui disabled button">Already adopted</button>
        ) : (
        <button className="ui primary button" onClick={handleAdoptClick}>Adopt pet</button>
        )}
      </div>
    </div>
  );
}

export default Pet;