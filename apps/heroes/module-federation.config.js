module.exports = {
  name: 'heroes',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': 'apps/heroes/src/app/heroes/heroes.module.ts',
  },
};
