import { useContext, useEffect, useState } from 'react';
import Head from "next/head";
import { LoadingSpinner } from '../../../components/shared/LoadingSpinner/LoadingSpinner';
import { TemplateList } from '../../../components/Editor/TemplateList/TemplateList';
import { StoreContext, StoreContextType, client } from '../../../context/storeContext';
import { GetStaticProps } from "next";
import { Cart } from '../../../components/shared/Cart/Cart';
import { Input } from 'antd';
import { CloseSquareFilled } from '@ant-design/icons';
import Container from 'react-bootstrap/Container';
import fsPromises from 'fs/promises';
import path from 'path';
import PlateComparison from '../../../components/PlateComparison/PlateComparison';
import { ImageAndText } from '../../../components/shared/ImageAndText/ImageAndText';
import MainSlider from '../../../components/MainSlider/MainSlider';
import { StickyEditor } from '../../../components/shared/StickyButtons/StickyEditor';

export default function Editor(props: any) {
    const { Search } = Input
    const { productList, parameters } = props;
    const [products, setProducts] = useState(productList?.products)

    const {
        setExtrasPremade,
        extrasPremade
    } = useContext(StoreContext) as StoreContextType

    useEffect(() => {
        const query = new URLSearchParams(window?.location?.search);
        if (query.get('query')) {
            const searchedProducts = products?.filter((product: any) => {
                return product?.title?.toUpperCase().indexOf(query.get('query').toUpperCase()) !== -1;
            })
            setExtrasPremade(true)
            setProducts(searchedProducts)
        }
    }, [])

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
        <>
            <Container fluid style={{
                paddingBottom: extrasPremade ? '2rem' : '0rem'
            }}>
                {
                    !extrasPremade && (
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
                    )
                }
                <TemplateList
                    products={products}
                    customTemplate={false}
                />
            </Container>
            {
                extrasPremade && (
                    <ImageAndText
                        title={props.extras.howItWorks.title}
                        image={props.extras.howItWorks.image}
                    />
                )
            }
            {extrasPremade && (
                <PlateComparison
                    plates={props.extras.plateComparison}
                />
            )
            }
            {
                extrasPremade && (
                    <MainSlider
                        title={props.extras.showcaseSlider.title}
                        swipeImage=""
                        image={props.extras.showcaseSlider.image}
                        swipeText={props.extras.showcaseSlider.swipeText}
                        plates={props.extras.showcaseSlider.images}

                    />
                )
            }
            {
                extrasPremade && (
                    <StickyEditor />
                )
            }
        </>

    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const currentProduct = await client.collection.fetchWithProducts('gid://shopify/Collection/481523368237', { productsFirst: 100 })

    const filePath = path.join(process.cwd(), 'settings.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());


    return {
        props: {
            productList: JSON.parse(JSON.stringify(currentProduct)),
            extras: objectData
        },
        revalidate: 10
    }
}