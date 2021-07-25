let setItem = _ => {
    let userName = document.getElementById("name").value;
    let gender = "";
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    if (male.checked == true) {
        gender = male.value;
    } else if (female.checked == true) {
        gender = female.value;
    }
    let address = document.getElementById("address").value;
    let education = document.getElementById("education").value;
    let profession = document.getElementById("profession").value;

    function User(userName, gender, address, education, profession) {
        this.userName = userName;
        this.gender = gender;
        this.address = address;
        this.education = education;
        this.profession = profession;
    }

    let user1 = new User(userName, gender, address, education, profession);
    localStorage.setItem("people", JSON.stringify(user1));
}

let getData = _ => {
    let values = JSON.parse(localStorage.getItem("people"));
    console.log(values);
}