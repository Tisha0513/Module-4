
function me() {
    var me = ["Likes swimming", "Plays the piano", "Does art", "Likes to run"];
    document.getElementById("me").innerHTML = me;
}

function info() {
    var aboutmyself = {
        firstName: "Tisha",
        secondName: "Varshney",
        work: "Student",
        age: "13",
        city: "Dhaka",
        country: "Bangladeah",
    };
    document.getElementById("results").innerHTML = aboutmyself.firstName + aboutmyself.secondName + " is " + aboutmyself.age + " years old. ";
}

function animals() {
    var pets = [
        "dogs", "cats", "bunnies", "panda"
    ];
    document.getElementById("animals").innerHTML = animals[2];
    document.getElementById("me").innerHTML = animals[4];
    document.getElementById("info").innerHTML = animals[1];
}
