<script lang="ts">
	import { Route, Router } from "svelte-navigator";
	import Navbar from "./components/Navbar.svelte";
	import Home from "./pages/Home.svelte";
	import NotFound from "./pages/NotFound.svelte";
	import Calculator from "./pages/projects/Calculator.svelte";
	import Library from "./pages/projects/Library.svelte";
</script>

<Router>
	<div class="d-flex flex-column h-100">
		<Navbar />
		<div class="container-fluid h-100">
			<Route path="/">
				<Home />
			</Route>
			<Route path="library">
				<Library />
			</Route>
			<Route path="calculator">
				<Calculator />
			</Route>
			<Route path="*">
				<NotFound />
			</Route>
		</div>
	</div>
</Router>

<style>
</style>
