import { Box, Heading } from "@chakra-ui/react";
import AddProduct from "./AddProduct";
import ProductsTable from "./ProductTable";

const Admin = () => {
    return (
        <Box p={4}>
            <Heading textAlign={'center'}>Admin</Heading>
            <Box m={4}>

                <ProductsTable />
            </Box>
            <Box>
                <AddProduct />
            </Box>
        </Box>
    );
}

export default Admin;