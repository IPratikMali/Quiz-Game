var count = 1;
var points = 0;
let func1 = () => {
    if (count == 1) {

        let name = document.getElementById("display").value;
        if (name.length < 2) {
            document.getElementById("check").innerHTML = "Enter valid name";
        }
        else {
            document.getElementById("check").innerHTML = ""
            let sent = `Welcome ${name} , Are you ready to play ? \n (Yes/No)`;
            document.getElementById("target1").innerHTML = sent;
            document.getElementById("form1").reset()
            count = count + 1;
            return;
        }
    }
    if (count == 2) {

        let ans = document.getElementById("display").value
        if (ans.toLowerCase() == "yes") {
            let sent = "Q1. What is my full name ?"
            document.getElementById("target1").innerHTML = sent;
            document.getElementById("display").placeholder = "FirstName LastName";
            document.getElementById("form1").reset()
            count = count + 1;
            return;
        }
        if (ans.toLowerCase() == "no") {
            let sent = "oops, come again if you wanna play";
            document.getElementById("target1").innerHTML = sent;
            document.getElementById("form1").style.display = "none";
            document.getElementById("img").style.display = "inline";
            let image = document.getElementById("img");
            image.src = "image/sunday.jpg";
            document.getElementById("img").innerHTML = image;
            count = count + 1;
            return;
        }

    }
    if (count == 3) {
        let ans = document.getElementById("display").value;
        if (ans.toLowerCase() == "pratik mali") {
            points = points + 1;
            let sent = "Q2. What's my birth date ?"
            document.getElementById("target1").innerHTML = sent;
            document.getElementById("downtext").style.background = "#ffffff";
            let feed = " Last answer was Correct "
            document.getElementById("feedback").innerHTML = feed
            document.getElementById("feedback").style.color = "#1CFF14"
            let score = `Score : ${points}`;
            document.getElementById("score").innerHTML = score;
            document.getElementById("form1").reset()
            document.getElementById("display").placeholder = "ex: 14"
            count = count + 1;
            return;
        }
        else {
            let sent = "Q2. What's my birth date ?"
            document.getElementById("target1").innerHTML = sent;
            document.getElementById("downtext").style.background = "#ffffff";
            let feed = "Last answer was Wrong"
            document.getElementById("feedback").innerHTML = feed
            document.getElementById("feedback").style.color = "#EB1B1B"
            let score = `Score : ${points}`;
            document.getElementById("score").innerHTML = score;
            document.getElementById("form1").reset()
            document.getElementById("display").placeholder = "ex: 14"
            count = count + 1;
            return;
        }
    }
    if (count == 4) {
        let ans = parseInt(document.getElementById("display").value)
        if (ans == 18) {
            points = points + 1;
            let sent = "Q3. What's my height ?"
            document.getElementById("target1").innerHTML = sent;
            let feed = " Last answer was Correct "
            document.getElementById("downtext").style.background = "#ffffff";
            document.getElementById("feedback").innerHTML = feed;
            document.getElementById("feedback").style.color = "#1CFF14"
            let score = `Score : ${points}`;
            document.getElementById("score").innerHTML = score;
            document.getElementById("form1").reset();
            document.getElementById("display").placeholder = "ex: 5 (feet)"
            count = count + 1;
            return;
        }
        else {
            let sent = "Q3. What's my height ?"
            document.getElementById("target1").innerHTML = sent;
            let feed = "Last answer was Wrong";
            document.getElementById("downtext").style.background = "#ffffff";
            document.getElementById("feedback").innerHTML = feed;
            document.getElementById("feedback").style.color = "#EB1B1B"
            let score = `Score : ${points}`;
            document.getElementById("score").innerHTML = score;
            document.getElementById("form1").reset();
            document.getElementById("display").placeholder = "ex: 5 (feet)"
            count = count + 1;
            return;
        }
    }
    if (count == 5) {
        let ans = document.getElementById("display").value
        if (ans == "6.1") {
            points = points + 1;
            let sent = "Q4. Am i short-tempered ?"
            document.getElementById("target1").innerHTML = sent;
            let feed = " Last answer was Correct "
            document.getElementById("downtext").style.background = "#ffffff";
            document.getElementById("feedback").innerHTML = feed;
            document.getElementById("feedback").style.color = "#1CFF14"
            let score = `Score : ${points}`;
            document.getElementById("score").innerHTML = score;
            document.getElementById("form1").reset();
            document.getElementById("display").placeholder = "ex: yes / no"
            count = count + 1;
            return;
        }
        else {
            let sent = "Q4. Am i short-tempered ?"
            document.getElementById("target1").innerHTML = sent;
            let feed = "Last answer was Wrong";
            document.getElementById("downtext").style.background = "#ffffff";
            document.getElementById("feedback").innerHTML = feed;
            document.getElementById("feedback").style.color = "#EB1B1B"
            let score = `Score : ${points}`;
            document.getElementById("score").innerHTML = score;
            document.getElementById("form1").reset();
            document.getElementById("display").placeholder = "ex: yes / no"
            count = count + 1;
            return;
        }
    }
    if (count == 6) {
        let ans = document.getElementById("display").value
        if (ans.toLowerCase() == "yes") {
            points = points + 1;
            let sent = "Q5. Am i introvert ?"
            document.getElementById("target1").innerHTML = sent;
            let feed = " Last answer was Correct "
            document.getElementById("downtext").style.background = "#ffffff";
            document.getElementById("feedback").innerHTML = feed;
            document.getElementById("feedback").style.color = "#1CFF14"
            let score = `Score : ${points}`;
            document.getElementById("score").innerHTML = score;
            document.getElementById("form1").reset();
            document.getElementById("display").placeholder = "ex: yes / no"
            count = count + 1;
            return;
        }
        else {
            let sent = "Q5. Am i introvert ?"
            document.getElementById("target1").innerHTML = sent;
            let feed = "Last answer was Wrong";
            document.getElementById("downtext").style.background = "#ffffff";
            document.getElementById("feedback").innerHTML = feed;
            document.getElementById("feedback").style.color = "#EB1B1B"
            let score = `Score : ${points}`;
            document.getElementById("score").innerHTML = score;
            document.getElementById("form1").reset();
            document.getElementById("display").placeholder = "ex: yes / no"
            count = count + 1;
            return;
        }
    }
    if (count == 7) {
        let ans = document.getElementById("display").value;
        if (ans.toLowerCase() == "no") {
            points = points + 1;
            if (points <= 3) {
                let score = `Your Score is ${points} / 5`;
                document.getElementById("target1").innerHTML = "oops , You Don't Know Much About Me But You did well"
                document.getElementById("score").innerHTML = score;
                let feed = " Last answer was Correct "
                document.getElementById("feedback").innerHTML = feed;
                document.getElementById("feedback").style.color = "#1CFF14"
                document.getElementById("form1").style.display = "none";
                document.getElementById("gif2").style.display = "inline";
                let image = document.getElementById("gif2");
                image.src = "image/gif2.gif";
                document.getElementById("gif2").innerHTML = image;
                return;
            }
            else if (points == 5) {
                let score = `Your Score is ${points} / 5`;
                document.getElementById("target1").innerHTML = "Good , You Are Only My Best Friend"
                document.getElementById("score").innerHTML = score;
                let feed = " Last answer was Correct "
                document.getElementById("feedback").innerHTML = feed;
                document.getElementById("feedback").style.color = "#1CFF14"
                document.getElementById("form1").style.display = "none";
                document.getElementById("gif").style.display = "inline";
                let image = document.getElementById("gif");
                image.src = "image/gif1.gif";
                document.getElementById("gif").innerHTML = image;                
                return;
            }
            else {
                let score = `Your Score is ${points} / 5`;
                document.getElementById("target1").innerHTML = "Good , You Know Something About Me"
                let feed = " Last answer was Correct "
                document.getElementById("feedback").innerHTML = feed;
                document.getElementById("feedback").style.color = "#1CFF14"
                document.getElementById("score").innerHTML = score;
                document.getElementById("form1").style.display = "none";
                document.getElementById("gif").style.display = "inline";
                let image = document.getElementById("gif");
                image.src = "image/gif1.gif";
                document.getElementById("gif").innerHTML = image;
                return;
            }
        }
        else {
            if (points <= 3) {
                let score = `Your Score is ${points} / 5`;
                document.getElementById("target1").innerHTML = "oops , You Don't Know Much About Me But You did well"
                document.getElementById("score").innerHTML = score;
                document.getElementById("form1").style.display = "none";
                document.getElementById("gif2").style.display = "inline";
                let image = document.getElementById("gif2");
                image.src = "image/gif2.gif";
                document.getElementById("gif2").innerHTML = image;
                return;
            }
            else if (points == 5) {
                let score = `Your Score is ${points} / 5`;
                document.getElementById("target1").innerHTML = "Good , You Are Only My Best Friend"
                document.getElementById("score").innerHTML = score;
                document.getElementById("form1").style.display = "none";
                document.getElementById("gif").style.display = "inline";
                let image = document.getElementById("gif");
                image.src = "image/gif1.gif";
                document.getElementById("gif").innerHTML = image;
                return;
            }
            else {
                let score = `Your Score is ${points} / 5`;
                document.getElementById("target1").innerHTML = "Good , You Know Something About Me"
                document.getElementById("score").innerHTML = score;
                document.getElementById("form1").style.display = "none";
                document.getElementById("gif").style.display = "inline";
                let image = document.getElementById("gif");
                image.src = "image/gif1.gif";
                document.getElementById("gif").innerHTML = image;
                return;
            }
        }
    }

}
