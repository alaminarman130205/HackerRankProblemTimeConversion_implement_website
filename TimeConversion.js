
function ConversionFunction(value){
    let amPm = value.charAt(8); 
    let mTime = " ";
    if(amPm == "A"){
        if(value.substring(0,2)=='12'){
            mTime = "00";
        }else{
            mTime=value.substring(0,2);
        }
    }else{
        if(value.substring(0,2)== '12'){
            mTime = value.substring(0,2);
        }else{
            mTime= parseInt(value.substring(0,2),10) + 12;
        }
    }
    return mTime+value.substring(2,8);
}


function timeConversion(){
    let input_field = document.getElementById('input_field')
    let input_value = input_field.value;

    let inputValueAfterTuning = ConversionFunction(input_value)

    const container = document.getElementById('visual_ans'); 
    const h1 = document.createElement('h1'); 
    h1.innerText = inputValueAfterTuning;
    container.appendChild(h1);

    input_field = " ";

}