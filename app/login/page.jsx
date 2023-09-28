'use client'
import { useState } from 'react';
import styles from './login.module.css'
import User from '../models/User/user';
import Users from '../models/User/users';

function Login() {
    let empty = '';
    const [name, setName] = useState(empty);
    const [email, setEmail] = useState(empty);
    const [birthday, setBirthday] = useState(empty);

    const users = new Users();

    const showUsers = () => {
        if(name.trim() == '' || email.trim() == '' || birthday.trim() == '') {
            alert('test');
        } else {
            const user = new User(name, email, birthday);
            users.addUser(user);
        }
    }

    return(
        <main>
            <article id='login-form'>
                <section className={styles.inputfield}>
                    <label>Name:</label>
                    <input type="text"
                    value={name}
                    onChange={(param) => {
                        setName(param.target.value);
                    }} 
                    />
                </section>

                <section className={styles.inputfield}>
                    <label>Email:</label>
                    <input type="email"
                    value={email}
                    onChange={(param) => {
                        setEmail(param.target.value);
                    }} 
                    />
                </section>

                <section className={styles.inputfield}>
                    <label>Birthdate:</label>
                    <input type="date"
                    value={birthday}
                    onChange={(param) => {
                        setBirthday(param.target.value);
                    }} 
                    />
                </section>

                <button onClick={showUsers}>Regitser</button>
            </article>
            {
                users.list.map((user) => (
                    <div>
                        <p>Nome: {user.name}</p>
                        <p>Nome: {user.id}</p>
                        <p>Nome: {user.email}</p>
                        <p>Nome: {user.age}</p>
                    </div>
                ))
            }
        </main>
    );
}

export default Login;