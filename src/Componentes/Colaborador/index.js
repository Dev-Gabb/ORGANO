import './colaborador.css';

const Colaborador = ({nome, imagem, cargo}) => {
  return ( <div className='Colaborador'>
        <div className='cabecalho'>
            <img src={imagem} alt={nome} />
            <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            </div>

        </div>  


    </div>
  );
};

export default Colaborador;
