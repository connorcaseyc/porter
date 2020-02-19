import React, { SyntheticEvent } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
interface ProfileDisplayProps {

}

export class ProfileComponent extends React.Component<ProfileDisplayProps>{


    render(){
        return(
            <Card style={{ maxWidth: "300px", minHeight: "250px" }}>
                <CardImg className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm" src="https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/muzooka/Erykah%2BBadu/Erykah%2520Badu_16_9_1576267540.jpg?itok=vezZf4bg" 
                alt="Test Image Missing" />
                <CardBody>
                    <CardTitle>Erykah Badu</CardTitle>
                </CardBody>

            </Card>

        )
    }
}