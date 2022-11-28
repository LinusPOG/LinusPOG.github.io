<script>
    import DialogueOption from './DialogueOption.svelte';
    import { Dialogue } from './StoryData.svelte';
    import { onMount } from 'svelte';
    let dialogueDiv, hover, mainText, secondText

    function Lerp(a, b, t){
        return a + (b-a) * t
    }

    let currID = 1
    let targetRot = 20, currRot = 0, currY = 0, targY = 1
    let textOffset = 0, textSet = 75
    let lastTime = null
    let elapsed = 0

    let bText1 = "EXAMPLE", bText2 = "EXAMPLE2"
    let bElem1, bElem2
    let bID1 = 1, bID2 = 1

    let ended = false

    function FindDialogue(ID){
        for(let i = 0; i < Dialogue.length; i++){
            let Data = Dialogue[i]
            if (Data.id == ID)
                return Data;
        }
    }

    function UpdatePage(){
        const Data = FindDialogue(currID)

        if (Data != undefined){
            mainText.innerHTML = Data.text
            secondText.innerHTML = Data.text

            bText1 = Data.opt1text
            bText2 = Data.opt2text

            bID1 = Data.opt1route
            bID2 = Data.opt2route

            ended = Data.isEnd
        }
    }

    function SetPage(ID){
        currID = ID
        localStorage.setItem("pageID", currID.toString())
        UpdatePage()
    }

    function doFrame(time){
        time /= 1000
        if (lastTime == null){
            lastTime = time
        }
        const dt = Math.max(time - lastTime, .0001)
        const lerpValue = 1 - Math.pow(.001, dt)
        const lerpValue2 = 1 - Math.pow(.2, dt)
        const lerpValue3 = 1 - Math.pow(.05, dt)
        elapsed+=dt*1000
        currRot = Lerp(currRot, targetRot, lerpValue)
        currY += 25
        targY = Lerp(targY, 0, lerpValue2)
        textOffset = Lerp(textOffset, textSet, lerpValue3)
        secondText.style.transform = `translate(-50%, -50%) translateZ(${textOffset/1.5}px)`
        mainText.style.transform = `translate(-50%, -50%) translateZ(${textOffset}px)`
        const YRotation = currY * targY + Math.sin(time) * currRot
        dialogueDiv.style.transform = `perspective(2700px) translate(-50%,-50%) rotateY(${YRotation}deg) rotateX(${Math.cos(time) * currRot}deg)`
        
        document.body.style.backgroundPositionX = `${elapsed/20}px`
        document.body.style.backgroundPositionY = `${elapsed/20}px`
        lastTime = time
        let result = YRotation
        if (result >= 0){
            result = result - 360 * Math.floor(result / 360)
        } else {
            console.log(Math.floor(result / 360))
            result = result - 360 * -Math.ceil(result / 360)
        }
        //console.log(YRotation, result)
        const op = (result>100||result<-80)?0:1
        bElem1.style.opacity = op
        bElem2.style.opacity = op

        window.requestAnimationFrame(doFrame)
    }

    function doNext(Y, opt){
        if (Math.abs(targY) <= .005){
            currY = 0, targY = Y
            SetPage(opt)
        }
    }

    onMount(() => {
        window.requestAnimationFrame(doFrame)
        currID = parseInt(localStorage.getItem("pageID")) || 1
        UpdatePage()

        function addHover(elem){
            elem.addEventListener("mouseover", () => {
                console.log("entered")
                targetRot = 0
                textSet = 0
            });

            elem.addEventListener("mouseleave", () => {
                console.log("left")
                targetRot = 20
                textSet = 75
            });
        }

        addHover(dialogueDiv)
        addHover(hover)
        function go(elem, callback){
            for (const child of elem.children) {
                callback(child)
                go(child, callback)
            }
        }
        go(dialogueDiv, addHover)
        UpdatePage()
    })
</script>

<body>
    <div class="hover" bind:this={hover}></div>
    <div class="dialogueDiv" bind:this={dialogueDiv}>
        <p bind:this={mainText} class="mainText">EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE</p>
        <p bind:this={secondText} class="secondText">EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE EXAMPLE</p>
        <div class="dialogueOptionContainer">
            <DialogueOption bind:elem={bElem1} text={bText1} on:click={() => {doNext(-.5, bID1)}}></DialogueOption>
            <DialogueOption bind:elem={bElem2} text={bText2} on:click={() => {doNext(.5, bID2)}}></DialogueOption>
        </div>
    </div>
</body>

<style>
    :global(body) {
        overflow: hidden;
        display: flex;
        background:url("Checkra.png");
    }
    .hover {
        transform: translate(-50%,-50%);
        left: 50%;
        top: 50%;
        height: 80%;
        width: 80%;
        position: absolute;
    }

    .dialogueDiv {
        position: absolute;
        border-radius: 10px;
        left: 50%;
        top: 40%;
        height: 50%;
        aspect-ratio: 2/1;
        background-color: rgb(36, 36, 36);
        transform-style: preserve-3d;
        transform: perspective(2700px) translate(-50%,-50%) rotateY(20deg) rotateX(20deg);
        box-shadow: 0px 8px 18px 7px rgba(0,0,0,0.55);
        -webkit-box-shadow: 0px 8px 18px 7px rgba(0,0,0,0.55);
        -moz-box-shadow: 0px 8px 18px 7px rgba(0,0,0,0.55);
    }
    .dialogueOptionContainer {
        position: relative;
        left: 50%;
        top: 110%;
        transform: translate(-50%, 0%);
        height: 10%;
        width: 100%;
        display: flex;
    }
    .secondText {
        color: rgb(122, 122, 122);
    }
    .mainText {
        color: white;
        z-index: 10;
    }
    .dialogueDiv p{
        position: absolute;
        font-size: 1vw;
        /* text-shadow: -2px 2px #525252; */
        width: 90%;
        height: 90%;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        backface-visibility: hidden;
    }
</style>