// @Component
// @Selector
// @useState('asdfadf')

// Factory
function Logger(prefix: string) {
  return (target: Function) => {
    console.log(`${prefix} - ${target }`)
  }
}

@Logger('Awesome')
class Foo {

}

// @Class decorator

function setAPIVersion(apiVersion: string) {
  return (constructor) => {
    return class extends constructor {
      public version = apiVersion;
    }
  }
}

@setAPIVersion('1.0.0')
class API {

}

console.log(new API())

// @Property decorator

function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => {
      return val;
    }

    const setter = (value: string) => {
      if (value.length < length) {
        console.log(`Error: You cannot create the ${key} with less than ${length} letters.`)
      } else {
        val = value;  
      }
    }

    Object.defineProperty(target, key, {
      set: setter,
      get: getter,
    }) 
  }
}

class Movie {
  @minLength(50)
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie('Interstellar');
console.log(movie.title); 

// @Method decorator

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
      console.log(`Esperando ${ms}...`);
      setTimeout(() => {
        originalMethod.apply(this, ...args)
      }, ms );
      
      return descriptor; 
    }
  }
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  @delay(500)
  greet() {
    console.log(`Hello! ${this.greeting}`)
  }
}

const pessoainha = new Greeter("Pessoinha");
pessoainha.greet();
