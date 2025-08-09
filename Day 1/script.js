// practice 1 - print information
function submit() {
    const name = 'Hi my name is ';
    const food = '. I like eating ';

    const nameInput = document.getElementById("nameInput").value;
    const foodInput = document.getElementById("foodInput").value;

    document.getElementById("display").textContent = name + nameInput + food + foodInput + '.';
}
