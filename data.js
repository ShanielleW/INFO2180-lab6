// JavaScript File
window.onload = main;

function query(word){
    let request = new XMLHttpRequest();
    let url = "/request.php?word="+word;
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE ){
            if(request.status === 200){
                let response = request.responseText;
                alert(response);
            }else{
                alert("Error Detected");
            }
        }
    };
    
    request.open("GET", url, true);
    request.send();
}

function main(){
    let input = $("#search")[0];
    input.onclick = function(event){
        event.preventDefault();
        query("definition");
    };
}