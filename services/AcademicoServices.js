import Api from "~/services/Api";
export default {
  getAcademico(id) {
    return Api().get('/Academico/'+String(id))
  }
}
