
import Cookies from 'js-cookie';

export default function tokestore()
{
    const token = Cookies.get('jwt');

 localStorage.setItem('token', token);

}