<script lang="ts">
    import profilePic from "$lib/assets/profilePic.jpg";
</script>

<div>
    <img alt="Portrait" src={profilePic}>
    <h1>Lukas Drescher</h1>
</div>

<style>
    div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 71vmin;
        max-width: 50vmax;
        aspect-ratio: 1/1;
        border-radius: 50%;
        filter: grayscale(100%);
        transition: filter 0.5s;
        cursor: pointer;
        padding: 1vmin;
    }

    img:hover {
        filter: none;
    }
    
    h1 {
        font-size: max(1.5em, 5vmin);
        font-weight: 600;
        padding: 0.4em;
    }
</style>