import { useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

function ScrollToTop(props) {

    const location = useLocation();
    const hasHash = location.hash.length == 0 ? false : true;
    if (!hasHash){
        window.scrollTo(0, 0);
    }
    else {
        console.log(location.hash.substring(1,location.hash.length));
        setTimeout(() => {
            document.getElementById(location.hash.substring(1,location.hash.length)).scrollIntoView();
        }, 500);
    }

    useEffect(() => {
        const forget = props.history.listen(() => {
        });
        return () => {
            forget();
        }
    }, []);

    return (null);
}

export default withRouter(ScrollToTop);