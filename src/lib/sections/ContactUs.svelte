<script lang="ts">
    import IoLogoInstagram from 'svelte-icons/io/IoLogoInstagram.svelte'
    import IoLogoLinkedin from 'svelte-icons/io/IoLogoLinkedin.svelte'
    import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte'
</script>


<!-- @component
Test component section for displaying elements while building.
 -->
<section id="contactus" class="px-80 bg-slate-300 h-96 py-20 flex flex-col">
    <h1 class="font-bold text-5xl leading-[55px] ">Have a project idea?<br> We can help!</h1>
    <div class="flex w-32 mt-10 justify-between">
        <a href="https://www.instagram.com/project_emory_/" class="w-10 h-10"><IoLogoInstagram/></a>
        <a href="https://www.linkedin.com/company/project-emory/posts/?feedView=all" class="w-10 h-10"><IoLogoLinkedin/></a>
        <a href="https://github.com/project-emory" class="w-10 h-10"><IoLogoGithub/></a>
    </div>
</section>