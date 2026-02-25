let containModal = document.getElementById('containModal');
let modal = document.getElementById('modal');
let btnNewTask = document.getElementById('newTask');
let btnAdd = document.getElementById('add');
let btnCancel = document.getElementById('cancel');
let input = document.getElementById('task');
let centrer = document.getElementById('centrer');
let index = -1;
let idTask = -1;
let taskAlreadyDo = 0;
let viewTask = document.getElementById('viewTask');
let counterOfTaskDo = document.getElementById('compteur');


cpt = 0;
containModal.style.display = 'none';
btnNewTask.addEventListener('click', () => {
    containModal.style.display = 'flex';
    input.value = "";
});
// annuler l'action d'ajouter une tache
btnCancel.addEventListener('click', () => {
    containModal.style.display = 'none';

})
function addTask() {
    idTask++;
    index++;

    let li = document.createElement('li');
    li.textContent = input.value;
    li.className = "table-hover";//mauvaise propriete bootstrap pour le hover cherche encore
    let div = document.createElement('div');
    let secondDiv = document.createElement('div');
    secondDiv.className = "viewTask2"
    div.id = idTask;
    div.className = "viewTask";
    let stateOFtask = document.createElement('div');
    stateOFtask.textContent = "A faire";
    stateOFtask.className = "state";
    localStorage.setItem(index, li.textContent);
    // supptimer et modifier 
    // pour supprimer un element 
    let supprimer = document.createElement('div');
    supprimer.className = "supprimer";
    supprimer.textContent = "Supprimer";
    supprimer.className = "supprimer"
    supprimer.addEventListener('click', () => {
        viewTask.removeChild(div);
        localStorage.removeItem(div.id);

    });

    //pour modifier un element
    let modifier = document.createElement('div');
    modifier.className = "modifier";
    modifier.textContent = ' Modifier';
    modifier.className = "modifier";
    modifier.addEventListener('click', () => {
        containModal.style.display = 'flex';
        input.value = li.textContent;
        viewTask.removeChild(div);
        localStorage.removeItem(div.id);

    });

    div.appendChild(li);
    div.appendChild(secondDiv);
    secondDiv.appendChild(modifier);

    secondDiv.appendChild(stateOFtask);
    secondDiv.appendChild(supprimer);
    viewTask.appendChild(div);

    stateOFtask.addEventListener('dblclick', () => {
        stateOFtask.textContent = "Fait";
        stateOFtask.className = "finish";
        stateOFtask.classList.add("state");
        taskAlreadyDo++;
        counterOfTaskDo.textContent = `${taskAlreadyDo}/${index+1}`;
        stateOFtask.style.pointerEvents = "none";
    });

    input.value = "";
    containModal.style.display = 'none';
    div.lastChild.style.marginBottom = "none";
    counterOfTaskDo.textContent = `${0}/${index+1}`;



}


btnAdd.addEventListener('click', addTask)