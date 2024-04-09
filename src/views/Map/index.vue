<template>
  <div id="map" style="height: 800px;"></div>
</template>

<script>
import L from 'leaflet';
export default {
  data() {
    return {
      // Danh sách các địa điểm
      locations: [
        { id: 1, name: "Hồ Hoàn Kiếm", lat: 21.028511, lng: 105.854167 },
        { id: 2, name: "Lăng Bác", lat: 21.036237, lng: 105.834160 },
        { id: 3, name: "Văn Miếu - Quốc Tử Giám", lat: 21.027764, lng: 105.836118 },
        { id: 4, name: "Nhà thờ Lớn Hà Nội", lat: 21.029449, lng: 105.849553 },
        { id: 5, name: "Phố cổ Hà Nội", lat: 21.035904, lng: 105.853334 },
        { id: 6, name: "Cầu Long Biên", lat: 21.041039, lng: 105.865227 }
      ],
    };
  },
  mounted() {
    const map = L.map('map').setView([21.028511, 105.854167], 13);

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

    this.locations.forEach(location => {
      const marker = L.marker([location.lat, location.lng]).addTo(map);
      marker.bindPopup(location.name);
    });
  }
}
</script>

<style scoped>
/* Bạn có thể cần thêm style cho #map nếu chưa đủ */
</style>
