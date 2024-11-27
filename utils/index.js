export const getAvatar = (conversation) => {
  if (conversation.type === "couple") {
    return conversation.contacts?.[0].avatar;
  } else {
    return conversation?.avatar;
  }
};

export const getName = (conversation) => {
  if (conversation.type === "couple") {
    return `${conversation.contacts?.[0].firstName} ${conversation.contacts[0].lastName}`;
  } else {
    return conversation.name;
  }
};

export const getLastMessage = (conversation) => {
  const message = conversation.messages?.at(-1);
  let text = undefined;
  if (typeof message.content === "string") {
    text = message.content;
  } else {
    text = message?.type;
  }
  return text;
};
