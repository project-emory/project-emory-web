<script lang="ts">
    /** The background color of the logo; should be a valid CSS color string. */
    export let background: string | undefined = undefined;

    /** The color of the short arc in the logo; should be a valid CSS color string. */
    export let shortArc: string;

    /** The color of the short arc in the logo; should be a valid CSS color string. */
    export let longArc: string;

    // this is kinda janky, maybe eventually this can go into the <style/> block instead?
    const common: string =
        'stroke: "round"; stroke-linecap: "round"; stroke-miter-limit: 1; paint-order: "fill"; stroke-width: "0px"; stroke-opacity: 0; fill-rule: "nonzero";';
</script>

<!-- @component
An SVG of the Project Emory logo with swappable colors & optional background.
 -->
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    {#if background}
        <ellipse
            style={`fill: ${background}; fill-rule: "nonzero";`}
            cx="16"
            cy="16"
            rx="16"
            ry="16"
        ></ellipse>
    {/if}
    <g transform="matrix(0.8805029988288879, 0, 0, 0.8805029988288879, 2, 2.000003099441528)">
        <!-- short arc -->
        <path
            d="M 18.562 31.8 L 18.562 25.258 C 21.807 24.362 24.362 21.807 25.258 18.562 L 31.8 18.562 C 30.708 25.349 25.349 30.708 18.562 31.8 Z"
            style={`${common} fill: ${shortArc};`}
        ></path>
        <!-- long arc -->
        <path
            d="M 16.002 6.401 C 10.699 6.401 6.401 10.699 6.401 16.002 C 6.401 20.418 9.382 24.137 13.441 25.258 L 13.441 31.8 C 5.821 30.574 0 23.968 0 16.002 C 0 7.164 7.164 0 16.002 0 C 23.968 0 30.574 5.821 31.8 13.441 L 25.258 13.441 C 24.137 9.382 20.418 6.401 16.002 6.401 Z"
            style={`${common} fill: ${longArc};`}
        ></path>
    </g>
</svg>

<style>
    svg {
        height: 100%;
    }
</style>
