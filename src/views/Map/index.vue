<template>
  <div id="map" style="height: 800px;"></div>
</template>

<script>
import L from 'leaflet';
export default {
  mounted() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Đây là tile layer mặc định từ OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Thêm tile layer vệ tinh từ Mapbox
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHVja20xOTk5eCIsImEiOiJjbHVzMHd6OGgwZGMzMm1yenJsNWRtajk0In0.bQRlK7GAyEKTjdkQVFizpQ', {
      attribution: 'Map data &copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>',
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
      id: 'mapbox/satellite-v9',
      accessToken: 'pk.eyJ1IjoiZHVja20xOTk5eCIsImEiOiJjbHVzMHd6OGgwZGMzMm1yenJsNWRtajk0In0.bQRlK7GAyEKTjdkQVFizpQ' // Thay YOUR_MAPBOX_ACCESS_TOKEN bằng Access Token thực của bạn
    }).addTo(map);
  }
}
</script>

<style scoped>
/* Bạn có thể cần thêm style cho #map nếu chưa đủ */
</style>
