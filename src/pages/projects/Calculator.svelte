<script lang="ts">
    let inputTxt = "";
    let stack = new Array(0);
    $: operationTxt = stack.join(" ");

    const resetStack = () => (stack = new Array(0));

    const reset = () => {
        resetStack();
        inputTxt = "";
    };

    const del = () => {
        inputTxt = inputTxt.slice(0, -1);
    };

    const calculate = (lhs: number, operator: string, rhs: number) => {
        switch (operator) {
            case "+":
                return lhs + rhs;
            case "-":
                return lhs - rhs;
            case "x":
                return lhs * rhs;
            case "/":
                if (rhs === 0) return Infinity;
                return lhs / rhs;
            default:
                return "Invalid operator";
        }
    };

    const isOperator = (opt: string) =>
        "+-x/".includes(opt.trim()) && opt.trim() !== "";

    const isDigit = (str: string) => str.trim().match(/^\d+$/g);

    $: if (stack.length === 3) {
        let result = calculate(stack.shift(), stack.shift(), stack.shift());
        stack = [...stack, result];
    }

    const appendNumToInputTxt = (e: any) => {
        let txt = e.target.innerText as string;

        if (isOperator(inputTxt)) {
            stack = [...stack, inputTxt];
            inputTxt = "";
        } else if (stack.length === 1) {
            stack = new Array();
        } else if (!isDigit(inputTxt)) {
            inputTxt = "";
        }

        inputTxt += txt;
    };

    const appendOptToInputTxt = (e: any) => {
        let txt = e.target.innerText as string;

        if (inputTxt === "" && stack.length === 0) {
            inputTxt = "Invalid input";
            stack = new Array(0);
            return;
        }

        if (isDigit(inputTxt) || txt === "=") {
            stack = [...stack, parseInt(inputTxt)];
            inputTxt = "";
        }

        if (txt !== "=") inputTxt = txt;
    };
</script>

<svelte:head>
    <title>Projects - Calculator</title>
</svelte:head>

<div class="calculator">
    <div class="screen">
        <input
            type="text"
            class="operation"
            disabled
            maxlength="255"
            bind:value={operationTxt}
        />
        <input
            type="text"
            class="typed"
            disabled
            bind:value={inputTxt}
            maxlength="255"
        />
    </div>
    <div class="numb-pad">
        <button on:click={reset}>AC</button>
        <button on:click={del}>Del</button>
        <button>%</button>
        <button on:click={(e) => appendOptToInputTxt(e)}>/</button>
        <button on:click={(e) => appendNumToInputTxt(e)}>7</button>
        <button on:click={(e) => appendNumToInputTxt(e)}>8</button>
        <button on:click={(e) => appendNumToInputTxt(e)}>9</button>
        <button on:click={(e) => appendOptToInputTxt(e)}>x</button>
        <button on:click={(e) => appendNumToInputTxt(e)}>4</button>
        <button on:click={(e) => appendNumToInputTxt(e)}>5</button>
        <button on:click={(e) => appendNumToInputTxt(e)}>6</button>
        <button on:click={(e) => appendOptToInputTxt(e)}>+</button>
        <button on:click={(e) => appendNumToInputTxt(e)}>1</button>
        <button on:click={(e) => appendNumToInputTxt(e)}>2</button>
        <button on:click={(e) => appendNumToInputTxt(e)}>3</button>
        <button on:click={(e) => appendOptToInputTxt(e)}>-</button>
        <button>+/-</button>
        <button on:click={(e) => appendNumToInputTxt(e)}>0</button>
        <button>.</button>
        <button on:click={(e) => appendOptToInputTxt(e)}>=</button>
    </div>
</div>

<style>
    .numb-pad {
        width: 100%;
        background: #3c4857;
        display: flex !important;
        flex-wrap: wrap !important;
    }

    button {
        width: 25%;
        background: #425062;
        color: #fff;
        padding: 20px;
        flex: 1 1 auto;
        font-size: 25px;
        text-align: center;
        vertical-align: middle;
        border-right: solid 2px #3c4857;
        border-bottom: solid 2px #3c4857;
        transition: all 0.2s ease-in-out;
    }

    .calculator {
        width: 400px;
        min-height: 400px;
        margin: 2em auto;
        border: solid 1px #3a4655;
        border-radius: 5px;
        box-shadow: 0 8px 50px -7px black;
    }

    .screen {
        background: #3a4655;
        width: 100%;
        height: 150px;
        display: flex;
        flex-direction: column;
    }

    .operation {
        text-align: right;
        color: #fff;
        font-size: 30px;
        padding-bottom: 10px;
        border-bottom: dotted 1px;
    }

    .typed {
        font-size: 45px;
        text-align: right;
        color: #fff;
        flex: 1 1 auto;
    }
</style>
