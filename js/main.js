

/*
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


    
    let lesEtudiants = document.querySelector('#test');
    let bouton = document.querySelector('#plus');
    
    console.log(etudiant.Nom);
 

   let containerCard = document.createElement('div');
   containerCard.classList.add('containerCard');

   let profileCard = document.createElement('div');
   profileCard.classList.add('profileCard');

   let imageContainer = document.createElement('div');
   imageContainer.classList.add('imageContainer');

   let photo = document.createElement('IMG');
   photo.setAttribute("src", etudiant.photo);

   let textContainer = document.createElement('div');
   textContainer.classList.add('textContainer');

   let NomPrenom = document.createElement('h1');
   NomPrenom.innerHTML =  etudiant.Nom + ' ' + etudiant.Prénom;
   //titre.innerHTML = `Specialité ${etudiant.Qualité1} - ${etudiant.Qualité2}`; // Ajoutons ici le titre récupéré

   //titre.innerHTML = `test ${etudiant.photo}`; // Ajoutons ici le titre récupéré

   let Qualités = document.createElement('h3');
   Qualités.innerHTML = etudiant.Qualité1 + ' ' + etudiant.Qualité2;

   let desc = document.createElement('p');
   desc.innerHTML = etudiant.Unedescriptionlibre;

   let Contacter = document.createElement('a');
   Contacter.innerHTML = '<i class="fas fa-envelope"></i>Contacter';
   Contacter.setAttribute("href", '#');
   let Intéresser = document.createElement('a');
   Intéresser.innerHTML = 'Intéresser<i class="fas fa-star"></i>';
   Intéresser.setAttribute("href", '#');

   containerCard.appendChild(profileCard);
   profileCard.appendChild(imageContainer);
   imageContainer.appendChild(photo);
   profileCard.appendChild(textContainer);
   textContainer.appendChild(NomPrenom);
   textContainer.appendChild(Qualités);
   textContainer.appendChild(desc);
   textContainer.appendChild(Intéresser);
   textContainer.appendChild(Contacter);
   
   lesEtudiants.insertBefore(containerCard, bouton);
}

*/
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
    console.log("la valeur de j est : " + j);
}

let compteur = 0;
function test()
{
compteur++;
if(h=1){
    setTimeout(function() { document.getElementById('logostart').style.display = 'none'; 
    document.getElementById('ContainerAccueil').style.display = 'block';chargerPlus()}, 3500);      
} 
}

window.onload = test;
