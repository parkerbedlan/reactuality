<script>
    import Instagram from "$lib/icons/Instagram.svelte";
    import Reddit from "$lib/icons/Reddit.svelte";
    import TikTok from "$lib/icons/TikTok.svelte";
    import YouTube from "$lib/icons/YouTube.svelte";
    import RainbowText from "./RainbowText.svelte";
</script>

<div class="flex flex-col gap-4">
    <iframe
        src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=IZA5cJ-Xd0XLJZ7m"
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
            class="hover:text-r11y-red group"
            aria-label="Instagram"
        >
            <Instagram class="w-12 h-12 duration-75 group-active:scale-50" />
        </a>
        <a
            target="_blank"
            href="https://www.youtube.com/@reactualityshow"
            class="hover:text-r11y-orange group"
            aria-label="YouTube"
        >
            <YouTube class="w-12 h-12 duration-75 group-active:scale-50" />
        </a>
        <a
            target="_blank"
            href="https://www.reddit.com/user/reactualityshow/"
            class="hover:text-r11y-yellow group"
            aria-label="Reddit"
        >
            <Reddit class="w-12 h-12 duration-75 group-active:scale-50" />
        </a>
        <a
            target="_blank"
            href="https://www.tiktok.com/@reactuality.show"
            class="hover:text-r11y-lime group"
            aria-label="TikTok"
        >
            <TikTok class="w-12 h-12 duration-75 group-active:scale-50" />
        </a>
    </div>
</div>

<!-- <div class="text-xl flex flex-col gap-96"> -->
<!--     <RainbowText -->
<!--         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut elementum lorem. Curabitur consequat sodales quam sed facilisis. Proin ut mattis quam. Aliquam vel tincidunt libero. Duis sollicitudin enim eu interdum auctor. Morbi rhoncus vehicula lorem, blandit accumsan leo bibendum id. Proin ultrices tortor lorem, ut cursus diam iaculis quis. Aenean lobortis volutpat placerat. Vestibulum pellentesque sed erat vel luctus. Suspendisse aliquet augue sit amet nunc mollis aliquam. Nullam tempor iaculis purus. Quisque sit amet maximus massa, eu malesuada quam. Donec tristique, purus sed lacinia vulputate, nunc ipsum congue quam, ut facilisis risus urna tempus eros. Aenean erat orci, tempus ornare mattis ac, sodales et metus. Cras placerat quam vitae eros porta, id auctor metus pretium. Quisque id est non libero sagittis malesuada nec et lacus." -->
<!--     /> -->
<!--     <RainbowText -->
<!--         colorless -->
<!--         text="Nulla vulputate pellentesque eros sit amet varius. Etiam urna mi, efficitur quis dictum vel, posuere quis lorem. In turpis lectus, viverra nec massa at, consectetur porttitor nibh. Mauris at mauris at felis mattis porta. Nam tristique maximus dictum. Nulla nec elit vel ipsum gravida condimentum quis in nibh. Proin auctor mi at magna consectetur, eu egestas elit semper. Praesent urna est, dapibus ut aliquam sit amet, imperdiet vitae nulla. Donec faucibus suscipit risus sit amet porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ac metus vitae est vulputate egestas in ut enim. Aenean suscipit interdum sapien, eu fermentum metus. Morbi fringilla turpis nec scelerisque rhoncus. Sed tempus sapien sed nisl pellentesque, non bibendum risus dignissim. Sed consectetur erat in lectus pellentesque ultrices." -->
<!--     /> -->
<!--     <RainbowText -->
<!--         text="In egestas lectus ut urna varius pharetra facilisis eget nunc. Nullam elementum orci massa, porta suscipit mauris commodo vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus aliquam velit at ipsum vulputate, et lobortis eros aliquam. Pellentesque pretium vel augue quis dictum. Aliquam finibus, ligula vitae aliquet bibendum, enim augue feugiat massa, posuere blandit nisi eros id ante. Mauris eget enim at quam hendrerit commodo." -->
<!--     /> -->
<!-- </div> -->
