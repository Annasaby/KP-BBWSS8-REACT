import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export default function NoPage(){
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);
  
      return () => clearTimeout(timer);
    }, [navigate]);

    return(
        <>
            <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png" alt="halaman tidak ditemukan" />
        </>
    )
}