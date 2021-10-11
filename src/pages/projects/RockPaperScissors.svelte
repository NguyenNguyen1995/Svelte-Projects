<script lang="ts">
    export let basepath;
    const maxScore = 3;
    $: playerScore = 0;
    $: machineScore = 0;
    $: displayPlayerChoice = "";
    $: displayMachineChoice = "";
    $: displayBanner = banner;
    let roundNumber = 1;
    const banner = `Who get ${maxScore} wins first will win`;

    let winner = false;

    enum Choices {
        Rock,
        Paper,
        Scissors,
    }

    const machinePlay = () => {
        return [Choices.Rock, Choices.Paper, Choices.Scissors][
            Math.floor(Math.random() * 3)
        ];
    };

    const reset = () => {
        winner = false;
        playerScore = machineScore = 0;
        displayPlayerChoice = displayMachineChoice = "";
        roundNumber = 1;
        displayBanner = banner;
        console.log("Reset the game");
    };

    const restartGame = (e) => {
        let isRestart = confirm(
            "Are you sure that you want to restart the game?"
        );
        if (isRestart) {
            reset();
        }
    };

    const displayFormat = (
        className: string,
        roundNumber: number,
        choice: Choices
    ) =>
        `<span class='${className}'><strong>Round ${roundNumber}</strong>: ${Choices[choice]}<br/></span>`;

    const playerChoose = (playerChoice: Choices) => {
        let machineChoice = machinePlay();

        // Draw case
        if (playerChoice === machineChoice) {
            displayPlayerChoice += displayFormat(
                "bg-secondary",
                roundNumber,
                playerChoice
            );
            displayMachineChoice += displayFormat(
                "bg-secondary",
                roundNumber,
                machineChoice
            );
            roundNumber += 1;
            return;
        }

        let isMachineWin = false;

        if (playerChoice === Choices.Rock) {
            if (machineChoice === Choices.Paper) {
                machineScore += 1;
                isMachineWin = true;
            } else {
                playerScore += 1;
            }
        } else if (playerChoice === Choices.Paper) {
            if (machineChoice === Choices.Scissors) {
                machineScore += 1;
                isMachineWin = true;
            } else {
                playerScore += 1;
            }
        } else if (playerChoice === Choices.Scissors) {
            if (machineChoice === Choices.Rock) {
                machineScore += 1;
                isMachineWin = true;
            } else {
                playerScore += 1;
            }
        }

        if (isMachineWin) {
            displayPlayerChoice += displayFormat("", roundNumber, playerChoice);
            displayMachineChoice += displayFormat(
                "bg-success",
                roundNumber,
                machineChoice
            );
        } else {
            displayPlayerChoice += displayFormat(
                "bg-success",
                roundNumber,
                playerChoice
            );
            displayMachineChoice += displayFormat(
                "",
                roundNumber,
                machineChoice
            );
        }
        roundNumber += 1;
    };

    $: if (machineScore >= maxScore || playerScore >= maxScore) {
        if (machineScore > playerScore) {
            displayBanner = "Machine wins";
        } else {
            displayBanner = "You wins";
        }
        alert("Game has end");
        winner = true;
    }
</script>

<svelte:head>
    <title>Svelte Projects - Rock Paper Scissors</title>
</svelte:head>

<h3 class="text-center mb-3">Rock Paper Scissors</h3>

<h2
    class="w-50 {winner
        ? 'bg-danger'
        : 'bg-secondary'} text-white text-center mx-auto"
>
    {displayBanner}
</h2>

<div class="d-flex flex-shrink-1 mt-3" style="height: 15em;">
    <div class="row w-100">
        <span class="col-2 text-center">
            <h3>You</h3>
            <span class="log-panel">{@html displayPlayerChoice}</span>
        </span>
        <div class="col-8 text-center">
            <button
                class="rock"
                title="rock"
                disabled={winner}
                on:click={() => playerChoose(Choices.Rock)}
            >
                <img
                    src="{basepath}/images/rock.jpg"
                    alt="rock"
                    width="150"
                    height="150"
                />
            </button>
            <button
                class="paper"
                title="paper"
                disabled={winner}
                on:click={() => playerChoose(Choices.Paper)}
            >
                <img
                    src="{basepath}/images/paper.jpg"
                    alt="rock"
                    width="150"
                    height="150"
                />
            </button>
            <button
                class="scissors"
                title="scissors"
                disabled={winner}
                on:click={() => playerChoose(Choices.Scissors)}
            >
                <img
                    src="{basepath}/images/scissors.jpg"
                    alt="rock"
                    width="150"
                    height="150"
                />
            </button>
        </div>
        <div class="col-2 text-center log-panel">
            <h3>Machine</h3>
            <span class="log-panel">{@html displayMachineChoice}</span>
        </div>
    </div>
</div>

<div class="d-flex justify-content-center">
    <button class="btn btn-danger" on:click={restartGame}>
        Restart Game
    </button>
</div>

<div class="display mt-5">
    <img
        src="{basepath}/images/player.jpg"
        alt="You"
        title="You"
        width="200"
        height="200"
    />
    <span class="score-panel" title="Your Score">{playerScore}</span>
    <span class="score-panel">VS</span>
    <span class="score-panel" title="Machine Score">{machineScore}</span>
    <img
        src="{basepath}/images/machine.png"
        alt="Machine"
        title="Machine"
        width="200"
        height="200"
    />
</div>

<style>
    .rock,
    .paper,
    .scissors {
        margin: 0 1.5em;
        padding: 0;
        min-width: 150px;
        min-height: 150px;
        outline: none;
    }

    .score-panel {
        flex: 1;
        align-content: center;
        display: flex;
        justify-content: center;
        align-items: center; /* for single line flex container */
        align-content: center; /* for multi-line flex container */
        font-weight: bold;
        font-size: xx-large;
    }

    .display {
        display: flex;
        height: 200px;
    }

    .log-panel {
        overflow: auto;
    }
</style>
