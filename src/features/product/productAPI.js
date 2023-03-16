import axios from '../../utils/axiosConfig'

export const fetchProducts = async()=>{
    const res = await axios.get('/products')
    return res.data
}

export const addProductApi = async(product)=>{
    await axios.post('/add-product',product)
}