<script lang="ts">
    import { onMount, tick } from "svelte";
    import { Book } from "../../models";

    // Declare variables
    let library = [];
    let book = new Book();
    let show = false;
    let errors = { author: "", title: "", totalPages: "" };

    onMount(async () => {
        await tick();
        let books = localStorage.getItem("library");
        if (books !== null && books !== "") {
            library = [...JSON.parse(books)];
        }

        let btnState = localStorage.getItem("btnAddNewBookState");
        if (btnState !== null && btnState !== "") {
            show = JSON.parse(btnState);
        }
    });

    function isModelValid(book: Book) {
        let valids = [];

        if (book.author === null || book.author.trim().length < 1) {
            valids.push(false);
            errors.author = "author field can not be empty";
        } else {
            valids.push(true);
            errors.author = "";
        }

        if (book.title === null || book.title.trim().length < 1) {
            valids.push(false);
            errors.title = "title field can not be empty";
        } else {
            valids.push(true);
            errors.title = "";
        }

        if (book.pages < 1 || book.pages > 9999999) {
            valids.push(false);
            errors.totalPages = `total pages field should greater than ${0} and less than or equal to ${9999999}`;
        } else {
            valids.push(true);
            errors.totalPages = "";
        }

        return valids.every((x) => x === true);
    }

    function addBookToLibrary() {
        var formValid = isModelValid(book);
        if (!formValid) return;
        library = [...library, book];
        localStorage.setItem("library", JSON.stringify(library));
        book = new Book();
    }

    function toggleReadBook(book) {
        let i = library.indexOf(book);
        if (i !== undefined) {
            library[i].isRead = !library[i].isRead;
            localStorage.setItem("library", JSON.stringify(library));
        }
    }

    function removeBookFromLib(book) {
        let i = library.indexOf(book);
        if (i !== undefined) {
            library.splice(i, 1);
            library = [...library];
            localStorage.setItem("library", JSON.stringify(library));
        }
    }
</script>

<svelte:head>
    <title>Svelte Projects - Library</title>
</svelte:head>

<h3 class="text-center mb-3">My Library</h3>

<div class="text-center mb-3">
    <button
        class="btn btn-danger"
        on:click={() => {
            show = !show;
            localStorage.setItem("btnAddNewBookState", show.toString());
        }}
    >
        <i class="fas fa-plus" /> Add new book
    </button>
</div>

<div class="w-50 mx-auto collapse" class:show-form={show}>
    <form on:submit|preventDefault={addBookToLibrary}>
        <div class="form-group mb-2">
            <label for="title"><strong>Title</strong></label>
            <input
                type="text"
                class="form-control"
                id="title"
                bind:value={book.title}
            />
            <div class="error">{errors.title}</div>
        </div>
        <div class="form-group mb-2">
            <label for="author"><strong>Author</strong></label>
            <input
                type="text"
                class="form-control"
                id="author"
                bind:value={book.author}
            />
            <div class="error">{errors.author}</div>
        </div>
        <div class="form-group mb-2">
            <label for="pages"><strong>Total pages</strong></label>
            <input
                type="number"
                class="form-control"
                id="pages"
                min="0"
                max="9999999"
                bind:value={book.pages}
            />
            <div class="error">{errors.totalPages}</div>
        </div>
        <div class="form-check mb-2">
            <input
                type="checkbox"
                class="form-check-input"
                id="read"
                bind:checked={book.isRead}
            />
            <label class="form-check-label" for="isRead">is read ?</label>
        </div>
        <button type="submit" class="btn btn-primary">Add</button>
    </form>
</div>

<div class="d-flex justify-content-center library">
    {#each library as book}
        <div class="card mx-2 my-2" style="width: 18rem;">
            <span class="badge bg-light text-dark">
                {#if book.isRead}
                    You have read this book
                {/if}
            </span>
            <div class="card-body text-center">
                <h5 class="card-title text-wrap">
                    {book.title}
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    Author: {book.author}
                </h6>
                <p class="card-text">
                    Total pages: {book.pages}
                </p>
                <button
                    class="btn btn-success me-2"
                    on:click={() => toggleReadBook(book)}
                >
                    {#if book.isRead}
                        <i class="far fa-square" />
                    {:else}
                        <i class="fas fa-check" />
                    {/if}
                </button>
                <button
                    class="btn btn-danger"
                    on:click={() => removeBookFromLib(book)}
                >
                    <i class="fas fa-trash" />
                </button>
            </div>
        </div>
    {/each}
</div>

<style>
    .library {
        flex-wrap: wrap;
    }
    .show-form {
        display: block;
    }
    .error {
        font-weight: bold;
        font-size: 12px;
        color: rgb(199, 26, 26);
    }
</style>
