import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function UserFormPage() {

    const history = useHistory();
    // State variables to store selected values for allergies and dietary restrictions
    const [userBio, setUserBio] = useState('');
    const [selectedAllergy, setSelectedAllergy] = useState([]);
    const [selectedDietaryRestriction, setSelectedDietaryRestriction] = useState([])
    const [acceptsHomemade, setAcceptsHomemade] = useState(false);



    //function that will upload photo to input field or activate in-app camera
    const addUserPic = (event) => {
        event.preventDefault();
        console.log("in addUserPic")
    }



    // Function to handle changes in the allergy dropdown
    const handleAllergyChange = (event) => {
        //const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setSelectedAllergy(event.target.value);
    };

    // Function to handle changes in the dietary restriction dropdown
    const handleDietaryRestrictionChange = (event) => {
        //const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setSelectedDietaryRestriction(event.target.value);
    };

    // Function to handle changes in the "Y or N" checkbox
    const handleAcceptsHomemadeChange = (event) => {
        setAcceptsHomemade(event.target.checked);
    };

    return (
        <>
            <div>
                {/* username here */}
                {/* img url here */}
                <button className='formBtn' onClick={addUserPic}>
                    Upload Photo
                </button>
            </div>
            <form className='formPanel'>
                <div>
                    <label htmlFor="about">
                        Tell us a little about yourself:
                        <input
                            type='text'
                            placeholder='Why did you choose Cup Of Sugar?'
                            value={userBio}
                            required onChange={(event) => setUserBio(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="allergy">Please select allergies:</InputLabel>
                        <Select
                            id="allergy"
                            multiple
                            value={selectedAllergy}
                            onChange={handleAllergyChange}
                            input={<OutlinedInput label="Please select allergies:" />}

                        >
                            <MenuItem value="none">None</MenuItem>
                            <MenuItem value="nuts">Nuts</MenuItem>
                            <MenuItem value="dairy">Dairy</MenuItem>
                            <MenuItem value="gluten">Gluten</MenuItem>
                            <MenuItem value="shellfish">Shellfish</MenuItem>
                            <MenuItem value="soy">Soy</MenuItem>
                            <MenuItem value="eggs">Eggs</MenuItem>
                            <MenuItem value="other">Other (please detail in your profile!)</MenuItem>
                            {/* Add more allergy options as needed */}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="dietaryRestriction">Please select dietary restrictions:</InputLabel>
                        <Select
                            id="dietaryRestriction"
                            multiple
                            value={selectedDietaryRestriction}
                            onChange={handleDietaryRestrictionChange}
                            input={<OutlinedInput label="Please select dietary restrictions:" />}

                        >
                            <MenuItem value="none">None</MenuItem>
                            <MenuItem value="vegetarian">Vegetarian</MenuItem>
                            <MenuItem value="vegan">Vegan</MenuItem>
                            <MenuItem value="glutenFree">Gluten-Free</MenuItem>
                            <MenuItem value="dairyFree">Dairy-Free</MenuItem>
                            <MenuItem value="halal">Halal</MenuItem>
                            <MenuItem value="kosher">Kosher</MenuItem>
                            <MenuItem value="other">Other (please detail in your profile!)</MenuItem>
                            {/* Add more dietary restriction options as needed */}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <label>
                        Accept Homemade Items: Y
                        <Checkbox
                            checked={acceptsHomemade}
                            onChange={handleAcceptsHomemadeChange}
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export default UserFormPage;
