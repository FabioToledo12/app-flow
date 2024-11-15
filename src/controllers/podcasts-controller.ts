// biome-ignore lint/style/useImportType: <explanation>
import { IncomingMessage, ServerResponse } from "node:http";
import type { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { serviceFilterEpisodes } from "../services/filter-epidodes-service";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { ContentType } from "../utils/content-type";

const DEFAULT_CONTENT = { "Content-Type": ContentType.JSON } 

export const getListEpisodes = async (
	req: IncomingMessage,
	res: ServerResponse,
) => {
	const content: PodcastTransferModel = await serviceListEpisodes();

	res.writeHead( content.statusCode, DEFAULT_CONTENT );
	res.write( JSON.stringify( content.body ) )
	res.end();
};

export const getFilterEpisodes = async (
	req: IncomingMessage,
	res: ServerResponse,
) => {
	// retirar a responsabilidade do controller e colocar no service
	// http://localhost:3333/api/episode?p=flow
	// const queryString = req.url?.split('?p=')[1] || ""

	const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

	res.writeHead( content.statusCode, DEFAULT_CONTENT );
	res.write( JSON.stringify( content.body ) )
	res.end();
};
