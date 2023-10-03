'use client'
import { useState } from 'react';
import styles from './login.module.css'
import User from '../models/User/user';
import Users from '../models/User/users';

const users = new Users();

function Login() {

    let aux = null;

    let empty = '';
    const [name, setName] = useState(empty);
    const [email, setEmail] = useState(empty);
    const [birthday, setBirthday] = useState(empty);


    const showUsers = () => {
        if (name.trim() == '' || email.trim() == '' || birthday.trim() == '') {
            alert('test');
        } else {
            const user = new User(name, email, birthday);
            users.addUser(user);
            setName(empty);
            setEmail(empty);
            setBirthday(empty);

            console.log(users.list);

        }
    }

    const editUser = (name, email, birthdate, id) => {
        setName(name);
        setEmail(email);
        setBirthday(birthdate);

        aux = id;
    }

    const edit = (id) => {
        console.log(id);
    }

    const delet = (id) => {
        let already = false;

        users.deleteUser(id, already);

        if(already) {
         users.list = users.list.filter(user => user.id !== id);
        }
    }

    return (
        <main className={styles.mainContent}>
            <h1>REGISTER</h1>
            <article className={styles.loginform}>
                <section className={styles.inputfield}>
                    <label>Name:</label>
                    <input type="text"
                        value={name}
                        onChange={(param) => {
                            setName(param.target.value);
                        }}
                        className={styles.inform}
                    />
                </section>

                <section className={styles.inputfield}>
                    <label>Email:</label>
                    <input type="email"
                        value={email}
                        onChange={(param) => {
                            setEmail(param.target.value);
                        }}
                        className={styles.inform}
                    />
                </section>

                <section className={styles.inputfield}>
                    <label>Birthdate:</label>
                    <input type="date"
                        value={birthday}
                        onChange={(param) => {
                            setBirthday(param.target.value);
                        }}
                        className={styles.inform}
                    />
                </section>

                <section className={styles.divBtn}>
                    <button onClick={showUsers} className={`${styles.show} ${styles.btn}`}>Regitser</button>
                    <button onClick={() => edit(aux)} className={`${styles.hidden} ${styles.btn}`}>Editar </button>
                </section>
            </article>
            <article className={styles.userlist}>
                <h2>Lista</h2>
                <section className={styles.secusers}>
                    {
                        users.list.map((user) => (
                            <div key={user.id} className={styles.users}>
                                <div className={styles.list}>
                                    <p><strong>Name:</strong> {user.name}</p>
                                    <p><strong>Id:</strong> {user.id}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Idade:</strong> {user.age}</p>
                                </div>
                                <div className={styles.btnusers}>
                                    {/*   <button onClick={editUser(user.name, user.email, user.birthdate, user.id)} className={styles.edit}>Editar</button> */}
                                    {/*   <button onClick={delet(user.id)} className={styles.delete}>Excluir</button> */}
                                    <button onClick={() => delet(user.id)} className={styles.delete}>Excluir</button>
                                </div> 
                            </div>
                        ))
                    }
                </section>
            </article>
        </main>
    );
}

export default Login;