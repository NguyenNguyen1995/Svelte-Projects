<script>
    const boardLength = 550;
    $: numberOfSquare = 3;
    $: squareLength = boardLength / numberOfSquare;
    $: isRandomColor = false;
    let value = "#C2938D";

    function changeBGColor(e) {
        var bgColor = e.target.style.backgroundColor;
        if (isRandomColor) {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);

            if (bgColor === "")
                e.target.style.backgroundColor = `#${randomColor}`;
            return;
        }
        if (bgColor === "") e.target.style.backgroundColor = value;
    }

    function setSquareNumber() {
        let result = parseInt(prompt("Enter number of pixel(max 64)", 3));

        if (isNaN(result)) {
            return alert("Invalid number. Please try again!!!");
        }

        if (result < 3) {
            numberOfSquare = 3;
        } else if (result > 64) {
            numberOfSquare = 64;
        } else {
            numberOfSquare = result;
        }
        return alert("Change successful");
    }

    function clearBoard() {
        let squares = document.querySelectorAll(".board div .square");
        squares.forEach((element) => {
            element.style.backgroundColor = "";
            element.style.opacity = "";
        });
    }

    function randomColor() {
        let result;

        if (!isRandomColor) {
            result = confirm("Are you sure u want to do this?");
            if (result) {
                isRandomColor = true;
                return alert("Random color mode on");
            }
        } else {
            result = confirm("Want to change to default mode?");
            if (result) {
                isRandomColor = false;
                return alert("Default mode on");
            }
        }
    }
</script>

<svelte:head>
    <title>Svelte Projects - Etch A Sketch</title>
</svelte:head>

<h2 class="text-center mb-4">Etch a Sketch</h2>

<div class="w-100 d-flex justify-content-center mb-3">
    <div
        class="board mx-auto"
        style="width: {boardLength}px;height: {boardLength}px"
    >
        {#each Array(numberOfSquare) as _}
            <div>
                {#each Array(numberOfSquare) as _}
                    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                    <div
                        class="square"
                        style="width: {squareLength}px; height: {squareLength}px;"
                        on:mouseover={changeBGColor}
                    />
                {/each}
            </div>
        {/each}
    </div>
    <div style="width: 30em;" class="text-center">
        <div class="mb-3">
            <button class="btn btn-danger" on:click={clearBoard}>Clear</button>
        </div>
        <div class="mb-3">
            <button class="btn btn-primary" on:click={setSquareNumber}>
                Set number of pixel
            </button>
        </div>
        <div class="mb-3">
            <input type="color" bind:value />
            <label for="head" class="text-success">Your color</label>
        </div>
        <div class="mb-3">
            <button
                class="btn {isRandomColor ? 'btn-danger' : 'btn-secondary'}"
                on:click={randomColor}
            >
                {isRandomColor ? "Default mode" : "Random color mode"}
            </button>
        </div>
    </div>
</div>

<style>
    .square {
        background-color: white;
        flex: 1 0 auto;
        border: 0.5px solid rgb(201, 192, 192, 0.6);
    }

    .board {
        display: flex;
        flex-flow: row nowrap;
        background-color: plum;
    }
</style>
