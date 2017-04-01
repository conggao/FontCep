import React from 'react'
import styles from './MyForm.css'
import {Form} from 'react-bootstrap'
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "MyForm";
    }

    rendInput() {

    }

    render() {
        return (
            <div className={styles.container}>
                <form>
                    {this.rendInput()}
                </form>
            </div>
        );
    }
}
getFormDefine = state => {
    return {fromDefine: state.updateFormDefine.formDefineList}
};
export default connect(
getFormDefine
)(MyForm)