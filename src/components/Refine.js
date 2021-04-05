import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { refineResults } from '../utils/refine.util';

const Refine = () => {
    const [date, setDate] = useState("");
    const dispatch = useDispatch();
    const results = useSelector(state => state.searchResults)
    const onlyHD = useSelector(state => state.onlyHD)
    const [checked, setChecked] = useState(onlyHD);
    const onChange = (e) => {
    setDate(e.target.value);
    dispatch(refineResults(e.target.value, onlyHD, results));
    }

    const toggleHD = () => {
        dispatch(refineResults(date, !checked, results));
        setChecked(!checked);
    }

    return (
        <Form style={{marginTop:"15px"}}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold" }}>Refine By Date: (Ex. Jan 01, 2019)</Form.Label>
                <Form.Control type="text" placeholder="Enter date" value={date} onChange={(e) => onChange(e)} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" value={checked} label="Show only HD videos"  onChange={() => toggleHD()} />
            </Form.Group>
        </Form>
    )
}

export default Refine
