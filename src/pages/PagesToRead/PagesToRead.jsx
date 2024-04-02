
import { useLoaderData } from 'react-router-dom';
import CustomBarChart from './../../components/CustomBarChart/CustomBarChart';
const PagesToRead = () => {
    const books = useLoaderData()
    return (
        <div className="container mx-auto px-4 flex justify-center bg-[#f3f3f3] p-12 rounded-xl mb-16">
            <CustomBarChart books={books} />
        </div>
    );
};

export default PagesToRead;