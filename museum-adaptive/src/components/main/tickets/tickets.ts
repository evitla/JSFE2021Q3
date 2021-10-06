import baseComponent from '../../baseComponent';

import './tickets.scss';

const ticketsSection = baseComponent('section', ['white-bg']);
ticketsSection.id = 'tickets';

const ticketsWrapper = baseComponent('div', ['wrapper', 'tickets-wrapper']);
ticketsWrapper.innerHTML = `
  <h2 class="section-title title-with-line">Buy Tickets</h2>
  <div class="tickets-container">
    <div class="img-container"></div>
    <div class="tickets-buy">
      <div class="tickets-type">
        <h4>Ticket Type</h4>
        <div class="radios">
          <label>
            <input type="radio" name="radio" checked>
            <span class="checkmark"></span>
            Permanent exhibition
          </label>
          <label>
            <input type="radio" name="radio">
            <span class="checkmark"></span>
            Temporary exhibition
          </label>
          <label>
            <input type="radio" name="radio">
            <span class="checkmark"></span>
            Combined Admission
          </label>
        </div>
      </div>
      <div class="tickets-amount">
        <h4>Amount</h4>
        <h5>Basic 18+</h5>
        <div class="amount-controller">
          <button type="button" onclick="this.nextElementSibling.stepDown()">&ndash;</button>
          <input type="number" min="0" max="20" value="1" readonly>
          <button type="button" onclick="this.previousElementSibling.stepUp()">+</button>
        </div>
        <h5>Senior 65+</h5>
        <div class="amount-controller">
          <button type="button" onclick="this.nextElementSibling.stepDown()">&ndash;</button>
          <input type="number" min="0" max="20" value="1" readonly>
          <button type="button" onclick="this.previousElementSibling.stepUp()">+</button>
        </div>
        <h4 class="total-amount">Total &#8364;220</h4>
        <button class="buy-btn">Buy Now</button>
      </div>
    </div>
  </div>
`;

ticketsSection.appendChild(ticketsWrapper);

export default ticketsSection;
