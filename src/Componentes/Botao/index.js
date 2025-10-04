import './botao.css'
const Botao = ({ children, type = 'submit' }) => (
  <button className="botao" type={type}>{children}</button>
)
export default Botao;