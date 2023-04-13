//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get getterName(){
		return name;
	}
	set setterAge(update){
		this.age=update;
	}
}

class Student extends Person {
	study(){
		console.log(`${Student.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${Teacher.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
