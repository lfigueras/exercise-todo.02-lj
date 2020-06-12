let monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
let daysInAWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let today = new Date();

document.getElementById('to-date').innerHTML = daysInAWeek[today.getDay()] + ', ' + monthNames[today.getMonth()] +
' ' + today.getDate() + ', ' + today.getFullYear() + ' ' + ' Philipine Time';


document.getElementById('add-btn').addEventListener('click', function(){
   console.log('working');
    //ADD  TASK ON THE LIST - created elements and got the value of the input
    //to return the text content.
    
   
   let myTask = document.createElement('li');
   let textValue = document.getElementById('input-text').value;
   let txtInput = document.createTextNode(textValue);
   let checkBox = document.createElement('input');
   let spanText = document.createElement('span');
   let trashIcon = document.createElement('img');
      
   trashIcon.setAttribute('src', 'icons8-trash-100.png');
   
   
   checkBox.type = 'checkbox';
   checkBox.classList.add('check-box');
   trashIcon.classList.add('trash');
   myTask.classList.add('listItems');
 
   
   myTask.appendChild(checkBox);
   myTask.appendChild(spanText);
   spanText.appendChild(txtInput);
   spanText.appendChild(trashIcon);
   
   
  
   document.querySelector('.ul').appendChild(myTask);
   document.getElementById('input-text').value = '';

   //Strike through when checkbox is checked

   checkBox.addEventListener('click', e =>{
     console.log(checkBox.nextSibling);
     
     if (checkBox.checked){
         checkBox.nextSibling.classList.add('strike');
     }else {
        checkBox.nextSibling.classList.remove('strike');

      }
   });

   
//Delete the element once delete button clicked.

   trashIcon.addEventListener('click', e =>{
    console.log('working del-btn');
  
    myTask.remove();
    
  });


  
});


  //Delete all items

  document.getElementById('del-btn').addEventListener('click', e =>{
    console.log('ul work');
  
    let delAll = document.querySelector('.ul');
    delAll.innerHTML = '';    

    
  });


