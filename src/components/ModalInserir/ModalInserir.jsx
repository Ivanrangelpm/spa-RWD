import styles from "./ModalInserir.module.css"
import "./ModalInserir.scss"

export default function ModalInserir(props) {

   document.title= "CADASTRO";
   
   let novoId;

   fetch("http://localhost:5000/produtos",{
    method: "GET",
    headers:{
        "Content-Type":"application/json"
    }
   })
   .then((response)=> response.json())
   .then((data)=>{
    console.log(data)
    novoId = (data[data.length-1].id+1)
    return novoId;
    
    })
.catch(error=> console.log(error));



    if(props.open){
        return (
        <div className={styles.container}>
            <h1>CADASTRO DE PRODUTOS</h1>
            <button onClick={() => props.setOpen(false)}>CLOSE-MODAL</button>
            <div>
                <form>
                    <fieldset>
                        <legend>Novo Produto</legend>
                        <div>
                            <label htmlFor="idNome">Nome</label>
                            <input type="text" name="nome" id="idNome" placeholder="Digite o nome do produto"/>
                        </div>
                        <div>
                            <label htmlFor="idDesc">Descrição</label>
                            <input type="text" name="desc" id="idDesc" placeholder="Digite a descrição do produto"/>
                        </div>
                        <div>
                            <label htmlFor="idPreco">Preço</label>
                            <input type="number" name="preco" id="idPreco" placeholder="Digite o valor do produto"/>
                        </div>             
                        <div>
                            <label htmlFor="idImg">Imagem</label>
                            <input type="url" name="img" id="idImg" placeholder="Digite a url da imagem do produto"/>
                        </div>   
                        <div>
                            <button>CADASTRAR</button>    
                        </div>          
                    </fieldset>
                </form>
            </div>
        </div>
        );
    }
}
