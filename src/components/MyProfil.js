import React from "react";
import '../sass/myProfil.scss';
import { connect } from "react-redux";
import myimage from "../icons/avatar.png"



class myList extends React.Component {

    constructor(props) {
        super(props);
        //this.saveData = this.saveData.bind(this);


        this.state = {
            myoffers: []
        }
    }


    componentWillMount() {
        this.setState({ myoffers: this.props.lists })

    }

    render() {

        const { profils, lists } = this.props;

        const myprofils = profils.length ? (
            profils.map(profil => {
                return (
                    <div className="row myclass">
                        <div className="col-sm-4">
                            <img className="myimage" src={myimage} alt="myimage"></img>
                        </div>
                        <div className="col-sm-4">
                            <h5 >{profil.name}</h5>
                            <p >{profil.email}</p>
                            <p >{profil.adresse}</p>
                        </div>
                    </div>


                )

            }

            )
        ) : (

                ""
            )
        const mylists = lists ? (
            lists.map(offer => {
                return (
                    <div className="card myoffers" >
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-10">
                                    <h5 className="card-title titre"> {offer.name}</h5>
                                </div>

                            </div>
                            <p className="card-text size">{offer.city}</p>
                            <p className="card-text size">{offer.company}</p>
                            <p className="card-text size">{offer.createdAt}</p>
                            <div className="col-sm-8">
                                <p className="card-text size3">{offer.description}</p>

                            </div>
                        </div>
                    </div>

                )
            }

            )
        ) : (
                ""
            )

        return (


            <div className="container" >
                {myprofils}
                {mylists}

            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        profils: state.profiles.profil,
        lists: state.profiles.lists,

    }
}


export default connect(mapStateToProps)(myList);









