<script>
    import { page } from "$app/stores";
    import Gate from "./Gate.svelte";
    import Home from "./Home.svelte";
</script>

<!-- <pre class="fixed z-50 top-0 left-0"> -->
<!-- {JSON.stringify($page.data.gate, null, 2)} -->
<!-- {JSON.stringify(document.cookie, null, 2)} -->
<!-- </pre> -->

{#if $page.data.gate === 'closed'}
    <Gate />
{:else}
    <Home />
{/if}
