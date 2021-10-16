import React from 'react';

type AuthorizationModalType = {
  closeModal: () => void;
}

const AuthorizationModal: React.FC<AuthorizationModalType> = ({ closeModal }) => {
  return (<div onClick={closeModal} >close</div>)
}

export default AuthorizationModal;
