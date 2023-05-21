 function goTO(){
    let input=document.getElementById('ip')
    let heading=document.getElementById('mom')
    let ipvalue=input.value 
    if(ipvalue!=""){
        if(ipvalue>=1&&ipvalue<=4){
            if(ipvalue==1){
                window.open('project2.html');
            }
            else if(ipvalue==2){
                window.open('project2.2.html');
            }
            else if(ipvalue==3){
                window.open('project2.3.html');
            }
            else if(ipvalue==4){
                window.open('project2.1.html');
            }
        }
        else{
           heading.innerText="The given value is not defined"
            
        }
    }
    else{
        heading.innerText="Please insert the value"
    }
 }