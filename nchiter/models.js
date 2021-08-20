// eslint-disable-next-line no-unused-vars
const ACTIVITY = {
  status: Number,
  statusText: String
}

// eslint-disable-next-line no-unused-vars
const USER = {
  id: String,
  createdAt: Date,
  username: String,
  avatarUrl: String,
  activity: ACTIVITY
}

// eslint-disable-next-line no-unused-vars
const SERVER = {
  id: String,
  createdAt: Date,
  name: String,
  iconUrl: String,
  ownerId: String,
  owner: USER,
  membersCount: Number
}

// eslint-disable-next-line no-unused-vars
const PERMISSIONS = {
  readMessages: Boolean,
  sendMessages: Boolean,
  viewChannels: Boolean,
  manageServer: Boolean,
  manageChannels: Boolean,
  manageMessages: Boolean,
  administrator: Boolean
}

// eslint-disable-next-line no-unused-vars
const CHANNEL = {
  id: String,
  name: String,
  position: Number,
  permissions: PERMISSIONS
}

// eslint-disable-next-line no-unused-vars
const MEMBER = {
  ...USER,
  nick: String,
  joinedAt: Date,
  permissions: PERMISSIONS
}

// eslint-disable-next-line no-unused-vars
const USER_CHAT = {
  id: String,
  username: String,
  avatarUrl: String
}
