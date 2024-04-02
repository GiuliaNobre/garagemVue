import axios from "axios";
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const { data } = await axios.get("/categoria/");
    return data.results;
  }
  async adicionarCategoria(categoria) {
    const { data } = await axios.post("/categoria/", categoria);
    return data.results;
  }
  async atualizarCategoria(categoria) {
    const { data } = await axios.put(`/categoria/${categoria.id}/`, categoria);
    return data.results;
  }
  async excluirCategoria(id) {
    const { data } = await axios.delete(`/categoria/${id}/`);
    return data.results;
  }
}
