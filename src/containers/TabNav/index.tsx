import { Link, Outlet } from 'react-router-dom';
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

export default function TabNav() {
  return (
    <RootContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <TabContainer>
        <TabButtonWrapper>
          <Link to="/">
            <TabNavItem>
              <HomeIcon color="#C1B4A1" />
            </TabNavItem>
          </Link>
          <Link to="/details">
            <TabNavItem>
              <DetailIcon color="#C1B4A1" />
            </TabNavItem>
          </Link>
          <Link to="/gallery">
            <TabNavItem>
              <GalleryIcon color="#C1B4A1" />
            </TabNavItem>
          </Link>
          <Link to="/guestbook">
            <TabNavItem>
              <GuestBookIcon color="#C1B4A1" />
            </TabNavItem>
          </Link>
        </TabButtonWrapper>
      </TabContainer>
    </RootContainer>
  );
}
