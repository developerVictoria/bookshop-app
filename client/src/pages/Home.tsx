import {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import {Link} from 'react-router-dom';
import {MdOutlineAddBox} from 'react-icons/md';
import {getAllBooksRoute} from './config.tsx'
import BooksTable from '../components/Home/BooksTable.tsx';
import BooksCards from '../components/Home/BooksCards.tsx';


const Home =()=> {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  useEffect(()=>{
    setLoading(true);
    axios.get(getAllBooksRoute)
    .then((response)=>{
      setBooks(response.data.data);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error.data);
      
    });
  }, []);
  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button 
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={()=>setShowType('table')}
          >
            Table
        </button>
        <button 
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={()=>setShowType('card')}
          >
            Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List:</h1>
        <Link to='/books/create'>
        <div className='text=sky-800 text-4xl'><MdOutlineAddBox /></div>
        </Link>
      </div>
      {loading? <Spinner />: 
      showType==='table' ? (<BooksTable items={books}/>) : (<BooksCards items={books}/>)
      }
      </div>
  )
}

export default Home
