import Table from './src/components/Table';
import Card from './src/components/Card';
import FooterPagHome from './src/components/FooterPagHome';
import HeaderPagHome from './src/components/HeaderPagHome';
import NavPagHome from './src/components/NavPagHome';



export function App() {
  return (
    <div>
      <Nav/>
      <Cartao width='50px'/>
      <div class="imagem">
        <h2>O seu jeito novo de Investir</h2>
        <img class="imagem" src="https://www.nuinvest.com.br/hero_background-3.webp"  ></img>
      </div>
      
      <Table/>
      <div class="imagem">
        
      <img class="imagem" src="https://www.toroinvestimentos.com.br/assets-next/images/lp-parceiros-trader/n-profit-2x.webp"  ></img>
      
      
      
        
      <img class="imagem" display="flex" src="https://files.sunoresearch.com.br/p/uploads/2019/09/grandes-investidores.jpg"  ></img>
      </div>
      <FooterPagHome/>
      
    </div>
    
)
}


