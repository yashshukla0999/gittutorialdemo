// const item = document.getElementsByClassName('list-group-item');
// item[2].style.backgroundColor='green';
// for(var i = 0;i<item.length;i++){
//     item[i].style.fontWeight ='bold';
// }
// //in this for new list with item 5 is not update because it conatin classname ='list-group-items' and your new list contain diffrent class name we can modifiefd it with tagname
// const v = document.getElementsByTagName('li');
// v[4].style.backgroundColor='red';


const back=document.querySelector('.list-group-item:nth-child(2)');
back.style.backgroundColor='red';
const visible=document.querySelector('.list-group-item:nth-child(3)');
visible.style.display ='none';
const color = document.querySelectorAll('.list-group-item');
color[1].style.color='yellow';
const bg= document.querySelectorAll('li:nth-child(odd)');
for(let i = 0;i<bg.length;i++){
    bg[i].style.backgroundColor='green';
}