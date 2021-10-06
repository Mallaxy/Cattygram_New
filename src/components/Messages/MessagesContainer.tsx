import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';

import Messages from './Messages';
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { messagesActions } from '@app/bus/messages';

const { addMessage } = messagesActions;

const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
    dialogsData: state.dialogsPage.dialogsData,
  };
};

export default compose(
  connect(mapStateToProps, { addMessage }),
  AuthRedirect
)(Messages);
