import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
    Button,
    Chip,
    Input,
    Table,
    TableHeader,
    TableRow,
    TableColumn,
    Pagination,
    Skeleton,
    TableBody,
    TableCell
} from '@nextui-org/react';

import React, {
    useEffect,
    useState,
    useMemo,
    useCallback
} from 'react';
import Image from 'next/image';

// Set Table Columns

const IndexPage = () => {

    const loadRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const loadColumns = [1, 2, 3];

    const columns = [
        { name: "Order", uid: "order" },
        { name: 'Customer', uid: 'customer' },
        { name: "Production Status", uid: "productionStatus", sortable: true },
    ];

    const columnsLicensePlate = [
        { name: "License Plate Preview", uid: "licensePlatePreview" },
        { name: "License Plate #", uid: "licensePlateCharacter" },
        { name: "Finsh", uid: 'finish' },
        { name: "Base Color", uid: 'baseColor' },
    ];

    const [loading, setLoading] = useState<Boolean>(false);
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(25);
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

    const loadingTable = useMemo(() => {
        return (
            <TableBody items={data}>
                {loadRows.map((index) => {
                    return (
                        <TableRow key={index}>
                            {loadColumns.map((index) => {
                                return (
                                    <TableCell key={index} className="text-white">
                                        <Skeleton className="h-10 w-3/5 rounded-lg" />
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        )
    }, [loading])

    const bottomContent = useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={currentPage}
                    total={totalPages}
                    onChange={setCurrentPage}
                />
                <div className="hidden sm:flex w-[30%] justify-end gap-2">
                    <Button isDisabled={totalPages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
                        Previous
                    </Button>
                    <Button isDisabled={currentPage >= totalPages} size="sm" variant="flat" onPress={onNextPage}>
                        Next
                    </Button>
                </div>
            </div>
        )
    }, [currentPage, totalPages]);

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

    const renderCell = (data: any, columnKey: React.Key) => {
        const nonPreview = 'https://cdn.shopify.com/s/files/1/0747/7565/8797/files/option-1_1dd37e57-7e70-432e-8234-a9c172c25019_160x160.png?v=1692480801';
        switch (columnKey) {
            case 'order':
                return (
                    <div className=''>
                        <p className="text-bold text-sm capitalize">{data.name}</p>
                        <span className="text-bold text-sm capitalize text-default-400">{data._id}</span>
                    </div>
                )
            case 'customer':
                return (
                    <div className=''>
                        <p className="text-bold text-sm capitalize">{data.customerName}</p>
                        <p className="text-bold text-sm capitalize text-default-400">{data.customerEmail}</p>
                        <p className="text-bold text-sm capitalize text-default-400">{data.customerPhone}</p>
                    </div>
                )
            case 'productionStatus':
                return (
                    <Chip className="capitalize" color={statusColorMap[data.productionStatus]} size="sm" variant="flat">
                        {statusFormat(data.productionStatus)}
                    </Chip>
                )
        }
    }
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

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by name..."
                        // startContent={'HI'}
                        value={filterQuery}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                </div>
            </div>
        );
    }, [filterQuery]);

    return (

        <Container >
            <Row>
                <Col>
                    <Table
                        topContent={topContent}
                        isHeaderSticky
                        aria-label="Example table with dynamic content"
                        className='dark'
                        bottomContent={bottomContent}
                        bottomContentPlacement="outside"
                    >
                        <TableHeader
                            columns={columns}
                        >
                            {(column: any) => (
                                <TableColumn
                                    className="white-text"
                                    key={column.uid}
                                >
                                    {column.name}
                                </TableColumn>
                            )}
                        </TableHeader>
                        <TableBody items={data}>
                            {(item: any) => (
                                <TableRow key={item._id}>
                                    {(columnKey: any) => <TableCell className="text-white">{renderCell(item, columnKey)}</TableCell>}
                                </TableRow>
                            )}
                        </TableBody>
                        {loading ? loadingTable : <TableBody items={data}>
                            {(item: any) => (
                                <TableRow key={item._id}>
                                    {(columnKey: any) => (
                                        <TableCell className="text-white">
                                            {renderCell(item, columnKey)}
                                            <Table
                                                key={item._id}
                                                isHeaderSticky
                                                aria-label="Example table with dynamic content"
                                                className='dark'
                                            >
                                                {(item?.plates?.map((plate, index) => {
                                                    return (
                                                        <>
                                                            <TableHeader
                                                                columns={columnsLicensePlate}
                                                            >
                                                                {(column: any) => (
                                                                    <TableColumn
                                                                        className="white-text"
                                                                        key={column.uid}
                                                                    >
                                                                        {column.name}
                                                                    </TableColumn>
                                                                )}
                                                            </TableHeader>
                                                            <TableBody items={item.plates}>
                                                                {(item: any) => (
                                                                    <TableRow key={item.plateNumber}>
                                                                        <TableCell className="text-white">
                                                                            <div className="table__licensePlate-preview">
                                                                                <img
                                                                                    alt="licensePlate"
                                                                                    width={200}
                                                                                    height={65}
                                                                                    src={plate.preview === nonPreview || undefined || null || '' ? '/images/resources/misc/preview-na.png' : data.preview}
                                                                                />
                                                                            </div>
                                                                        </TableCell>
                                                                        <TableCell className="text-white">
                                                                            <div className=''>
                                                                                <p className="text-bold text-sm uppercase">
                                                                                    {plate?.plateNumber ?? 'NOT AVAILABLE'}
                                                                                </p>
                                                                            </div>
                                                                        </TableCell>
                                                                        <TableCell className="text-white">
                                                                            <div className="table__finishType">
                                                                                {data.finish === "Gloss" ?
                                                                                    <Chip
                                                                                        color="success"
                                                                                        classNames={{
                                                                                            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                                                                                            content: "drop-shadow shadow-black text-white",
                                                                                        }}
                                                                                        variant="shadow">
                                                                                        {data.finish}
                                                                                    </Chip>
                                                                                    : <Chip
                                                                                        color="danger"
                                                                                        variant="shadow">
                                                                                        {data.finish}
                                                                                    </Chip>
                                                                                }
                                                                            </div >
                                                                        </TableCell>
                                                                        <TableCell className="text-white">
                                                                            <div className="table__baseColor">
                                                                                {data.baseColor === "WHITE" ?
                                                                                    <Chip
                                                                                        color="success"
                                                                                        classNames={{
                                                                                            base: "bg-white",
                                                                                            content: "drop-shadow shadow-black text-black",
                                                                                        }}
                                                                                        variant="shadow">
                                                                                        {data.baseColor}
                                                                                    </Chip>
                                                                                    : data.baseColor === "SEALER" ? <Chip
                                                                                        color="success"
                                                                                        classNames={{
                                                                                            base: "bg-cyan-400",
                                                                                            content: "drop-shadow shadow-black text-black",
                                                                                        }}
                                                                                        variant="shadow">
                                                                                        {data.baseColor}
                                                                                    </Chip> : <Chip color="primary" variant="shadow">{data.baseColor}</Chip>
                                                                                }
                                                                            </div>
                                                                        </TableCell>
                                                                    </TableRow>
                                                                )}
                                                            </TableBody>
                                                        </>


                                                    )
                                                })
                                                )}
                                            </Table>
                                        </TableCell>
                                    )}
                                </TableRow>
                            )}
                        </TableBody>}

                    </Table>
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