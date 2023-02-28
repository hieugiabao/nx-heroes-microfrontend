module.exports = {
  name: 'dashboard',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': 'apps/dashboard/src/app/dashboard/dashboard.module.ts',
  },
};
