import './App.css';
import Banner from './components/banner/Banner';
import TestBanner from './components/banner/TestBanner';
import FrequentlyAsked from './components/faq/FrequentlyAsked';
import Footer from './components/footer/Footer';
import GlobalHeader from './components/globalHeader/GlobalHeader';
import Header from './components/globalHeader/Header';
import MoreProducts from './components/moreProducts/MoreProducts';
import PriceCard from './components/priceCard/PriceCard';
import PriceTable from './components/priceTable/PriceTable';

function App() {
  return (
    <>
      {/* Response  */}


      <GlobalHeader/>
      <Header/>
      <TestBanner/>

      <PriceCard/>

      {/* <Banner/> */}
      <PriceTable/>


      {/* Responsive */}


      <FrequentlyAsked/>
      <MoreProducts/>


      {/* <Footer/> */}
      
    
    </>
  );
}

export default App;
