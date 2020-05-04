let weight = document.getElementById('weight');
let height = document.getElementById('height');
let submit = document.getElementById('submit');
let result = document.getElementById('result');

submit.addEventListener('click', calculateBMI);

function calculateBMI() {
    const convertWeight = parseInt(weight.value);
    const convertHeight = parseInt(height.value) / 100;
    let bmi = convertWeight / (convertHeight ** 2);
    bmi = bmi.toFixed(2);

    if (bmi < 18.5) {
    result.innerHTML = `Your Body Mass Index (BMI) is ${bmi}kg/m<sup>2</sup> - Underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerHTML = `Your Body Mass Index (BMI) is ${bmi}kg/m<sup>2</sup> - Normal weight.`;   
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        result.innerHTML = `Your Body Mass Index (BMI) is ${bmi}kg/m<sup>2</sup> - Overweight.`;
    } else if (bmi >= 30.0 && bmi <= 34.9) {
        result.innerHTML = `Your Body Mass Index (BMI) is ${bmi}kg/m<sup>2</sup> - Class I obesity.`;
    } else if (bmi >= 35.0 && bmi <= 39.9) {
        result.innerHTML = `Your Body Mass Index (BMI) is ${bmi}kg/m<sup>2</sup> - Class II obesity.`;
    } else if (bmi >= 40.0) {
        result.innerHTML = `Your Body Mass Index (BMI) is ${bmi}kg/m<sup>2</sup> - Class III obesity.`;
    }
}
