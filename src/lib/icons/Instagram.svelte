<script lang="ts">
    let className = "w-6 h-6";
    let strokeWidth = "1.5";
    export { className as class, strokeWidth };
</script>

<!-- <svg -->
<!-- 	xmlns="http://www.w3.org/2000/svg" -->
<!-- 	fill="none" -->
<!-- 	viewBox="0 0 24 24" -->
<!-- 	stroke-width={strokeWidth} -->
<!-- 	stroke="currentColor" -->
<!-- 	class={className} -->
<!-- > -->
<!-- 	<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /> -->
<!-- </svg> -->

<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class={className}
    ><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
    /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg
>
