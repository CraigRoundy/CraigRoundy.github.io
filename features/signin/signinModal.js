/* .js file enabling the sign in functionality of my blog website */

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function SigninModal() {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const { login } = useAuth();
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    async function handleSignin() {
        await login();
        history.push('/account');
    }
    
    return (
        <>
        <Button variant="outline-primary" onClick={handleShow}>
            Sign In
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to sign in?</Modal.Body>
            <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="outline-primary" onClick={handleSignin}>
                Sign In
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
    }

// Path: features/signin/signinModal.js