import React from 'react'
import { useParams } from 'react-router-dom'
import { ListaProdutos } from '../components/ListaProdutos';

export default function EditarProdutos() {

  document.title = "EDITAR PRODUTO";

  const {id} = useParams();

  const produtoRecuperado = ListaProdutos.filter((produto) => produto.id == id)[0]


      
  return (
    <>
        <div>
          <form>
            <fieldset>
              <legend>Produto Selecionado</legend>
              <div>
                <label htmlFor="idNome">Nome</label>
                <input type="text" name="nome" id="idNome" defaultValue={produtoRecuperado.nome}/>
              </div>
              <div>
                <label htmlFor="idDesc">Descrição</label>
                <input type="text" name="desc" id="idDesc" defaultValue={produtoRecuperado.desc}/>
              </div>
              <div>
                <label htmlFor="idPreco">Preço</label>
                <input type="text" name="preco" id="idPreco" defaultValue={produtoRecuperado.preco}/>
              </div>
              <div>
                <button>EDITAR</button>
              </div>
            </fieldset>
          </form>
        </div>
    </>
    
  )
}
  




































// import { useParams } from "react-router-dom"
// import { ListaProdutos } from "../components/ListaProdutos";

// export default function EditarProdutos() {

//   document.title = "EDITAR PRODUTO"

//   const {id} = useParams();

//   const produtoRecuperado = ListaProdutos.filter((produto) => {
//      if(produto.id == id){
//         return produto;
//      }
//   });

//   const objProdutoRecuperado = produtoRecuperado[0];

//   return (
//     <>
//     <div>
//       <form>
//         <fieldset>
//           <legend>Produto selecionado</legend>
//           <div>
//           <label htmlFor="idNome">Nome</label>
//           <input type="text" name="nome" id="idNome" defaultValue={produtoRecuperado.nome}/>
//    </div>
//    <div>
//                 <label htmlFor="idDesc">Descrição</label>
//                 <input type="text" name="desc" id="idNome" defaultValue={produtoRecuperado.nome}/>
//               </div>
//         </fieldset>
//       </form>
//     </div>
//       <h1>EditarProdutos</h1>
//       <h2>PRODUTO</h2>
//       <p>NOME : {objProdutoRecuperado.nome}</p>
//       <p>DESCRIÇÂO : {objProdutoRecuperado.desc}</p>
//       <p>PREÇO : {objProdutoRecuperado.preco}</p>
//     </>
//   );
// }
