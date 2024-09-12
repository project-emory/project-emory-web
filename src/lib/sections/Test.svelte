<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
</script>

<!-- @component
Test component section for displaying elements while building.
 -->
<section id="test">
    <div class="content">
        <Logo background="#FFFFFF" shortArc="#f1a709" longArc="#00379f" />
        <div class="intro">
            <p>PROJECT Emory</p>
            <button>Learn more</button>
        </div>
    </div>
    <br>
    
    <div class="arrow">
        <div>&#8744</div>
        <div>&#8744;</div>
    </div>
</section>

<style>
    .content {
        display: flex;
        justify-content: space-between;
        padding-left: 10px;
        margin-bottom: 5rem;
        margin-top: 3rem;
        max-height: 400;
    }
    p {
        font-weight: 700;
        font-size: 6rem;
        margin: 0;
        margin-top: 3rem;
    }
    .intro {
        width: 65vw;
        margin-left: 8vw;
        margin-right: 10px;
    }

    button {
        background-color: #f1a709;
        border: none;
        padding: 10px 10px;
        border-radius: 5px;
        font-weight: 400;
        font-size: 18px;
        margin-top: 2rem;
        width: 10rem;
        height: 3rem;
    }
    .arrow {
        font-size: 24px;
        background-color: #00379f;
        width:fit-content;
        color: white;
        border-radius: 20px;
        padding: 10px 8px;
        font-weight: 700;
        line-height: 22px;
    }
</style>