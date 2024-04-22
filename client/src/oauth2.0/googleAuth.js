
const URLS = process.env.REACT_APP_URLS;


export default async function googleAuth() {
    try {
        
      window.location.href = `${URLS}/user/google/callback`;
    } catch (error) {
      console.error('Error during Google authentication:', error);
      throw error;
    }
  }