const item = document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor='green';
for(var i = 0;i<item.length;i++){
    item[i].style.fontWeight ='bold';
}
//in this for new list with item 5 is not update because it conatin classname ='list-group-items' and your new list contain diffrent class name we can modifiefd it with tagname
const v = document.getElementsByTagName('li');
v[4].style.backgroundColor='red';