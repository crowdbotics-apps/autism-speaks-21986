import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList162282Navigator from '../features/ArticleList162282/navigator';
import ArticleList162281Navigator from '../features/ArticleList162281/navigator';
import ArticleList162280Navigator from '../features/ArticleList162280/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList162282: { screen: ArticleList162282Navigator },
ArticleList162281: { screen: ArticleList162281Navigator },
ArticleList162280: { screen: ArticleList162280Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
