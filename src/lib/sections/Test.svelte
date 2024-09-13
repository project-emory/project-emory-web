<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
</script>

<!-- @component
Test component section for displaying elements while building.
 -->
<section id="test" class="flex flex-col">
    <div class="justify-center flex my-32 mt-56">
        <div class="w-96 mr-28">
            <Logo background="#FFFFFF" shortArc="#f1a709" longArc="#00379f" />
        </div>
        <div class="w-96 items-center">
            <p class="leading-none font-bold text-8xl mt-12 mb-12">PROJECT Emory</p>
            <button class="text-lg bg-[#f1a709] border-none p-[10px] rounded-[5px] w-40 h-12">Learn more</button>
        </div>
    </div>

    <br>
    
    <div class="arrow self-center mt-32 leading-6 font-bold py-[10px] px-[8px] rounded-3xl text-white w-fit bg-[#00379f] text-2xl">
        <div>&#8744</div>
        <div>&#8744;</div>
    </div>
</section>
