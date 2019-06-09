const score = 0;
function startQuiz() {
    console.log("Quiz Started");
    let ql = prompt("What Year Was Javascript Invented?");   
    console.log("Q: What Year Was Javascript Invented?");
    console.log("A: 1995")
    if(q1 === "1995") {
        let score = score + 1;
    }
    let q2 = prompt("What Year Was C++ Invented?");
    console.log("Q: What Year Was C++ Invented?");
    console.log("A: 1998")
    if(q2 === "1998") {
        let score = score + 1;
    }
    let q3 = prompt("What Year Was Python Invented?");
    console.log("Q: What Year Was Python Invented?");
    console.log("A: 1989")
    if(q3 === "1989") {
        let score = score + 1;
    }
    let q4 = prompt("What Year Was HTML & CSS Invented?");
    console.log("Q: What Year Was HTML & CSS Invented?");
    console.log("A: 1998")
    if(q4 === "1998") {
        let score = score + 1;
    }
    let q5 = prompt("What Year Was The Computer Invented?");
    console.log("Q: What Year Was The Computer Invented?");
    console.log("A: 1622")
    if(q5 === "1622") {
        let score = score + 1;
    }
    let q6 = prompt("What Year Did Man Land On The Moon?");
    console.log("Q: What Year Did Man Land On The Moon?");
    console.log("A: 1969")
    if(q6 === "1969") {
        let score = score + 1;
    }
    let q7 = prompt("What Year Was Australia Colonised?");
    console.log("Q: What Year Was Australia Colonised?");
    console.log("A: 1788")
    if(q7 === "1788") {
        let score = score + 1;
    }
    let q8 = prompt("What Year Was C# Invented?");
    console.log("Q: What Year Was C# Invented?");
    console.log("A: 2001")
    if(q8 === "2001") {
        let score = score + 1;
    }
    let q9 = prompt("What Year Was Objective C Invented?");
    console.log("Q: What Year Was Objective C Invented?");
    console.log("A: 1981")
    if(q9 === "1981") {
        let score = score + 1;
    }
    let q10 = prompt("What Year Was Linux Created?");
    console.log("Q: What Year Was Linux Created?");
    console.log("A: 1972")
    if(q10 === "1972") {
        let score = score + 1;
    }
    // Alert you got score/10\
    alert(`You Scored ${score}/10`);
}
