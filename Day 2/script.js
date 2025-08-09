function submit() {
    const math = parseFloat(document.getElementById("mathInput").value);
    const science = parseFloat(document.getElementById("scienceInput").value);
    const filipino = parseFloat(document.getElementById("filipinoInput").value);

    const add = math + science + filipino;
    const result = (add / 300 * 100).toFixed(2);
    const rounded = Math.round(result);

    const answer = `Your average: ${result} > ${rounded}`;

    if (isNaN(result)) {
        alert("ERROR! Number Only!");
    } else {
        document.getElementById("display").textContent = answer;
    }
}
