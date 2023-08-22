const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://preciousitservices.vercel.app'
  : 'http://localhost:5000';

export default baseURL;
