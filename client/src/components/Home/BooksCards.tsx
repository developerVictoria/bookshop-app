import {BookType, IBooksArrayProps} from '../../types/BookTypes';
import BooksSCard from './BooksSCard';

const BooksCars = ({ items }: IBooksArrayProps) => {
  return (
    <div className='grid sm:grid-cols-2 lg-grid-cols-3 xl:grid-sols-4'>
      {items.map((item:BookType)=>(
         <BooksSCard  key={item._id} item={item}></BooksSCard>
      ))}
    </div>
  )
}

export default BooksCars
