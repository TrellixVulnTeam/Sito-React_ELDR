import { Divider } from "@react-native-material/core";
import './Divider.css';
const DividerExampleHorizontal = () => (
    <div>
    <Divider style={{ margin: 0 }} leadingInset={800} trailingInset={800} color='black' />
    <p className="paragrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua. Sit amet purus <br/>
        gravida quis blandit. Vel pretium lectus quam id leo in.
        </p>
    </div>
);

export default DividerExampleHorizontal