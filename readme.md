Aqui está um exemplo de README para o seu projeto **Podcast Menager**:

---

# Podcast Menager

## Descrição

**Podcast Menager** é uma aplicação inspirada na interface estilo Netflix, projetada para centralizar diferentes episódios de podcasts, organizados por categorias. O objetivo é criar uma experiência amigável e intuitiva para que os usuários possam explorar e encontrar podcasts em vídeo com facilidade.

### Domínio

- Podcasts organizados por categorias.
- Foco em podcasts feitos em vídeo.

### Features

- **Listar Podcasts**: Mostra os podcasts disponíveis, organizados em categorias específicas, como Saúde, Bodybuilder, Mentalidade, Humor, Esporte e Corrida.
- **Filtrar Episódios**: Permite a busca de episódios específicos, filtrando pelo nome do podcast.

## Funcionalidades

### Listar Episódios de Podcasts por Categoria

**Endpoint:** `GET /api/list`  
**Descrição:** Retorna uma lista de todos os episódios disponíveis, organizados por categorias.

**Resposta (JSON):**

```json
[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow # 319",
        "videoId": "5DaLlqP-8uI",
        "cover": "https://i.ytimg.com/vi/5DaLlqP-8uI/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=5DaLlqP-8uI&t=1s",
        "categories": ["saude", "esporte", "bodybuilder"]
    },
    {
        "podcastName": "flow",
        "episode": "RUBENS BARRICHELLO - Flow # 339",
        "videoId": "4KDGTdiOV4I",
        "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        "categories": ["esporte", "corrida"]
    }
]
```

### Filtrar Episódios por Nome de Podcast

**Endpoint:** `GET /api/episode?p={nome_do_podcast}`  
**Descrição:** Retorna uma lista de episódios que correspondem ao nome do podcast fornecido como parâmetro.

**Exemplo de Uso:**

```
GET /api/episode?p=flow
```

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para o backend.
- **API REST**: Para comunicação entre cliente e servidor, usando JSON como formato de dados.
- **HTTP**: Utilização do módulo HTTP nativo do Node.js para lidar com requisições.

## Estrutura do Projeto

```plaintext
.
├── controllers
│   └── podcasts-controller.js    # Controladores para as rotas de podcast
├── routes
│   └── routes.js                 # Definição das rotas da API
├── utils
│   └── http-methods.js           # Métodos HTTP usados na aplicação
└── app.js                        # Arquivo principal da aplicação
```

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/podcast-menager.git
   ```
2. **Instale as dependências**:
   ```bash
   npm install
   ```
3. **Execute o servidor**:
   ```bash
   npm start:dev
   ```
4. Acesse a API em `http://localhost:3333`.

## Como Funciona o Código

### Arquivo Principal (`app.js`)

O arquivo `app.js` contém a lógica de roteamento da aplicação:

- **GET /api/list**: Chama o controlador `getListEpisodes` para listar todos os episódios disponíveis.
- **GET /api/episode**: Utiliza um parâmetro de query `p` para filtrar episódios específicos com base no nome do podcast fornecido.

### Exemplo de Implementação

```javascript
import type * as http from "node:http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

export const app = async (
    req: http.IncomingMessage,
    res: http.ServerResponse,
) => {
    // Extrai a base da URL
    const baseUrl = req.url?.split("?")[0];

    // Lista podcasts no endpoint /api/list
    if (req.method === HttpMethods.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res);
    }

    // Filtra podcasts no endpoint /api/episode
    if (req.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(req, res);
    }
};
```

## Como Contribuir

1. **Faça um Fork do projeto**.
2. **Crie uma branch para sua feature**:
   ```bash
   git checkout -b minha-feature
   ```
3. **Commit suas mudanças**:
   ```bash
   git commit -m 'Minha nova feature'
   ```
4. **Envie para a branch principal**:
   ```bash
   git push origin minha-feature
   ```
5. **Abra um Pull Request**.

## Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE`.

---