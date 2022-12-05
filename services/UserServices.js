import Api from "~/services/Api";

export default {
  getUsers(){
    return Api().get('/User')
  },
  matchUser(data){
    return Api().post('/User/login',data);
  }
}
