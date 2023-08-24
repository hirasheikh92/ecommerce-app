const BASE_PATH_API_URL= process.env.NODE_ENV==="development"? "http://localhost:3000" : "https://ecommerce-dine-app.vercel.app/"

export default BASE_PATH_API_URL;