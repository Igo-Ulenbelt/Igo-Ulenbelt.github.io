import {LitElement, css, html} from 'lit'
import KPNLogo from "../../../images/kpnLogo.svg";
import rawUsers from "../../../json/user.json";
const users = rawUsers.users;

export class Login extends LitElement {
    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const employee = form.employee.value;
        const password = form.password.value;
        const remember = form.remember.checked;

        if (!employee || !password) {
            alert('Please fill in all required fields.');
        }

        const user = users.find(user => user.email === employee);
        if (!user) {
            alert('Onjuiste inloggegevens.');
            return;
        }

        if (user.password === password) {
            localStorage.setItem('user', JSON.stringify(user));
            window.location.reload();
        } else {
            alert('Onjuiste inloggegevens.');
        }
    }

    render() {
        return html`
            <div class="container">
                <main class="login">
                    <h1>Log in met je account</h1>
                    <div class="white-block">
                        <form @submit="${this.handleSubmit}" class="form-login">
                            <label for="employee">Email</label>
                            <br>
                            <input type="email" id="employee" name="employee" placeholder="test@test.nl" required/>
                            <br><br>
                            <label for="password">Wachtwoord</label>
                            <br>
                            <input type="password" id="password" name="password" placeholder="********" required/>
                            <br>
                            <div class="extra-options">
                                <div class="remember-me">
                                    <input type="checkbox" id="remember" name="remember"/>
                                    <label for="remember">Onthoud mij</label>
                                </div>
                                <a href="#" class="password-forget">Wachtwoord vergeten?</a>
                            </div>

                            <button type="submit">inloggen</button>
                        </form>
                        <div class="logo">
                            <img src="${KPNLogo}" alt="KPN Logo">
                        </div>
                    </div>
                </main>
            </div>`;
    }

    static styles = css`
        .container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login {
            width: 60%;
        }

        .white-block {
            color: var(--kpn-black);
            background-color: var(--kpn-white);
            width: 100%;
            margin-top: 20px;
            padding: 20px;
            display: flex;
            border-radius: 10px;
        }

        .form-login {
            width: 50%;
        }

        .form-login input:not([type="checkbox"]) {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid var(--kpn-black);
            border-radius: 5px;
        }

        .extra-options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
        }

        .remember-me {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 5px;
            accent-color: var(--kpn-green);
            width: fit-content;
        }

        .password-forget {
            text-align: right;
        }

        button[type="submit"] {
            font-size: 1.2rem;
            margin-top: 10px;
            width: 100%;
            padding: 10px;
            background-color: var(--kpn-blue);
            color: var(--kpn-white);
            border: none;
            border-radius: 9999px;
            cursor: pointer;
        }

        .logo {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .logo img {
            width: 100%;
            height: auto;
        }

        @media (max-width: 768px) {
            .white-block {
                flex-direction: column;
            }

            .form-login {
                width: 100%;
            }

            .logo {
                display: none;
            }
        }

        @media (max-width: 576px) {
            .login {
                width: 90%;
            }
        }

        @media (max-width: 400px) {
            .extra-options {
                flex-direction: column;
                gap: 20px;
            }
        }
    `;
}

window.customElements.define('kpn-login', Login);