<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
</script>

<!-- @component
Test component section for displaying elements while building.
 -->
<section id="about">
    <div class="vision">
        <div class="text">
            <h1>The Vision</h1>
            <p>
                At Project Emory, we’re connecting students with a passion for project building with like-minded students to build impactful projects for the community.
                <br>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button>Meet our team!</button>
        </div>
        <div class="img">hello</div>
    </div>

    <br>
    
    <div class="mission">
        <h1>Our Mission</h1>
        <p>To create and nurture a community of like-minded Computer Science enthusiasts at Emory University through collaborative project building and peer-to-peer learning.</p>
        <button>Interested? Contact us!</button>
    </div>

    <br>

    <div class="team">
        <h1>Meet the Team</h1>
        <div>carousel</div>
    </div>
</section>

<style>
    .vision {
        display: flex;
        justify-content: center;
        align-items: center;
        height: max-content; 
    }
    .text {
        width: 380px;
        height: 225px;
        font-size: 12px;
    }
    .img {
        width: 380px;
        height: 225px;
        background-color: bisque;
    }
    h1 {
        margin: 0px;
        font-size: 32px;
        position: relative; /* This is necessary for the pseudo-element positioning */
    }

    h1::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 25%; /* This makes the border half the width of the h1 */
        height: 2px; /* Border thickness */
        background-color: black; /* Border color */
    }
    #about {
        margin:0%;
        padding: 0%;
        margin-top: 200px;
        margin-bottom: 200px;
    }

</style>