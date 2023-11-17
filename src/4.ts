class Key{
    constructor(private signature = Math.random()){}

    getSignature(){
        return this.signature;
    }
}

//--------------------------------------------------
class Person{
    private key: Key;

    constructor(key: Key){}

    getKey(){
        return this.key;
    }
}

//--------------------------------------------------
abstract class House{
    door: boolean;
    key: Key;
    tenants: Person[];

    comeIn(person: Person){
        if(this.door === true){
           this.tenants.push(person);
        }        
    }
    abstract openDoor(key: Key): void;
}

//--------------------------------------------------
class MyHouse extends House{
    key: Key;

    constructor(key: Key){
        super();
        this.key = key;
    }

    openDoor(key: Key){
        if(key.getSignature === this.key.getSignature){
            this.door = true;
        }
    }
}

//--------------------------------------------------
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};