'use client'
import { useState } from 'react';
import styles from './login.module.css'
import User from '../models/User/user';
import Users from '../models/User/users';
import { useAmp } from 'next/amp';
import { useSearchParams } from 'next/navigation';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const users = new Users();

function Login() {

    const [aux, setAux] = useState(null);

    let empty = '';
    const [name, setName] = useState(empty);
    const [email, setEmail] = useState(empty);
    const [birthday, setBirthday] = useState(empty);

    const [show, setShow] = useState(false);

    const [list, setList] = useState(users.list);

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

    const edit = (name, email, birthdate, id) => {
        setShow(true);

        setName(name);
        setEmail(email);
        setBirthday(birthdate);

        setAux(id);
    }

    const editUser = () => {

        users.editUser(aux, name, email, birthday);

        setName(empty);
        setEmail(empty);
        setBirthday(empty);

        setList(users.list);

        setShow(false);

        setAux(null);
    }

    const delet = (id) => {
        let already = false;

        users.list.map((user) => (
            user.id == id ? already = true : already
        ))

        if (already) {
            users.deleteUser(id);
            setList(users.list);
        }
    }

    return (
        <main>
            <Header/>
            <div className={styles.mainContent}>
                <h1>REGISTER</h1>
                <article className={styles.loginform}>
                    <section className={styles.inputfield}>
                        <label>Nome:</label>
                        <input type="text"
                            value={name}
                            onChange={(param) => {
                                setName(param.target.value);
                            }}
                            className={styles.inform}
                        />
                    </section>

                    <section className={styles.inputfield}>
                        <label>E-mail:</label>
                        <input type="email"
                            value={email}
                            onChange={(param) => {
                                setEmail(param.target.value);
                            }}
                            className={styles.inform}
                        />
                    </section>

                    <section className={styles.inputfield}>
                        <label>Data de nascimento:</label>
                        <input type="date"
                            value={birthday}
                            onChange={(param) => {
                                setBirthday(param.target.value);
                            }}
                            className={styles.inform}
                        />
                    </section>

                    <section className={styles.divBtn}>
                        {
                            show && (
                                <button onClick={editUser} className={styles.btn}>Editar</button>
                            )
                        }
                        {
                            !show && (
                                <button onClick={showUsers} className={styles.btn}>Registrar</button>
                            )
                        }
                    </section>
                </article>
                <article className={styles.userlist}>
                    <h2>Lista</h2>
                    <section className={styles.secusers}>
                        {
                            list.map((user) => (
                                <div key={user.id} className={styles.users}>
                                    <div className={styles.list}>
                                        <p><strong>Name:</strong> {user.name}</p>
                                        <p><strong>Id:</strong> {user.id}</p>
                                        <p><strong>Email:</strong> {user.email}</p>
                                        <p><strong>Idade:</strong> {user.age}</p>
                                    </div>
                                    <div className={styles.btnusers}>
                                        <button onClick={() => edit(user.name, user.email, user.birthdate, user.id)} className={styles.edit}>Editar</button>
                                        <button onClick={() => delet(user.id)} className={styles.delete}>Excluir</button>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                </article>
            </div>
            <Footer/>
        </main>
    );
}

export default Login;