import Polymer from '../polymer';

import stateCardType from '../util/state-card-type';

require('./state-card-display');
require('./state-card-toggle');
require('./state-card-thermostat');
require('./state-card-configurator');
require('./state-card-scene');
require('./state-card-media_player');
require('./state-card-updater');

export default Polymer({
  is: 'state-card-content',

  properties: {
    stateObj: {
      type: Object,
      observer: 'stateObjChanged',
    }
  },

  stateObjChanged: function(newVal, oldVal) {
    var root = Polymer.dom(this);

    if (!newVal) {
      if (root.lastChild) {
        root.removeChild(root.lastChild);
      }
      return;
    }

    var newCardType = stateCardType(newVal);

    if (!oldVal || stateCardType(oldVal) != newCardType) {
      if (root.lastChild) {
        root.removeChild(root.lastChild);
      }

      var stateCard = document.createElement("state-card-" + newCardType);
      stateCard.stateObj = newVal;
      root.appendChild(stateCard);
    } else {
      root.lastChild.stateObj = newVal;
    }
  },
});
