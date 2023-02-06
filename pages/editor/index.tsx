import Container from 'react-bootstrap/Container';
import PlateInformation from '../../components/Editor/Steps/PlateInformation';

const editorIndex = () => {
    const columnSettings = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
    }
    return(
        <Container>
            <PlateInformation />
        </Container>
    )
}

export default editorIndex;