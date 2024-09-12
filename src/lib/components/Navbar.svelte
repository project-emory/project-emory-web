<script lang="ts">
    import Logo from "./Logo.svelte";
</script>

<!-- @component
A simple navbar component to provide easy jumping between sections on the page.
 -->
<section style="padding-top: 15px">
    <nav>
        <ul>
            <li class="logo">
                <a href="/">
                    <Logo background="#FFFFFF" shortArc="#f1a709" longArc="#00379f" />
                </a>
            </li>
            <div class="nav">
                <li>
                    <a href="/#about-us"> About Us </a>
                </li>
                <li>
                    <a href="/#events"> Events </a>
                </li>
                <li>
                    <a href="/#get-involved"> Get Involved </a>
                </li>
                <li>
                    <a href="/#contact"> Contact </a>
                </li>
            </div>
        </ul>
    </nav>
</section>

<style>
    ul {
        background-color: white;
        list-style-type: none;
        border-color: #00379f;
        border-bottom: solid;

        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0rem 1rem 0.5rem 1rem;
    }

    .logo {
        width: 2rem;
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav {
        display: flex;
        gap: 2rem;
    }

    a {
        text-decoration: none;
        color: var(--text-secondary);
    }
</style>
