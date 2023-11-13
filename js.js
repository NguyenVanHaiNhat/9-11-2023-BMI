function checkBmi (){
    let kilo =parseFloat(document.getElementById('kg').value);
    let met = parseFloat(document.getElementById('m').value);
    let bmi = kilo / (met ^ 2);


    if (bmi < 18)
        document.getElementById('result').innerHTML = "kết quả : Underweight"
    else if (bmi < 25.0)
        document.getElementById('result').innerHTML = "kết quả : Normal"
    else if (bmi < 30.0)
        document.getElementById('result').innerHTML = "kết quả : Overweight"
    else
        document.getElementById('result').innerHTML = "kết quả : Obese"
}