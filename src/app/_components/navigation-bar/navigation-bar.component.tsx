import NavigationBarDesktop from './navigation-bar-desktop/navigation-bar-desktop.component';
import NavigationBarMobile from './navigation-bar-mobile/navigation-bar-mobile.component';

function NavigationBar() {
  return (
    <>
      <NavigationBarMobile />
      <NavigationBarDesktop />
    </>
  );
}

export default NavigationBar;
