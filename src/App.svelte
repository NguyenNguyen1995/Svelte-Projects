<script lang="ts">
	import { Route, Router } from "svelte-navigator";
	import Navbar from "./components/Navbar.svelte";
	import Home from "./Home.svelte";
	import NotFound from "./NotFound.svelte";
	let base;
</script>

<Router basepath={base}>
	<div class="d-flex flex-column h-100">
		<Navbar />
		<div class="container-fluid h-100">
			<Route path="/">
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
