# 🌍 LandSight : Landsat 9 Satellite Tracker & Surface Reflectance Data Downloader 🚀

A web application that tracks the live coordinates of the Landsat 9 satellite and allows users to set location-based notifications for satellite flyovers. It also enables users to download Surface Reflectance (SR) data for their selected area and timeframe, using NASA’s CMR API.

## Features ✨

- **Real-Time Satellite Tracking**:
  - Tracks Landsat 9 using Two-Line Element (TLE) data.
  - Displays the next closest aproach of the sattelite to your Area of Intrest.
- **Location Selection**:
  - Select any location on the map or input latitude/longitude manually.
- **Satellite Overpass Notifications**:

  - Set reminders for upcoming satellite flyovers at your location.
  - Notifications sent via browser or SMS.

- **Surface Reflectance Data Downloader**:
  - Define an Area of Interest (AOI) and timeframe to search for data.
  - Download `.tif` files with SR imagery from NASA’s CMR API.
  - View metadata (e.g., acquisition date, cloud cover).

## Tech Stack 🛠️

- **Frontend**: HTML, CSS, JavaScript
- **APIs**:
  - TLE API for satellite tracking
  - Leaflet & OpenStreetMap for maps
  - NASA CMR API for SR data and metadata
- **Notifications**: JavaScript notifications or third-party services (Twilio)

## How It Works ⚙️

1. **Select Location**:

   - Pick a point on the map or enter coordinates manually.

2. **Track Satellite**:

   - Using Landsat 9's live position and predict its flyover times.

3. **Set Notification**:

   - Choose when to receive a reminder for satellite overpasses.

4. **Download SR Data**:
   - Search for SR data within a specific timeframe.
   - Download `.tif` files and review scene metadata.

## Future Enhancements 🌟

- User accounts for saved preferences.
- Push notifications or voice alerts.
- Support for additional satellites.
