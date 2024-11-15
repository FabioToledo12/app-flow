## Iniciar um projeto node

### Criar o Json (package.json)
-> npm init -y 

### Instalar o typescript
-> npm install typescript tsx tsup -D
- (typescript <-> superset do javascript)
- (tsx <-> executar typescript)
- (tsup <->  converter typescript em javascript)

### Criar o gitinore
-> .gitignore (jogar a /node_modules)

### Inicialiazar o tsc 
-> npx tsc --init (criar o arquivo tsconfig.json)

### Criar os scripts em package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:dev": "tsx src/server.ts",
    "start:watch": "tsx watch src/server.ts",
    "dist": "tsup src",
    "start:dist": "npm run dist && node dist/server.js"
  },

### Pastas principais para ter no projeto
- src
    - controllers
    - services
    - data

### Por estarmos desenvolvendo em typesript necessario baixar
    -> npm i @types/node

### Criar um arquivo .env (deixar algumas constantes)
    - Fora do SRC criar um .env
    - Dentro do .env criar o PORT = 3333 (porta a ser utilizada)
    - Para acessar dentro da aplicação node é necessário definir "--env-file=.env"  no script ( "start:dev": "tsx --env-file=.env src/server.ts", )
    
    -> Ficaria dessa forma aogra os scripts
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:dev": "tsx --env-file=.env src/server.ts",
    "start:watch": "tsx watch --env-file=.env src/server.ts",
    "dist": "tsup src",
    "start:dist": "npm run dist && node dist/server.js"
  },

### Arquitetura de Software (Responsabilidades)
    - Controllers: Responsável por receber as requisições e repassar para o service (recebe solicitacao e devolve resposta)
    - Services: Responsável por fazer a lógica de negócio, tratativas ( solicita os dados ao data/repository )
    - Data/Repository: Responsável por fazer a comunicação com o banco de dados ( Le o banco e devolve para o service )

### Arquivo json para listagem era dessa forma antes de passar pro json
[
    {
        podcastName: "flow",
        episode: "CBUM - Flow # 319",
        videoId: "5DaLlqP-8uI",
        // cover: "https://i.ytimg.com/vi/5DaLlqP-8uI/maxresdefault.jpg",
        // link: "https://www.youtube.com/watch?v=5DaLlqP-8uI&t=1s",
        categories: ["saude", "esporte", "bodybuilder"],
    },
    {
        podcastName: "flow",
        episode: "RUBENS BARRICHELLO - Flow # 339",
        videoId: "4KDGTdiOV4I",
        // cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        // link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        categories: ["esporte", "corrida"],
    }
]

quando transforma em um arquivo .json fica assim:

[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow # 319",
        "videoId": "5DaLlqP-8uI",
        "categories": ["saude", "esporte", "bodybuilder"]
    },
    {
        "podcastName": "flow",
        "episode": "RUBENS BARRICHELLO - Flow # 339",
        "videoId": "4KDGTdiOV4I",
        "categories": ["esporte", "corrida"]
    }
]

### 