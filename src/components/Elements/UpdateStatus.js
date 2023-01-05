import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const UpdateStatus = ({ status, handleStatus, allStatus }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = (e) => {
        console.log(e)
        setDropdownOpen(prevState => !prevState);
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                {status}
            </DropdownToggle>
            <DropdownMenu>
                {allStatus.map((stat, idx) => (
                    <DropdownItem key={idx} onClick={() => handleStatus(stat.value)}>{stat.name}</DropdownItem>
                ))}

            </DropdownMenu>
        </Dropdown>
    );
}

export default UpdateStatus;