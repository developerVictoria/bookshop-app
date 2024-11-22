import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import {getAllBooksRoute} from './config.tsx'
import { BookType } from '../types/BookTypes.tsx';


const CreateBook = () => {
  const[book, setBook] = useState<BookType>({author:'', title:'', publishYear:0});
  const[loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handeSaveBooks = ()=>{
    setLoading(true);
    axios
        .post(getAllBooksRoute, book)
        .then(()=>{
          setLoading(false);
          navigate('/');
        })
        .catch((error)=>{
          setLoading(false);
          alert(`An error oqured. Refer to the condole for the details`)
          console.error(error)
        })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading? <Spinner />: ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px p-4 mx-auto]'>
        <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input
            type='text'
            value={book.title} 
            onChange={(e)=>setBook({title:e.target.value, author: book.author, publishYear:book.publishYear})} 
            className='border-2 border-gray-500 px-4 py-2 w-full' />
          </div>
          <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
          type='text'
          value={book.author} 
          onChange={(e)=>setBook({title:book.title, author: e.target.value, publishYear:book.publishYear})} 
          className='border-2 border-gray-500 px-4 py-2 w-full' />
          </div>
          <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
          type='number'
          value={book.publishYear} 
          onChange={(e)=>setBook({title:book.title, author: book.author, publishYear:Number(e.target.value)})} 
          className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handeSaveBooks}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateBook
