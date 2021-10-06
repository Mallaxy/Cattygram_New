export interface IMessagesState {
  dialogsData: IDialog[];
  messagesData: IMessage[];
  newMessageText: string;
}

export interface IDialog {
  id: number;
  name: string;
}
export interface IMessage {
  id: number;
  text: string;
}
