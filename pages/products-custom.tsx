import { useContext, useEffect, useState } from 'react';
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

export default function Editor(props: any) {
    const { productList } = props;
    const [products, setProducts] = useState(productList?.products)

    return (
        <Container fluid>
            <TemplateList
                products={products}
                customTemplate={true}
            />
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const currentProduct = await client.collection.fetchWithProducts(
        'gid://shopify/Collection/459770659117', 
        { productsFirst: 100 }
    )
    return {
        props: {
            productList: JSON.parse(JSON.stringify(currentProduct)),
        },
        revalidate: 10
    }
}