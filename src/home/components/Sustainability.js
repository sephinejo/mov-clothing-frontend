import Button from '../../shared/components/Button/Button';
import './Sustainability.css';

function Sustainability() {
  return (
    <div className='sustainability'>
      <h2>Better Looks, Sustainable World</h2>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quasi
        quidem rem quibusdam!
      </h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
        doloremque culpa error deserunt aperiam iure natus consequatur quae aut
        animi enim voluptatem, labore suscipit exercitationem reiciendis eos
        sapiente fugiat, voluptates ut iusto hic delectus optio. Dicta
        doloremque quas, earum exercitationem sequi quam minima porro
        accusantium rerum eveniet atque harum quis?
      </p>
      <div className='sustainability-imgs'>
        <img
          src='https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='sustainability'
        />
        <img
          src='https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNsb3RoaW5nfGVufDB8MXwwfHx8Mg%3D%3D'
          alt='clothing'
        />
      </div>
      <Button>Article</Button>
    </div>
  );
}

export default Sustainability;
