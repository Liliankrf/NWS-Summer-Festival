let i = 0;
function ani(){
    i++;
    if(i%2 === 0){
        document.getElementById('containerConnexion').style.display = 'none';
    }
    else{
    document.getElementById('containerConnexion').style.display = 'block';
    }

    if(i%2 === 0 && j & 1)
    {
        console.log("reussis");
        document.getElementById('inscriptionEtudiant').style.display = 'none';
        j = 0;
        }

    console.log("la valeur de i est : " + i);
    console.log("la valeur de j est : " + j);

    scrollDown();
    
}
let j = 0;
function ani2(){
    j++;
    if(j%2 === 0){
        document.getElementById('inscriptionEtudiant').style.display = 'none';
    }
    else{
    document.getElementById('inscriptionEtudiant').style.display = 'block';
    }
    scrollDown();


    console.log("la valeur de j est : " + j);
}

function scrollDown() {
    window.scrollTo(0, 1000);    
}
function scrollUp() {
    window.scrollTo(0, -1000);       
}