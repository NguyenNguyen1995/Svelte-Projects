<script>
    import { Link } from "svelte-navigator";
    const projectsPrefix = "projects";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <Link class="navbar-brand" to="/">
            <img
                src="/images/svelte_logo.png"
                alt="Blazor Logo"
                width="30"
                height="24"
            /> Svelte Projects
        </Link>
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
                <li class="nav-item dropdown">
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i class="fas fa-project-diagram" /> Projects
                    </a>
                    <ul
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdown"
                    >
                        <li>
                            <Link
                                class="dropdown-item"
                                to="{projectsPrefix}/library"
                            >
                                <i class="fas fa-book-open" /> Library
                            </Link>
                        </li>
                        <li>
                            <Link
                                class="dropdown-item"
                                to="{projectsPrefix}/calculator"
                            >
                                <i class="fas fa-calculator" /> Calculator
                            </Link>
                        </li>
                    </ul>
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
