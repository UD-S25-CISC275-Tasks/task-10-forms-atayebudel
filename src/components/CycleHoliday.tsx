import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [my_Holidays, setHoliday] = useState("🦃");

    function Alphabet(): void {
        let currentHoliday: string = my_Holidays;

        if (currentHoliday === "🦃") {
            setHoliday("❤️");
        } else if (currentHoliday === "❤️") {
            setHoliday("🎃");
        } else if (currentHoliday === "🎃") {
            setHoliday("🎄");
        } else if (currentHoliday === "🎄") {
            setHoliday("🇺🇸");
        } else {
            setHoliday("🦃");
        }
    }

    function Date(): void {
        let currentHoliday: string = my_Holidays;
        if (currentHoliday === "🦃") {
            setHoliday("🇺🇸");
        } else if (currentHoliday === "🇺🇸") {
            setHoliday("🎄");
        } else if (currentHoliday === "🎄") {
            setHoliday("🎃");
        } else if (currentHoliday === "🎃") {
            setHoliday("❤️");
        } else {
            setHoliday("🦃");
        }
    }

    return (
        <div>
            <div>
                <Button onClick={Alphabet}>Advance by Alphabet</Button>
                <Button onClick={Date}>Advance by Year</Button>
            </div>
            Holiday: {my_Holidays}
        </div>
    );
}
