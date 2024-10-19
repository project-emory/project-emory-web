<script lang="ts">
    import Logo from "./Logo.svelte";
    export const scrollTo = (element: HTMLElement, offset: number = 0) => {
        const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
    
    function handleNavClick(event: MouseEvent, sectionId: string) {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            scrollTo(section);
        }
    }
</script>

<!-- @component
A simple navbar component to provide easy jumping between sections on the page.
 -->
<section class="pt-3 fixed top-0 w-full z-[99999]">
    <nav class="flex justify-center items-center">
        <ul class="flex justify-center items-center w-7/12 bg-[#5A789E] font-bold py-2 px-6 rounded-lg">
            <div class="nav w-full flex items-center justify-between">
                <li class=" bg-white p-2 px-4 rounded-lg w-[125px] flex justify-center">
                    <a href="/#about" on:click={(e) => handleNavClick(e, 'about')}> About Us </a>
                </li>
                <li class=" bg-white p-2 px-4 rounded-lg w-[125px] flex justify-center">
                    <a href="/#upcoming-events" on:click={(e) => handleNavClick(e, 'events')}>Upcoming</a>
                </li>
                <li class="rounded-full w-12">
                    <a href="/" on:click={(e) => handleNavClick(e, 'test')}>
                        <Logo background="transparent" shortArc="#f1a709" longArc="#00379f" />
                    </a>
                </li>
                <li class=" bg-white p-2 px-4 rounded-lg w-[125px] flex justify-center">
                    <a href="/#past-events" on:click={(e) => handleNavClick(e, 'past')}>Past Events</a>
                </li>
                <li class=" bg-white p-2 px-4 rounded-lg w-[125px] flex justify-center">
                    <a href="/#contact" on:click={(e) => handleNavClick(e, 'contactus')}> Contact </a>
                </li>
            </div>
        </ul>
    </nav>
</section>


