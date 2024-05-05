//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, 
//trucks, and motorcycles using enums, and show one example.

// Define enum for vehicle categories
enum VehicleCategory {
    Car = "Car",
    Truck = "Truck",
    Motorcycle = "Motorcycle"
}

// Example usage
const vehicleType: VehicleCategory = VehicleCategory.Car;
console.log("Selected vehicle category:", vehicleType);

//Question 62: Making a Student Template: Create a blueprint for student information, including their name, 
//age, and the classes they're taking, and then fill in this blueprint with an example student.

// Define interface for student information
interface Student {
    name: string;
    age: number;
    classes: string[];
}

// Example student
const exampleStudent: Student = {
    name: "Mehak",
    age: 18,
    classes: ["Math", "Science", "History"]
};

// Print student information
console.log("Student Information:");
console.log("Name:", exampleStudent.name);
console.log("Age:", exampleStudent.age);
console.log("Classes:", exampleStudent.classes.join(", "));

//Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle 
//using a special type alias, including properties unique to each shape.

// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
};

// Describing a circle using our Shape type
let circle: Shape = {
    kind: "circle",
    radius: 5
};

// Describing a rectangle using our Shape type
let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
