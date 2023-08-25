import Placeholder from "react-bootstrap/Placeholder";

export const ProductSkeleton = () => {
    return(
        <Placeholder as={'p'} animation={'glow'} >
            <Placeholder style={{ height: `500px` }} xs={6}/>
        </Placeholder>
    )
}