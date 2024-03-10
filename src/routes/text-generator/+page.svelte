<script lang="ts">
    import RainbowText from "../RainbowText.svelte";

    let text = "RE:ACTUALITY";
    $: text = text.toUpperCase()
</script>

<div
    class="flex flex-col gap-4 container justify-center items-center max-w-screen-2xl"
>
    <input
        type="text"
        bind:value={text}
        class="w-full font-sans form-input bg-background text-foreground !tracking-normal"
    />
    <h1 class="text-5xl">
        <RainbowText bind:text />
    </h1>
</div>
