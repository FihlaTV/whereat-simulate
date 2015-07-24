const samples = {};

samples.lSpecs = {
  lastPing: 0,
  time: 2505606400000,
  telnet: [
    "geo fix -74.011262 40.7092649",
    "geo fix -74.011338 40.708273",
    "geo fix -74.011285 40.707508",
    "geo fix -74.010823 40.706923"
  ],
  http: [
    {
      id: "75782cd4-1a42-4af1-9130-05c63b2aa9fa",
      locs: [
        { lat: 40.704715, lon: -74.013685 },
        { lat: 40.705007, lon: -74.012537 },
        { lat: 40.705731, lon: -74.011443 },
        { lat: 40.706886, lon: -74.010853 }
      ]
    },
    {
      id: "75782cd4-1a42-4af1-9130-05c63b2aa9fb",
      locs: [
        { lat: 40.703084, lon: -74.010126 },
        { lat: 40.704092, lon: -74.008989 },
        { lat: 40.705264, lon: -74.010029 },
        { lat: 40.706638, lon: -74.011006 }
      ]
    }
  ]
};

samples.ids = [
  "75782cd4-1a42-4af1-9130-05c63b2aa9fa",
  "75782cd4-1a42-4af1-9130-05c63b2aa9fb"
];

samples.initRequests = [{
  id: "75782cd4-1a42-4af1-9130-05c63b2aa9fa",
  lat: 40.704715,
  lon: -74.013685,
  time: 2505606400000
}, {
  id: "75782cd4-1a42-4af1-9130-05c63b2aa9fb",
  lat: 40.703084,
  lon: -74.010126,
  time: 2505606400000
}];

samples.initResponses = [
  [{
    "id": "75782cd4-1a42-4af1-9130-05c63b2aa9fa",
    "lat": 40.704715,
    "lon": -74.013685,
    "time": 2505606400000
  }],
  [{
    "id": "75782cd4-1a42-4af1-9130-05c63b2aa9fa",
    "lat": 40.704715,
    "lon": -74.013685,
    "time": 2505606400000
  }, {
    "id": "75782cd4-1a42-4af1-9130-05c63b2aa9fb",
    "lat": 40.703084,
    "lon": -74.010126,
    "time": 2505606400000
  }]
];

samples.refreshRequests = [
  [
    {
      lastPing: 0,
      location: {
        id: "75782cd4-1a42-4af1-9130-05c63b2aa9fa",
        lat: 40.705007,
        lon: -74.012537,
        time: 2505606400000
      }
    },
    {
      lastPing: 0,
      location: {
        id: "75782cd4-1a42-4af1-9130-05c63b2aa9fb",
        lat: 40.704092,
        lon: -74.008989,
        time: 2505606400000
      }
    }
  ],
  [
    {
      lastPing: 0,
      location: {
        id: "75782cd4-1a42-4af1-9130-05c63b2aa9fa",
        lat: 40.705731,
        lon: -74.011443,
        time: 2505606400000
      }
    },
    {
      lastPing: 0,
      location: {
        id: "75782cd4-1a42-4af1-9130-05c63b2aa9fb",
        lat: 40.705264,
        lon: -74.010029,
        time: 2505606400000
      }
    }
  ],
  [
    {
      lastPing: 0,
      location: {
        id: "75782cd4-1a42-4af1-9130-05c63b2aa9fa",
        lat: 40.706886,
        lon: -74.010853,
        time: 2505606400000
      }
    },
    {
      lastPing: 0,
      location: {
        id: "75782cd4-1a42-4af1-9130-05c63b2aa9fb",
        lat: 40.706638,
        lon: -74.011006,
        time: 2505606400000
      }
    }
  ]
];

module.exports = samples;
