import * as http from 'node:http';
import { app } from './app';

// const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {
    
//     // queryString
//     // http://localhost:3333/api/episode?p=flow
//     const [ baseUrl, queryString ] = req.url?.split('?') ?? ["", ""]

//     // listar podcasts do endpoint /api/list
//     if ( req.method === HttpMethods.GET && baseUrl === Routes.LIST ) {
//         await getListEpisodes(req, res)
//     }
    
//     // filtrar podcasts do endpoint /api/episode
//     if ( req.method === HttpMethods.GET && baseUrl === Routes.EPISODE ) {
//         await getFilterEpisodes(req, res)
//     }
// } )

const server = http.createServer(app)

const port = process.env.PORT

server.listen( port , () => {
    console.log(`Server is running on port ${port}`)
} )