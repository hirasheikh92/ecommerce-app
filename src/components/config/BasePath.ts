const BASE_PATH_API_URL= process.env.NODE_ENV==="development"? "http://localhost:3000" : "https://dine-marketplace-gamma.vercel.app"

export default BASE_PATH_API_URL;