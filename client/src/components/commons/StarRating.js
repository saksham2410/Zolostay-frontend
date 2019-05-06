import React from 'react'


class StarRating extends React.Component {

    constructor(props){
        super(props)
        this.state = {
                rating: 0
        }
    }

    componentDidMount(){
        this.setState(() => ({
            rating : this.props.rating
        }))
    }

    render(){
        return (
            <React.Fragment> 
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />                   
                    <span className="fa fa-star" style={{ color : this.state.rating>=1  ? "orange" : "grey"}}></span>
                    <span className="fa fa-star" style={{ color : this.state.rating>=3  ? "orange" : "grey"}}></span>
                    <span className="fa fa-star" style={{ color : this.state.rating>=5  ? "orange" : "grey"}}></span>
                    <span className="fa fa-star" style={{ color : this.state.rating>=7  ? "orange" : "grey"}}></span>
                    <span className="fa fa-star" style={{ color : this.state.rating>=9  ? "orange" : "grey"}}></span>
                    {(this.state.rating==0 || this.state.rating==null) && <h6 className="text text-danger"> No reviews yet </h6>}
            </React.Fragment>

        )
    }
    
    }
   

export default StarRating