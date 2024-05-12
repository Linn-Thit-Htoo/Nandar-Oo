var email = "lth@gmail.com";
var password = "123123";

if (email == "lth@gmail.com" && password == "123123") {
  console.log("Success!");
} else {
  console.log("Fail!");
}

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

var jsonStr = [
  {
    CinemaId: 1,
    CinemaName: "Junction City Cinema",
    CinemaLocation: "19.369123394088824, 96.41755598399874",
  },
  {
    CinemaId: 2,
    CinemaName: "Mingalar Sanpya",
    CinemaLocation: "19.369123394088824, 96.41755598399874",
  },
  {
    CinemaId: 3,
    CinemaName: "Mingalar North Okkalapa",
    CinemaLocation: "16.777580819660912, 96.14469073558205",
  },
  {
    CinemaId: 4,
    CinemaName: "Mega Ace",
    CinemaLocation: "16.894055912742832, 96.1554773779104",
  },
  {
    CinemaId: 5,
    CinemaName: "Nay Pyi Taw Cinema",
    CinemaLocation: "16.913192909080152, 96.16654500716746",
  },
  {
    CinemaId: 6,
    CinemaName: "Thamada Cinema",
    CinemaLocation: "16.778710725570512, 96.15931678017863",
  },
  {
    CinemaId: 7,
    CinemaName: "Waziya Cinema",
    CinemaLocation: "16.782584193256444, 96.15886346668627",
  },
  {
    CinemaId: 8,
    CinemaName: "Mingalar Gamone Pwint",
    CinemaLocation: "16.779361341022756, 96.15978495134286",
  },
  {
    CinemaId: 9,
    CinemaName: "JCGV Junction Square",
    CinemaLocation: "16.833169997417873, 96.12964450901606",
  },
  {
    CinemaId: 10,
    CinemaName: "JCGV City Mall",
    CinemaLocation: "16.817540253497107, 96.13112076483641",
  },
];

jsonStr.map(({ CinemaName, CinemaLocation }) => {
  console.log(CinemaName + " " + CinemaLocation);
});

var students = [
  {
    UserId: 1,
    UserName: "Leo",
    Gender: "male",
  },
  {
    UserId: 2,
    UserName: "Nandar Oo",
    Gender: "female",
  },
];

var alert = document.getElementById("alert");
alert.style.display = "none"; // hide error alert

var filteredStudents = students
  .filter((x) => x.Gender == "male") // array object
  .map((item) => console.log(item));

function btnLogin() {
  var form = document.forms["frm"];
  var email = form["Email"].value;
  var password = form["Password"].value;

  if (email === "" || email === null || password === "" || password === null) {
    alert.textContent = "Please fill all fields...";
    alert.style.display = "block";
    return;
  }

  // login logic
  alert.style.display = "none";
  form["Email"].value = "";
  form["Password"].value = "";
}
