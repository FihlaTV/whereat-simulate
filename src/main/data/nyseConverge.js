/**
 *
 * Copyright (c) 2015-present, Total Location Test Paragraph.
 * All rights reserved.
 *
 * This file is part of Where@. Where@ is free software:
 * you can redistribute it and/or modify it under the terms of
 * the GNU General Public License (GPL), either version 3
 * of the License, or (at your option) any later version.
 *
 * Where@ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. For more details,
 * see the full license at <http://www.gnu.org/licenses/gpl-3.0.en.html>
 *
 */

const locations = {
  lastPing: 0,
  time: 2505606400000,
  telnet: [
    "geo fix -74.0112448 40.7092390",
    "geo fix -74.0106868 40.7091984",
    "geo fix -74.0101612 40.7089950",
    "geo fix -74.0096891 40.7087836",
    "geo fix -74.0091205 40.7084013",
    "geo fix -74.0086055 40.7080434",
    "geo fix -74.0084017 40.7075556",
    "geo fix -74.0088308 40.7071488",
    "geo fix -74.0094209 40.7072220",
    "geo fix -74.0099251 40.7074823",
    "geo fix -74.0104079 40.7074091",
    "geo fix -74.0108264 40.7069618"
  ],
  http: [
    {
      id: "75782cd4-1a42-4af1-9130-05c63b2aa9fa",
      locs: [
        { lat: 40.7092390, lon: -74.0112448 },
        { lat: 40.7091984, lon: -74.0106868 },
        { lat: 40.7089950, lon: -74.0101612 },
        { lat: 40.7087836, lon: -74.0096891 },
        { lat: 40.7084013, lon: -74.0091205 },
        { lat: 40.7080434, lon: -74.0086055 },
        { lat: 40.7075556, lon: -74.0084017 },
        { lat: 40.7071488, lon: -74.0088308 },
        { lat: 40.7072220, lon: -74.0094209 },
        { lat: 40.7074823, lon: -74.0099251 },
        { lat: 40.7074091, lon: -74.0104079 },
        { lat: 40.7069618, lon: -74.0108264 }
      ]
    },
    {
      id: "75782cd4-1a42-4af1-9130-05c63b2aa9fb",
      locs: [
        { lat: 40.7038101, lon: -74.015820 },
        { lat: 40.7041639, lon: -74.015042 },
        { lat: 40.7044893, lon: -74.014409 },
        { lat: 40.7050585, lon: -74.013948 },
        { lat: 40.7055954, lon: -74.013454 },
        { lat: 40.7051887, lon: -74.013347 },
        { lat: 40.7050342, lon: -74.012800 },
        { lat: 40.7049691, lon: -74.012124 },
        { lat: 40.7051318, lon: -74.011555 },
        { lat: 40.7056198, lon: -74.011448 },
        { lat: 40.7061566, lon: -74.011244 },
        { lat: 40.7066934, lon: -74.010998 }
      ]
    },
    {
      id: "75782cd4-1a42-4af1-9130-05c63b2aa9fc",
      locs: [
        { lat: 40.7027400, lon: -74.0099466 },
        { lat: 40.7032600, lon: -74.0103006 },
        { lat: 40.7037100, lon: -74.0106225 },
        { lat: 40.7041300, lon: -74.0107513 },
        { lat: 40.7045300, lon: -74.0107190 },
        { lat: 40.7048300, lon: -74.0102685 },
        { lat: 40.7051300, lon: -74.0100271 },
        { lat: 40.7055800, lon: -74.0099520 },
        { lat: 40.7059200, lon: -74.0102148 },
        { lat: 40.7061500, lon: -74.0107351 },
        { lat: 40.7064200, lon: -74.0111214 },
        { lat: 40.7067900, lon: -74.0107780 }
      ]
    }
  ]
};

module.exports = locations;
