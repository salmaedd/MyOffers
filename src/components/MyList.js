import React from "react";
import '../sass/myList.scss';
import { connect } from "react-redux";


class myList extends React.Component {
    constructor(props) {
        super(props);
        //this.saveData = this.saveData.bind(this);


        this.state = {
            istrue: true,
            idt: null,
            myclass: "btn btn-primary text-white",
            myclass_success: "btn btn-success text-white",
            Postuler: "Postuler"

        }
    }

    saveData = (id) => {


        this.props.saveData(id)
        const c = document.getElementById(id._id)
        c.classList.add("btn-success")
        this.setState({ istrue: false, idt: id._id, Postuler: "postulé" })


    }



    render() {



        const { mylists } = this.props;
        const list = mylists.lists.length ? (
            mylists.lists.map(mylist => {
                return (
                    <div className="card taille" >
                        <div className="card-body" >
                            <div className="row">
                                <div className="col-sm-10" key={mylist._id}>
                                    <h5 className="card-title titre">{mylist.name}</h5>
                                </div>
                                <div className="col-sm-2">

                                    <button id={mylist._id}
                                        className={mylist.showbutton ? (this.state.myclass_success) : (this.state.myclass)} onClick={() => this.saveData(mylist)}
                                    >{this.state.Postuler}</button>

                                </div>
                            </div>
                            <p className="card-text size">{mylist.city}</p>
                            <p className="card-text size">{mylist.company}</p>
                            <p className="card-text size">{mylist.createdAt}</p>
                            <div className="col-sm-8">
                                <p className="card-text size3">{mylist.description}</p>

                            </div>
                        </div>
                    </div >

                )
            }

            )
        ) : (

                ""
            )

        return (


            <div className="container" >

                {list}

            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        mylists: state.lists,
        lists: state.profiles.lists

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveData: (id) => { dispatch({ type: 'ADD', id: id }) }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(myList);









