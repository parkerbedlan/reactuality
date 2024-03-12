<script lang="ts">
    import RainbowWord from "./RainbowWord.svelte";

    let hover = false;
    export let text: string;
    export let href: string;
</script>

<!-- on:touchend={() => hover=false} -->
<!-- on:blur={() => (hover = false)} -->
<a
    {href}
    on:mouseenter={() => (hover = true)}
    on:mouseleave={() => (hover = false)}
    on:focus={() => (hover = true)}
    on:click={() => (hover = true)}
    on:touchstart={() => (hover = true)}
    class="text-2xl group"
>
    <div class="group-active:scale-50 duration-75">
        <RainbowWord {text} colorless={!hover} />
    </div>
</a>
