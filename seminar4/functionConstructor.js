function User(name,age)
{
    this.name=name;
    this.age=age;
    this.online=false;
}

User.prototype.login=function()
{
    this.online=true;
    console.log("User is logged in");
}

User.prototype.logout=function()
{
    this.online=fasle;
    console.log("User is logged out");
}

const user =new User("eduard",20)

console.log(user)