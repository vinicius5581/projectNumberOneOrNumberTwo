import React from 'react';

const CreateRestroom = () => (
    <div>
        <h1>Add a restroom</h1>
        <form>
            <p>
                Required fields are followed by<strong>
                    <abbr title="required">*</abbr>
                </strong>.
            </p>
            <fieldset>
                <legend>Basic info</legend>
                <p>
                    <label for="name">
                        <span>Name:</span> <input type="text" id="name" name="name" />
                    </label>
                </p>
                <p>
                    <label for="address">
                        <span>Address:</span> <input type="text" id="address" name="address" />
                    </label>
                </p>
            </fieldset>
            <fieldset>
                <legend>Public</legend>
                <p>
                    <label for="public">
                        <span>Is Public:</span>
                    </label>
                    <select id="public" name="isPublic">
                        <option value="public">Public</option>
                        <option value="customers">Customers</option>
                        <option value="paid">Paid</option>
                        <option value="private">Private</option>
                    </select>
                </p>
            </fieldset>
            <fieldset>
                <legend>Hours</legend>
            </fieldset>
            <fieldset>
                <legend>Genders</legend>
            </fieldset>
            <fieldset>
                <legend>With baby diapers change?</legend>
            </fieldset>
            <fieldset>
                <legend>Instructions</legend>
            </fieldset>
            <fieldset>
                <legend>Features</legend>
            </fieldset>
        </form>
        <button type="submit">Add restroom</button>
    </div>
);

export default CreateRestroom;
