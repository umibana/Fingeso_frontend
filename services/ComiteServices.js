import Api from "~/services/Api";

export default {
  getEvaluadores(id){
    return Api().get('Comite/Evaluadores/'+id);
  },
  getEvaluados(data){
    return Api().put('Comite/Evaluados',data);
  },
  deleteComite(id){
    return Api().delete('/Comite/'+id)
  }
}
