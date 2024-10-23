class Student
{
    constructor(name,age,grade)
    {
        this.name=name;
        this.age=age;
        this.grade=grade;
    }
    greet()
    {
        console.log(`hello,my name is ${this.name}`);
    }
}

class Teacher extends Student
{
    constructor(name,age,grade,subject)
    {
        super(name,age,grade);
        this.subject=subject;
    }
    teach()
    {
        console.log(`i teach ${this.subject}`);
    }
}

const student=new Student('Eduard',20,10);
const teacher=new Teacher('Mihai',34,12,'web technologies');

console.log(student);
console.log(teacher);