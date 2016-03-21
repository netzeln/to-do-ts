class Greeter {
  greeting: string;

  constructor(public message: string){};

  greet(){
    return "Hello, " + this.message;
  }
}

var greeters = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("I love you, won't you tell me your name"));
greeters.push(new Greeter("is it me you're looking for"));
console.log(greeters);
for(var greeter of greeters){
  alert(greeter.greet());
}
