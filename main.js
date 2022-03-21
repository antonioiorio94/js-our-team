/*
Viene fornito un layout di base in cui è presente *una card di esempio* inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e *dovrà quindi essere rimossa dall’html*.
Aggiungere un file js in cui definire *un array di oggetti* che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: *Nome, Ruolo e Foto*.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
BONUS:
Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un *nuovo oggetto*, il quale viene *inserito nell'array iniziale* e viene stampata una nuova card con tutte le informazioni inserite dall'utente.*/

//Inserisco un array di oggetti per i membri del team
const ourTeam = [
  {
    name: "Michael Scott",
    role: "Direttore Regionale",
    photo: "img/michael-scott.jpg" 
  },
  {
    name: "Dwight Schrute",
    role: "Assistente del direttore regionale ",
    photo: "img/dwight.jpg"
  },
  {
    name: "Jim Halpert",
    role: "Addetto alle vendite",
    photo: "img/jim.jpg"
  },
  {
    name: "Pam Beesly",
    role: "Segretaria",
    photo: "img/pam.jpg"
  },
  {
    name: "Ryan Howard",
    role: "Stagista",
    photo: "img/ryan.jpg"
  },
  {
    name: "Kevin Malone",
    role: "Contabile",
    photo: "img/kevin.jpg" 
  },



]


let cardMember;
const imageLink = "img/michael-scott.jpg";




for (let i=0; i < ourTeam.length; i++){

  createEmptyCard();
  let photoOfTheMember = ourTeam[i].photo;
  createImage(photoOfTheMember);
  let infoNameOfTheMember = ourTeam[i].name;
  let infoRoleOfTheMember = ourTeam[i].role;
  memberInfo(infoNameOfTheMember,infoRoleOfTheMember);
}


//funzione per creare la card
function createEmptyCard() {

  const teamContainer = document.querySelector('.team-container');
  cardMember = document.createElement('div');
  cardMember.setAttribute('class', "team-card");
  teamContainer.appendChild(cardMember);
  

};

//funzione per inserire l'immagine
function createImage (link){
  const cardImageDiv = document.createElement('div');
  cardImageDiv.setAttribute('class', 'card-image');
  cardMember.appendChild(cardImageDiv);
  const cardImage = document.createElement('img');
  cardImage.setAttribute('src', link)
  cardImageDiv.appendChild(cardImage);

};


//funzione per inserire il testo
function memberInfo(nameOfTheMember, roleOfTheMember){

  const cardText = document.createElement('div');
  cardText.setAttribute('class', 'card-text');
  cardMember.appendChild(cardText);
  let memberName = document.createElement('h3');
  memberName.innerHTML = ourTeam[nameOfTheMember];
  cardText.appendChild(memberName);
  let memberRole = document.createElement('p');
  memberRole.innerHTML = ourTeam[roleOfTheMember];
  cardText.appendChild(memberRole);

}
