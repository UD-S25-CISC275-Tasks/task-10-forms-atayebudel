import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colorOptions = [
        "blue",
        "black",
        "red",
        "gold",
        "pink",
        "purple",
        "orange",
        "white",
    ];

    const [selectedColor, setSelectedColor] = useState<string>("blue");

    function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div className="color-container">
            <h2>Color Picker</h2>
            <div className="color-selection">
                <h3>Select a Color</h3>
                <Form>
                    {colorOptions.map((color) => (
                        <div key={color} className="radio-option">
                            <Form.Check
                                type="radio"
                                label={<span style={{ color }}>{color}</span>}
                                value={color}
                                checked={color === selectedColor}
                                onChange={handleColorChange}
                                inline
                            />
                        </div>
                    ))}
                </Form>
            </div>
            <div className="color-display">
                <h3>Selected Color</h3>
                <div
                    data-testid="colored-box"
                    className="color-box"
                    style={{
                        backgroundColor: selectedColor,
                        color: selectedColor === "white" ? "black" : "white",
                        padding: "10px",
                        marginTop: "10px",
                        textAlign: "center",
                        border: "1px solid black",
                        width: "200px",
                    }}
                >
                    <span>{selectedColor}</span>
                </div>
            </div>
        </div>
    );
}
