<script lang="ts">
    import { Link } from "svelte-navigator";
</script>

<div class="page-wrap d-flex flex-row">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center">
                <span class="display-1 d-block">404</span>
                <div class="mb-4 lead">
                    The page you are looking for was not found.
                </div>
                <Link to="/" class="btn btn-link">Back to Home</Link>
            </div>
        </div>
    </div>
</div>
