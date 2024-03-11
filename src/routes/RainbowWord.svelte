<script lang="ts">
    export let text: string;
    export let colorless = false;
    export let offset = 0;

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

<div class="flex font-r11y">
    {#each chars as char, i}
        <div
            class={`w-[1em] text-center ${colorless ? "" : colorClasses[(i + offset) % colorClasses.length]}`}
        >
            {char}
        </div>
    {/each}
</div>
