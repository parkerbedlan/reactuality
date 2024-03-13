<script lang="ts">
    import { enhance } from "$app/forms";
    import { page } from "$app/stores";
    import Instagram from "$lib/icons/Instagram.svelte";
    import Reddit from "$lib/icons/Reddit.svelte";
    import TikTok from "$lib/icons/TikTok.svelte";
    import YouTube from "$lib/icons/YouTube.svelte";
    import { scale } from "svelte/transition";
    import RainbowText from "./RainbowText.svelte";

    let email: string;

    let justJoined = false;
</script>

<div class="flex flex-col gap-4">
    <!-- src="https://www.youtube-nocookie.com/embed/XFkK_8MoakM" -->
    <iframe
        src="https://www.youtube.com/embed/XFkK_8MoakM"
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
            on:submit={() => (justJoined = true)}
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
    {#if justJoined}
        <h5 class="text-xl" in:scale={{ delay: 500 }}>
            <RainbowText center text="Thanks for joining :D" />
        </h5>
    {/if}
</div>
