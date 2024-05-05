"use strict";
//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, 
//trucks, and motorcycles using enums, and show one example.
// Define enum for vehicle categories
var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory["Car"] = "Car";
    VehicleCategory["Truck"] = "Truck";
    VehicleCategory["Motorcycle"] = "Motorcycle";
})(VehicleCategory || (VehicleCategory = {}));
// Example usage
const vehicleType = VehicleCategory.Car;
console.log("Selected vehicle category:", vehicleType);
// Example student
const exampleStudent = {
    name: "Mehak",
    age: 18,
    classes: ["Math", "Science", "History"]
};
// Print student information
console.log("Student Information:");
console.log("Name:", exampleStudent.name);
console.log("Age:", exampleStudent.age);
console.log("Classes:", exampleStudent.classes.join(", "));
// Describing a circle using our Shape type
let circle = {
    kind: "circle",
    radius: 5
};
// Describing a rectangle using our Shape type
let rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
