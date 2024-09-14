<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>

<!-- @component
Test component section for displaying elements while building.
 -->
<section id="about" class="bg-slate-200 h-screen py-10 my-60 items-center flex flex-col">
    <section class="w-full max-w-6xl px-4 py-10">
        <div class="flex flex-row justify-between items-center gap-8">
            <div class="flex-1 flex flex-col items-start">
                <h1 class="text-4xl font-bold mb-4 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6/12 after:h-[0.2rem] after:bg-black">The Vision</h1>
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
            <div class="flex-1 bg-gray-300 w-full h-60 flex items-center justify-center">
                <span>Picture</span>
            </div>
        </div>
    </section>

    <br>
    
    <section class="w-full max-w-4xl px-4 py-10 text-center rounded-lg">
        <h1 class="text-4xl font-bold mb-4 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:-translate-x-1/2 after:left-1/2 after:w-1/12 after:h-[0.2rem] after:bg-black">Our Mission</h1>
        <p class=" text-3xl font-light leading-relaxed mb-6">
            To create and nurture a community of like-minded Computer Science enthusiasts at Emory University through collaborative project building and peer-to-peer learning.
        </p>
        <button class="mt-2 px-4 py-1 bg-[#00379f] text-white rounded-lg hover:bg-[#182e56]">
            Interested? Contact us!
        </button>
    </section>

    <br>

    <section class="w-full h-screen max-w-6xl px-4 py-10 text-right">
        <h2 class="mb-14 text-4xl font-bold pb-3 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[7%] after:h-[0.2rem] after:bg-black">Meet Our Team</h2>

        <Carousel.Root class="w-full h-2/3"> <!-- Set a fixed height or a relative height like h-[500px] -->
            <Carousel.Content class="h-full flex">
              {#each Array(5) as _, i (i)}
                <Carousel.Item class="basis-1/2 h-full flex"> <!-- Ensure Carousel.Item takes full height and uses flex -->
                    <div class="flex flex-row bg-white shadow-lg h-[300px] rounded-lg p-6 w-full">
                      <!-- Image Placeholder -->
                      <div class="bg-gray-300 w-64 flex-shrink-0"></div> <!-- Auto height for the image to maintain size -->
          
                      <!-- Text Content that should fill remaining space -->
                      <div class="flex flex-col text-start h-full ml-7">
                        <h3 class="text-xl font-semibold my-4">Name</h3>
                        <p class="text-gray-600">Role</p>
                        <p class="text-sm my-4">Bio, fun fact, quote, etc. Lorem ipsum dolor sit amet.</p>
                        <p class="mt-4 text-blue-500">@Contact/Handle</p>   
                      </div>
                </Carousel.Item>
              {/each}
            </Carousel.Content>
            <Carousel.Previous />
            <Carousel.Next />
        </Carousel.Root>
    </section>

    
</section>