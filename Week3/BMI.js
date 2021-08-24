//attibuilts 
let pounds;
let inchs;

function BmiCalculateByPoundsAndInch(pounds,inchs){
    //convert pounds to kg
    let kg = pounds*0.453592;
    //convert inch to meter 
    let meter = inchs*0.0254;
    //calculate bmi by use kg and meter (p.s!! use Math.pow(base,exponent) 
    let BMI = kg/Math.pow(meter,2);

    //return BMI for ans.
    return BMI;

}
//use the function for result
console.log(BmiCalculateByPoundsAndInch(36.5,39));
console.log(BmiCalculateByPoundsAndInch(70,42.5));
console.log(BmiCalculateByPoundsAndInch(22.6,29.8));