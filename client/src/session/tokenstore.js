
import Cookies from 'js-cookie';

export default function tokestore()
{
    const token = Cookies.get('jwt');
    
  console.log("token in tokenstore.js ",token)
 localStorage.setItem('token', token);

}