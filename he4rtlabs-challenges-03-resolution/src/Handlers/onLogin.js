/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import onRegister from './onRegister';

export default function onLogin(e) {
  e.preventDefault();
  document.getElementById('App').innerHTML = '';
  document.getElementById('App').innerHTML =
    '<form class="LoginForm" id="LoginForm"><label for="username">Usuário</label><input id="username" type="text" placeholder="Digite seu usuário" /><label for="password">Senha</label><input id="password" type="password" placeholder="Digite sua senha" /><button type="submit">Login</button></form>';
  document.getElementById('Wrapper').style.backgroundColor = '#121212';
  document.getElementById('Footer').style.backgroundColor = '#fff';
  document.getElementById('BackgroundForm').style.backgroundColor = '#fff';
  document.getElementById('BackgroundForm').style.borderColor = '#BB86FC';
  // eslint-disable-next-line no-return-assign
  document
    .querySelectorAll('label')
    .forEach((l) => (l.style.color = '#121212'));
  document.getElementById('FooterButton').style.borderColor = '#BB86FC';
  document.getElementById('FooterButton').innerText = 'Register';
  document.getElementById('Logo').src = './images/he4rt-footer-white.png';
  document.getElementById('FooterButton').onclick = (event) =>
    onRegister(event);
}
