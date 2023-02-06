import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const Header = (
    props: any
) => {
    const { Brand, Toggle } = Navbar;
    return(
            <Navbar className="header" expand="lg" bg="light" sticky="top" >
                <Container>
                    <Brand className="m-auto" href="/">
                        <Image
                            alt="Platemakrs Logo"
                            height={30}
                            width={200}
                            src={'/images/logo-white.png'}
                        />
                    </Brand>
                </Container>
            </Navbar>
    )
}