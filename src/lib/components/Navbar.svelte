<script lang="ts">
    import Logo from "./Logo.svelte";
    import { handleClick } from '$lib/utils/scroll';
</script>

<!-- @component
A simple navbar component to provide easy jumping between sections on the page.
 -->
<section class="pt-3 fixed top-0 w-full z-[99999]">
    <nav class="flex justify-center items-center">
        <ul class="flex justify-center items-center w-7/12 bg-[#5A789E] font-bold py-2 px-6 rounded-lg">
            <div class="nav w-full flex items-center justify-between">
                <li class=" bg-white p-2 px-4 rounded-lg w-[125px] flex justify-center">
                    <a href="/#about" on:click={(e) => handleClick(e, 'about')}> About Us </a>
                </li>
                <li class=" bg-white p-2 px-4 rounded-lg w-[125px] flex justify-center">
                    <a href="/#upcoming-events" on:click={(e) => handleClick(e, 'events')}>Upcoming</a>
                </li>
                <li class="rounded-full w-12">
                    <a href="/" on:click={(e) => handleClick(e, 'test')}>
                        <Logo background="transparent" shortArc="#f1a709" longArc="#00379f" />
                    </a>
                </li>
                <li class=" bg-white p-2 px-4 rounded-lg w-[125px] flex justify-center">
                    <a href="/#past-events" on:click={(e) => handleClick(e, 'past')}>Past Events</a>
                </li>
                <li class=" bg-white p-2 px-4 rounded-lg w-[125px] flex justify-center">
                    <a href="/#contact" on:click={(e) => handleClick(e, 'contactus')}> Contact </a>
                </li>
            </div>
        </ul>
    </nav>
</section>


