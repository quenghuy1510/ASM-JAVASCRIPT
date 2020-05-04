function layGioHang() {
    var gioHang = new Array();
    var jsonGioHang = localStorage.getItem("gioHang");
    if (jsonGioHang != null) {
        gioHang = JSON.parse(jsonGioHang);
    }
    return gioHang;
}
function themSanPhamVaoGioHang(idSanPham, gioHang) {
    var gioHangMoi = gioHang;
    var itemsGioHang = taoDoiTuongItems(idSanPham, 1);
    gioHangMoi.push(itemsGioHang);
    return gioHangMoi;
}
function luuGioHang(gioHang) {
    var jsonGioHang = JSON.stringify(gioHang);
    localStorage.setItem("gioHang", jsonGioHang);
}
function taoDoiTuongItems(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    return itemGioHang;
}