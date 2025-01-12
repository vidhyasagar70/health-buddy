import Header from './components/header/header';
import Headericon from "./components/header/headericon";
import BannerCarousel from './components/banner/banner';
import FAQ from './components/faq/faq';
import LifeStyle from './components/lifestyle/lifestyle';
import Reviews from './components/userreview/review';
import Trust from './components/trust/trust';
import Healthpackage from './components/health-packages/healthpackage';
import Labvisit from './components/labvisit/labvisit';
import BookingCarousel from './components/booking/booking';
import Secure from './components/secure/secure';
import How from './components/how/how';
import Footer from './components/footer/footer';
function App() {
  return (
    <div>
    <Header/>
    <Headericon/>
    <BannerCarousel/><br></br>
    <Healthpackage/>
    <BookingCarousel/>
    <Labvisit/>
    <Trust/>
    <Reviews/>
    <LifeStyle/>
    <How/>
    <Secure/>
    <FAQ/>
    <Footer/>
    </div>
  );
}

export default App;
