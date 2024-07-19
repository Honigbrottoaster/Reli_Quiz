const questions = [
    { question: "Was hat Josefs Vater ihm geschenkt, das seine Brüder neidisch machte?", answer: "Einen bunten Mantel" },
    { question: "Wer war der erste Mensch laut Bibel?", answer: "Adam" },
    { question: "Wer war Martin Luther?", answer: "Ein Reformator, der die Reformation der Kirche einleitete" },
    { question: "Welches Symbol ist typisch für das Christentum?", answer: "Kreuz" },
    { question: "Wer spielt heute die heiligen 3 Könige nach?", answer: "Die Sternsinger" },
    { question: "Wie viele Brüder hatte Josef?", answer: "11" },
    { question: "Wer führte die Israeliten aus Ägypten?", answer: "Mose" },
    { question: "Warum wurde Josef von seinen Brüdern nach Ägypten verkauft?", answer: "Sie waren eifersüchtig auf ihn" },
    { question: "Wie heißt der aktuelle Papst?", answer: "Franziskus" },
    { question: "Wo wurde Jesus geboren?", answer: "Bethlehem" },
    { question: "Wie heißt das heilige Buch der Muslime?", answer: "Koran" },
    { question: "Wer empfing die Zehn Gebote?", answer: "Mose" },
    { question: "Wie heißt das wichtigste Gebet im Christentum?", answer: "Vaterunser" },
    { question: "joker", answer: "joker"}, //JOKER
    { question: "Was feiern Christen an Weihnachten?", answer: "Die Geburt Jesu" },
    { question: "Was symbolisiert die Taube im Christentum?", answer: "Den Heiligen Geist" },
    { question: "Wie viele Tiere jeder Art nahm Mose mit auf die Arche?", answer: "Es war Noah, nicht Mose" },
    { question: "Wie viele Tage dauerte die Schöpfung der Welt laut Bibel?", answer: "6 Tage, am 7. Tag ruhte Gott" },
    { question: "In welcher Stadt wurde Jesus gekreuzigt?", answer: "Jerusalem" },
    { question: "Wer baute die Arche laut Bibel?", answer: "Noah" },
    { question: "Wer wurde in einem Korb im Nil gefunden?", answer: "Mose" },
    { question: "Wie viele Apostel hatte Jesus", answer: "12" },
    { question: "Was ist die Thora?", answer: "Das heilige Buch der Juden" },
    { question: "Wie heißen die 5 Weltreligionen?", answer: "Christentum, Judentum, Islam, Hinduismus, Buddhismus" }, 
    { question: "Hat Abraham seinen Sohn wirklich geopfert?", answer: "Nein, Gott wollte ihn prüfen" },
    { question: "Was feiern Christen an Ostern?", answer: "Die Auferstehung Jesu" },
    { question: "Was ist der Sabbat?", answer: "Der Ruhetag der Juden" },
    { question: "joker", answer: "joker"}, //JOKER
    { question: "Wie heißt der Berg, auf dem Mose die Zehn Gebote empfing?", answer: "Berg Sinai" },
    { question: "Wann beginnt das Kirchenjahr?", answer: "Am 1. Advent" }, 
    { question: "Wer ist der Stammvater von Judentum, Christentum und Islam?", answer: "Abraham" }, 
    { question: "Wer gilt als der Gründer des Buddhismus?", answer: "Siddhartha Gautama" },
    { question: "Wie heißt der Fluss, in dem Jesus getauft wurde?", answer: "Jordan" },
    { question: "Was ist das wichtigste Fest im Islam?", answer: "Ramadan" },
    { question: "Wie viele Evangelien gibt es im Neuen Testament?", answer: "4" },
    { question: "Wer verriet Jesus für 30 Silberlinge?", answer: "Judas Iskariot" },
    { question: "Was bedeutet 'Amen'?", answer: "So sei es" },
    { question: "Welches Fest feiern die Juden zur Erinnerung an den Auszug aus Ägypten?", answer: "Pessach" },
    { question: "Welcher Engel kündete Maria die Geburt Jesu an?", answer: "Gabriel" },
    { question: "Wie viele Thesen schlug Martin Luther an die Kirche zu Wittenberg?", answer: "95 Thesen" }, 
];

const gridContainer = document.getElementById('gridContainer');
const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlayContent');

overlay.classList.add("hide");

questions.forEach((q, index) => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = `${index + 1}`;
    gridItem.dataset.question = q.question;
    gridItem.dataset.answer = q.answer;
    if(q.question == "joker" && q.answer == "joker") {
        gridItem.classList.add('joker')
    }

    gridItem.addEventListener('click', () => {
        if (!overlay.classList.contains('show')) {
            if(!gridItem.classList.contains('joker')) {
                overlayContent.textContent = "Frage: " + q.question;
                overlay.dataset.answer = q.answer;
                if(overlay.classList.contains("hide-no-animation")) {
                    overlay.classList.remove("hide-no-animation");
                }
                else {
                    overlay.classList.remove("hide");
                }
                overlayContent.classList.remove("attention-animation");
                overlay.classList.add('show');
                overlay.classList.add('question');
                gridItem.classList.add('clicked');   
            }
            else if (overlay.classList.contains("show-joker")) { //sorry for the horrible code hoever reads this lmao
                overlayContent.classList.remove("show-joker");
                overlay.classList.remove("show");
            }
            else {
                if(overlay.classList.contains("hide-no-animation")) {
                    overlay.classList.remove("hide-no-animation");
                }
                else {
                    overlay.classList.remove("hide");
                }
                overlayContent.classList.remove("attention-animation");
                overlay.classList.add("show");
                overlayContent.classList.add("show-joker");
                overlayContent.textContent = "";
                gridItem.classList.add("clicked");
            }
        }
    });

    gridContainer.appendChild(gridItem);
});

overlay.addEventListener('click', () => {
    if (overlay.classList.contains('show')) {
        if (overlayContent.classList.contains("show-joker")) {
            overlayContent.classList.remove("show-joker");
            overlay.classList.remove("show");
            overlay.classList.add("hide-no-animation");
        }
        else if (overlay.classList.contains('question')) {
            overlayContent.textContent = "Antwort: " + overlay.dataset.answer;
            overlay.classList.remove('question');
            overlay.classList.add('answer');
            overlayContent.classList.add("attention-animation"); 
        } else if (overlay.classList.contains('answer')) {
            overlay.classList.remove('show');
            overlay.classList.remove('answer');
            overlay.classList.add("hide");
            //overlayContent.classList.remove("attention-animation");
        }
    }
});

