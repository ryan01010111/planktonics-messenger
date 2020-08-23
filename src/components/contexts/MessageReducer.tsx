interface Message {
  id: string;
  user: string;
  message: string;
  time: Date;
}

interface State {
  work: Message[];
  casual: Message[];
}

interface Action {
  channel: string;
  type: string;
  payload: any;
}

export default (state: State, action: Action) => {
  const channel = action.channel;
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        [channel]: [...state[channel], action.payload],
      };
    case "DELETE_MESSAGE":
      return {
        ...state,
        [channel]: state[channel].filter(
          (msg: Message) => msg.id !== action.payload
        ),
      };
    case "UPDATE_MESSAGE":
      return {
        ...state,
        [channel]: state[channel].filter((msg: Message) => {
          if (msg.id === action.payload.id) {
            msg.message = action.payload.message;
          }
          return msg;
        }),
      };
  }
};
