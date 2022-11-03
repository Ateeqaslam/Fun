
// opendialog
var dialog = document.getElementById('dialog');
document.getElementById('param').onclick = function(){
    dialog.show();
    
}
// closedialog
document.getElementById('cancel').onclick = function(){
    dialog.close();
    location.reload();
}

// Agree
document.getElementById('yes').onclick = function(){
    document.getElementById('question').innerHTML = "<b>Yep, I knew that. &#128540</b>";
    document.getElementById('cancel').style.visibility = "visible";
    document.getElementById('cancel').style.opacity = 1;
}

// denied
var pos = 0;
function tap(){
    if(pos < 60){
        doc= document.getElementById('No');
        doc.style.top = pos + 'px';
    }else if(pos  == 60 || pos < 110){
        
        doc.style.left = pos + 'px';
       
    }else if(pos ==110){
        pos=0;
    }else{
     
    }
    
    pos+= 10;
}







