function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const result = document.getElementById('result').value;
    let calculatedResult;
    try {
        calaculatedResult = math.evaluate(result);
    } catch (error) {
        calculatedResult = 'Error';
    }
    document.getElementById('result').value = calculatedResult;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearResult();
    } else if (key.match(/[0-9+\-*/.]/)) {
        event.preventDefault(); // Prevent input in other fields
        appendToResult(key);
    }
});
