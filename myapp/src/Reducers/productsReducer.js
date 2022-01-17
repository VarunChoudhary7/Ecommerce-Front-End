/* 
Product:
img url,
product name,
description,
actual price,
listing price,
category of the prodcut
compatible with
color

*/



const initialState = {
    products: [
        {
            id: 1,
            productName: 'Watch Band',
            description: "Comfort. Day in, day out.Stretchable recycled yarn interwoven with silicone threads designed for ultra-comfort with no buckles or clasps.",
            actualPrice: "$50",
            listingPrice: "$39",
            //TODO use id
            category: "Watch band",
            compatibleWith: "Apple Watch 30mm, 40mm, 41mm",
            color: "Pomegrenate",
            imageUrl: "https://cdn.shopify.com/s/files/1/0984/6842/products/Red-Fusion-38-40_1024x1024.jpg?v=1611006835",
            stock: 15,
        },
        {
            id: 2,
            productName: 'Watch Band',
            description: "Comfort. Day in, day out.Stretchable recycled yarn interwoven with silicone threads designed for ultra-comfort with no buckles or clasps.",
            actualPrice: "$50",
            listingPrice: "$39",
            //TODO use id
            category: "Watch band",
            compatibleWith: "Apple Watch 42mm, 44mm, 45mm",
            color: "Orange",
            imageUrl: "https://cdn.shopify.com/s/files/1/0984/6842/products/Pomegranate-40_1024x1024.jpg?v=1620410372",
            stock: 19,
        },
        {
            id: 3,
            productName: 'Watch Band',
            description: "Comfort. Day in, day out.Stretchable recycled yarn interwoven with silicone threads designed for ultra-comfort with no buckles or clasps.",
            actualPrice: "$50",
            listingPrice: "$39",
            //TODO use id
            category: "Watch band",
            compatibleWith: "Apple Watch 30mm, 40mm, 41mm",
            color: "Blue",
            imageUrl: "https://cdn.shopify.com/s/files/1/0984/6842/products/Sport_Loop-Midnight-40_1024x1024.jpg?v=1620410372",
            stock: 80,

        },
        {
            id: 4,
            productName: 'iPhone 12 Case',
            description: "Toned up for aesthetically pleasing design. Soft-coated silicone on the outside, and microfiber lining on the inside.",
            actualPrice: "$100",
            listingPrice: "$70",
            //TODO use id
            category: "iPhone case",
            compatibleWith: "iPhone 12",
            color: "Black",
            imageUrl: "https://cdn.shopify.com/s/files/1/0984/6842/products/12-Black_1024x1024.jpg?v=1604525686",
            stock: 60,

        },
        {
            id: 5,
            productName: 'iPhone 12 Case',
            description: "Toned up for aesthetically pleasing design. Soft-coated silicone on the outside, and microfiber lining on the inside.",
            actualPrice: "$100",
            listingPrice: "$70",
            //TODO use id
            category: "iPhone case",
            compatibleWith: "iPhone 12",
            color: "Yellow",
            imageUrl: "https://cdn.shopify.com/s/files/1/0984/6842/products/12-Sunflower_1024x1024.jpg?v=1630739597",
            stock: 43,

        },
        {
            id: 6,
            productName: 'iPhone 12 Case',
            description: "Toned up for aesthetically pleasing design. Soft-coated silicone on the outside, and microfiber lining on the inside.",
            actualPrice: "$100",
            listingPrice: "$70",
            //TODO use id
            category: "iPhone case",
            compatibleWith: "iPhone 12",
            color: "Orange",
            imageUrl: "https://cdn.shopify.com/s/files/1/0984/6842/products/12-Mystery-Flame_1024x1024.jpg?v=1606412986",
            stock: 50,

        }
    ]
}

const productReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'DELETE_PRODUCT':
            const { productId } = payload
            console.log(productId)
            return {
                products: state.products.filter(prod => prod.id !== productId)
            }
        case 'ADD_PRODUCT':
            const { product } = payload
            return {
                products: [...state.products, product]
            }
        default:
            return state
    }

}

export default productReducer;
