function chuyenDoiTuongSanPhamThanhHTML(sanPham) {
    var swap = "";
    swap = swap + "<div class='san-pham'>";
    swap = swap + "<div class='hinh-anh'>";
    swap = swap + "<img src='" + sanPham.hinhAnh + "'>";
    swap = swap + "</div>";
    swap = swap + "<h1 class='phan-tram-giam-gia'> -" + sanPham.phanTramGiamGia + "%</h1>";
    swap += "<h1 class='ten-san-pham'>" + sanPham.ten + "</h1>";
    swap += "<span class='gia-goc'>" + sanPham.giaGoc + "đ</span> ";
    // Dòng dưới do Local Storage không load đc các phương thức tính của đối tượng
    swap += "<span class='gia-ban'>" + sanPham.tinhGiaBan() + "đ</span>";
    swap += "<p class='khu-vuc'>" + sanPham.khuVuc + "</p>";
    swap += "<button onclick='onClickThemVaoGioHang(\"" + sanPham.id + "\")' class='btn-them'>Thêm vào giỏ hàng</button>";
    swap = swap + "</div>";
    return swap;
}
function chuyenDanhSachSanPhamSangHTML(danhSachSanPham) {
    var htmlTong = '';
    /*b1 duyệt phần tử trong mảng*/
    /**/
    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];
        var html = chuyenDoiTuongSanPhamThanhHTML(sanPham);
        htmlTong = htmlTong + html;
    }
    return htmlTong;
}
function taoRaDoiTuongSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, khuVuc, id) {
    var sanPham = new Object;
    /*TODO: tạo ra object sanPham*/
    /*b1:  gắn thuộc tính cho đối tượng*/
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    sanPham.khuVuc = khuVuc;
    /*tạo định danh cho đối tượng */
    if (id == null) {
        sanPham.id = taoId();
    } else {
        sanPham.id = id;
    }
    /*b2: viết phương tính tính giá bán*/
    sanPham.tinhGiaBan = function () {
        var giaBan = this.giaGoc * (100 - this.phanTramGiamGia) / 100;
        return giaBan;
    }
    sanPham.fromJsons = function (jsonDanhSachSanPham) {
        var danhSachSanPhamDayDu = new Array();
        var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
        for (var i = 0; i < danhSachSanPham.length; i++) {
            var sanPham = danhSachSanPham[i];
            var sanPhamDayDu = taoRaDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);
            danhSachSanPhamDayDu[i] = sanPhamDayDu;
        }
        return danhSachSanPhamDayDu;
    }

    return sanPham;
}


/*Mục tiêu dựa vào id của sản phẩm để lấy ra được đối tượng sản phẩm
input : id sản phẩm
ouyput đối tượng sản phẩm */

function laySnapHamTrongLocalStrorageTheoId(idSanPham) {
    /*b1 lấy toàn bộ sản phẩm trong local storage */
    var jsonDanhSachSanPham = localStorage.getItem("danhSachSanPham");
    var dsSanPham = JSON.parse(jsonDanhSachSanPham);
    for (var i = 0; i < danhSachSanPham; i++) {
        var sanPhamHienTai = danhSachSanPham[i];

    }


    /*b2 duyệt danh sach để tìm ra sản phẩm nào có ID = idSanPham */
    /*b3 return đối tượng tìm được */
}

function laySanPhamTheoId(idSanPham){
    var sanPham = new Object();

    var danhSachSanPham = layDanhSachSanPhamDuoiLocalStorage();
    for(var i = 0; i < danhSachSanPham.length;i++){
        var sanPhamHienTai = danhSachSanPham[i];
        if(sanPhamHienTai.id == idSanPham){
            sanPham = sanPhamHienTai;
        }
    }
    sanPham = taoRaDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);
    return sanPham;
}


function layDanhSachSanPhamDuoiLocalStorage(){
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}

