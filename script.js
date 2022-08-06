function Calculate(){
    var height = document.getElementById("h-input").value;
    var weight = document.getElementById("w-input").value;

    var result = parseFloat(weight) /(parseFloat(height)/100)**2;

    if(!isNaN(result)){
        document.getElementById("bmi-output").innerHTML = result;
        if(result < 18.5){
            document.getElementById("bmi-status").innerHTML = "น้ำหนักน้อย / ผอม";
        }
        else if(result < 25){
            document.getElementById("bmi-status").innerHTML = "ปกติ / สุขภาพดี";
        }
        else if(result < 30){
            document.getElementById("bmi-status").innerHTML = "ท้วม / โรคอ้วนระดับ 1";
        }
        else{
            document.getElementById("bmi-status").innerHTML = "อ้วน / โรคอ้วนระดับ 2";
        }
    }
}

