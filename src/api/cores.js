import axios from "axios";
export default class CoresApi {
  async buscarTodasAsCores() {
    const { data } = await axios.get("/cor/");
    return data.results;
  }
  async adicionarCor(cor) {
    const { data } = await axios.post("/cor/", cor);
    return data.results;
  }
  async atualizarCor(cor) {
    const { data } = await axios.put(`/cor/${cor.id}/`, cor);
    return data.results;
  }
  async excluirCor(id) {
    const { data } = await axios.delete(`/cor/${id}/`);
    return data.results;
  }
}