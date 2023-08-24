import React, { useContext }from 'react';
import { Spin } from 'antd';
import { InterfaceContext, InterfaceContextType } from '../../../context/interfaceContext';
import { LoadingOutlined } from '@ant-design/icons';

interface IEditorProps { 
    children: React.ReactNode
}

export const LoadingSpinner = ({children}: IEditorProps): JSX.Element => {
    const { loading } = useContext(InterfaceContext) as InterfaceContextType;

    return(
        <Spin indicator={<LoadingOutlined rev={''} style={{ fontSize: 75, color: '#ffffff'}} spin />} spinning={loading}>
            { children }
        </Spin>
    )
}
