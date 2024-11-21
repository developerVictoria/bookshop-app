import {useEffect, useState} from 'react';
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
  }

  return (
    <div>
      
    </div>
  )
}

export default CreateBook
