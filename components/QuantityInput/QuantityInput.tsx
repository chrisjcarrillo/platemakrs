import { FormControl, InputGroup, Button } from 'react-bootstrap'
import React, { useContext } from "react";
// import { StoreContext } from '../../../context/storeContext'

export const QuantityInput = (props) =>{
    const { disabled, item, amount, setAmount } = props;
    // const { updateLineItemFromCart } = useContext(StoreContext);
    const onChange = (e) => {
        setAmount(e.target.value)
    }

    const quantitySum = (type: string) => type === 'add' ? setAmount(parseInt(amount + (1))) : setAmount(parseInt(amount - (1)))


    return(
        <InputGroup className="quantity__input-group">
            <Button disabled={disabled === null ? true : false} className={'quantity__less quantity__button'} size="sm" id="button-addon1" onClick={() => quantitySum('subtract')}>
            -
            </Button>
            <FormControl
                disabled={disabled === null ? true : false}
                className={'quantity__input'}
                size="sm"
                value={amount}
                min={1}
                onChange={(e) => onChange(e)}
            />
            <Button  disabled={disabled === null ? true : false} className={'quantity__add quantity__button'} size="sm" id="button-addon1" onClick={() => quantitySum('add')}>
            +
            </Button>
        </InputGroup>
    )
}