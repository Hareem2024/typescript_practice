/* eslint-disable @typescript-eslint/no-unused-vars */
export function isEven(num:number):boolean {
    return num%2==0;
}

export function isOdd(num: number): boolean {
    return num%2==1;
}


export class Calculator {
    add(a: number, b: number): number {
      return a+b;
    }
  
    subtract(a: number, b: number): number {
      return a-b;
    }
  
    multiply(a: number, b: number): number {
      return a*b;
    }
  
    divide(a: number, b: number): number {
      if(b==0)
        return 0;
      return a/b;
    }

    modulo(a: number, b: number): number {
      return a%b;
    }
}

export class Cat {
    private calories: number;
    private name: string;
    constructor(name:string){
      this.name = name;
      this.calories=0;
    }
    setName(name: string): void{
      this.name=name;
    }
    eat(food: string):void{
      if(food==='tuna')
      {
        this.calories = 50;
      }
      else (food==='salmon'){
        this.calories=100;
      }
      else if()
    }
  }
  

  }
    

    // this is a cat (also called car) class.
    // like a normal car, eat and also have a name.
    // create methods that do the following:
    // assign a name to the car..
    // the car should be able to eat.
    // if the car eats tuna, it gets 50 calories.
    // if the car eats salmon, it gets 100 calories.
    // if the car sleeps, it loses 10 calories.
    // if the car walks, it loses 60 calories.
    
    
    // the car should have the following methods:
    // we should initialize the Cat with a name and starting calories should be 0.
    // eat()
    // sleep()
    // walk()
    // getCalories()


    // some things to consider:
    // what happens if the cat has no calories and it tries to walk? What should we do?
}