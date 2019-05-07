import React from 'react'

class SortByRating extends React.Component{

    constructor(props){
        super(props)
        this.state={
            value : 'highToLow'
        }
        
    }

    change = (e) => {
        e.persist()
        // this.setState(() => ({
        //     value:e.target.value
        // }))
        this.props.handleFilter(e.target.value)
        
    }

    render(){
        return (
            <div>
               <form className="form-inline" onChange={this.change} value={this.state.value}>
                    <label className="my-1 mr-2" >Sory by Rating</label>
                        <select  className="custom-select my-1 mr-sm-2" >
                            <option value="highToLow" defaultValue>High to low</option>
                            <option value="lowToHigh">Low to high</option>
                        </select>
                    </form>
               
            </div>
        )
    }
    
}

export default SortByRating