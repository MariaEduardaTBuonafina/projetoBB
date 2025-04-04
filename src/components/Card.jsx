import '../assets/styles/nav.module.css'
function Card(props){
    return (
        <div className="imagemcartao"
>        <div className="card" >
             <img src="https://www.toroinvestimentos.com.br/assets-next/images/lp-parceiros-trader/n-assessoria-2x.webp" alt="imagem">
             </img>
             <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Algum conteúdo aqui.</p>
             <a href="www.toroinvestimentos.com.br" className="btn btn-primary">ir ao site</a>
                </div>
        </div>
    </div>        
    )
}
export default Card