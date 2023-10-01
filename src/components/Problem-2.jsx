import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Problem2 = () => {
    const [contacts, setContacts] = useState([]);
    const [show, setShow] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [showUS, setShowUS] = useState(false);

    const handleClose = () => {
        setShowAll(false)
        setShowUS(false)
    };
    const handleShowAll = () => setShowAll(true);
    const handleShowUS = () => setShowUS(true);

    const url = `https://contact.mediusware.com/api/contacts/`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setContacts(data))
    }, [])

    
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-modalA" type="button" variant="primary" onClick={handleShowAll}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-modalB" type="button" variant="primary" onClick={handleShowUS}>US Contacts</button>
                </div>


                {/* Modal A */}
                <Modal show={showAll} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal A</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            contacts.results && contacts.results.map(contact => <Card
                                key={contact.id}
                            >
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        Contact: {contact.phone} <br />
                                        From: {contact.country.name}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>)
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" className="btn btn-lg btn-outline-modalA" onClick={handleClose}>
                            Modal A
                        </Button>
                        <Button variant="primary" className="btn btn-lg btn-outline-modalB" onClick={handleClose}>
                            Modal B
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


                {/* Modal B */}
                <Modal show={showUS} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal B</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" className="btn btn-lg btn-outline-modalA" onClick={handleClose}>
                            Modal A
                        </Button>
                        <Button variant="primary" className="btn btn-lg btn-outline-modalB" onClick={handleClose}>
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