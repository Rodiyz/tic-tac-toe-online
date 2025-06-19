import { gameRepository } from "../repositories/game";

export async function getIdleGames()  {
  await gameRepository.gamesList();
};