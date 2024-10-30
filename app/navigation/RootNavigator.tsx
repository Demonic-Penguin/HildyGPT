import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';


export default function RootNavigator() {
  return (
      <NavigationContainer 
        documentTitle={{
          formatter: (options, route) =>
            `HildyGPT - ${options?.title ?? route?.name}`
      }}
      >
        <DrawerNavigation />
      </NavigationContainer>
  );
}