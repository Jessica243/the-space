import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Login from './src/screen/Login';
import Registration from './src/screen/Registration';
import Map from './src/screen/Map';
import PasswordReset from './src/screen/PasswordReset';
import Settings from './src/screen/Settings';
import UserSettings, { initialUserSettings } from './src/type/UserSettings';

enum AppPages {
  Login,
  Registration,
  PasswordReset,
  Map,
  Settings,
}

const Page = () : JSX.Element => {
  const [page, setPage] = useState(AppPages.Login);
  const [settings, saveSettings] = useState<UserSettings>(initialUserSettings);
  switch (page) {
  case AppPages.Login:
    return (
      <Login
        onLoginSuccess={() => setPage(AppPages.Map)}
        onRequestRegistration={() => setPage(AppPages.Registration)}
        onForgotPassword={() => setPage(AppPages.PasswordReset)}
      />
    );
  case AppPages.Registration:
    return (
      <Registration
        onRegistrationSuccess={() => setPage(AppPages.Login)}
        onCancel={() => setPage(AppPages.Login)}
      />
    );
  case AppPages.PasswordReset:
    return (
      <PasswordReset
        onPasswordResetSuccess={() => setPage(AppPages.Login)}
        onCancel={() => setPage(AppPages.Login)}
      />
    );
  case AppPages.Map:
    return (
      <Map onOpenSettings={() => setPage(AppPages.Settings)} settings={settings}/>
    );
  case AppPages.Settings:
    return (
      <Settings
        settings={settings}
        onSave={(newSetting: UserSettings) => {
          saveSettings({ ...settings, ...newSetting });
          setPage(AppPages.Map);
        }}
        onCancel={() => setPage(AppPages.Map)}
      />
    );
  default: return <></>;
  }
};

const App = () => {
  return (
    <View style={componentStyles.container}>
      <Page />
    </View>
  );
};


const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
