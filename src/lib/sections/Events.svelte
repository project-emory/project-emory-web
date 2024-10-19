<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    const teamMembers = [
        { name: "Andrew Chung", role: "President", website: "https://achung1020.github.io/ac-website/", linkedin:"http://linkedin.com/in/andrew0chung", image: 'andrewc.jpg' },
        { name: "Andrew Lu", role: "Secretary", website: "andrewtlu.github.io", linkedin:"https://www.linkedin.com/in/andrewtlu/", image: 'andrewl.jpg' }, 
        { name: "Mac Guintu", role: "Vice President", website: "Turtle Chips", linkedin: "frederic.guintu@emory.edu", image: 'mac.jpg'},
        { name: "Aisha Sajo", role: "Event Planner Chair", website: "Skinny Pop Popcorn", linkedin: "aisha.sajo@emory.edu", image: 'aisha.jpg' }, 
        { name: "Leo Huang", role: "Public Relations Chair", website: "Caramel Corn Peanuts Website", linkedin: "leo.huang@emory.edu", image: 'leo.jpg' }, 
        { name: "Freddy Xiong", role: "Co-Hackathon Director", website: "Coffee", linkedin: "freddy.xiong@emory.edu", image: 'freddy.jpg' },
        { name: "Taeeun Kim", role: "Co-Hackathon Director", website: "Hardtack", linkedin: "taeeun.kim@emory.edu", image: 'taeeun.jpg' },
    ];
</script>


<!-- @component
Test component section for displaying elements while building.
 -->
<section id="events" class=" h-[100vh] py-20 mt-60 items-center flex flex-col">
    <section class="w-full max-w-4xl px-4 py-14 text-center rounded-lg">
        <h1 class="text-4xl font-bold mb-4 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:-translate-x-1/2 after:left-1/2 after:w-1/12 after:h-[0.2rem] after:bg-[#00379f]">Upcoming Events</h1>
        <p class=" text-3xl font-light leading-relaxed mb-6">
            To create and nurture a community of like-minded Computer Science enthusiasts at Emory University through collaborative project building and peer-to-peer learning.
        </p>
        <button class="mt-2 px-4 py-1 bg-[#00379f] text-white rounded-lg hover:bg-[#182e56]">
            Interested? Linkedin us!
        </button>
    </section>
</section>