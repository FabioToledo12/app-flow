import type * as http from "node:http";

import {
	getFilterEpisodes,
	getListEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

export const app = async (
	req: http.IncomingMessage,
	res: http.ServerResponse,
) => {
	// queryString
	// http://localhost:3333/api/episode?p=flow
	const baseUrl = req.url?.split("?")[0];

	// listar podcasts do endpoint /api/list
	if (req.method === HttpMethods.GET && baseUrl === Routes.LIST) {
		await getListEpisodes(req, res);
	}

	// filtrar podcasts do endpoint /api/episode
	if (req.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
		await getFilterEpisodes(req, res);
	}
};
