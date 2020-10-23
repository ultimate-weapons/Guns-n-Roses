var allProducts = [];
var allBullets =[];
var idg = 0

function createGun(lable, name, price, bullet, imgLarge){
    var gun={};
    
    gun.idg = idg++
    gun.lable = lable
    gun.name = name;
    gun.price = price;
    gun.bullet = bullet;
    gun.imgLarge = imgLarge;

    allProducts.push(gun);
    
    return gun;
}

function createBullet(caliber, price){
    var bullet ={}

    bullet.caliber = caliber;
    bullet.price = price;

    allBullets.push(bullet)
    return bullet;
};

var colt45 = createGun("handGun", "Colt 45", 1200, ".45 colt", "./image_all/database_img/hundguns/colt_45_cal45_L.png");
var deagle = createGun("handGun", "Deaser Eagle", 2460, ".357 Magnum", "./image_all/database_img/hundguns/P_Deagle_357_Magnum_L.png");
var glock = createGun("handGun", "Glock 17", 760, "9x19 mm", "image_all/database_img/hundguns/P_Glock_17_9mm_L.png");
var mag44 = createGun("handGun", "Magnum 44", 1860, ".44 Remington Magnum", "image_all/database_img/hundguns/P_magnum44_44_Remington_Magnum_L.png");
var springF = createGun("handGun", "HellCat Spring Field Comp", 550, "9x19 mm", "image_all/database_img/hundguns/P_Springfield_hellcat_comp_9mm_L.png");
var remington = createGun("shotgun", "Remington 870", 700, "12 gauge shells", "image_all/database_img/shotguns/remington_870_12G_L.png");
var mosberg = createGun("shotgun", "Mosberg 590", 1000, "12 gauge shells", "image_all/database_img/shotguns/mosberg_590_12G_L.png");
var mosbergMaverik = createGun("shotgun", "Mosber Maverik 88", 1300, "12 gauge shells", "image_all/database_img/shotguns/Mosberg_Maverik_88_12G_L.png");
var benelli = createGun("shotgun", "Benelli M4", 1400, "12 gauge shells", "image_all/database_img/shotguns/Benelli_M4_12G_L.png");
var wincheter = createGun("shotgun", "Winchester SX4 Hunt", 1600, "12 Gauge shells", "image_all/database_img/shotguns/Winchester_SX4_Hunter_12G_L.png");
var mp5 = createGun("smg", "MP5 HK", 2200, "9x19 mm", "image_all/database_img/SMG/MP5_HK_9mm_L.png");
var p90 = createGun("smg", "P90 FN", 3200, "5.7x28 mm", "image_all/database_img/SMG/P90_HK_9mm_L.png");
var mp7 = createGun("smg", "MP7 HK", 2400, "4.6x30 mm", "image_all/database_img/SMG/MP7_HK_9mm_L.png")
var mac10 = createGun('smg', "MAC 10 USA", 780, "9x19 mm", "image_all/database_img/SMG/MAC10_9mm_L.png")
var ak74 = createGun("rifle", "AK 74", 2200, "5.45 mm", "image_all/database_img/AsltRfles/AK74_L.png");
var m4a1 = createGun("rifle", "M4 A1", 4200, "5.56 mm", "image_all/database_img/AsltRfles/M4_A1_L.png");
var hk416 = createGun("rifle", "HK 416", 5860, "5.56 mm", "image_all/database_img/AsltRfles/HK416_L.png");
var ak103 = createGun("rifle", "AK 103", 4200, "7.62 x 39 spmm", "image_all/database_img/AsltRfles/AK103_L.png");
var steyr = createGun("rifle", "Steyr Aug", 3400, "5.56 mm", "image_all/database_img/AsltRfles/Steyr_Aug_L.png");
// correct by units
var b9mm = createBullet("9x19 mm", 5);
var b45call = createBullet(".45 colt", 8);
var b357Mag = createBullet(".357 Magnum", 18);
var b44rmg = createBullet(".44 Remington Magnum", 25);
var b12g = createBullet("12 gauge shells", 2);
var b5728 = createBullet("5.7x28 mm", 8);
var b4630 = createBullet("4.6x30 mm", 8);
var b545 = createBullet("5.45 mm", 6);
var b556 = createBullet("5.56 mm", 6);
var b762 = createBullet("7.62 x 39 mm", 10);
