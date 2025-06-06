import { GameEntity } from "../domain";

export const gameRepository = {
  gameList: (): Promise<GameEntity[]> => {},
};