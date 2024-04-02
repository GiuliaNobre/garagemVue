import axios from "axios";
export default class AcessoriosApi {
  async buscarTodosOsAcessorios() {
    const { data } = await axios.get("/acessorio/");
    return data.results;
  }
  async adicionarAcessorio(acessorio) {
    const { data } = await axios.post("/acessorio/", acessorio);
    return data.results;
  }
  async atualizarAcessorio(acessorio) {
    const { data } = await axios.put(`/acessorio/${acessorio.id}/`, acessorio);
    return data.results;
  }
  async excluirAcessorio(id) {
    const { data } = await axios.delete(`/acessorio/${id}/`);
    return data.results;
  }
}