<script>
    import { page } from "$app/stores";
    import Gate from "./Gate.svelte";
    import Home from "./Home.svelte";
</script>

{#if $page.data.gate === 'closed'}
    <Gate />
{:else}
    <Home />
{/if}
