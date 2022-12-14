import React from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import HomeScreen from "../../features/Home/screens/home.screens";
import UserDetailsScreen from "../../features/Home/screens/userDetails.screens";
import { StyledSafeAreaView } from "../../utils/safeArea.util.component";
import styled from "styled-components/native";
import MapsScreens from "../../features/Maps/screens/maps.screens";
const Stack = createStackNavigator();

// const HomeSafeAreaView = styled(StyledSafeAreaView)`
//   margin-left: ${({ theme }) => theme.space[3]};
//   margin-right: ${({ theme }) => theme.space[2]};
//   background-color: ${({ theme }) => theme.colors.brand.primary};
// `;

const HomeNavigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StyledSafeAreaView>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="UserDetailsScreen"
            component={UserDetailsScreen}
          />
          <Stack.Screen name="Maps" component={MapsScreens} />
        </Stack.Navigator>
      </StyledSafeAreaView>
    </View>
  );
};

export default HomeNavigator;
