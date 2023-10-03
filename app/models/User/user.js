export default class User {
    constructor(name, email, birthdate) {
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
        this.age = this.getAge(birthdate);
        this.id = this.getId();
    }
    
    getAge(birth) {
        const birthday = new Date(birth);
        const today = new Date();

        let age = today.getFullYear() - birthday.getFullYear();

        if(today.getMonth() < birthday.getMonth() || birthday.getMonth() == today.getMonth() && today.getDay() < birthday.getDay()) {
            age--;
        }

        return age < 0 ? 0 : age;
    }

    getId() {
        return  Math.floor(Math.random() * 9999);
    }
}