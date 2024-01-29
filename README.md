# Imersão Front-End Alura - Projeto usando react

Projeto desenvolvido durante a Imersão Front-End Alura, com o objetivo de criar um site parecido com spotify.

O projeto ainda usa javascript puro mas será migrado para react.

Existe uma API de teste que usa Json Server e pode ser executada usando os comandos:

```bash
docker build -t json-server-alura .
docker run -p 3000:3000 -d json-server-alura
```

Para executar a aplicação, basta rodar o comando:

```bash
npm start
```

Os dois comandos serão agrupadas em um único docker compose futuramete.