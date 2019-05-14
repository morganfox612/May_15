class Dog {
  constructor(name){
  this.name = name
  }
  speak(){
    console.log('Woof!')
  }
  run(){
    console.log('That dog ran fast!')
  }
}

class PitBull extends Dog {
  constructor(name){
    super(name)
  }
  speak(){
    console.log('The pitbull bit someone\'s arm off!')
  }
}

class Pug extends Dog {
  constructor(name){
    super(name)
  }
}

fido = new Dog('Fido')
fabio = new Dog('Fabio')
bruce = new PitBull('Bruce')
thatDog = new Pug('thatDog')
