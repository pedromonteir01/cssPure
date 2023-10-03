export default class Users {
    constructor() {
        this.list = [];
    }

    addUser(user) {
        this.list.push(user);
    }

    deleteUser(id) {
        return this.list = this.list.filter(user => user.id !== id);
    }


    editUser(id, name, email, birthdate) {
        this.list.map((user) => {
            if(user.id == id) {
            user.name = name;
            user.email = email;
            user.birthdate = birthdate;
        }})
    }
}