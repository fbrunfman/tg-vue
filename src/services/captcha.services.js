import service from './service';

const resource = 'captcha';

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

   login(data) {
    return service.post('loginCaptcha', data)
}
};