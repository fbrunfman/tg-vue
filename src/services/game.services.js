import service from './service';

const resource = 'games';

export default {
   get() {
      return service.get(`${resource}`);
   },

   // getGame(gameId: number) {
   //    return service.get(`${resource}/${gameId}`);
   // },

   // createGame(game: Game) {
   //    return service.post(`${resource}`, game);
   // },

   validGameNickname(data) {
      return service.post(`${resource}/valid_nickname`, data);
   }
};