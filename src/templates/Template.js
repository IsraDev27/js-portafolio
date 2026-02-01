//importacion de recursos.
import getData from '@utils/getData.js';
import github from '@images/github.png';
import twitter from '@images/twitter.png';
import instagram from '@images/instagram.png';

const Template = async () => {
  const data = await getData();
  const view = `
    <div class="About">
      <div class="card">
        <div class="card_header"></div> <div class="card_details">
          <div class="card_photo center circle">
            <img src="${data.picture.large}" alt="${data.name.first}">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="48" />
            </svg>
          </div>
          <p class="card_title">Hi, My name is</p>
          <p class="card_value">${data.name.first} ${data.name.last}</p>
          <p class="card_username">@${data.login.username}</p>
        </div>

        <div class="card_stats">
          <div class="stat-item">
            <span>Age</span>
            <strong>${data.dob.age}</strong>
          </div>
          <div class="stat-item">
            <span>Gender</span>
            <strong>${data.gender === 'male' ? '♂' : '♀'}</strong>
          </div>
          <div class="stat-item">
            <span>Phone</span>
            <strong>${data.cell.substring(0, 9)}</strong>
          </div>
        </div>

        <div class="card_userdata">
          <ul>
            <li><i class="icon">📧</i> ${data.email}</li>
            <li><i class="icon">📍</i> ${data.location.city}, ${data.location.country}</li>
          </ul>
          <a href="https://www.google.com/maps/@${data.location.coordinates.latitude},${data.location.coordinates.longitude},12z" 
            target="_blank" class="map-link">View Location</a>
        </div>

        <div class="card_social">
          <a href="#"><img src='${twitter}' alt="twitter"/></a>
          <a href="#"><img src='${github}' alt="github"/></a>
          <a href="#"><img src='${instagram}' alt="instagram"/></a>
        </div>
      </div>
    </div>
  `;
  return view;
};
export default Template;
