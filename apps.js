// recuperation de mon formulaire
let formulaire = document.getElementById('myForm');

// recuperation de mes boutton d'envoie
const ajouter = document.getElementById('ajouter');
const modifier = document.getElementById('btnmodifier');

formulaire.addEventListener('submit', function(event){

    // on empeche la soumission par defaut
    event.preventDefault();

    // recuperation des element du formulaire
    const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;

//    on creer un element tr
    const tr = document.createElement('tr');
  const tbody =  document.querySelector('#tbody');
  tbody.appendChild(tr);

    // on creer un element td pour le prenom
    const td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.innerHTML = prenom;

    const td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.innerHTML = nom;

    const td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.innerHTML = email;

    const td4 = document.createElement('td');
    tr.appendChild(td4)
    td4.innerHTML = telephone;

    const td5 = document.createElement('td');
    tr.appendChild(td5);

    // creation de span pour le button modifier 
    const span1 = document.createElement('span');
    td5.appendChild(span1);
    const btnmodif = document.createElement('button');
    span1.appendChild(btnmodif);
    btnmodif.innerHTML = "Modifier";

// creation de span pour le button supprimer 
    const span2 = document.createElement('span');
    td5.appendChild(span2);
    const btnsupp = document.createElement('button');
    span1.appendChild(btnsupp);
    btnsupp.innerHTML = "Supprimer";

//    suppression d'un ligne par click
    btnsupp.addEventListener('click', function (){
        tbody.removeChild(tr)
    })
    
    // reafficher les valeur dans le formulaire 
    btnmodif.addEventListener('click', function (){
        ajouter.style.display = 'none';
        modifier.style.display = 'block';

        // recuperation des donnes pour le boutton modifier
        const prenomModif = td1;
        const nomModif = td2;
        const emailModif = td3;
        const telephoneModif = td4;
      console.log(prenomModif , nomModif, emailModif, telephoneModif);

    //   Reaffichage des donnees sur la formulaire
      
    })
 
    // retour au boutton ajouter apres la click sur modifier
    modifier.addEventListener('click', function(){
        ajouter.style.display = 'block';
        modifier.style.display = 'none';
    })


// changement de couleur de fond pour les button
  btnsupp.style.backgroundColor = 'red';
  btnmodif.style.backgroundColor = 'yellow';
  

//     on vide le formulaire
    formulaire.reset();


})


