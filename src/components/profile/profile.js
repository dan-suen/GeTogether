import "./profile.scss";
import Event from '../main/event.js';

export default function Profile(props) {
  //console.log(JSON.parse(localStorage.getItem('user')));
  return (
    <>
      <div className = "user-profile">
        <h1>USERNAME HERE</h1>
        <div className = "user-info">
          <img src="https://loremflickr.com/cache/resized/65535_52084710409_8f98a986ee_c_640_480_nofilter.jpg"/>
          <p className="description">apple apple apple apple apple apple apple apple apple apple apple apple apple apple apple apple apple apple apple </p>
          <div className="stats">
            <p>STATS</p>
            <table>
                <tbody>
                    <tr>
                        <td>Joined</td>
                        <td>
                          11:49 p.m.
                          Monday, October 3, 2022 (EDT)
                          Time in Toronto, ON
                        </td>
                    </tr>
                    <tr>
                        <td>Events attended</td>
                        <td>with two columns</td>
                    </tr>
                    <tr>
                        <td>Events hosted</td>
                        <td>with two columns</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
        <div className="container-header">
          <h1>EVENTS</h1>
        </div>
      <div className="event-container">
        <Event />
        <Event />
        <Event />
      </div>
    </>
  );
}