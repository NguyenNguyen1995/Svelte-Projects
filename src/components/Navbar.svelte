<script>
    import { Link } from "svelte-navigator";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <Link class="navbar-brand" to="/">Svelte Projects</Link>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <Link class="nav-link active" to="/">
                        <i class="fas fa-home" /> Home
                    </Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="library">
                        <i class="fas fa-book-open" /> Library
                    </Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="calculator">
                        <i class="fas fa-calculator" /> Calculator
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

<style>
    .navbar {
        background-color: transparent !important;
    }
</style>
