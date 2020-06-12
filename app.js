document.getElementById('add-btn').addEventListener('click', function(){
   console.log('working');
    //ADD  TASK ON THE LIST

   let myTask = document.createElement('li');
   let textValue = document.getElementById('input-text').value;
   let txtInput = document.createTextNode(textValue);
   let checkBox = document.createElement('input');
   let spanText = document.createElement('span');
   
   checkBox.type = 'checkbox';
   checkBox.classList.add('check-box');
   myTask.appendChild(checkBox);
   myTask.appendChild(spanText);
   spanText.appendChild(txtInput);
   document.getElementById('u-list').appendChild(myTask);
   document.getElementById('input-text').value = '';

   checkBox.addEventListener('click', e =>{
     console.log(checkBox.nextSibling);
     
     if (checkBox.checked){
         checkBox.nextSibling.classList.add('strike');
     }else {
        checkBox.nextSibling.classList.remove('strike');

     }
   });
  
});

//document.getElementById('u-list').addEventListener('click', e =>{
  //  let parentList = e.target.parentElement;
    //if (document.querySelector('.check').checked){
      //  parentList.classList.add('strike');
    //}else{
   //     parentList.classList.remove('strike');
 //   }
  

    
    
//});

//document.getElementById('del-btn').addEventListener('click', e =>{
  //  let element = document.getElementById('parent-list');
    //element.parentNode.removeChild(element);
//});




