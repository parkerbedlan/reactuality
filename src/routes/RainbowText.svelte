<script lang="ts">
    export let text: string;
    export let colorless = false

    // string to array
    $: chars = text.toUpperCase().split("");

    const colorClasses = [
        "text-r11y-red",
        "text-r11y-orange",
        "text-r11y-yellow",
        "text-r11y-lime",
        "text-r11y-green",
        "text-r11y-emerald",
        "text-r11y-cyan",
        "text-r11y-blue",
        "text-r11y-indigo",
        "text-r11y-purple",
        "text-r11y-fuchsia",
        "text-r11y-pink",
    ];
</script>

<!-- {JSON.stringify(chars)} -->
<div class="flex flex-wrap font-r11y">
    {#each chars as char, i}
        <div class={`w-[1em] ${colorless ? '' : colorClasses[i % colorClasses.length]}`}>{char}</div>
    {/each}
</div>
