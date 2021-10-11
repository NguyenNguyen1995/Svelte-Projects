<script lang="ts">
	import { Route, Router } from "svelte-navigator";
	import Navbar from "./components/Navbar.svelte";
	import Home from "./pages/Home.svelte";
	import NotFound from "./pages/NotFound.svelte";
	import Calculator from "./pages/projects/Calculator.svelte";
	import EtchASketch from "./pages/projects/EtchASketch.svelte";
	import Library from "./pages/projects/Library.svelte";
	import RockPaperScissors from "./pages/projects/RockPaperScissors.svelte";
	let basepath = "";
</script>

<Router {basepath}>
	<div class="d-flex flex-column h-100" style="overflow: auto;">
		<Navbar {basepath} />
		<div class="container-fluid h-100">
			<Route path="/">
				<Home />
			</Route>
			<Route path="projects/*" primary={false}>
				<Route path="library">
					<Library />
				</Route>
				<Route path="calculator">
					<Calculator />
				</Route>
				<Route path="rock-paper-scissors">
					<RockPaperScissors {basepath} />
				</Route>
				<Route path="etch-a-sketch">
					<EtchASketch />
				</Route>
			</Route>
			<Route path="*">
				<NotFound />
			</Route>
		</div>
	</div>
</Router>

<style>
</style>
