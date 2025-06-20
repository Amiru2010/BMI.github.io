const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calcBtn = document.getElementById("calcBtn");
const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");
const resultBox = document.getElementById("resultBox");


const categories = [
  { name: "Underweight", min: 0, max: 18.4, color: "#f4a261" },
  { name: "Normal", min: 18.5, max: 24.9, color: "#2a9d8f" },
  { name: "Overweight", min: 25, max: 29.9, color: "#e9c46a" },
  { name: "Obese", min: 30, max: 100, color: "#e76f51" }
];


function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (!weight || !height || weight <= 0 || height <= 0) {
    alert("Please enter valid values for weight and height.");
    return;
  }

  const heightMeters = height / 100;
  const bmi = (weight / (heightMeters ** 2)).toFixed(1);

  bmiValue.textContent = `BMI: ${bmi}`;

  const category = categories.find(c => bmi >= c.min && bmi <= c.max);
  if (category) {
    bmiCategory.textContent = `Category: ${category.name}`;
    resultBox.style.backgroundColor = category.color;
  } else {
    bmiCategory.textContent = `Category: Unknown`;
    resultBox.style.backgroundColor = "#ccc";
  }
}

calcBtn.addEventListener("click", calculateBMI);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calculateBMI();
  }
});
