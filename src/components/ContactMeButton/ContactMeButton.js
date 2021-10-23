
import './ContactMeButton.css';
import { Linking} from "react-native";

export const ContactMeButton = (props) => {
    const data = props.data;
    return (
        <div className="contact_me_elements">
            <div>
                <p> {data.text}</p> 
            </div>
            <div>
                <button className="contact_me_button" onClick={() => Linking.openURL('mailto:'+data.email) }>{data.button_text}</button>
            </div>
        </div>
    );
  }