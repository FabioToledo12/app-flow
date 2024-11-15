// import { } from "../controllers/podcasts-controller"

import type { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { repoPodcast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
	// define a interface de retorno (contrato)
	let responseFormat: PodcastTransferModel = {
		statusCode: 0,
		body: [],
	};

    // buscando os dados
	const data = await repoPodcast();

    // verifico tipo de resposta
	responseFormat = {
		statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    }

	return responseFormat;
};
