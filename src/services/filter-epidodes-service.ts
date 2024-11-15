import type { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { repoPodcast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
	podcastName: string | undefined,
): Promise<PodcastTransferModel> => {
	// define a interface de retorno
	// biome-ignore lint/style/useConst: <explanation>
	let responseFormat: PodcastTransferModel = {
		statusCode: 0,
		body: [],
	};

	// buscando os dados
	// http://localhost:3333/api/episode?p=flow
	const queryString = podcastName?.split("?p=")[1] || "";

	const data = await repoPodcast(queryString);

	// verifico de tem conteudo
	
	// Modificar o if else deixando mais elgante
	responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

	// if (data.length !== 0) {
	// 	responseFormat.statusCode = StatusCode.OK;
	// } else {
	// 	responseFormat.statusCode = StatusCode.NO_CONTENT;
	// }

	responseFormat.body = data;
	return responseFormat;
};
