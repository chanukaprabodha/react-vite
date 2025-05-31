import {useEffect, useState} from "react";
import {Product} from "../../common/Product/Product.tsx";


export function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responsePromise = await fetch('./product-data.json');
                const jsonData = await responsePromise.json();
                setProducts(jsonData);
            }catch (error) {
                console.error('Error fetching product data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div>
                <div
                    className="flex flex-wrap ml-[1px] mt-[5px] mb-[5px] gap-5
                            items-center justify-center mx-auto -translate-y-[-50%]">
                    {
                    products.map((product) => (
                        <Product data={product} />
                    ))
                }
                </div>
            </div>
        </>
    );
}
