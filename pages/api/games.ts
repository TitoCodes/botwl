import monk from "monk";
import GameModel from "../../model/GameModel";
import GameResultDto from "../../Dto/GamesResultDto";
import { mapper } from "../../utility/utility";

let connectionString =
  process.env.MONGODB_CONNECTION_STRING != null
    ? process.env.MONGODB_CONNECTION_STRING
    : "";

const db = monk(connectionString);
const games = db.get("games");
db.then(() => {
  console.log("Connected correctly to server");
}).catch((err) => {
  console.error(err);
});

async function retrieveGames() {
  return games.find({});
}

function createGameDto(game: GameResultDto) {
  return new GameModel(
    game.name,
    `/resources/images/games/${game.imageSrc}`,
    game.description,
    game.gameStatus,
    game.playlistLink
  );
}

export default async function handler(req: Request, res: any) {
  if (req.method === "GET") {
    try {
      await retrieveGames()
        .then((games) => {
          return mapper(games, createGameDto);
        })
        .then((result) => {
          res.status(200).json(result);
        });

    } catch (err) {
      res.status(err).json({});
    }
  } else {
    res.status(405);
    res.end();
  }
}
