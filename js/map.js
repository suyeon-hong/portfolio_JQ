const mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(37.51270644775243, 127.05879394664093),
        level: 3
    };
const map = new kakao.maps.Map(mapContainer, mapOption);
const t_on = document.querySelectorAll(".location .traffic li")[0];
const t_off = document.querySelectorAll(".location .traffic li")[1];

// 교통정보 보기 버튼
t_on.addEventListener("click", e=>{
    e.preventDefault();

    t_off.classList.remove("on");
    t_on.classList.add("on");
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
})

t_off.addEventListener("click", e=>{
    e.preventDefault();
    
    t_on.classList.remove("on");
    t_off.classList.add("on");
    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);  
})

// 마커 표시
const positions = [
    {
        title: '코엑스', 
        latlng: new kakao.maps.LatLng(37.51270644775243, 127.05879394664093)
    },
    {
        title: '메가박스', 
        latlng: new kakao.maps.LatLng(37.51306714609753, 127.05819475019142)
    },
    {
        title: '스타필드', 
        latlng: new kakao.maps.LatLng(37.51130939795544, 127.05977687879485)
    }
];

for (let i = 0; i < positions.length; i ++) {
    let marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
        title : positions[i].title
    });
}


// 지도타입 컨트롤 버튼
const mapTypeControl = new kakao.maps.MapTypeControl();
const zoomControl = new kakao.maps.ZoomControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

window.addEventListener("resize", ()=>{
    for (let i = 0; i < positions.length; i ++) {
        map.panTo(new kakao.maps.LatLng(37.51270644775243, 127.05879394664093));
    }
})