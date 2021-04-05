import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { searchVideos } from '../actions/search';


export const Input = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const searchText = async () => {
        const action = await searchVideos(text);
        dispatch(action);
    }

    return (
        <div>
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold" }}>Search Video</Form.Label>
                <Form.Control type="video" placeholder="Enter video name" value={text} onChange={(e) => setText(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={() => searchText()}>
                Search
                </Button>
        </div>
    )
}
