/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import onLogin from './onLogin';

export default function (e) {
  e.preventDefault();
  setTimeout(() => {
    document.getElementById('Wrapper').style.backgroundColor = '#BB86FC';
    document.getElementById('App').innerHTML = '';
    document.getElementById('App').innerHTML =
      '<form class="RegisterForm" id="RegisterForm"><label for="username">Usuário</label><input id="username" type="text" placeholder="Digite seu usuário" /><label for="username">Email</label><input id="email" type="text" placeholder="Digite seu usuário" /><label for="username">Senha</label><input id="password" type="password" placeholder="Digite seu usuário" /><label for="password">Confirmação de Senha</label><input id="passwordConfirm" type="password" placeholder="Digite sua senha novamente"/><button type="submit">Registrar</button></form>';
    document.getElementById('Footer').style.backgroundColor = '#121212';
    document.getElementById('BackgroundForm').style.backgroundColor = '#121212';
    document.getElementById('BackgroundForm').style.borderColor = '#fff';
    // eslint-disable-next-line no-return-assign
    document.querySelectorAll('label').forEach((l) => (l.style.color = '#fff'));
    document.getElementById('FooterButton').style.borderColor = '#fff';
    document.getElementById('FooterButton').innerText = 'Login';
    document.getElementById('Logo').src = './images/he4rt-footer-black.png';
    document.getElementById('FooterButton').onclick = (event) => onLogin(event);
  }, 300);
}
