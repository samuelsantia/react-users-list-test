import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

/** rounded wrapper to do rounded image */
const ProfileAvatarWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: var(--profile-avatar-size);
  height: var(--profile-avatar-size);
  border-radius: 50%;
  box-shadow: var(--profile-avatar-shadow);
  line-height: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

/** renders profile avatar */
function ProfileAvatar({ src, alt, ...props }) {
  // TODO: if not src present get first name letter and draw a span instead the image
  return (
    <ProfileAvatarWrapper>
      <img {...props} src={src} alt={alt} />
    </ProfileAvatarWrapper>
  );
}

ProfileAvatar.propTypes = {
  /** image source path */
  src: PropTypes.string.isRequired,
  /** image alternative text */
  alt: PropTypes.string.isRequired,
};

export default ProfileAvatar;
