module.exports = {
  extends: ['@boughtbymany/eslint-config-bbm/vue'],

  rules: {
    // Override base eslint config to allow console logging
    'no-console': [
      'error',
      { allow: ['info', 'warn', 'error', 'debug', 'groupCollapsed', 'groupEnd'] },
    ],
  },
}
