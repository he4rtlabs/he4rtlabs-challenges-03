# Projeto 003 - Formulário Único
 
Um formulário de transição única para exercitar conceitos base tanto de frontend quanto de backend!

![Exemplo de Execução do Projeto](https://i.imgur.com/LWDXiYx.gif)
 
Por favor, ***leia todo o arquivo!***
 
## O Desafio
 
Um desafio para iniciantes, se dividindo em dois projetos:
 
- Frontend, com o objetivo de criar dois formulários em que a transição entre eles seja feita de forma suave, criando um efeito como se fosse o mesmo formulário.
- Backend, com a integração do login e do registro.
 
### Frontend
 
Criar dois formulários (um de login, e outro de registro) onde a transição seja feita de uma forma suave (representado no gif), criando um efeito como se fosse o mesmo formulário.
 
#### Desafios Extras
 
- Realizar a verificação de entrada dos dados (tamanho mínimo, existência de conteúdo nos campos.
- Criar toda a dinâmica utilizando apenas o [DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM), tendo no index.html apenas uma única div estando no body, e inserir os conteúdos por meio desta div.
- Criar um dashboard.
 
### Backend
 
Criar endpoints de autenticação (registro e login)

#### Desafios Extras
 
- Realizar a verificação dos dados (como por exemplo, se já está cadastrado no sistema).
- Verificação do email (usando SMTP ou algum serviço como sendgrid)
- Validar se a senha não está no top 1000 de senhas mais usadas (fracas)
- Criar hash da senha e guardar no banco (inMemory, sql, nosql...), e realizar comparação dos hash no login
- Criar documentação (redoc, swagger, markdown…) da api para facilitar a integração para o responsável pelo frontend
- Informações para dashboard
- - Dados do usuário
- - Listagem de usuários (caso seja admin)
- - Quantidade de registro no dia, semana…
- - Comparar quantidade registros no dia, semana, mês… anterior (para saber se houve aumento/baixa)
- Testes automatizados (integração, unidade, integridade [carga, estresse])...
 
## Regras
 
Não necessariamente precisa seguir todos os requisitos a risco, mas iremos dar prioridade para projetos que estarão dentro das seguintes regras:
 
- Não utilizar frameworks no Frontend (Template Engine, CSS, JS).
- Não utilizar query builder no Backend (ORMs, LINQ, Jinq, …).
- É permitido a utilização de qualquer padronização de projeto (MVC, API Rest).
- É permitido a utilização de empacotadores de módulo (webpack, snowpack, etc…).
- Se for realizar tanto o backend quanto o frontend, fazer a integração de ambos os sistemas.
- Não precisa seguir o exemplo padrão do desafio.
- É permitido apenas html, css e js para o Frontend.
- É permitido qualquer tipo de linguagem para o Backend.

 
#### Só quero fazer um dos desafios, posso?
 
Sim! Por mais que seja voltado ao FullStack, nada te impede de fazer apenas um dos projetos.
 
#### Projeto Final
 
O projeto irá ficar público(o do gif de exemplo), ficará disponível apenas depois de duas semanas da criação do desafio.
 
#### Tempo
 
Não possui tempo assim como os outros He4rt Challenges, mas priorizamos os projetos que serão enviados próximo a data de lançamento do desafio.
 
#### Como Enviar
 
- Crie um repositório intitulado `he4rtlabs-challenges-03-resolution`.
- Adicionar um README.md explicando sobre o projeto.
- Postar no [Discord da He4rt](http://discord.io/he4rt) no canal `he4rt-challenges` ou marcar a He4rt no [Twitter](https://twitter.com/He4rtDevs).
 
## Dicas
 
- Utilizar setTimeout() no mesmo tempo que as transições do css.
- Na troca para novo formulário, remover o antigo e inserir o novo.
- Utilizar z-index se preferir manter os dois formulários no DOM.
 
## Dúvidas
 
Acesse o discord da [He4rt](discord.io/he4rt), onde iremos ajudar no desenvolvimento de seu projeto do desafio!
 
## Créditos
 
Este desafio foi desenvolvido pelo grupo He4rt Developers para uso livre da comunidade.
 
## Autores
 
Idealizador do Frontend: Giovane Cardoso, Desenvolvedor - [Github](https://github.com/Novout) - [Twitter](https://twitter.com/NovoutT)
 
Idealizador do Backend: Ruan Carlos CS, Desenvolvedor - [Github](https://github.com/Logikoz) - [Twitter](https://twitter.com/Logikoz)

