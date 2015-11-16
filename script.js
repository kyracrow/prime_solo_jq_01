// //Make a form that captures and stores employee info
//$(document).ready(function(){


  function Employees (firstName, lastName, employeeNumber, jobTitle, lastReviewScore,
    salary) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.employeeNumber = employeeNumber;
      this.jobTitle = jobTitle;
      this.lastReviewScore = lastReviewScore;
      this.salary = salary;
   };


$(function() {
  $("form").on("submit", function(event) {
    event.preventDefault();
    var employees = $(this).serializeArray();
    var newEmployees = new Employees(employees[0].value, employees[1].value, employees[2].value, employees[3].value, employees[4].value, employees[5].value);
      console.log(newEmployees);
      employeeList(newEmployees);
});
});

function employeeList(employee) {

  var $ul = $("<ul>");

    $ul.append($("<li>").text("First Name: " + employee.firstName));
    $ul.append($("<li>").text("Last Name: " + employee.lastName));
    $ul.append($("<li>").text("Employee Number: " + employee.employeeNumber));
    $ul.append($("<li>").text("Job Title: " + employee.jobTitle));
    $ul.append($("<li>").text("Last Review Score: " + employee.lastReviewScore));
    $ul.append($("<li>").text("Salary: $" + employee.salary));
    $("#form").append($ul);

}
$("button").on("click" ,function(event){
  $("ul").remove();
})
