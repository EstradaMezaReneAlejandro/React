import AppNav from "../components/AppNav";
import Map from "../components/Map";
import PageNav from "../components/PageNav";
import SideBar from "../components/SideBar";
import styles from './AppLayout.module.css';

function AppLayout() {
    return (
        <div className={styles.app}>
            <SideBar />
            <Map />
        </div>
    )
}

export default AppLayout
