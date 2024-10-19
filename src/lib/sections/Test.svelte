<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
    export const scrollTo = (element: HTMLElement, offset: number = 0) => {
        const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    function handleClick(event: MouseEvent, sectionId: string) {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            scrollTo(section);
        }
    }
</script>

<!-- @component
Test component section for displaying elements while building.
 -->
<section id="test" class="flex flex-col">
    <div class="justify-center flex my-32 mt-60">
        <div class="w-96 mr-28">
            <Logo background="#FFFFFF" shortArc="#f1a709" longArc="#00379f" />
        </div>
        <div class="w-96 items-center">
            <p class="leading-none font-bold text-8xl mt-12 mb-12">PROJECT Emory</p>
            <button class="text-lg bg-[#f1a709] border-none p-[10px] rounded-[5px] w-40 h-12">Learn more</button>
        </div>
    </div>

    <br>
    
    <a href='/#about' on:click={(e) => handleClick(e, 'about')} class="arrow self-center mt-26 leading-6 font-bold py-[10px] px-[8px] rounded-3xl text-white w-fit bg-black text-2xl">
        <div>&#8744</div>
        <div>&#8744;</div>
    </a>
</section>
