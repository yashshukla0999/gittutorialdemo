// const item = document.getElementsByClassName('list-group-item');
// item[2].style.backgroundColor='green';
// for(var i = 0;i<item.length;i++){
//     item[i].style.fontWeight ='bold';
// }
// //in this for new list with item 5 is not update because it conatin classname ='list-group-items' and your new list contain diffrent class name we can modifiefd it with tagname
// const v = document.getElementsByTagName('li');
// v[4].style.backgroundColor='red';


// const back=document.querySelector('.list-group-item:nth-child(2)');
// back.style.backgroundColor='red';
// const visible=document.querySelector('.list-group-item:nth-child(3)');
// visible.style.display ='none';
// const color = document.querySelectorAll('.list-group-item');
// color[1].style.color='yellow';
// const bg= document.querySelectorAll('li:nth-child(odd)');
// for(let i = 0;i<bg.length;i++){
//     bg[i].style.backgroundColor='green';
// }
// const item = document.querySelector('#items');

// console.log(item.parentElement.parentElement.parentElement);
// //first element
// item.firstElementChild.textContent='hello';
// console.log(item.firstElementChild);
// //last element
// item.lastElementChild.textContent='world';
// console.log(item.lastElementChild);
// //next siblings
// console.log(item.nextElementSibling);
// //revious sibling
// console.log(item.previousElementSibling);
// //
// var newdiv = document.createElement('div');
// newdiv.className = 'hello'
// newdiv.setAttribute('title','hello div');
// var newdivtext = document.createTextNode('Hello World')
// newdiv.appendChild(newdivtext);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newdiv,h1);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore('header h1');
var form  = document.getElementById('addForm');
var addList = document.getElementById('items');
form.addEventListener('keyup',filteritems);
// form.addEventListener('submit', additem);
// function additem(e){
//     e.preventDefault();

//     var newItem = document.getElementById('item').value;
//     var li = document.createElement('li');
     

//     li.className='list-group-item';
//     li.appendChild(document.createTextNode(newItem));

// var deletebtn = document.createElement('button');




// deletebtn.className='btn btn-danger btn-sm float-right delete'
// deletebtn.appendChild(document.createTextNode('X'));
// li.appendChild(deletebtn);
// addList.appendChild(li);
// }
// function fiterItems(e){
//     var text =e.target.value.toLowerCase()
//     var items  = addList.getElementsByTagName('li');
//     Array.form(items).forEach(function(item){
//         var itemName=item.firstChild.textContent;
//     });

// }

// //store single user data in local storage
//  const val = document.addEventListener('submit',updateForm);
// function updateForm(e){
//     e.preventDefault();
  var nam = document.getElementById('name').value
// localStorage.setItem('name',nam);
 var mail = document.getElementById('email').value
// localStorage.setItem('email',mail);
   
// };
const val = document.addEventListener('submit',updateForm);
function updateForm(e){
    e.preventDefault();
let obj = {
    namee : nam,
    email :mail

};
let myobj = JSON.stringify(obj);
localStorage.setItem('detail',myobj);
console.log(localStorage)

// console.log(localStorage);


};