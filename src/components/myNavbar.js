import React from "react";
import '../sass/myNavbar.scss';




class myNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myClassname1: 'a1 nav-link text-uppercase ml-5 ',
            myClassname2: 'a1 nav-link text-uppercase ml-5 ',

        };
        this.toggleClass1 = this.toggleClass1.bind(this);
        this.toggleClass2 = this.toggleClass2.bind(this);

    }

    toggleClass1() {
        //const currentState = this.state.active;
        //   const c1 = document.getElementById(this.id)
        // c1.classList.add("underline")
        //this.setState({ myClassname1: 'a1 nav-link text-uppercase ml-5 underline' });
    };
    toggleClass2() {
        //const currentState = this.state.active;
        this.setState({ myClassname2: 'a1 nav-link text-uppercase ml-5 underline' });
    };

    render() {

        return (


            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

                <a
                    id="A"
                    className="a1 nav-link text-uppercase ml-5 underline"
                    onClick={this.toggleClass1()}
                    href={process.env.PUBLIC_URL + "/List"}
                > Liste des Offers
            </a>
                <a
                    className="a1 nav-link text-uppercase ml-5 "
                    onClick={this.toggleClass2}
                    href={process.env.PUBLIC_URL + "/Profil"}
                > Mon Profil
            </a>

            </nav>
        )

    }
}


export default myNavbar;









