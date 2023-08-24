import { message } from 'antd';

export const Message = (
    props: {
        type?: string,
        text?: string,
    }
) => {

    const [ messageApi, contextHolder ] = message.useMessage();

    return(
        <>

        </>
    )
}