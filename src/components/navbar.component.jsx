import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }

    render() { 
        return ( 
            // <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Navbar <span className="badge bg-secondary">4</span>
                        </a>
                    </div>
                </nav>

                // <button type="button" className="btn btn-primary m-4">Reset</button>
            // </>
         );
            
    }
}
 
export default Navbar;