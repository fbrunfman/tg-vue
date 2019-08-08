import service from './service';

const resource = 'translation';

export default {
    getTraslationPage(objectKey) {
        return service.post(`${resource}`, objectKey);
    },

   //  getTranslation(translateId: number) {
   //      return service.get(`${resource}/${translateId}`);
   //  },

   //  createTranslation(translation: Translation) {
   //      return service.post(`${resource}`, translation);
   //  },
};