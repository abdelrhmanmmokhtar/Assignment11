var naming1= document.getElementById("bookmarkname");
var webs=document.getElementById("websiteurl");

var alls=[];

var bb =document.getElementById("getting");

if (localStorage.getItem("all")!=null) {
    alls =JSON.parse(localStorage.getItem("all")) ;
    displaying();
}


var iz=0;
function adding(){
    var all={
        names:naming1.value,
        websss:webs.value
    }
 if (validss()) {
  if (bb.innerHTML=="submit"){
    alls.push(all);
    displaying();
    
    localStorage.setItem("all",JSON.stringify(alls));
delleting();
 }
 else{
  bb.innerHTML="submit";
  alls.splice(iz,1,all);
  localStorage.setItem("all",JSON.stringify(alls));
  displaying();

  delleting();
 }
 }
};

function displaying(){
    var  cartona ="" ;
    for (var i=0; i<alls.length;i++) {
      
       cartona+=`
       <tr >
            <td>${i}</td>
            <td>${alls[i].names}</td>              
            <td>
              <button onclick="visiting(${i})" class="btn btn-visit bg-warning" data-index="0">
                <i class="fa-solid fa-eye pe-2"></i>Visit
              </button>
            </td>
            <td>
              <button onclick="Deleteed(${i})" class="btn btn-delete pe-2 bg-danger" data-index="0">
                <i class="fa-solid fa-trash-can"></i>
                Delete
              </button>
            </td>
                <td>
              <button onclick="updateing(${i})" class="btn btn-delete pe-2 bg-warning" data-index="0">
                <i class="fa-solid fa-eye"></i>
                update
              </button>
              
            </td>
        </tr> `;
    }
    document.getElementById("tabelwww").innerHTML=cartona;

};

function validss(){
    var valid1=/^[a-z]{3,}$/i;
    var valid2=/^[a-z]{2,}.www$/i
    if (valid1.test(naming1.value)!=true) {
        return alert("The name must be more than 3 letters");
    }
     if (valid2.test(webs.value)!=true) {
        return alert("The web must be more than 3 letters and end .www");
    }
   
      return true  
    
    
};

function delleting() {
  naming1.value="";
  webs.value="";
  
}
function Deleteed(i){
  alls.splice(i,1);
  displaying();
  localStorage.setItem("all",JSON.stringify(alls));



};

function visiting(i){

  // window.location.href = `https:/${alls.websss}/.gogel.com`;
  window.location.href = `https://github.com/abdelrhmanmmokhtar/DANIELS`;
};
function updateing(i){
  naming1.value=alls[i].names;
  webs.value=alls[i].websss;
  bb.innerHTML="updating";


};

function serches(term){
var cartonaass="";  
for (let i = 0; i < alls.length; i++) {
  if (alls[i].names.toLocaleLowerCase().includes(term.toLocaleLowerCase())) {
   
   
   
    cartonaass+= `<tr >
    <td>${i}</td>
    <td>${alls[i].names}</td>              
    <td>
      <button onclick="visiting(${i})" class="btn btn-visit bg-warning" data-index="0">
        <i class="fa-solid fa-eye pe-2"></i>Visit
      </button>
    </td>
    <td>
      <button onclick="Deleteed(${i})" class="btn btn-delete pe-2 bg-danger" data-index="0">
        <i class="fa-solid fa-trash-can"></i>
        Delete
      </button>
    </td>
        <td>
      <button onclick="updateing(${i})" class="btn btn-delete pe-2 bg-warning" data-index="0">
        <i class="fa-solid fa-eye"></i>
        update
      </button>
      
    </td>
</tr> `;
}
}
document.getElementById("tabelwww").innerHTML=cartonaass;
delleting();
};