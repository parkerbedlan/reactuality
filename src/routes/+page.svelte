<script>
    import NavLink from "./NavLink.svelte";
    import RainbowText from "./RainbowText.svelte";
</script>

<header class="border-b flex items-center justify-center">
    <a href="/" class="group">
        <img
            src="/episode-1-sole-title.jpg"
            alt="Re:Actuality - Rules of the Universe"
            class="h-24 group-active:scale-50 duration-75"
        />
    </a>
</header>
<nav
    class="border-b sticky flex items-center justify-center sm:gap-8 font-r11y h-8 mb-4 top-0 bg-background [&_*]:!flex-nowrap"
>
    <div class="border-r px-1 sm:border-none">
        <NavLink text="Pilot" href="#pilot" />
    </div>
    <div class="text-6xl hidden sm:block">-</div>
    <div class="border-r px-1 sm:border-none">
        <NavLink text="Merch" href="#merch" />
    </div>
    <div class="text-6xl hidden sm:block">-</div>
    <div class="px-1 sm:border-none">
        <NavLink text="Links" href="#links" />
    </div>
</nav>

<div class="text-xl flex flex-col gap-4">
    <RainbowText
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut elementum lorem. Curabitur consequat sodales quam sed facilisis. Proin ut mattis quam. Aliquam vel tincidunt libero. Duis sollicitudin enim eu interdum auctor. Morbi rhoncus vehicula lorem, blandit accumsan leo bibendum id. Proin ultrices tortor lorem, ut cursus diam iaculis quis. Aenean lobortis volutpat placerat. Vestibulum pellentesque sed erat vel luctus. Suspendisse aliquet augue sit amet nunc mollis aliquam. Nullam tempor iaculis purus. Quisque sit amet maximus massa, eu malesuada quam. Donec tristique, purus sed lacinia vulputate, nunc ipsum congue quam, ut facilisis risus urna tempus eros. Aenean erat orci, tempus ornare mattis ac, sodales et metus. Cras placerat quam vitae eros porta, id auctor metus pretium. Quisque id est non libero sagittis malesuada nec et lacus."
    />
    <RainbowText
        colorless
        text="Nulla vulputate pellentesque eros sit amet varius. Etiam urna mi, efficitur quis dictum vel, posuere quis lorem. In turpis lectus, viverra nec massa at, consectetur porttitor nibh. Mauris at mauris at felis mattis porta. Nam tristique maximus dictum. Nulla nec elit vel ipsum gravida condimentum quis in nibh. Proin auctor mi at magna consectetur, eu egestas elit semper. Praesent urna est, dapibus ut aliquam sit amet, imperdiet vitae nulla. Donec faucibus suscipit risus sit amet porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ac metus vitae est vulputate egestas in ut enim. Aenean suscipit interdum sapien, eu fermentum metus. Morbi fringilla turpis nec scelerisque rhoncus. Sed tempus sapien sed nisl pellentesque, non bibendum risus dignissim. Sed consectetur erat in lectus pellentesque ultrices."
    />
    <RainbowText
        text="In egestas lectus ut urna varius pharetra facilisis eget nunc. Nullam elementum orci massa, porta suscipit mauris commodo vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus aliquam velit at ipsum vulputate, et lobortis eros aliquam. Pellentesque pretium vel augue quis dictum. Aliquam finibus, ligula vitae aliquet bibendum, enim augue feugiat massa, posuere blandit nisi eros id ante. Mauris eget enim at quam hendrerit commodo."
    />
</div>
