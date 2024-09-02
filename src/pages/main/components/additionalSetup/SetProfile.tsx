/* eslint-disable no-unused-vars */
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import { PROFILE_IMAGES } from '../../constants/profile-images';

interface TSetProfileProps {
  setProfile: (profile: string) => void;
  profile: string;
}

const SetProfile = ({ setProfile, profile }: TSetProfileProps) => {
  const handleProfileClick = (profileUrl: string) => {
    setProfile(profileUrl);
  };

  return (
    <S.Container>
      <S.ProfileWrapper>
        {PROFILE_IMAGES.map(profileInfo => (
          <S.ImageWrapper
            key={profileInfo.index}
            $background={profileInfo.url}
            onClick={() => handleProfileClick(profileInfo.url)}
            $isSelected={profile === profileInfo.url}
            $hasSelected={!!profile}
          />
        ))}
      </S.ProfileWrapper>
    </S.Container>
  );
};

export default SetProfile;

const S = {
  Container: styled.div`
    margin: 4rem 0;
  `,

  ProfileWrapper: styled.ul`
    display: grid;
    grid-template-columns: 20.8rem 20.8rem 20.8rem;
    grid-gap: 2.4rem;
    @media ${device.mobile} {
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.6rem;
      margin-bottom: 10rem;
    }
  `,

  ImageWrapper: styled.li<{ $background: string; $isSelected: boolean; $hasSelected: boolean }>`
    opacity: ${({ $isSelected, $hasSelected }) => ($hasSelected ? ($isSelected ? 1 : 0.5) : 1)};
    cursor: pointer;
    background-image: url(${({ $background }) => $background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 20.8rem;
    overflow: hidden;
    list-style: none;
    @media ${device.mobile} {
      width: 100%;
      aspect-ratio: 1 / 1;
      height: auto;
    }
  `,
};
