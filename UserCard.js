import React from 'react'
import { Col } from 'react-bootstrap'

function UserCard({userdata}) {
   
    return (
        <Col xl={3} className="profile">
            <img src={userdata.avatar} alt={userdata.first_name}/>
            <div className="user_info">
                <h3>{userdata.first_name} {userdata.last_name}</h3>
                <p>{userdata.email}</p>
                <p>User ID : {userdata.id}</p>
            </div>
        </Col>
    )
}

export default UserCard
