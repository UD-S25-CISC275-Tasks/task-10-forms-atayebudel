import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [gameState, setGameState] = useState({
        remainingChances: 3,
        additionalChances: "",
    });

    const consumeChance = () => {
        setGameState((prev) => ({
            ...prev,
            remainingChances: prev.remainingChances - 1,
        }));
    };

    const addChances = () => {
        const amount = parseInt(gameState.additionalChances, 10);
        if (!isNaN(amount) && amount > 0) {
            setGameState((prev) => ({
                remainingChances: prev.remainingChances + amount,
                additionalChances: "",
            }));
        }
    };

    const modifyRequest = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGameState((prev) => ({
            ...prev,
            additionalChances: event.target.value,
        }));
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Chances Left: {gameState.remainingChances}</p>
            <Form.Group>
                <Form.Label>Request More Chances:</Form.Label>
                <Form.Control
                    type="number"
                    value={gameState.additionalChances}
                    onChange={modifyRequest}
                />
            </Form.Group>
            <Button
                onClick={consumeChance}
                disabled={gameState.remainingChances <= 0}
            >
                Use
            </Button>
            <Button onClick={addChances}>Gain</Button>
        </div>
    );
}
