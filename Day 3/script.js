// mo display sa operators and numbers
function numbers(value) {
    const input = document.getElementById("display");
    input.value += value;
}

// clear the input
function clearDisplay() {
    document.getElementById("display").value = "";
}

function equals(){
    const input = document.getElementById("display").value;
    
    // if ang user walay gibutang
    if (input === "") {
        alert("Error please input something");
        return;
    }

    // mao ni mo calculate ug mo error if string ang ge input sa user
    try {
        const calculate = eval(input);
        document.getElementById("display").value = calculate;
    } catch {
        alert("error numbers")
    }
}