<script context="module">
    export const Dialogue = [
        {
            isEnd: false,
            id: 0,
            text: "You have a serious heart disease and are in need of a new heart. There is a loophole that allows you to skip past the waiting list. Do you skip the waiting list, potentially killing others, or do you exploit the loophole to ensure your survival?",
            opt1route: 1,
            opt2route: 2,
            opt1text: "You skip the line.",
            opt2text: "You don't skip the line."
        },
        {
            isEnd: false,
            id: 1,
            text: "You’ve gotten your new heart but there is a catch. You don’t have health insurance and the medical bill is too large. Your family is now in immense debt. But there is a way: You used to work as a chemistry teacher and you know that one of your students, Jessie, has some connections in the criminal world. Being a former chemistry teacher you have some knowledge that allows you to cook the best meth in town.",
            opt1route: 3,
            opt2route: 5,
            opt1text: "You cook meth",
            opt2text: "No meth?"
        },
        {
            isEnd: false,
            id: 2,
            text: "Your condition worsens but you manage to survive. One day you are lying in bed when your phone rings. You pick up the phone and a voice starts talking on the other end. The person on the other end is the person you could have skipped ahead of. They know you could have used a loophole to get ahead of them and if you had, they would have died. Therefore they want to thank you. His name is Paul Goodman and he asks you if you want to work for him. He asks you if you want to work for him. However, there is a catch: You don’t have a degree but Paul says he can supply you with a fake degree. The money could help you get a new heart.",
            opt1route: 11,
            opt2route: 12,
            opt1text: "Say yes to Paul's fake degree.",
            opt2text: "Live the legal life."
        },
        {
            isEnd: false,
            id: 3,
            text: "You contact your old student and, at first, he is a bit suspicious. After convincing him that you are not working with the police he agrees to meet you later that day. Jessie greets you in his cabin's basement and you talk about cooking meth. After selling a decent bit of meth and paying off your debt you start to think about quitting. ",
            opt1route: 4,
            opt2route: 6,
            opt1text: "Quit the meth carreer.",
            opt2text: "Go all in on the meth."
        },
        {
            isEnd: true,
            id: 4,
            text: "You don’t feel very good about all the meth you sold but the debt is paid off and you seem to have gotten away from the police. However, Jessie thinks you’re going to snitch. He grabs his gun and shoots you in your big ass forehead. You die.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: false,
            id: 5,
            text: "You decide that cooking meth is a bad idea. However, this does not change the fact that you are in immense debt. You consider starting a Gofundme page but you have to tell some lies. This feels a bit wrong but it might be the only way to pay off the debt.",
            opt1route: 9,
            opt2route: 10,
            opt1text: "You start the gofundme page with some cap",
            opt2text: "You decide that starting the page is a bad idea"
        },
        {   //Full on meth carreer, basically välj fight or flight mot hank
            isEnd: false,
            id: 6,
            text: "Business is booming and your meth is the best in town. After a while, however, your brother in law Hank Vader is hunting you down. After you respond violently to him entering Jessie's basement, he has no choice but violence.",
            opt1route: 7,
            opt2route: 8,
            opt1text: "You try to kill Hank",
            opt2text: "You try to run away from Hank"
        },
        {
            isEnd: false,
            id: 7,
            text: "You kill Hank and your meth business is thriving. You make a lot of money and become the guy known as the Escobar of Meth. You live the rest of your life as a drug lord and die at the age of 85.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: true,
            id: 8,
            text: "You start running but Hank throws his DEA badge in your direction. It hits you in the head and you die.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: true,
            id: 9,
            text: "When you skipped the waiting line for the heart, a man by the name of Paul Goodman died. People who see your Gofundme page are getting a bit suspicious that you skipped the line. Paul’s friends know that someone skipped ahead of Paul and they have reasons to believe it’s you. They manage to track you down and stab you right in your brand new heart.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: false,
            id: 10,
            text: "The only way you could pay off the debt was through selling your house and car. You end up living the rest of your life without a home and in misery.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: false,
            id: 11,//you get the fake degree
            text: "During your first case, the opposing lawyer tells you that they know about you faking your degree. He tells you to lose the case on purpose even though your client is innocent and could face harsh punishment. If you don’t lose the case on purpose, the other lawyer will snitch and if you do, your client will face harsh consequences.",
            opt1route: 13,
            opt2route: 14,
            opt1text: "Intentionally lose the case.",
            opt2text: "Stand up for your client."
        },
        {
            isEnd: true,
            id: 12,//You skip the fake degree
            text: "Your debt keeps increasing and you can’t afford to take care of yourself. You die from a heart attack.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: false,
            id: 13,
            text: "After a bad start to your lawyer career, things finally start to catch up. You make some good money, you get a new heart and all of that good stuff. But there is a catch. Authorities have become aware of your fake degree. They tell you that a lot of fake degrees have been spotted lately. If you tell them who provided you with yours, they’ll let you go. If you don’t, you go to prison.",
            opt1route: 15,
            opt2route: 16,
            opt1text: "You snitch on Paul.",
            opt2text: "Walter ain't no snitch."
        },
        {
            isEnd: true,
            id: 14,
            text: "You get sent to prison due to your fake degree. They manage to trace back your degree to Paul Goodman and he is also sent to the same prison as you. He is pissed that you got him sent to prison and decides to shank shank you.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: false,
            id: 15,
            text: "Paul is not gonna be very happy about this, but at least you’re free to go. You end up getting your old job as a chemistry teacher back and live a happy life afterwards.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        },
        {
            isEnd: true,
            id: 16,
            text: "You end up in prison, and funnily enough, you meet your old client. He is absolutely furious with you and stabs you to death.",
            opt1route: 0,
            opt2route: 0,
            opt1text: "Go back to start",
            opt2text: "Go back to start but different (not really)"
        }
    ]
</script>