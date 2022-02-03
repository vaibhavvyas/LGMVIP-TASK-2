import React,{ useState, useCallback} from 'react'
import axios from 'axios';
import { Container,Col, Row, Spinner } from 'react-bootstrap';
import UserCard from './UserCard';

function UserGrid() {
    const [user, setuser] = useState([]);
    console.log(user)
    const [isloading, setloading] = useState(true);
    const getData = useCallback(
        async ()=>{
            try{
            const data = await axios.get('https://reqres.in/api/users?page=1');
            setuser(data.data.data);
            }catch(e){  
                console.log(e);
            }
            setloading(false);
        },
        [],
    ) 

    return (
        <>
            <div className="nav">
                <div className="nav-logo">
                    <h3>GET <span> USER</span> DATA</h3>
                </div>
                <div className="nav-menu">
                    <button onClick={getData}>GET USER DATA HERE.</button>
                </div>
            </div>
            {
                isloading ?
                <Container className="loading">
                    <Row>
                    <Col className="text-center">
                        <Spinner animation="border" variant="info" />
                        <p className="mt-2 text-danger" style={{fontWeight:'bold'}}>Please Click Top Right Button GET USER DATA HERE</p>
                        </Col>
                    </Row>
                </Container>
                :
               
                <Container className="mt-4">
                    <Row className="justify-content-around">
                        {
                            user.map(userdata=>(
                                <UserCard userdata={userdata}/>
                            ))
                        }
                    </Row>
                </Container>
                    
            }
        </>
    )
}

export default UserGrid
