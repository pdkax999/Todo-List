const now = new Date();
export default {
  today: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
  tomorrow: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1),
};
