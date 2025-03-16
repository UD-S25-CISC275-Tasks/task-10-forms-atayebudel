import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    //return <div>Reveal Answer</div>;
    const [value, setValue] = useState<boolean>(false);

    function flipVisibility(): void {
        setValue(!value);
    }
    return (
        <span>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {value && <div>42</div>}
        </span>
    );
}
