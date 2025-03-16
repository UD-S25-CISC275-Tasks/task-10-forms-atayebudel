import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [AnswerChoice, setAnswerChoice] = useState<string>("");

    function changeAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswerChoice(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer: </Form.Label>
                <Form.Control value={AnswerChoice} onChange={changeAnswer} />
            </Form.Group>
            <span>{AnswerChoice === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
