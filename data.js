var APP_DATA = {
  "scenes": [
    {
      "id": "0-360",
      "name": "360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.0607971928619957,
        "pitch": 0.022548445108000692,
        "fov": 1.2724558970694075
      },
      "linkHotspots": [
        {
          "yaw": 0.4338207336886164,
          "pitch": 0.2522362939161873,
          "rotation": 5.497787143782138,
          "target": "1-360b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-360b",
      "name": "360B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7522465268382454,
          "pitch": 0.22757990879091494,
          "rotation": 0,
          "target": "0-360"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.644830310013468,
          "pitch": 0.3202747459458948,
          "title": "Title",
          "text": "SINK"
        },
        {
          "yaw": 0.2582939332702203,
          "pitch": 0.543998074106737,
          "title": "Title",
          "text": "JUICER"
        },
        {
          "yaw": 0.9003458032338596,
          "pitch": 0.3509664592763855,
          "title": "Title",
          "text": "DOUBLE DOOR FRIDGE"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
