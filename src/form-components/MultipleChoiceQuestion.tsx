import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [AnswerChoice, setAnswerChoice] = useState<string>(options[0]);

    function newChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswerChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="MultipleChoiceQuestion">
                <Form.Label>Select Answer:</Form.Label>
                <Form.Select value={AnswerChoice} onChange={newChoice}>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{AnswerChoice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
