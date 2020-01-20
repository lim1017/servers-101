const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

app.use((request, response, next) => {
  console.log("New Request");
  console.log("METHOD:", request.method);
  console.log("URL:", request.url);

  next();
});

app.use(morgan("dev"));

app.use((req, res, next) => {
  if (req.url === "/kanye") {
    res.statusCode = 418;
    res.send("Kanye Page YEEZY");
  } else {
    next();
  }
});

app.get("/taylor", (req, res) => {
  res.send("let Taylor speak!!!");
});

app.post("/music", (req, res) => {
  res.send("Adding new music");
});

const dogs = {
  maya: {
    name: "Maya",
    favFood: "Chimken",
    quirkyFact: "I am missing my front teef!",
    imageUrl:
      "https://scontent-frx5-1.cdninstagram.com/vp/b230fe7911c8c81ad0d14fee29874a4c/5E4D8315/t51.2885-15/e35/s320x320/68883232_131155844782815_1640793289939298907_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=103&ig_cache_key=MjEwMjQxNjc0NzE4MTQ0NjEyOA%3D%3D.2"
  },
  curly: {
    name: "Curly",
    favFood: "Smoked Trout",
    quirkyFact: "~Therapy Dog~",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxosfCQWsagvuz8q0O0kM3DiiTPGxmYzpKXhECLmnOR11WdxKWQ&s"
  }
};

app.get("/dogs/:dogName", (req, res) => {
  const dogName = req.params.dogName;
  const dog = dogs[dogName];

  let templateVars = {
    dog
  };

  res.render("dogPage", templateVars);
});

app.listen(5243, () => {
  console.log("EXPRESS IS LISTENING ON 5243");
});
