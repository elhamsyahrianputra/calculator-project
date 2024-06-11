document.addEventListener("DOMContentLoaded", function() {
    let expression = '';
    let result = 0;
    let lastInputIsOperator = false;  // Menyimpan status apakah input terakhir adalah operator
    const expressionDisplay = document.getElementById('expression');
    const resultDisplay = document.getElementById('result');
    const historyPopup = document.getElementById('historyPopup');
    const historyList = document.getElementById('historyList');

    const updateDisplay = () => {
        expressionDisplay.textContent = expression;
        resultDisplay.textContent = result;
    };

    const appendToExpression = (value) => {
        if (value === '.' && expression.includes('.')) {
            return;  // Hindari input titik desimal ganda
        }
        
        if ('+-×÷%'.includes(value)) {
            if (lastInputIsOperator || expression === '') {
                return;  // Hindari operator berturut-turut atau operator sebagai input pertama
            }
            lastInputIsOperator = true;
        } else {
            lastInputIsOperator = false;
        }
        
        expression += value;
        updateDisplay();
    };

    const clearExpression = () => {
        expression = '';
        result = 0;
        updateDisplay();
    };

    const backspaceExpression = () => {
        expression = expression.slice(0, -1);
        updateDisplay();
    };

    const evaluateExpression = () => {
        if (expression === '') {
            result = 0;
            updateDisplay();
            return;
        }

        // Hapus operator di akhir ekspresi jika ada
        if ('+-×÷%'.includes(expression.slice(-1))) {
            expression = expression.slice(0, -1);
        }

        try {
            result = eval(expression.replace('×', '*').replace('÷', '/').replace('%', '%'));
            console.log('Expression evaluated:', expression + '=' + result);
            saveHistory(expression + '=' + result);
            expression = result.toString();  // Simpan hasil sebagai ekspresi baru
        } catch (e) {
            result = 'Error';
        }
        updateDisplay();
    };

    const saveHistory = async (expression) => {
        try {
            console.log('Saving history:', expression);
            await fetch('/save-history', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ expression })
            });
        } catch (error) {
            console.error('Error saving history:', error);
        }
    };

    const loadHistory = async () => {
        try {
            const response = await fetch('/get-history');
            const histories = await response.json();
            historyList.innerHTML = '';
            histories.forEach(item => {
                const historyItem = document.createElement('div');
                historyItem.textContent = item.expression;
                historyItem.classList.add('p-2', 'cursor-pointer', 'hover:bg-gray-200');
                historyItem.addEventListener('click', () => {
                    expression = item.expression.split('=')[0];
                    result = item.expression.split('=')[1];
                    updateDisplay();
                    closeHistoryPopup();
                });
                historyList.appendChild(historyItem);
            });
        } catch (error) {
            console.error('Error loading history:', error);
        }
    };

    const showHistoryPopup = () => {
        loadHistory();
        historyPopup.classList.remove('hidden');
    };

    const closeHistoryPopup = () => {
        historyPopup.classList.add('hidden');
    };

    document.getElementById('clear').addEventListener('click', clearExpression);
    document.getElementById('backspace').addEventListener('click', backspaceExpression);
    document.getElementById('equals').addEventListener('click', evaluateExpression);

    document.querySelectorAll('.button').forEach(button => {
        if (!['clear', 'backspace', 'equals'].includes(button.id)) {
            button.addEventListener('click', () => {
                appendToExpression(button.textContent);
            });
        }
    });

    document.getElementById('historyButton').addEventListener('click', showHistoryPopup);
    document.getElementById('closeHistoryPopup').addEventListener('click', closeHistoryPopup);
});
