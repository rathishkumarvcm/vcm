import React from 'react';


import { GLoadingSpinner,GErrorBoundaries } from '../CommonComponents';

const GLoadingSpinnerHOC = Comp =>({isLoading,children,...props})=>{
    if(isLoading){
        return (<GLoadingSpinner />);
    } return (
        <GErrorBoundaries>
            <Comp {...props}>
                {children}
            </Comp>
        </GErrorBoundaries>
    );
};

export default GLoadingSpinnerHOC;