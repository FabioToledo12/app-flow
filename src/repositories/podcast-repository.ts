import fs from "node:fs";
import path from "node:path";
import type { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json"); //Procura diretamente a pasta src dentro dos diretorio do projeto

export const repoPodcast = async ( podcastName?: string ): Promise<PodcastModel[]> => {
	const language = "utf-8"
	
	const rawData = fs.readFileSync( pathData, language );
	let jsonFile = JSON.parse(rawData);

	if ( podcastName ){
		jsonFile = jsonFile.filter( 
			( podcast: PodcastModel ) =>  podcast.podcastName === podcastName 
		);
	}

	return jsonFile;
};


// modulo dinamico parei
