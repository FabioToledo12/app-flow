import type { PodcastModel } from "./podcast-model";

// export interface FilterPodcastModel {
// 	statusCode: number;
// 	body: PodcastModel[];
// }

// modificar o nome da interface pois mais de um lugar esta recebendo ela
export interface PodcastTransferModel {
	statusCode: number;
	body: PodcastModel[];
}
