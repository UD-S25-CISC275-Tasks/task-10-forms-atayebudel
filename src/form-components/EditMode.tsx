import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [profileData, setProfileData] = useState({
        isEditing: false,
        displayName: "Your Name",
        isLearner: true,
    });

    function toggleEditing() {
        setProfileData((prev) => ({ ...prev, isEditing: !prev.isEditing }));
    }

    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setProfileData((prev) => ({
            ...prev,
            displayName: event.target.value,
        }));
    }

    function changeLearnerStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setProfileData((prev) => ({
            ...prev,
            isLearner: event.target.checked,
        }));
    }

    return (
        <div>
            <h2>User Profile</h2>
            <div className="edit-section">
                <h3>Edit Mode</h3>
                <Form.Check
                    type="checkbox"
                    id="edit-mode-switch"
                    label="Enable Edit Mode"
                    checked={profileData.isEditing}
                    onChange={toggleEditing}
                    className="form-switch"
                />
            </div>
            {profileData.isEditing ?
                <div className="form-section">
                    <h4>Edit Details</h4>
                    <Form.Group controlId="formDisplayName">
                        <Form.Label>Enter Your Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={profileData.displayName}
                            onChange={changeName}
                        />
                    </Form.Group>
                    <div className="checkbox-section">
                        <h4>Student Status</h4>
                        <Form.Check
                            type="checkbox"
                            id="learner-check"
                            label="Student"
                            checked={profileData.isLearner}
                            onChange={changeLearnerStatus}
                        />
                    </div>
                </div>
            :   <div className="display-section">
                    <h4>User Information</h4>
                    <p>
                        {profileData.displayName} is{" "}
                        {profileData.isLearner ? "a student" : "not a student"}.
                    </p>
                </div>
            }
        </div>
    );
}
