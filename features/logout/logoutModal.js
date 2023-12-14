/* .js to establish the logout functionality of my blog website */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function LogoutModal() {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const { logout } = useAuth();
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    async function handleLogout() {
        await logout();
        history.push('/login');
    }
    
    return (
        <>
        <Button variant="outline-danger" onClick={handleShow}>
            Logout
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Logout</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to logout?</Modal.Body>
            <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="outline-danger" onClick={handleLogout}>
                Logout
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
    }

// Path: features/logout/logout.js