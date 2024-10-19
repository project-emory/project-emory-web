<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Test from "$lib/sections/Test.svelte";
    import About from "$lib/sections/About.svelte";
    import Events from "$lib/sections/Events.svelte";
    import ContactUs from "$lib/sections/ContactUs.svelte";

    // maybe eventually it's better to loop through a list to instantiate components, but this
    // works for now.
</script>

<!-- Home page -->
<Navbar />
<Test />
<About />
<Events /> 
<ContactUs /> 