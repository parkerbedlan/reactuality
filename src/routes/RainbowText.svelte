<script lang="ts">
    import RainbowWord from "./RainbowWord.svelte";

    export let text: string;
    export let center: boolean = false;

    $: words = text.split(" ");
    // $: cumulativeLengths = words.map((word, i) => words.slice(0, i).join(" ").length);
    $: wordLengths = words.map((word) => word.length);
    $: cumulativeWordLengths = wordLengths.map((length, i) => wordLengths.slice(0, i).reduce((a, b) => a + b, 0));
</script>

<div class={`flex flex-wrap ${center ? 'justify-center' : ''}`}>
    {#each words as word, i}
            <RainbowWord text={word} offset={cumulativeWordLengths[i]} />
            <RainbowWord text=" " />
    {/each}
</div>

