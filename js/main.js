
let boutonCharger = document.querySelector('#plus button'); 
boutonCharger.addEventListener('click', chargerPlus)


async function chargerPlus(){
    console.log('je charge...');

    let aAjouter = await chargerJSON('js/etudiant.json');

    
    for(let i = 0; i < aAjouter.length; i++){
        console.log(ajouterHTML);
        ajouterHTML(aAjouter[i]);
    }
}


async function chargerJSON(fichier) {
    let response = await fetch(fichier);
    let etudiant = await response.json();
    return etudiant;
}

function ajouterHTML(etudiant){

    let lesEtudiants = document.querySelector('#container');
    let bouton = document.querySelector('#plus');
    
    console.log(etudiant.Nom);
 
   let article = document.createElement('article');
   article.classList.add('divetudiant' , etudiant.Prénom)

   let titre = document.createElement('h3');
   titre.innerHTML = `Specialité ${etudiant.Qualité1} - ${etudiant.Qualité2}`; // Ajoutons ici le titre récupéré
   
   let p = document.createElement('p');
   p.innerHTML = etudiant.Nom + ' ' + etudiant.Prénom;

   article.appendChild(titre);
   article.appendChild(p);
   lesEtudiants.insertBefore(article, bouton);
}
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
    }
    scrollDown();
    console.log("la valeur de i est : " + i);
    console.log("la valeur de j est : " + j);
    
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

function test()
{
let h = 0;
h++;
if(h=1){
    setTimeout(function() { document.getElementById('logostart').style.display = 'none'; 
    document.getElementById('ContainerAccueil').style.display = 'block';}, 3500);      
} 
}

window.onload = test;

function scrollDown() {
    window.scrollTo(0, 1000);    
}
function scrollUp() {
    window.scrollTo(0, -1000);       
}