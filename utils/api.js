const apiURL = 'http://api.breadtrip.com';

const user = {
  info(userId, callback) {
    wx.request({
      url: `${apiURL}/users/${userId}/v2/`,
      method: 'GET',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
  },
};

const trip = {
  waypoints(tripId, callback) {
    wx.request({
      url: `${apiURL}/trips/${tripId}/waypoints/`,
      method: 'GET',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
  },
  hot(data, callback) {
    wx.request({
      url: `${apiURL}/v2/index/`,
      method: 'GET',
      data,
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
  },
};

const waypoint = {
  detail(tripId, waypointId, callback) {
    wx.request({
      url: `${apiURL}/trips/${tripId}/waypoints/${waypointId}/`,
      method: 'GET',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
  },
  replies(tripId, waypointId, callback) {
    wx.request({
      url: `${apiURL}/trips/${tripId}/waypoints/${waypointId}/replies/`,
      method: 'GET',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
  },
};

module.exports = {
  user,
  trip,
  waypoint,
};
