import React, { use } from 'react';

const App = ({ appPromise }) => {
    const data=use(appPromise);
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default App;