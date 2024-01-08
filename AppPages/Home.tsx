import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnboardingScreen from './AppPages/OnboardingScreen.tsx';
import Welcome from './Welcome/Welcome.tsx';

const Home = ({  }) => {
 const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="HOME"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
};

export default Home;
