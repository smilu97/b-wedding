import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { styled } from '../../stitches';

import TabNavItem from './TabNavItem';

import HomeIcon from '../../components/icons/HomeIcon';
import GalleryIcon from '../../components/icons/GalleryIcon';
import GuestBookIcon from '../../components/icons/GuestBookIcon';
import DetailIcon from '../../components/icons/DetailIcon';

const RootContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ContentContainer = styled('div', {
  width: '100%',
  minWidth: '20rem',
  maxWidth: '50rem',
  minHeight: 'calc(100vh - $tabHeight)',
  background: '$contentBg',
  paddingBottom: '$tabHeight',
});

const TabContainer = styled('div', {
  position: 'fixed',
  left: 'calc((100vw - $cw) / 2)',
  bottom: 0,
  background: '$contentBg',
  width: '100%',
  minWidth: '20rem',
  maxWidth: '50rem',
  height: '$tabHeight',
  minHeight: '$tabHeight',
  borderTop: '1px dashed $divider',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  zIndex: 100000,
});

const TabButtonWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1.5rem',
  width: '100%',
  maxWidth: '30rem',
  height: '100%',
  boxSizing: 'border-box',

  '& > a': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
});

const inactiveColor = '#C1B4A1';
const activeColor = '#483F32';

const pathnames = ['/', '/details', '/gallery', '/guestbook'];

export default function TabNav() {
  const { pathname } = useLocation();

  const determineColor = (index: number) =>
    pathname === pathnames[index] ? activeColor : inactiveColor;

  return (
    <RootContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <TabContainer>
        <TabButtonWrapper>
          <Link to={pathnames[0]}>
            <TabNavItem>
              <HomeIcon color={determineColor(0)} />
            </TabNavItem>
          </Link>
          <Link to={pathnames[1]}>
            <TabNavItem>
              <DetailIcon color={determineColor(1)} />
            </TabNavItem>
          </Link>
          <Link to={pathnames[2]}>
            <TabNavItem>
              <GalleryIcon color={determineColor(2)} />
            </TabNavItem>
          </Link>
          <Link to={pathnames[3]}>
            <TabNavItem>
              <GuestBookIcon color={determineColor(3)} />
            </TabNavItem>
          </Link>
        </TabButtonWrapper>
      </TabContainer>
    </RootContainer>
  );
}
