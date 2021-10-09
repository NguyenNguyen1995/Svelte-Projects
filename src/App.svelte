<script lang="ts">
	import { Route, Router } from "svelte-navigator";
	import Navbar from "./components/Navbar.svelte";
	import Home from "./Home.svelte";
	import NotFound from "./NotFound.svelte";

	// export let name: string;
</script>

<Router basepath={process.env.PUBLIC_URL}>
	<div class="d-flex flex-column h-100">
		<Navbar />
		<div class="container-fluid h-100">
			<Route path="">
				<Home />
			</Route>
			<Route path="*">
				<NotFound />
			</Route>
		</div>
	</div>
</Router>

<style>
</style>
