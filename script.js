const name=document.getElementById('name')
const add=document.getElementById('add')
const reset=document.getElementById('reset')
const sort=document.getElementById('sort')
const clean=document.getElementById('clean')
const listbd= document.querySelector('.listbd')
const ul=document.querySelector('#ull')


////add button
add.onclick=function (){       
    
    const li=document.createElement('li')
    li.innerText=name.value
    li.style.listStyle='none';
    li.style.fontSize='20px';
    li.style.backgroundColor='lightblue';
    li.style.margin='10px';
   
    ul.appendChild(li)
    li.onclick=function(){
    if(li.style.textDecoration!='line-through')
    li.style.textDecoration='line-through';
    else{
        li.style.textDecoration='none';
    }
    }
    name.value=null
    edResetAdd(name)
    edSortClean( document.querySelectorAll('li'));
    

}
///enetering text using enter key
 name.addEventListener('keyup',((e)=>{
     if(e.which==13)
    {const li=document.createElement('li')
    li.innerText=name.value
    li.style.listStyle='none';
    li.style.fontSize='20px';
    li.style.backgroundColor='lightblue';
    li.style.margin='10px';
   
    ul.appendChild(li)
    li.onclick=function(){
    if(li.style.textDecoration!='line-through')
    li.style.textDecoration='line-through';
    else{
        li.style.textDecoration='none';
    }
    }
    name.value=null 
    }
 }))


///reset button
reset.onclick=function(){
    name.value=null
    edResetAdd(name)
}

///Enable and disable function for reset & add, they get disabled when there is no input
function edResetAdd(name){
    if(name.value==''){
    add.disabled=true;
    reset.disabled=true;

}
    else{
    add.disabled=false;
    reset.disabled=false;}
}
name.onchange=function(){
    edResetAdd(name)
}


//sort button
sort.onclick=function(){
    
    list=ul.getElementsByTagName('li')
    var i;
for (i = 0; i < list.length; i++) {
  if(list[i].style.textDecoration!='line-through'){
    var j;
    for (j = list.length-1; j>=0; j--) {
      if(list[j].style.textDecoration=='line-through'){
       
        swapNodes(list[i],list[j])
      }
    }
  }
}
function swapNodes(n1, n2) {

    var p1 = n1.parentNode;
    var p2 = n2.parentNode;
    var i1, i2;

    if ( !p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1) ) return;

    for (var i = 0; i < p1.children.length; i++) {
        if (p1.children[i].isEqualNode(n1)) {
            i1 = i;
        }
    }
    for (var i = 0; i < p2.children.length; i++) {
        if (p2.children[i].isEqualNode(n2)) {
            i2 = i;
        }
    }

    if ( p1.isEqualNode(p2) && i1 < i2 ) {
        i2++;
    }
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}

}

////cleanup button
clean.onclick=function(){
    
    // ul.removeChild(ul.childNodes[0])
    
    document.querySelectorAll('li').forEach(li => {
        if (li.style.textDecoration=='line-through') 
        ul.removeChild(li)
       
      });
    edSortClean(document.querySelectorAll('li'))  

}
///enable disable for sort& clean button, they get disabled when length of list becomes 0
function edSortClean(l){
    if(l.length!=0){
        sort.disabled=false;
    clean.disabled=false;
  
}
    else{
        sort.disabled=true;
    clean.disabled=true;
  
}

}
   
