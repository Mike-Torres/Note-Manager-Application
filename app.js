//user clicked on the add button

document.getElementById('add').addEventListener('click', function(){
    var value = document.getElementById('item').value;
    if(value) addItemTodo(value);
});


// adds new item to notes
function addItemTodo(text) {
    var list = document.getElementById('todo')

    var item = document.createElement('li');
    item.innertext = text;

    var notes = document.createElement('div');
    notes.classList.add("notes");

    var remove = document.createElement('button');
    notes.classList.add("remove");


    var complete = document.createElement('button');
    notes.classList.add("complete");

    notes.appendChild(remove);
    notes.append(text);
    item.append(notes)

    list.append(item);
}
