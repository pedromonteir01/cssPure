export default class Users {
    constructor() {
        this.list = [];
    }

    addUser(user) {
        this.list.push(user);
    }

    deleteUser(id, stateVar) {
        this.list.map((user) => (
            user.id == id ? stateVar = true : stateVar
        ))
    }
}