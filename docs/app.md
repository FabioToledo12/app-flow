# Podcast Menager

## -> O que eu quero:

### Descrição
Um app ao estilo netflix, onde possa centralizar diferentes episodios podcasts separados por categoria

### Dominio
Podcasts feitos em video

### Features
- Listar os podcasts em sessões de categorias
    - [ Saude, bodybuilder, mentalidade, humor, esporte, corrida ]
- Filtrar episodios por nome de podcast



## -> Como vou fazer

#### Feature
- Listar os podcasts em sessões de categorias
GET -> Retorna uma lista de todos os episodios disponiveis na nossa fonte de dados

### Como vou implementar
    Vou retornar em uma api rest (json) 
      -> nome podcast, 
      -> nome do episodio, 
      -> imagem de capa, 
      -> link

```js
[
    {
        podcastName: "flow",
        episode: "CBUM - Flow # 319",
        videoId: "5DaLlqP-8uI"
        cover: "https://i.ytimg.com/vi/5DaLlqP-8uI/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=5DaLlqP-8uI&t=1s",
        categories: [ "saude", "esporte", "bodybuilder"],
    },
    {
        podcastName: "flow",
        episode: "RUBENS BARRICHELLO - Flow # 339",
        videoId: "4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        categories: [ "esporte", "corrida"],
    }
]
```

- Filtrar episodios por nome de podcast

GET -> retorna lista de epidodios baseado em um parametro enviado pelo cliente do nome do podcast