<script>
    console.log("this will be a navbar bottom")
</script>

<nav class="navbar navbar--bottom">
    <a class="navbar__link active" href="#home">Home</a>
    <a class="navbar__link" href="#work">Work</a>
    <a class="navbar__link" href="#about">About</a>
    <a class="navbar__link" href="#media">Media</a>
</nav>

<style>
    .navbar {
        --width: 300px;
        --height: 50px;

        position: fixed;
        bottom: 12px;
        left: calc(50% - var(--width) / 2);
        width: 300px;
        height: 50px;

        display: grid;
        grid: var(--height) / auto-flow;
        justify-content: space-evenly;
        align-items: center;

        background-color: var(--nav-bg);
        backdrop-filter: blur(var(--blur-1));
        color: var(--bg);
        border-radius: var(--radii-2);
        transition: .3s;
        z-index: 2;
    }

    .navbar:hover {
        box-shadow: var(--shadows-large);
    }

    .navbar__link {
        position: relative;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: var(--placeholder);
        transition: all .3s;
    }

    .navbar__link:hover {
        color: var(--bg);
    }

    .navbar__link.active {
        color: var(--bg);
    }

    .navbar__link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 4px;
        background-color: var(--bg);
        border-radius: var(--radii-5);
        bottom: 8px;
        opacity: 0;
        visibility: hidden;
        /* transition: all .3s; */
        transition: all .3s cubic-bezier(.645,.045,.355,1) .2s;
        /* transition-delay: .125s; */
    }

    .navbar__link.active::after {
        width: 16px;
        opacity: 1;
        visibility: visible;
    }
</style>