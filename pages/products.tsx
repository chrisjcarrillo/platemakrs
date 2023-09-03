import { useContext, useEffect, useState } from 'react';
import { EditorHeader } from '../components/Editor/EditorHeader/EditorHeader';
import Head from "next/head";
import { LoadingSpinner } from '../components/shared/LoadingSpinner/LoadingSpinner';
import { TemplateList } from '../components/Editor/TemplateList/TemplateList';
import { client } from '../context/storeContext';
import { GetStaticProps } from "next";
import { Cart } from '../components/shared/Cart/Cart';
import { Input } from 'antd';
import { CloseSquareFilled } from '@ant-design/icons';
import Container from 'react-bootstrap/Container';
import { useRouter } from 'next/router';

const MainHead = () => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
    )
}
export default function Editor(props: any) {
    console.log(props.productList)
    const { Search } = Input
    const { productList } = props;
    const [products, setProducts] = useState(productList?.products)

    const onSearch = (e: string) => {
        if (!e) {
            console.log(!e)
            setProducts(productList.products)
        } else {
            const searchedProducts = products?.filter((product: any) => {
                return product?.title?.toUpperCase().indexOf(e.toUpperCase()) !== -1;
            })
            setProducts(searchedProducts)
        }
    }

    return (
        <Container fluid>
            <LoadingSpinner >
                <Cart />
                <MainHead />
                <EditorHeader
                />
                {/* <Search /> */}
                <div className='pm__search'>
                    <div className='pm__search-title'>
                        Search
                    </div>
                    <div className='pm__search-container'>
                        <Search
                            className='pm__search-bar'
                            placeholder="Type to search"
                            allowClear={{ clearIcon: <CloseSquareFilled rev={''} color='white' /> }}
                            onSearch={
                                (e) => onSearch(e)
                            }
                            style={{ width: '100%' }}
                            bordered={false}
                        />
                    </div>
                </div>
                <TemplateList
                    products={products}
                />
            </LoadingSpinner>
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const currentProduct = await client.collection.fetchWithProducts('gid://shopify/Collection/456849490221', { productsFirst: 100 })
    return {
        props: {
            productList: JSON.parse(JSON.stringify(currentProduct))
        },
        revalidate: 10
    }
}