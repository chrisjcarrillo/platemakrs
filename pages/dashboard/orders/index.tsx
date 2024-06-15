import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Table, Tag, QRCode, Typography, Input } from 'antd';
import type { TableProps, TableColumnsType } from 'antd';

import React, {
    useEffect,
    useState,
    useMemo,
    useCallback
} from 'react';
import Image from 'next/image';

import jsPDF from 'jspdf';

type ColumnsType<T> = TableProps<T>['columns'];

// Set Table Columns
interface PlateDataType {
    bottomText: string
    platePosition: string
    state: string
    bottomTextEnabled: boolean
    customTemplateId: string
    plateNumber: string
}

interface PlatesDataType {
    plateId: string
    baseColor: string
    finish: string
    preview: string
    productStatus: string
    qrCode: string
    plateData: PlateDataType
}

interface OrderDataType {
    createdAt: string,
    orderId: string,
    name: string,
    customerName: string,
    customerEmail: string,
    customerPhone: string,
    displayFinancialStatus: string,
    displayFufillmentStatus: string,
    productionStatus: string
    plates: Array<PlatesDataType>
}

const IndexPage = () => {

    const { Paragraph, Text, Link, Title } = Typography;

    const loadRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const loadColumns = [1, 2, 3];

    const [loading, setLoading] = useState<Boolean>(false);
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [filterQuery, setFilterQuery] = useState<string>('');

    const onNextPage = React.useCallback(() => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }, [currentPage, totalPages]);

    const onPreviousPage = React.useCallback(() => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }, [currentPage, totalPages]);

    // Fetch data from the API
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/v1/orders/get-orders?count=${itemsPerPage}&page=${currentPage}&query=${filterQuery}`, {
                    headers: {
                        'x-api-key': '71a74a2638e4f36d7b8d3cacef96db045d6158628e463fbd33bec118605091ec068547b4b05883a06e23b9588b883ab1028b8d95fd842e0815947d5d58bbaa3eaba33b47d48bc81e6df6f8f8cb18e0a68056fce6e4be4870d1b972298fddfcc7a5f1ed253177adbfc2c38ddaf6f6872ef87bc9064c3b61fae0ac6b4242f52f9c443a2b14f99647b931aec1a57926f4018771c3eaf51508b6fba59ee13efc4103'
                    }
                });
                const newData = await response.json();
                setCurrentPage(newData.pageIndex)
                setTotalPages(newData.pages)
                setData(newData.orders);
                setLoading(false);
                console.log(loading)
            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage, filterQuery]);

    const statusColorMap: Record<string, ChipProps["color"]> = {
        ORDER_PLACED: "success",
        paused: "danger",
        vacation: "warning",
    };

    const statusFormat = (status: string) => {
        switch (status) {
            case 'ORDER_PLACED':
                return 'ORDER PLACED'
                break;
        }
    };

    const nonPreview = 'https://cdn.shopify.com/s/files/1/0747/7565/8797/files/option-1_1dd37e57-7e70-432e-8234-a9c172c25019_160x160.png?v=1692480801';


    const onSearchChange = React.useCallback((value?: string) => {
        if (value) {
            setFilterQuery(value);
            setCurrentPage(1)
        } else {
            setFilterQuery("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterQuery("")
    }, [])

    const columns: ColumnsType<OrderDataType> = [
        {
            title: "Order",
            dataIndex: "order",
            render(value, record, index) {
                return (
                    <div className="" key={index}>
                        <p className={'order-name'}>{record?.name}</p>
                        <p className={'order-id'}>{record?._id}</p>
                    </div>
                )
            },
        },
        {
            title: 'Customer',
            dataIndex: 'customer',
            render(value, record, index) {
                return (
                    <div className="" key={index}>
                        <p className={'order-customer-name'}>{record.customerName}</p>
                        <Link copyable className={'order-customer-email'} href={`malito:${record.customerEmail}`}>{record.customerEmail}</Link>
                        <Link copyable className={'order-customer-phone'} href={`tel:${record.customerPhone}`}>{record.customerPhone}</Link>
                    </div>
                )
            },
        },
        {
            title: "Production Status",
            dataIndex: "productionStatus",
            render(value, record, index) {
                return (
                    <Tag color="processing" >
                        {statusFormat(record.productionStatus)}
                    </Tag>
                )
            },
        },
    ];

    const downloadQRCode = (qrCodeClass: string, orderId: string) => {
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'in',
            format: [1.65, 1.18],
          });

        const canvas = document.querySelector(`.${qrCodeClass}`)?.querySelector<HTMLCanvasElement>('canvas');
        const dataUrl = canvas?.toDataURL('image/png');

        // Adjust the QR code size to be smaller
        const imgWidth = 1.18 * 0.85; // 50% of document width
        const imgHeight = imgWidth; // QR code is square
        const x = (1.65 - imgWidth) / 2;
        const y = (1.18 - imgHeight) / 2;

        doc.addImage(dataUrl, 'PNG', x, y, imgWidth, imgHeight);
        doc.autoPrint(); // Automatically triggers the print dialog
        window.open(doc.output('bloburl')); // Opens the PDF in a new tab for printing

    };

    const expandedRowRender = (record, recordIndex) => {
        const columnsNew: TableColumnsType<PlatesDataType> = [
            {
                title: "License Plate Details", dataIndex: "plateNumber", render(value, record, index) {
                    return (
                        <div className="" key={index}>
                            <p className={'order-plate-number'}>{record?.plateData?.plateNumber?.toUpperCase()}</p>
                            <p className={'order-plate-id'}>Plate ID: {record?.plateId}</p>
                            <p className={'order-plate-id'}>State: {record?.plateData?.state}</p>
                        </div>
                    )
                },
            },
            {
                title: "Preview", dataIndex: "preview", render(value, record, index) {
                    return (
                        <div className="" key={index}>
                            <img width={250} src={record.preview} />
                        </div>
                    )
                },
            },
            { title: "Finsh", dataIndex: 'finish', key: "finish" },
            { title: "Base Color", dataIndex: 'baseColor', key: "baseColor" },
            {
                title: "QR Code",
                dataIndex: "qrCode",
                render(value, record, index) {
                    return (

                        <div className="" key={index}>
                            <QRCode size={128} className={`qr-${record.plateId}`} value={`${process.env.HOST}/dashboard/orders/${data[recordIndex].orderId}?plateId=${record.plateId}`} />
                        </div>
                    )
                },
            },
            {
                title: "Actions",
                dataIndex: "actions",
                render(value, record, index) {
                    return (

                        <div className="" key={index}>
                            <Button type="primary" onClick={() => downloadQRCode(`qr-${record.plateId}`, data[recordIndex].name)}>
                                Download QR Code
                            </Button>
                        </div>
                    )
                },
            }
        ];
        return <Table columns={columnsNew} rowKey={(record) => record.plateId} dataSource={record?.plates} pagination={false} />
    }

    const { Search } = Input;

    const handleTableChange = (newPagination) => {
        console.log(newPagination.current)
        setCurrentPage(newPagination.current);
    };

    return (

        <Container >
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Title level={4} style={{
                        color: '#ffffff !important'
                    }}>Orders</Title>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Search
                        variant='outline'
                        placeholder="Search by Plate #, Order #, Email, Name, Phone"
                        loading={loading}
                        onSearch={(e) => {
                            setFilterQuery(e?.toUpperCase())
                        }}
                        onPressEnter={(e) => {
                            setFilterQuery(e?.target?.value?.toUpperCase())
                        }}
                        style={{
                            marginBottom: 8,
                            display: 'block'
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table
                        scroll={{ x: 1000 }}
                        columns={columns}
                        expandable={{ expandedRowRender }}
                        rowKey={(record) => record?._id}
                        dataSource={data}
                        showSizeChanger={false}
                        pagination={{
                            current: currentPage,
                            pageSize: itemsPerPage,
                            total: totalPages ?? 200
                        }}
                        loading={loading}
                        onChange={(e) => handleTableChange(e)}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default IndexPage;


{/* <TableRow key={index}>
    <TableCell key={index} className="text-white">
        
    </TableCell>
</TableRow> */}