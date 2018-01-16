/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
  name: "Concetto",
  friends: 299,
  messages: ["my new years resolution is to try to actually finish someth"],
  postMessage: function(message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function() {
    facebookProfile.friends += 1;
  },
  removeFriend: function() {
    if (facebookProfile.friends > 0) {
      facebookProfile.friends -= 1;
    }
  }
};
