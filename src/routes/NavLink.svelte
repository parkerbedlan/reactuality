<script lang="ts">
    import RainbowText from "./RainbowText.svelte";

    export let hover = false;
    export let text: string;
    export let href: string;
</script>

<a
    {href}
    on:mouseenter={() => (hover = true)}
    on:mouseleave={() => (hover = false)}
    on:focus={() => (hover = true)}
    on:blur={() => (hover = false)}
    class="text-2xl group"
>
    <div class="group-active:scale-50 duration-75">
        <RainbowText {text} colorless={!hover} />
    </div>
</a>
