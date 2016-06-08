import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  message: 'Notification message',
  htmlMessage: '<b>HTML notification message</b>',
  type: 'success',
  autoClear: true,
  clearDuration: 2400,
  htmlContent: false,
  position: 'top',

  disableTimeoutInput: computed.not('autoClear'),

  computedMessage: computed('htmlContent', function() {
    if (this.get('htmlContent')) return this.get('htmlMessage');

    return this.get('message');
  }),

  actions: {
    showNotifcation() {
      if (this.get('clearAll')) {
        this.notifications.clearAll();
      }
      this.notifications.addNotification({
        message: this.get('computedMessage'),
        type: this.get('type'),
        autoClear: this.get('autoClear'),
        clearDuration: this.get('clearDuration'),
        htmlContent: this.get('htmlContent')
      });
    }
  }
});
