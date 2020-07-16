import React from "react";
import { connect } from 'react-redux';
import {withdraw10000, withdraw5000, giveaway } from "./../../redux/action";  

function Day04(props){
    return (
        <section style = {{width : "80", margin : "auto"}}>
            <section style = {{width : "50", textAlign : "center", margin : "auto"}}>
                <h2>Hello {props.name}</h2>
                <div>
                    <strong>$ {props.amount}</strong>
                    <div>Total amount</div>
                </div>
            </section>

            <section style = {{width : "50", textAlign : "center", margin : "auto"}}>
                <div>
                    <button type="button" className="btn btn-primary" onClick={() =>props.withdraw10000(props.amount)}>Withdraw 10K</button>
                    <button type="button" className="btn btn-primary" onClick={() =>props.withdraw5000(props.amount)}>Withdraw 5K</button>
                </div>
                <div>
                    <button type="button" className="btn btn-sucess" onClick={() =>props.giveaway(props.giveaway)}>Give everything to charity</button>
                </div>

            </section>
            {props.alert ? <div style={{textAlign : "center"}}> Insufficient balance</div>:""}
        </section>
    )
}

const mapStateToProps = (state) => {
    return{
        name: state.name,
        amount: state.amount,
        alert: state.alert
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return{
        withdraw10000: (amount) => dispatch(withdraw10000(amount)),
        withdraw5000: (amount) => dispatch(withdraw5000(amount)),
        giveaway: (amount) => dispatch(giveaway(amount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Day04);