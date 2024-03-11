import React ,{useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import mango from '../../Assets/Images/mango.jpeg'
import { Link } from 'react-router-dom';

const AddtoCart = () => {
    const [counter, setCounter] = useState(0);
     const [quantity, setQuantity] = useState(1);
  
    const handleIncrement = () => {
      setCounter(counter + 1);
    };
  
    const handleDecrement = () => {
      // Ensure the counter doesn't go below zero
      if (counter > 0) {
        setCounter(counter - 1);
      }
    };
  
    const handleQuantityChange = (event) => {
      const newQuantity = parseInt(event.target.value, 10) || 1;
      setQuantity(newQuantity);
    };
  
    const totalPrice = counter * quantity;
    return (
        <div className='cart'>
            <div className='head-section'>
                <div className='coustom_container'>
                    <div className='cart-home'>
                        <h3>Cart</h3>
                        <p><Link>Home</Link><span>/</span>Cart</p>
                    </div>
                </div>
            </div>

            <div className='coustom_container'>
                <div className='table-section'>
                    <div className='table-main-div'>
                        <table>
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantitiy</th>
                                <th>Total</th>
                                <th>Action</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>

                                <td>
                                    <Link to="/" className='product'>
                                        <img src={mango} />
                                        <p>Organic Lemon</p>
                                    </Link>
                                </td>
                                <td>
                                    $50
                                </td>
                                <td>
                                    <div className='incre'>
                                        <button onClick={handleIncrement}>+</button>
                                        <p >{counter}</p>
                                        <button onClick={handleDecrement}>-</button>
                                    </div>

                                </td>
                                <td>$50.00</td>
                                <td>
                                    <button className='delete-btn'>
                                        <DeleteIcon />
                                    </button>
                                </td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </div>

                   
                </div>
                <div className='submit-btn'>
                    <Link to="/checkout">Buy Now</Link>
                    </div>
            </div>

        </div>
    )
}

export default AddtoCart