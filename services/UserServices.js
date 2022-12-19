import Api from "~/services/Api";

export default {
  matchUser(data){
    return Api().post('/User/login',data);
  },
  getRol(data){
    return Api().get('/User/'+data);
  }
}
