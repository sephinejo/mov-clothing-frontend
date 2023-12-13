import './Home.css';
import Sustainability from '../components/Sustainability';
import Divider from '../components/Divider';
import Newsletter from '../components/Newsletter';

function Home() {
  return (
    <div className='home'>
      <Sustainability />
      <Divider />
      <Newsletter />
      <Divider />
    </div>
  );
}

export default Home;
