const express = require("express");
const app = express();
const axios = require("axios");
let employees;
let employees5;
var hbs = require("hbs");
hbs.localsAsTemplateData(app);

app.set("view engine", "hbs");

async function name() {
  try {
    let res = await axios.get(
      " http://dummy.restapiexample.com/api/v1/employees"
    );
    console.log(res.data.data);
    employees = res.data.data;
  } catch (err) {
    console.log(err);
  }
}
name();

//no need this
hbs.registerHelper("helper", function (options) {
  console.log(options);
  return options;
});
let id;

app.get("/", (req, res) => {
  id = 1;
  employees5 = [
    employees[5 * (id - 1)],
    employees[5 * (id - 1) + 1],
    employees[5 * (id - 1) + 2],
    employees[5 * (id - 1) + 3],
    employees[5 * (id - 1) + 4],
  ];
  res.render("page", { employees5 });
});

app.get("/:id", (req, res) => {
  id = req.params.id;

  employees5 = [
    employees[5 * (id - 1)],
    employees[5 * (id - 1) + 1],
    employees[5 * (id - 1) + 2],
    employees[5 * (id - 1) + 3],
    employees[5 * (id - 1) + 4],
  ];
  res.render("page", { employees5 });
});

//Get Post Delete Update -- No need for this project
app.post("/posting", (req, res) => {
  const body = req.body;
  res.send(body);
});

app.listen(3000);
