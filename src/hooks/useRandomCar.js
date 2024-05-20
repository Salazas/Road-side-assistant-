import { useState } from "react";

const useRandomCar = () => {
  const getRandomElement = (array) =>
    array[Math.floor(Math.random() * array.length)];

  const randomModel = () =>
    getRandomElement(["BMW", "Audi", "Mercedes", "Volkswagen", "Toyota"]);

  const randomColor = () =>
    getRandomElement(["White", "Black", "Red", "Blue", "Green"]);

  const randomYear = () => Math.floor(Math.random() * (2022 - 2000) + 2000);

  const randomlicense_plate = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const randomLetter = () =>
      letters.charAt(Math.floor(Math.random() * letters.length));
    const randomNumber = () =>
      numbers.charAt(Math.floor(Math.random() * numbers.length));
    return `${randomLetter()}${randomLetter()}${randomLetter()}${randomNumber()}${randomNumber()}${randomNumber()}`;
  };

  const generateRandomCar = () => {
    const model = randomModel().toLowerCase();
    const brand = model.charAt(0).toUpperCase() + model.slice(1);

    return {
      brand: brand,
      model: model,
      color: randomColor(),
      year: randomYear(),
      license_plate: randomlicense_plate(),
      image: `/cars/audi.png`,
    };
  };

  return generateRandomCar;
};

export default useRandomCar;
