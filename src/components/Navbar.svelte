<script>
    import { link } from "svelte-navigator";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/" use:link>Svelte Projects</a>
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
                    <a
                        class="nav-link active"
                        aria-current="page"
                        href="/"
                        use:link
                    >
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="library" use:link> Library </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="calculator" use:link>
                        Calculator
                    </a>
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
