import { Link } from 'react-router-dom';

const NotFound = () => {
  const notFoundImg = `https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif`;
  return (
    <div className="relative h-[80vh] flex justify-center items-center container mx-auto px-4">
     <img src={notFoundImg} alt="Page not found" />
     <Link className='btn btn-error absolute bottom-0' to={'/'} >Back to Home</Link>
    </div>
  );
};

export default NotFound;
