// State Helpers

import { mapState } from 'vuex';

const NotificationCount = {
  template: `<p>Messages: {{ messageCount }}</p>`,
  computed: mapState(['messageCount'])
};
