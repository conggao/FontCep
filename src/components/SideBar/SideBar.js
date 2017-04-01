import React from 'react'
import styles from './SideBar.css'
class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "SideBar";
    }

    rendData() {
        return(
            
        <div className="item"></div>
        )
    }

    render() {
        return (
            <aside className={styles.container}>

            </aside>
        );
    }
}
export default SideBar