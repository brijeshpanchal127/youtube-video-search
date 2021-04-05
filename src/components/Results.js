import React from 'react';
import { Card, CardColumns, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Results = () => {
    const refineText = useSelector(state => state.refineText);
    const refinedResults = useSelector(state => state.refinedResults);
    const searchResults = useSelector(state => state.searchResults);
    const onlyHD = useSelector(state => state.onlyHD);
    const results = (refineText || onlyHD) ? refinedResults : searchResults;
    return (
        <div>
            <hr/>
            <Form.Label style={{ fontWeight: "bold" }}>Results</Form.Label><br/>
            Showing {results.length} results
            <CardColumns style={{ margin: "15px" }}>
                {results && results.map((result) => (
                    <Card key={result.id}>
                        <Card.Img variant="top" src={result.thumbHigh} alt={"Image " + result.title} />
                        <Card.Body>
                            <Card.Title>{result.title}</Card.Title>
                            <Card.Text>
                                <small className="text-muted">Published at: {result.publishedAt}</small>
                            </Card.Text>
                            <Card.Text>
                                <small>{result.definition === "hd" ? "HD" : ""}</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </CardColumns>
        </div>
    )
}

export default Results
