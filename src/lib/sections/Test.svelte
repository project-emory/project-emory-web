<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
    import { handleClick } from '$lib/utils/scroll';
    import { setupIntersectionObserver } from '$lib/utils/scrollanim'; 
    import { onMount } from "svelte";

    onMount(() => {
        const observer = setupIntersectionObserver('.animate-on-scroll'); 

        return {
            destroy() {
                if (observer) {
                    observer.disconnect(); 
                }
            }
        };
    });
</script>

<!-- @component
Test component section for displaying elements while building.
 -->
<section id="test" class="flex flex-col">
    <div class=" w-2/3 justify-center gap-16 self-center flex my-24 mt-56">
        <div class="animate-on-scroll opacity-0 blur-sm transition-all duration-1000 ease-out w-[450px] -translate-y-10">
            <Logo background="#FFFFFF" shortArc="#f1a709" longArc="#00379f" />
        </div>
        <div class="w-[450px] items-center">
            <p class="animate-on-scroll opacity-0 blur-sm translate-x-full transition-all duration-1000 ease-out delay-100 leading-none font-bold text-8xl mt-12 mb-12">PROJECT Emory</p>
            <button class="animate-on-scroll opacity-0 blur-sm translate-x-full transition-all duration-1000 ease-out delay-100 text-lg bg-[#f1a709] border-none p-[10px] rounded-[5px] w-40 h-12">Learn more</button>
        </div>
    </div>


    <div class="animate-on-scroll opacity-0 blur-sm transition-all duration-500 ease-out delay-1000 self-center mt-26">
        <a href='/#about' 
           on:click={(e) => handleClick(e, 'about')} 
           class="on:hover leading-6 font-bold py-[10px] px-[8px] rounded-3xl text-white w-fit bg-[#5A789E] text-2xl inline-block">
            <div>&#8744;</div>
            <div>&#8744;</div>
        </a>
    </div>
</section>

