<script lang="ts">
    import Logo from "./Logo.svelte";
</script>

<!-- @component
A simple navbar component to provide easy jumping between sections on the page.
 -->
<section class="pt-3 fixed top-0 w-full z-[99999]">
    <nav class="flex justify-center items-center">
        <ul class="flex justify-center items-center w-6/12 bg-blue-100 py-2 px-6 rounded-lg">
            <div class="nav w-full flex items-center justify-between">
                <li class=" bg-white p-2 px-4 rounded-lg w-[125px] flex justify-center">
                    <a href="/#about-us"> About Us </a>
                </li>
                <li class=" bg-white p-2 px-4 rounded-lg w-[125px] flex justify-center">
                    <a href="/#events"> Events </a>
                </li>
                <li class="rounded-full w-12">
                    <a href="/">
                        <Logo background="transparent" shortArc="#f1a709" longArc="#00379f" />
                    </a>
                </li>
                <li class=" bg-white p-2 px-4 rounded-lg w-[125px] flex justify-center">
                    <a href="/#get-involved"> Get Involved </a>
                </li>
                <li class=" bg-white p-2 px-4 rounded-lg w-[125px] flex justify-center">
                    <a href="/#contact"> Contact </a>
                </li>
            </div>
        </ul>
    </nav>
</section>


