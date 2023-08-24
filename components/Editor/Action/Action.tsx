import { Button } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

{/* <CheckCircleTwoTone twoToneColor="#52c41a" /> */}

export interface IAction {
    // continue?: boolean,
    disabled?: boolean;
    loading?: boolean;
    text?: string;
    action?: () => void;
    actionClass?: string;
}

export const Action = (
    props: IAction
) => {
    const { disabled, loading, action, text, actionClass } = props;
    return(
        <Button
            className={`${actionClass}`}
            disabled={disabled}
            htmlType="submit"
            icon={ 
                disabled ? 
                    null : <CheckCircleTwoTone
                        rev={''} 
                    twoToneColor="#52c41a" /> 
            }
            loading={loading}
            onClick={action}
         >
            {text}
        </Button>
    )
}