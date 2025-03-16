import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    //return <div>Change Type</div>;
    const [QuestionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQuestionType(): void {
        if (QuestionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            <div>
                {QuestionType === "multiple_choice_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </div>
        </div>
    );
}
