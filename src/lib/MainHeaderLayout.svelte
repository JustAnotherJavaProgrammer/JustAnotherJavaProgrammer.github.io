<div>
    <section><slot name="slogans">Your slogan here</slot></section>
    <section><slot name="picture">Show me your face!</slot></section>
</div>

<style>
    div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        justify-content: stretch;
        align-items: stretch;
    }

    section {
        flex-grow: 1;
        flex-basis: 0;
    }

    @media(orientation: landscape) {
        div {
            flex-direction: row;
        }
    }
</style>