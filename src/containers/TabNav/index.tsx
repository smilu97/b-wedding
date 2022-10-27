import { Link, Outlet } from 'react-router-dom';
import { styled } from '../../stitches';

const RootContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ContentContainer = styled('div', {
  width: '$cw',
  minHeight: 'calc(100vh - $tabHeight)',
  background: '$contentBg',
  paddingBottom: '$tabHeight',
});

const TabContainer = styled('div', {
  position: 'fixed',
  left: 'calc((100vw - $cw) / 2)',
  bottom: 0,
  background: '$contentBg',
  minHeight: '$tabHeight',
  width: '$cw',
  borderTop: '1px dashed $divider',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
});

export default function TabNav() {
  return (
    <RootContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <TabContainer>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/gallery">
          <div>Gallery</div>
        </Link>
        <Link to="/guestbook">
          <div>GuestBook</div>
        </Link>
        <Link to="/details">
          <div>Details</div>
        </Link>
      </TabContainer>
    </RootContainer>
  );
}
