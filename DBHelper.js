import Realm from 'realm';

// Define your models and their properties
const SettingsSchema = {
  name: 'userSettings',
  properties: {
    username: 'string',
    password: 'string',
  },
};

export default class DBHelper {
  static setupUserSettings(username, password, rememberMe) {
    const realm = new Realm({schema: [SettingsSchema]});

    realm.write(() => {
      let currentSettings = realm.objects('userSettings');
      realm.delete(currentSettings);
      realm.create('userSettings', {
        username: username,
        password: password,
        rememberMe: rememberMe,
      });
    });
    // Remember to close the realm when finished.
    realm.close();
  }

  static getUserSettings() {
    const realm = new Realm({schema: [SettingsSchema]});

    // Query Realm for settings
    const settings = realm.objects('userSettings');
    console.log(settings);
    return settings['0'];

    // Remember to close the realm when finished.
    realm.close();

  }
}
