import React, { SyntheticEvent } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
interface ProfileDisplayProps {
    u_id: number
    firstname: string
    lastname: string
    username: string
    password:string
    email: string

}

export class ProfileComponent extends React.Component<ProfileDisplayProps>{
    constructor(props: any){
        super(props);
        this.state ={
            username: '',
            firstname:'',
            email: '',

        }
    }

    grabUserInfo = (event: any ) => {

    }

    render() {
        return(
            <Card style={{ maxWidth: "500px", minHeight: "400px" }}>
                <CardImg className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm" src="https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/muzooka/Erykah%2BBadu/Erykah%2520Badu_16_9_1576267540.jpg?itok=vezZf4bg" 
                alt="Test Image Missing" />
                <CardBody>
                    <CardTitle>Erykah Badu</CardTitle>
                </CardBody>

            </Card>

        );
    }
}