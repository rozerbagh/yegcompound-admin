import React from 'react';
import { Progress } from 'reactstrap';

const Loader = (props) => {
    return (
        <div className="loader-wrapper">
            <Progress animated color="primary" value={100} />
        </div>
    );
};

export default Loader;