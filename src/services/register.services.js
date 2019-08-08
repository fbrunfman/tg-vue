import service from './service';

const resource = 'register';

export default {

   registerUser(data) {
      return service.post(`${resource}`, data);
   },
   resendEmail(data) {
       return service.post('resendEmail', data)
   }
};