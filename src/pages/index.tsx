import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default () => {
    useEffect(() => {
        fetch('https://ct-core-api.herokuapp.com/');
        navigate('/gallery');
    }, []);
    return null;
};