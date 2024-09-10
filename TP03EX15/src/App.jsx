import './App.css'
import Product from './components/Product.jsx'
function App() {


  return (
    <>
      <Product nome={"Smartphone Samsung"} preco='R$ 4000' descricao='O smartphone Samsung 
      combina design moderno com desempenho potente. Possui tela nítida, câmeras de alta
      qualidade e bateria duradoura, oferecendo uma experiência completa com o sistema
      Android e suporte a 5G.'/>
      
      <Product nome={"Smartphone Apple Iphone"} preco='R$ 12000' descricao='O iPhone 
      é um smartphone da Apple com design sofisticado, desempenho rápido e câmera
      avançada. Oferece uma experiência fluida com iOS, tela de alta qualidade e recursos
      como Face ID e 5G.' />

    <Product nome={"Smartphone Oukitel"} preco='R$ 1200' />
      
    </>
  )
}

export default App
