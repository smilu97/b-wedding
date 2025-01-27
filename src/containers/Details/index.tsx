import { styled } from '../../stitches';

import PageTitle from '../../components/PageTitle';
import InfoItem from './InformationItem';

import NaverMapIcon from '../../components/icons/NaverMapIcon';
import KakaoMapIcon from '../../components/icons/KakaoMapIcon';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const RootContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '5rem auto',
});

const ContentsWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '3.75rem 0',
  width: '100%',
});

const WidthLimitWrap = styled('div', {
  padding: '0 1.5rem',
  width: '100%',
  maxWidth: '30rem',
  boxSizing: 'border-box',
});

const Row = styled('div', {
  display: 'flex',
  variants: {
    type: {
      1: { justifyContent: 'space-between' },
      2: { justifyContent: 'center' },
    },
  },
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
  overflow: 'hidden',
});

const MapWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '2rem 0 4rem 0',
  width: '100%',
});

const MapContainer = styled('div', {
  marginBottom: '2rem',
  width: '100%',
  height: '40vh',
  backgroundColor: '$primary500',
  overflow: 'hidden',
});

const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  width: '8.6rem',
  height: '2.4rem',
  borderRadius: '1.2rem',
  borderStyle: 'none',
  boxSizing: 'border-box',
  cursor: 'pointer',
  variants: {
    type: {
      1: { backgroundColor: '#3EAB38', marginRight: '1.5rem' },
      2: { backgroundColor: '#F5E11E' },
    },
  },
});

const ButtonIcon = styled('div', {
  marginRight: '0.4rem',
  width: '1rem',
  height: '1rem',
});

const ButtonText = styled('p', {
  fontSize: '0.875rem',
  fontWeight: '800',
  fontFamily: 'Nanum Square',
  variants: {
    type: {
      1: { color: '#FFFFFF' },
      2: { color: '$primary400' },
    },
  },
});

export default function Details() {
  const mapCenter = { lat: 37.5131786, lng: 127.0314855 };

  return (
    <RootContainer>
      <PageTitle>Details</PageTitle>
      <ContentsWrap>
        <WidthLimitWrap>
          <Row type={1}>
            <InfoItem titleTxt="날짜">2023년 3월 25일 오후 12시</InfoItem>
            <InfoItem titleTxt="전화">02-536-4000</InfoItem>
          </Row>
          <Row type={1}>
            <InfoItem titleTxt="장소">
              서울특별시 강남구 논현로 662 헤리츠타워
              <br />
              헤리츠 웨딩 컨벤션 5층 프로메사 홀
            </InfoItem>
          </Row>
        </WidthLimitWrap>
        <MapWrapper>
          <MapContainer>
            <Map center={mapCenter} style={{ width: '100%', height: '100%' }}>
              <MapMarker position={mapCenter} />
            </Map>
          </MapContainer>
          <Row type={2}>
            <Button
              onClick={() => {
                window.location.href = 'https://naver.me/GQ4YNZx8';
              }}
              type={1}
            >
              <ButtonIcon>
                <NaverMapIcon></NaverMapIcon>
              </ButtonIcon>
              <ButtonText type={1}>네이버 지도</ButtonText>
            </Button>
            <Button
              onClick={() => {
                window.location.href = 'http://kko.to/pUC7-RJmnr';
              }}
              type={2}
            >
              <ButtonIcon>
                <KakaoMapIcon></KakaoMapIcon>
              </ButtonIcon>
              <ButtonText type={2}>카카오 지도</ButtonText>
            </Button>
          </Row>
        </MapWrapper>
        <WidthLimitWrap>
          <Row type={1}>
            <InfoItem titleTxt="버스">
              논현고개역 : 간선 147, 463 / 지선 4211
              <br />
              논현동사거리역 : 간선 241, 401 / 지선 3412, 3414, 6411
            </InfoItem>
          </Row>
          <Row type={1}>
            <InfoItem titleTxt="지하철">
              7호선 학동역 3번 출구 도보 1분
              <br />
              9호선 언주역 3번출구 도보 15분
            </InfoItem>
          </Row>
        </WidthLimitWrap>
      </ContentsWrap>
    </RootContainer>
  );
}
