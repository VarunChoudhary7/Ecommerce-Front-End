import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Heading,
    Input,
    Box,
    Select,
    Button,
} from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Actions/product';

const AddProduct = () => {

    const [Name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [color, setColor] = useState('')
    const [listingPrice, setListingPrice] = useState('')
    const [actualPrice, setActualPrice] = useState('')
    const [stock, setStock] = useState('')
    const [id, setId] = useState('')


    const dispatch = useDispatch()

    const handleAddProduct = () => {
        // console.log({
        //     name, imageUrl, description, category, color, listingPrice, actualPrice, stock
        // })
        dispatch(addProduct({ Name, imageUrl, description, category, color, listingPrice, actualPrice, stock, id }))
    }

    return (
        <Box m={4}>
            <Heading>Add Product</Heading>
            <FormControl>
                <FormLabel>Product Name</FormLabel>
                <Input onChange={(e) => { setName(e.target.value) }} type='text' />
                <FormLabel>Image URL</FormLabel>
                <Input onChange={(e) => { setImageUrl(e.target.value) }} type='text' />
                <FormLabel>Product description</FormLabel>
                <Input onChange={(e) => { setDescription(e.target.value) }} type='text' />
                <FormLabel>Category</FormLabel>
                <Select onChange={(e) => { setCategory(e.target.value) }} placeholder="Select Category">
                    <option>Watch Band</option>
                    <option>iPhone Case</option>
                </Select>
                <FormLabel>Product Color</FormLabel>
                <Input onChange={(e) => { setColor(e.target.value) }} type='text' />
                <FormLabel>Actual Price</FormLabel>
                <Input onChange={(e) => { setActualPrice(e.target.value) }} type='number' />
                <FormLabel>Listing Price</FormLabel>
                <Input onChange={(e) => { setListingPrice(e.target.value) }} type='number' />
                <FormLabel>Stock</FormLabel>
                <Input onChange={(e) => { setStock(e.target.value) }} type='number' />
                <FormLabel>Id</FormLabel>
                <Input onChange={(e) => { setId(e.target.value) }} type='number' />
                <Button onClick={handleAddProduct} marginTop={4} color={'white'} bg={'blue.400'}>Submit</Button>

            </FormControl>
        </Box>
    );
}

export default AddProduct;