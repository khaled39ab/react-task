import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Problem2 = () => {
    const [contacts, setContacts] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const url = `https://contact.mediusware.com/api/contacts/`;


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setContacts(data))
    }, [])

    // console.log(contacts);
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" variant="primary" onClick={handleShow}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>



                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal A</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            contacts.results && contacts.results.map(contact => <Card
                                key={contact.id}
                            >
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Contact: {contact.phone} From: {contact.country.name}</ListGroup.Item>
                                </ListGroup>
                            </Card>)
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Modal A
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Modal B
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Problem2;