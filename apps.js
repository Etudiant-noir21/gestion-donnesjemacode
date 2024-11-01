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
        const recuperationTr = tr;
        const recuperationTd1 = recuperationTr.children[0].textContent;
        const recuperationTd2 = recuperationTr.children[1].textContent;
        const recuperationTd3 = recuperationTr.children[2].textContent;
        const recuperationTd4 = recuperationTr.children[3].textContent;
    
        // console.log(recuperationTr)
        // console.log(recuperationTd1 ,recuperationTd2 , recuperationTd3 , recuperationTd4 )
 
        // recuperation des champs de saisie
          const input = document.getElementsByTagName('input');

        //   Reaffichage des donnees sur la formulaire
          input[0].value = recuperationTd1;
          input[1].value = recuperationTd2;
          input[2].value = recuperationTd3;
          input[3].value = recuperationTd4;

           // remplacer les anciennes donnes par les donnes modifier 
    formulaire.addEventListener('submit', function(e){
        e.preventDefault();
        // recuperation des donnes modifier
       

        ajouter.style.display = 'block';
        modifier.style.display = 'none';
    })

    })
 
   

// changement de couleur de fond pour les button
  btnsupp.style.backgroundColor = 'red';
  btnmodif.style.backgroundColor = 'yellow';
  

//     on vide le formulaire
    formulaire.reset();


})


