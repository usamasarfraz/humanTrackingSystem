import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import SplashScreen from '../screens/splashScreen/splashScreen';
import LoginScreen from '../screens/loginScreen/loginScreen';
import RegisterScreen from '../screens/registerScreen/registerScreen';
import EmailVerificationScreen from '../screens/emailVerificationScreen/emailVerificationScreen';
import DashboardScreen from '../screens/dashboard/dashboard';
import ResetPasswordStep1 from '../screens/resetPasswordScreen/resetPasswordStep1';
import ResetPasswordStep2 from '../screens/resetPasswordScreen/resetPasswordStep2';
import ResetPasswordStep3 from '../screens/resetPasswordScreen/resetPasswordStep3';
import EditProfileScreen from '../screens/editProfile/editProfile';
import SideBar from '../screens/sideBar/sideBar';
    const Drawer = createDrawerNavigator({
      Dashboard: {
        screen: DashboardScreen,
        navigationOptions: {
          drawerLabel: () => null
        }
      }
    },{
      contentComponent: SideBar,
      // drawerOpenRoute: DrawerOpen,
      // drawerCloseRoute: DrawerClose,
      // drawerToggleRoute: DrawerToggle
    });
    const MainNavigator = createStackNavigator({
        SplashScreen: {screen: SplashScreen},
        LoginScreen: {screen: LoginScreen},
        RegisterScreen: {screen: RegisterScreen},
        EmailVerificationScreen: {screen: EmailVerificationScreen},
        DashboardScreen: {
          screen: Drawer,
          navigationOptions: {
            header: null
          }
        },
        EditProfileScreen: {screen: EditProfileScreen},
        ResetPasswordStep1: {screen: ResetPasswordStep1},
        ResetPasswordStep2: {screen: ResetPasswordStep2},
        ResetPasswordStep3: {screen: ResetPasswordStep3},
    },{
        initialRouteName: "SplashScreen"
    },{
        mode: "modal",
        cardStyle: {
          backgroundColor: "transparent",
          opacity: 1
        }
      }
    );

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;