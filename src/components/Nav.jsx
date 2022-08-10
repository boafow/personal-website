import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange} aria-label="Nav tabs">
                <Tab value='1' label="Home" to='/' component={Link} />
                <Tab value='2' label="About" to='/about' component={Link} />
                <Tab value='3' label="Resume" to='/resume' component={Link} />
                <Tab value='4' label="Contact" to='/contact' component={Link} />
            </Tabs>
        </Box>
    );
}

export default Nav;