<script>
	import LoginComponent from "../../componnet/LoginComponent.svelte";
    import Dashboard from "./Dashboard.svelte";
	import { store } from '../../hooks/auth';
	


</script>
<style>
	:root{
	 background-color: #2e2d2f;
	}
	</style>
{#if $store != null }
<!-- {#if $store != null } -->
	<Dashboard></Dashboard>
{:else }
	<LoginComponent />
{/if} 
