// const housekeeper = {}
// housekeeper.age = 25
// housekeeper.yearsExperience = 7
// housekeeper.languages =['English', 'Spanish', 'Japanese','Javascript']
// housekeeper.name = "Jane"
// housekeeper.cleaningRepertoire = ['bedroom','bathroom','lobby']

class HouseKeeper{
    #name;
    #age;
    constructor(name, age, workPermit, yearsExperience, languages, cleaningRepertoire) {
        this.name = name;
        this.age = age;
        this.workPermit = workPermit;
        this.yearsExperience = yearsExperience;
        this.languages = languages;
        this. cleaningRepertoire = cleaningRepertoire;
    }
    get name(){
        return this.name;
    }
    get age(){
        return this.age;
    }
    clean(){
        console.log(this.name + " is cleaning.")
    }
}