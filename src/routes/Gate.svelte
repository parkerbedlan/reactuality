<script lang="ts">
    import { onMount } from "svelte";
    import RainbowWord from "./RainbowWord.svelte";
    import { fade } from "svelte/transition";
    import { invalidateAll } from "$app/navigation";
    import Mute from "$lib/icons/Mute.svelte";

    let videoRef: HTMLVideoElement;
    let muted = true;
    onMount(() => {
        if (videoRef) {
            videoRef.play();
            showEnter = true;
        }
    });

    let hover = false;
    let showEnter = false;

    let innerWidth: number;
    let innerHeight: number;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if muted}
    <button
        class="fixed top-2 right-2 bg-foreground text-background rounded-md p-2 z-50"
        on:click={() => (muted = false)}
    >
        <Mute />
    </button>
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="fixed z-10 inset-0 bg-background"
    on:click={() => (muted = false)}
/>

<!-- svelte-ignore a11y-media-has-caption -->
<video
    bind:muted
    class={`fixed z-20 inset-0 mx-auto my-auto ${innerHeight > innerWidth ? "scale-150" : "scale-100"}`}
    bind:this={videoRef}
    on:click={() => (muted = false)}
>
    <source src="https://github.com/parkerbedlan/assets/raw/main/reactuality/ultradoor-gate-2.mp4" type="video/mp4" />
</video>

{#if showEnter}
    <button
        class={`fixed z-30 inset-0 mx-auto my-auto text-[3vw] xl:text-4xl h-fit group w-fit ${innerHeight > innerWidth ? "scale-150" : "scale-100"}`}
        transition:fade={{ delay: 12000, duration: 4000 }}
        on:mouseenter={() => (hover = true)}
        on:mouseleave={() => (hover = false)}
        on:focus={() => (hover = true)}
        on:click={async () => {
            hover = true;
            await fetch("/open-gate");
            await invalidateAll();
        }}
        on:touchstart={() => (hover = true)}
    >
        <div class="duration-300 group-active:scale-0 group-focus:scale-0">
            <RainbowWord text="Enter" colorless={!hover} />
        </div>
    </button>
{/if}
