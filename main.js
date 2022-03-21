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
    //photo: insertPhoto() 
  },
  {
    name: "Dwight Schrute",
    role: "Assistente del direttore regionale ",
    //photo: insertPhoto() 
  },
  {
    name: "Jim Halpert",
    role: "Addetto alle vendite",
    //photo: insertPhoto() 
  },
  {
    name: "Pam Beesly",
    role: "Segretaria",
    //photo: insertPhoto() 
  },
  {
    name: "Ryan Howard",
    role: "Stagista",
    //photo: insertPhoto() 
  },
  {
    name: "Kevin Malone",
    role: "Contabile",
    //photo: insertPhoto() 
  },



]


//funzione per creare la card
function createEmptyCard() {

  const teamContainer = document.querySelector('.team-container');
  const cardMember = document.createElement('div');
  cardMember.setAttribute('class', "team-card");
  teamContainer.appendChild(cardMember);
  

}
