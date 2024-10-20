<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import { setupIntersectionObserver } from '$lib/utils/scrollanim'; 
    
    const teamMembers = [
        { name: "Andrew Chung", role: "President", website: "https://achung1020.github.io/ac-website/", linkedin:"http://linkedin.com/in/andrew0chung", image: 'andrewc.jpg' },
        { name: "Andrew Lu", role: "Secretary", website: "https://andrewtlu.github.io", linkedin:"https://www.linkedin.com/in/andrewtlu/", image: 'andrewl.jpg' }, 
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
<section id="about" class="bg-slate-200 h-[220vh] py-20 my-60 items-center flex flex-col">
    <section class="w-full max-w-6xl px-4 py-32 mb-10">
        <div class="flex flex-row justify-between items-center gap-10">
            <div class="flex-1 flex flex-col items-start">
                <h1 class="text-4xl font-bold mb-4 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6/12 after:h-[0.2rem] after:bg-[#00379f]">The Vision</h1>
                <p>
                    At Project Emory, we're connecting students with a passion for project building with like-minded students to build impactful projects for the community.
                </p>
                <p class="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <button class="mt-4 px-4 py-1 bg-[#00379f] text-white rounded-lg hover:bg-[#182e56]">
                    Meet our team!
                </button>
            </div>
            <img src="/images/group.jpg" alt="" class="flex-1 h-[370px] object-cover rounded-sm"/>
            <!-- <div class="flex-1 bg-gray-300 w-full h-60 flex items-center justify-center">
                <span>Picture</span>
            </div> -->
        </div>
    </section> 

    <br>
    
    <section class="w-full max-w-4xl px-4 py-14 text-center rounded-lg">
        <h1 class="text-4xl font-bold mb-4 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:-translate-x-1/2 after:left-1/2 after:w-1/12 after:h-[0.2rem] after:bg-[#00379f]">Our Mission</h1>
        <p class=" text-3xl font-light leading-relaxed mb-6">
            To create and nurture a community of like-minded Computer Science enthusiasts at Emory University through collaborative project building and peer-to-peer learning.
        </p>
        <button class="mt-2 px-4 py-1 bg-[#00379f] text-white rounded-lg hover:bg-[#182e56]">
            Interested? Contact us!
        </button>
    </section>

    <br>

    <section class="w-full h-screen max-w-6xl px-4 py-32 text-right">
        <h2 class="mb-14 text-4xl font-bold pb-3 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[7%] after:h-[0.2rem] after:bg-[#00379f]">Meet Our Team</h2>

        <Carousel.Root class="w-full h-1/3"> <!-- Set a fixed height or a relative height like h-[500px] -->
            <Carousel.Content class="h-full flex">
              {#each teamMembers as member, i (i)}
                <Carousel.Item class="basis-1/2 h-full flex"> <!-- Ensure Carousel.Item takes full height and uses flex -->
                    <div class="flex flex-row bg-white shadow-lg h-[300px] rounded-lg p-6 w-full">
                      <!-- Image Placeholder -->
                      <!-- <div class="bg-gray-300 w-64 flex-shrink-0"></div> Auto height for the image to maintain size -->
                      <img src=/images/{member.image} alt={member.name} class="w-64 flex-shrink-0 object-cover rounded-lg mr-4" />
                      <!-- Text Content that should fill remaining space -->
                      <div class="flex flex-col text-start h-full ml-7">
                        <h3 class="text-xl font-semibold my-4">{member.name}</h3>
                        <p class="text-gray-600">{member.role}</p>
                        <a href={member.website} target="_blank" rel="noopener noreferrer" class="font-bold text-sm my-4">Personal Website</a>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" class="font-bold mt-4 text-blue-800">LinkedIn</a>   
                      </div>
                </Carousel.Item>
              {/each}
            </Carousel.Content>
            <Carousel.Previous />
            <Carousel.Next />
        </Carousel.Root>
    </section>

    
</section>