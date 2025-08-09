function submit() {
    const input = document.getElementById("input").value;
    const display = document.getElementById("display");

    if (input === "" || isNaN(input)) {
        alert("Please try again!!");
        return;
    }

    for (let i = 0; i <= 10; i++) {
    const calculate = input * i;
    const result = `<br>${input} x ${i} = ${calculate}`;

    display.innerHTML += result;
    }
}