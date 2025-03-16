import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setNumAttempts] = useState<number>(4);
    const [InProgress, setInProgress] = useState<boolean>(false);

    const QuizStart = () => {
        if (attempts <= 0) return;

        setInProgress(true);
        setNumAttempts((prevAttempts) => prevAttempts - 1);
    };

    const QuizStop = () => {
        setInProgress(false);
    };

    const useMulligan = () => {
        setNumAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <div>Attempts: {attempts}</div>
            <Button onClick={QuizStart} disabled={InProgress || attempts === 0}>
                Start Quiz
            </Button>
            <div>
                <Button onClick={QuizStop} disabled={!InProgress}>
                    Stop Quiz
                </Button>
            </div>

            <Button onClick={useMulligan} disabled={InProgress}>
                Mulligan
            </Button>
        </div>
    );
}
