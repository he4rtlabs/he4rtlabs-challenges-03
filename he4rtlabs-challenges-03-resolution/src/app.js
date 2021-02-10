/* eslint-disable no-multi-assign */
/* eslint-disable no-unused-vars */
import './styles/global.sass';
import './styles/body.sass';
import '../assets/he4rt-footer-white.png';
import './styles/logo.sass';
import './styles/footer.sass';
import './styles/backgroundForm.sass';
import './styles/loginForm.sass';
import './styles/registerForm.sass';
import '../assets/he4rt-footer-black.png';

// JS

import onRegister from './Handlers/onRegister';

// const App = (document.createElement('div').innerHTML =
//   '<form class="LoginForm"><label for="username">Usuário</label><input id="username" type="text" placeholder="Digite seu usuário" /><label for="password">Senha</label><input id="password" type="password" placeholder="Digite sua senha" /><button>Login</button></form>');

document.getElementById('App').innerHTML =
  '<form class="LoginForm" id="LoginForm"><label for="username">Usuário</label><input id="username" type="text" placeholder="Digite seu usuário" /><label for="password">Senha</label><input id="password" type="password" placeholder="Digite sua senha" /><button type="submit">Login</button></form>';
document.getElementById('FooterButton').onclick = (e) => onRegister(e);
