<script>
    import NavLink from "./NavLink.svelte";
import "../app.postcss";</script>
<svelte:head>
    <title>RE: ACTUALITY</title>
</svelte:head>
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
        <NavLink text="Pilot" href="/#pilot" />
    </div>
    <div class="text-6xl hidden sm:block">-</div>
    <div class="border-r px-1 sm:border-none">
        <NavLink text="Merch" href="/merch" />
    </div>
    <div class="text-6xl hidden sm:block">-</div>
    <div class="px-1 sm:border-none">
        <NavLink text="Links" href="/#links" />
    </div>
</nav>

<slot></slot>
