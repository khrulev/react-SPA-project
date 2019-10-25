import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from 'reactstrap';



 


    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody >
                </Card>
            );
        } else {
            return (<div></div>);
        };
    }

    function RenderComments({comments}) {
        if (comments != null) {
            const detailComments = comments.map(
                (comment) => {
                    const options = { day: 'numeric', month: 'short', year: 'numeric' };
                    const date = new Date(comment.date).toLocaleDateString('en-Us', options);
                    return (
                        <ul class="list-unstyled">
                            <li>{comment.comment}</li>
                            <li><br></br></li>
                            <li> -- {comment.author}, {date}</li>
                        </ul>
                    );
                });
            return (
                <div>
                    <h4>Comments</h4>
                    {detailComments}
                </div>
            )

        } else {
            return (<div></div>);
        };
    }

    const DishDetail = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish = {props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments = {props.dish.comments} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        };
    }

    export default DishDetail;


