import { showToast } from '../../components/Toast/ToastController';
import useTitle from '/src/hooks/useTitle.js';
import {
    Button
} from'react-vant'
const Home=()=>{
    useTitle("旅游网")
    return(
        <>
           Home
           <Button 
           type="primary"
           onClick={()=>{showToast(3,6,9)}}
           >
            showToast
           </Button>
        </>
       
    )
}
export default Home;