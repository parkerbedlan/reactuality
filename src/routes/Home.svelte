<script lang="ts">
    import { enhance } from "$app/forms";
    import { page } from "$app/stores";
    import Instagram from "$lib/icons/Instagram.svelte";
    import Reddit from "$lib/icons/Reddit.svelte";
    import TikTok from "$lib/icons/TikTok.svelte";
    import YouTube from "$lib/icons/YouTube.svelte";
    import { scale } from "svelte/transition";
    import RainbowText from "./RainbowText.svelte";
    import RainbowWord from "./RainbowWord.svelte";

    let email: string;
</script>

<div class="flex flex-col gap-4">
    <div class="relative overflow-x-hidden">
        <div class="w-fit min-w-full animate-marquee flex justify-around [&>*]:mr-16">
            <RainbowWord  text="Where were you?"  />
            <RainbowWord text="Where are you?" />
            <RainbowWord  text="Where will you be?" />
        </div>
        <div class="w-fit min-w-full animate-marquee2 absolute top-0 flex justify-around [&>*]:mr-16">
            <RainbowWord  text="Where were you?" />
            <RainbowWord text="Where are you?" />
            <RainbowWord  text="Where will you be?" />
        </div>
    </div>

    <iframe
        src="https://www.youtube.com/embed/2sHpPjfaCLE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="mx-auto w-screen max-w-screen-sm aspect-video"
    ></iframe>

    <div id="links" class="flex gap-12 justify-center">
        <a
            target="_blank"
            href="https://www.instagram.com/reactuality.show/"
            class="hover:text-r11y-red focus:text-r11y-red group"
            aria-label="Instagram"
        >
            <Instagram class="w-12 h-12 duration-75 group-active:scale-50" />
        </a>
        <a
            target="_blank"
            href="https://www.youtube.com/@reactualityshow"
            class="hover:text-r11y-orange focus:text-r11y-orange group"
            aria-label="YouTube"
        >
            <YouTube class="w-12 h-12 duration-75 group-active:scale-50" />
        </a>
        <a
            target="_blank"
            href="https://www.reddit.com/user/reactualityshow/"
            class="hover:text-r11y-yellow focus:text-r11y-yellow group"
            aria-label="Reddit"
        >
            <Reddit class="w-12 h-12 duration-75 group-active:scale-50" />
        </a>
        <a
            target="_blank"
            href="https://www.tiktok.com/@reactuality.show"
            class="hover:text-r11y-lime focus:text-r11y-lime group"
            aria-label="TikTok"
        >
            <TikTok class="w-12 h-12 duration-75 group-active:scale-50" />
        </a>
    </div>
    {#if !$page.data.joinedMailingList}
        <form
            class="flex flex-col items-center justify-center"
            method="post"
            action="?/joinMailingList"
            use:enhance
            out:scale
        >
            <label for="email"
                ><RainbowText
                    center
                    text="Get notified when the next episode comes out!"
                /></label
            >
            <input
                id="email"
                name="email"
                type="email"
                class="bg-background text-foreground form-input w-96 font-r11y"
                placeholder="coolguy@example.com"
                bind:value={email}
            />
        </form>
    {/if}
    {#if $page.form && $page.form.status === "success"}
        <h5 class="text-xl" in:scale={{ delay: 500 }}>
            <RainbowText center text={$page.form.message} />
        </h5>
    {/if}
    {#if $page.form && $page.form.status === "error"}
        <h5
            class="text-xl text-r11y-red font-r11y text-center"
            transition:scale
        >
            {$page.form.message}
        </h5>
    {/if}
</div>
