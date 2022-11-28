<script>
    export let div
    export let elem
    export let text="EXAMPLE"
</script>

<!-- <div class="dialogueOptionDiv">
    <div class="inner">
        <p>EXAMPLE</p>
    </div>
</div> -->

<div class="dialogueOptionDiv" bind:this={div}><input on:mouseenter={() => {div.style.zIndex = "5"}} on:mouseleave={() => {div.style.zIndex = "1"}} class="dialogueButton" type="button" value="" on:click><p bind:this={elem}>{text}</p></div>

<style>
    @keyframes in{
        0% {
            left: 200%;
        }
        100% {
            left: 0%;
        }
    }

    .dialogueOptionDiv {
        top: 14vw;
        background-color: rgb(59, 59, 59);
        margin-left: .75%;
        max-height: 140%;
        max-width: 80%;
        height: 140%;
        width: 80%;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-style: preserve-3d;
    }

    .dialogueButton {
        border-radius: 10px;
        height: 100%;
        width: 100%;
        background-color: rgb(59, 59, 59);
        border-color: rgb(59, 59, 59);
        max-height: 100%;
        max-width: 100%;
        color: white;
        font-size: 2vw;
        position: relative;
    }
    .dialogueButton:hover {
        box-shadow: 0px 8px 18px 7px rgba(0,0,0,0.55);
        -webkit-box-shadow: 0px 8px 18px 7px rgba(0,0,0,0.55);
        -moz-box-shadow: 0px 8px 18px 7px rgba(0,0,0,0.55);
    }
    .dialogueOptionDiv p{
        color: white;
        font-size: 2vw;
        /* text-align: center; */
        position: absolute;
        pointer-events: none;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
    }
</style>

