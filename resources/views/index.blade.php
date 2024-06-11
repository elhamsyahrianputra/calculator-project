<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite('resources/css/app.css')
</head>

<body>
	<div class="hidden p-2 cursor-pointer hover:bg-gray-200"></div>
    <div class="mx-auto h-screen w-9/12 shadow-md md:w-4/12 relative">
        <div class="h-[40vh] bg-cream px-4 pt-8 text-right">
            <div class="mb-4 mr-2 text-right">
                <button id="historyButton" class="p-2 transition-all duration-300 hover:bg-slate-300 hover:bg-opacity-50">
                    <img class="w-8" src="/img/icon/history.png">
                </button>
            </div>
            <div id="result" class="text-right text-6xl font-semibold">0</div>
            <div id="expression" class="mt-4 overflow-x-auto text-right text-xl text-primary"></div>
        </div>
        <div class="text-c h-[60vh] bg-cold px-4">
            <div class="grid grid-cols-4 justify-items-center gap-4 pt-5 text-2xl font-semibold">
                <button id="clear" class="button text-primary">AC</button>
                <button id="backspace" class="button hover:opacity-35"><img class="w-10" src="/img/icon/backspace.png" alt=""></button>
                <button id="modulus" class="button bg-primary text-cream hover:bg-opacity-75">%</button>
                <button id="divide" class="button bg-primary text-cream hover:bg-opacity-75">÷</button>

                <button id="seven" class="button hover:opacity-35">7</button>
                <button id="eight" class="button hover:opacity-35">8</button>
                <button id="nine" class="button hover:opacity-35">9</button>
                <button id="multiply" class="button bg-primary text-cream hover:bg-opacity-75">×</button>

                <button id="four" class="button hover:opacity-35">4</button>
                <button id="five" class="button hover:opacity-35">5</button>
                <button id="six" class="button hover:opacity-35">6</button>
                <button id="subtract" class="button bg-primary text-cream hover:bg-opacity-75">-</button>

                <button id="one" class="button hover:opacity-35">1</button>
                <button id="two" class="button hover:opacity-35">2</button>
                <button id="three" class="button hover:opacity-35">3</button>
                <button id="add" class="button bg-primary text-cream hover:bg-opacity-75">+</button>

                <button id="zero" class="button hover:opacity-35">0</button>
                <button id="decimal" class="button hover:opacity-35">.</button>
                <button id="empty" class="button hover:opacity-35"></button>
                <button id="equals" class="button bg-primary text-cream hover:bg-opacity-75">=</button>
            </div>
        </div>

        <!-- History Popup -->
        <div id="historyPopup" class="hidden fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center transition-all duration-700">
            <div class="bg-white p-6 rounded-lg w-11/12 md:w-6/12">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-2xl font-semibold">History</h2>
                    <button id="closeHistoryPopup" class="text-red-500 font-semibold">&times;</button>
                </div>
                <div id="historyList" class="max-h-64 overflow-y-auto">
                    <!-- History items will be appended here -->
                </div>
            </div>
        </div>
    </div>
    <script src="js/calculator.js"></script>
</body>

</html>
