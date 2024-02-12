import React from 'react';
import TestForm from "../components/Forms/TestForm/TestForm";
interface rhfProps {

}

const RHF: React.FC<rhfProps> = ({}) => {

    return (
        <div className="rhf">
            <h1>React hook form</h1>
            <TestForm/>
        </div>
    );
};

export default RHF;
