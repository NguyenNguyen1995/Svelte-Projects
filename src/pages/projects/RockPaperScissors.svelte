<script lang="ts">
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

    const playerChoose = (playerChoice: Choices) => {
        let machineChoice = machinePlay();

        displayPlayerChoice += `<strong>Round ${roundNumber}</strong>: ${Choices[playerChoice]}<br/>`;
        displayMachineChoice += `<strong>Round ${roundNumber}</strong>: ${Choices[machineChoice]}<br/>`;

        // Draw case
        if (playerChoice === machineChoice) {
            displayBanner = `Round ${roundNumber}: Draw`;
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

        displayBanner = `Round ${roundNumber}: ${
            isMachineWin ? "Machine" : "You"
        } wins`;
        roundNumber += 1;
    };

    $: if (machineScore >= maxScore || playerScore >= maxScore) {
        if (machineScore > playerScore) {
            displayBanner = "Machine wins";
        } else {
            displayBanner = "You wins";
        }
        winner = true;
    }
</script>

<svelte:head>
    <title>Svelte Projects - Rock Paper Scissors</title>
</svelte:head>

<h3 class="text-center mb-3">Rock Paper Scissors</h3>

<h2 class="w-25 bg-danger text-white text-center mx-auto">
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
            />
            <button
                class="paper"
                title="paper"
                disabled={winner}
                on:click={() => playerChoose(Choices.Paper)}
            />
            <button
                class="scissors"
                title="scissors"
                disabled={winner}
                on:click={() => playerChoose(Choices.Scissors)}
            />
        </div>
        <div class="col-2 text-center log-panel">
            <h3>Machine</h3>
            <span class="log-panel">{@html displayMachineChoice}</span>
        </div>
    </div>
</div>

<div class="d-flex justify-content-center mt-3">
    <button class="btn btn-danger" on:click={restartGame}>
        Restart Game
    </button>
</div>

<div class="display mt-5">
    <img
        src="/images/player.jpg"
        alt="You"
        title="You"
        width="200"
        height="200"
    />
    <span class="score-panel" title="Your Score">{playerScore}</span>
    <span class="score-panel">VS</span>
    <span class="score-panel" title="Machine Score">{machineScore}</span>
    <img
        src="/images/machine.png"
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
        background-color: transparent;
        outline: none;
        background-position: 50% 50%;
        background-size: 150px;
        background-repeat: no-repeat;
    }

    .rock {
        background-image: url(/images/rock.jpg);
    }

    .paper {
        background-image: url(/images/paper.jpg);
    }

    .scissors {
        background-image: url(/images/scissors.jpg);
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
