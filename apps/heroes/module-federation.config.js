module.exports = {
  name: 'heroes',
  exposes: {
    './Module': 'apps/heroes/src/app/remote-entry/entry.module.ts',
  },
};
