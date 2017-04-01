import React from 'react'
import styles from './AddBus.css'
import {connect} from 'react-redux'
import {} from '../../actions/BusAction'
class AddBus extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "AddBus";
    }

    render() {
        return (
            <div className={styles.container}>
                <input/>
                <input/>
            </div>
        );
    }
}
const getBusData = state=>{
  return   {
      busData:state.updateBusData
  }
};
export default connect(getBusData,)(AddBus)