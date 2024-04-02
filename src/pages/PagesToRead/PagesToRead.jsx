
import CustomBarChart from './../../components/CustomBarChart/CustomBarChart';
import { useContext } from 'react';
import { BookContext } from '../../providers/ContextProvider';
const PagesToRead = () => {
    const {books} = useContext(BookContext)
    return (
        <div className="container mx-auto px-4 flex justify-center bg-[#f3f3f3] p-12 rounded-xl mb-16">
            <CustomBarChart books={books} />
        </div>
    );
};

export default PagesToRead;