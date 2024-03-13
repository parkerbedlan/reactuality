<script>
    // @ts-nocheck

    import { page } from "$app/stores";
</script>

<slot></slot>
<h4 class="text-r11y-red text-2xl">{$page.error.message}</h4>
