// document.getElementById('multiply').addEventListener('click', function(){

//     const firstNumberField = document.getElementById('first-number');
//     const inputFirstNumberFieldString = firstNumberField.value;
//     const inputFirstNumberField = parseFloat(inputFirstNumberFieldString);
    
//     const secondNumberField = document.getElementById('second-number');
//     const inputSecondNumberFieldString = secondNumberField.value;
//     const inputSecondNumberField = parseFloat(inputSecondNumberFieldString);

//     if(!inputFirstNumberField && inputFirstNumberField != 0){
//         alert('No field found');
//         return;
//     }
//     else if(!inputSecondNumberField && inputSecondNumberField != 0){
//         alert('No field found');
//         return;
//     }

//     else if(inputFirstNumberField == 0){
//         alert('cannot be zero');
//         return;
//     }

    
//     else if(inputSecondNumberField == 0){
//         alert('cannot be zero');
//         return;
//     }

//     else if(inputFirstNumberField < 0){
//         alert('Please enter a positive number');
//         return;
//     }
//     else if(inputSecondNumberField < 0){
//         alert('Please enter a positive number');
//         return;
//     }



    
//     const numberCalculation = 0.5*inputFirstNumberField * inputSecondNumberField;
    
//     firstNumberField.value = '';
//     secondNumberField.value = '';
//     console.log(numberCalculation);
    
// });





// 	
function multiply() {
    const first = document.getElementById('volue1').value;
    const second = document.getElementById('volue2').value;
    const multi = parseFloat(first)*parseFloat(second);

    if(!first && first != value){
                alert('No field found');
                return;
            }
            else if(!second && second != value){
                alert('No field found');
                return;
            }
        
            // else if(first == 0){
            //     alert('cannot be zero');
            //     return;
            // }
        
            
            // else if(second == 0){
            //     alert('cannot be zero');
            //     return;
            // }
        
            else if(first < 0){
                alert('Please enter a positive number');
                return;
            }
            else if(second < 0){
                alert('Please enter a positive number');
                return;
            }

            else{
                return document.getElementById('total').value = multi;
            }
            
            
    }

