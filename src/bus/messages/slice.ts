import { createSlice } from '@reduxjs/toolkit';
import { IMessage, IMessagesState } from './types';

const initialState: IMessagesState = {
  dialogsData: [
    { id: 1, name: 'Artem' },
    { id: 2, name: 'Kira' },
    { id: 3, name: 'Andrew' },
    { id: 4, name: 'Max' },
    { id: 5, name: 'John' },
    { id: 6, name: 'Jesus' },
  ],
  messagesData: [
    { id: 1, text: 'Artem' },
    { id: 2, text: 'Kira' },
    { id: 3, text: 'Andrew' },
    { id: 4, text: 'Max' },
    { id: 5, text: 'John' },
    { id: 6, text: 'Jesus' },
  ],
  newMessageText: 'Hello=3',
};

const slice = createSlice({
  name: 'Messages',
  initialState,
  reducers: {
    addMessage: (state: IMessagesState) => {
      const newMessage: IMessage = { id: 8, text: state.newMessageText };
      state.messagesData = [...state.messagesData, newMessage];
      state.newMessageText = '';
    },
  },
});

export default slice.reducer;

export const messagesActions = {
  ...slice.actions,
};
