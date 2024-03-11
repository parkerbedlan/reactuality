<script>
    import RainbowText from "./RainbowText.svelte";

    let hover = false;
</script>

<a
    href="/text-generator"
    class="text-4xl duration-75 active:scale-95"
    on:mouseenter={() => (hover = true)}
    on:mouseleave={() => (hover = false)}
>
    <RainbowText colorless={hover} text="Hello worlds..." />
</a>
